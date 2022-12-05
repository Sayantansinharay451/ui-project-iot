import { Select } from "antd";
import React from "react";

const DeviceSelect = () => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="product">Product Name</label>
            <Select
                mode="multi"
                allowClear
                id="product"
                style={{
                    width: "100%",
                }}
            />
        </div>
    );
};

export default DeviceSelect;
