import { Select } from "antd";
import React from "react";

const date = new Date();
const months = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "Jun", value: 6 },
    { label: "Jul", value: 7 },
    { label: "Sep", value: 8 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
];
const years = [...Array(10).keys()]
    .map((i) => date.getFullYear() - i)
    .reverse()
    .map((i) => {
        return { label: i, value: i };
    });

const DateSelect = () => {
    return (
        <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="month">Month</label>
                <Select
                    id="month"
                    options={months}
                    style={{
                        width: 120,
                    }}
                    defaultValue={months[date.getMonth() - 1].label}
                ></Select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="year">Year</label>
                <Select
                    options={years}
                    style={{
                        width: 120,
                    }}
                    defaultValue={date.getFullYear()}
                ></Select>
            </div>
        </div>
    );
};

export default DateSelect;
