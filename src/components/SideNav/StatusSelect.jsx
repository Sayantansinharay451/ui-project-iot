import { Select, Tag } from "antd";
import React from "react";

const StatusSelect = () => {
    const options = [
        {
            label: "Online",
            value: "success",
        },
        {
            label: "Offline",
            value: "warning",
        },
        {
            label: "Need Maintenance",
            value: "error",
        },
    ];
    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    margin: "3px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {label}
            </Tag>
        );
    };

    return (
        <div className="flex flex-col gap-2 items-start">
            <label htmlFor="status">Status</label>
            <Select
                mode="multiple"
                id="status"
                tagRender={tagRender}
                options={options}
                style={{ width: "100%" }}
            />
        </div>
    );
};

export default StatusSelect;
