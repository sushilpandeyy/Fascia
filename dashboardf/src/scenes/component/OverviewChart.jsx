import React, { useMemo } from "react";
import { ResponsiveLine } from '@nivo/line'
import { useGetSalesQuery } from '../state/api'

const OverviewChart = ({ isDashboard = false, view }) => {
    const { data, isLoading } = useGetSalesQuery();
  
    const [totalSalesLine, totalUnitsLine] = useMemo(() => {
      if (!data) return [];
  
      const { monthlyData } = data;
      const totalSalesLine = {
        id: "totalSales",
        color: "var(--Lildark)",
        data: [],
      };
      const totalUnitsLine = {
        id: "totalUnits",
        color: "#053F5E",
        data: [],
      };
  
      Object.values(monthlyData).reduce(
        (acc, { month, totalSales, totalUnits }) => {
          const curSales = acc.sales + totalSales;
          const curUnits = acc.units + totalUnits;
  
          totalSalesLine.data = [
            ...totalSalesLine.data,
            { x: month, y: curSales },
          ];
          totalUnitsLine.data = [
            ...totalUnitsLine.data,
            { x: month, y: curUnits },
          ];
  
          return { sales: curSales, units: curUnits };
        },
        { sales: 0, units: 0 }
      );
  
      return [[totalSalesLine], [totalUnitsLine]];
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps
  
    if (!data || isLoading) return "Loading...";
  
   return (
    <ResponsiveLine
        data={view === 'sales' ? totalSalesLine : totalUnitsLine}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            format: (v) => {
                if(isDashboard) return v.slice(0,3);
                return v;
            },
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard ? "" : "Month",
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: isDashboard
            ? ""
            : `Total ${view === "sales" ? "Revenue" : "Units"} for Year`,
          legendOffset: -60,
            legendPosition: 'middle'
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'dark2' }}
        lineWidth={7}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={
            !isDashboard
              ? [
                  {
                    anchor: "bottom-right",
                    direction: "column",
                    justify: false,
                    translateX: 30,
                    translateY: -40,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "circle",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                      {
                        on: "hover",
                        style: {
                          itemBackground: "rgba(0, 0, 0, .03)",
                          itemOpacity: 1,
                        },
                      },
                    ],
                  },
                ]
              : undefined
          }
    />
  )
}

export default OverviewChart