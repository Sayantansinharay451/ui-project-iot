import { Select } from "antd";
import React from "react";

const SerialSelect = () => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="modelNo">Model Number</label>
            <Select
                mode="multi"
                allowClear
                id="modelNo"
                style={{
                    width: "100%",
                }}
            />
        </div>
    );
};

export default SerialSelect;
