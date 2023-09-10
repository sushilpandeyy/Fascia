import React from 'react'
import {Box} from "@mui/material";
import { useGetGeographyQuery } from '../state/api';
import Header from "../component/Header"
import {ResponsiveChoropleth} from "@nivo/geo"
import { geoData } from '../state/geoData';

const Geography = () => {
    const {data} = useGetGeographyQuery();
    console.log(data);
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="Geography" subtitle="Users from all over world!!" />
        <Box 
        mt="40px"
        height="75vh"
        border={'1px solid #053F5E'}
        >
            {data ? (<>
                <ResponsiveChoropleth
        data={data}
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 60 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            },
            {
                id: 'gradient',
                type: 'linearGradient',
                colors: [
                    {
                        offset: 0,
                        color: '#000'
                    },
                    {
                        offset: 100,
                        color: 'inherit'
                    }
                ]
            }
        ]}
        fill={[
            {
                match: {
                    id: 'FRA'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'IND'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'ATA'
                },
                id: 'gradient'
            }
        ]}
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemTextColor: '#444444',
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000000',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
            </>) : (<>Loading....</>)}
        </Box>
    </Box>
  )
}

export default Geography