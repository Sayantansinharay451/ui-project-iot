import { CaretUpOutlined } from "@ant-design/icons";
import React from "react";

const Card = ({ title, data }) => {
    return (
        <div className="flex h-36 w-4/5 flex-row shadow-sm shadow-cyan-200 gap-3 p-5 rounded-2xl justify-center items-center">
            <div className="flex flex-col">
                <span className="text-lg font-bold text-cyan-900">{title}</span>
                <span className="text-2xl font-extrabold text-cyan-500">
                    {Intl.NumberFormat("es-US").format(data)}
                </span>
            </div>
            <CaretUpOutlined style={{ fontSize: "32px", color: "red" }} />
        </div>
    );
};

export default Card;
