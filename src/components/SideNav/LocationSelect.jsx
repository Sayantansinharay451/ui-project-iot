import { Select } from "antd";
import React from "react";

const LocationSelect = () => {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="loc">Location</label>
            <Select
                mode="multi"
                allowClear
                id="loc"
                style={{
                    width: "100%",
                }}
            />
        </div>
    );
};

export default LocationSelect;
