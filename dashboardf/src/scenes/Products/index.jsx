import React,{useState} from 'react'
import Header from "../component/Header"
import { 
  Box, 
  Card, 
  CardActions, 
  CardContent, 
  Collapse, 
  Button, 
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetProductsQuery } from '../state/api';

const Product = ({
  _id,
  name,
  description,
  price,
  rating,
  category,
  supply,
  stat,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: "var(--Lildark)",
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color="var(--Highlight)"
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color="var(--Dark)">
        ₹{Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: "#FFD700",
        }}
      >
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply Left: {supply}</Typography>
          <Typography>
            Yearly Sales This Year: {stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const {data, isLoading} = useGetProductsQuery(); 
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  console.log(data);
  return (
    <>
    <Box m="1.5rem 2.5rem">
    <Header title="Products" subtitle="Welcome in our Shop!!"/>
    {data || !isLoading ? (
      <Box 
      mt="20px" 
      display="grid"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      justifyContent="space-between"
      rowGap="20px"
      columnGap="1.33%"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4"}
      }}
      >
        {data.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
      </Box>
    ) : (<div>Loading...</div>
    )}
    </Box>
    </>
  )
}

export default Products