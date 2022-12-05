import React from "react";
import Card from "./Card";

const Cards = () => {
    const data = [
        { title: "Total No. of Pages Prints", data: 90000 },
        { title: "Total Maintenance Cost (INR)", data: 90000 },
        { title: "Total Electricity Consumed", data: 90000 },
        { title: "Total Net Profit (INR)", data: 90000 },
    ];
    return (
        <div className="flex sticky top-0 z-20 pt-24 pb-5 bg-white items-center justify-around gap-10">
            {data.map((i, key) => (
                <Card key={key} title={i.title} data={i.data} />
            ))}
        </div>
    );
};

export default Cards;
