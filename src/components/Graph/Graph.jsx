import React, { useState } from "react";
import Chart from "react-apexcharts";

const Graph = () => {
    // const [graphData, setGraphData] = useState({
    //     options: {
    //         xaxis: {
    //             title: "Hello",
    //             categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    //         },
    //     },
    //     series: [
    //         {
    //             name: "series-1",
    //             data: [30, 40, 45, 50, 49, 60, 70, 91],
    //         },
    //     ],
    // });
    const text = "hello";
    const graphData = {
        options: {
            chart: {
                toolbar: {
                    show: false,
                },
                zoom: {
                    show: false,
                },
            },
            title: {
                text: "Hello",
            },
            yaxis: {
                title: {
                    text: "Temperature",
                },
                min: 5,
                max: 100,
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                title: {
                    text: "Month",
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                floating: true,
                offsetY: -25,
                offsetX: -5,
            },
        },
        series: [
            {
                name: ["hello" + text],
                data: [28, 29, 33, 36, 32, 32, 33, 55, 99, 33, 80],
            },
        ],
    };
    return (
        <>
            <Chart
                options={graphData.options}
                series={graphData.series}
                type="line"
                width="500"
                height="300"
            />
        </>
    );
};
export default Graph;
