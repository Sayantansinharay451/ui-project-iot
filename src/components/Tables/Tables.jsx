import { Badge, Space, Table, Typography } from "antd";
import React from "react";

const Tables = () => {
    const { Text } = Typography;
    const columns = [
        {
            title: "Serial Number",
            dataIndex: "serialNo",
            render: (_, record) => (
                <span className="font-bold">{record.serialNo}</span>
            ),
        },
        {
            title: "Product Model Number",
            dataIndex: "productId",
            render: (_, record) => (
                <span className="font-bold">{record.productId}</span>
            ),
        },
        {
            title: "Product Name",
            dataIndex: "productName",
            sorter: (a, b) => a.productName - b.productName,
            render: (_, record) => (
                <span className="font-bold">{record.productName}</span>
            ),
        },
        {
            title: "Location",
            dataIndex: "loc",
            defaultSortOrder: "descend",
            sorter: (a, b) => a.loc - b.loc,
        },
        {
            title: "Avg. Age",
            dataIndex: "age",
            align: "center",
            sorter: (a, b) => a.age - b.age,
            // render: (_, record) => (
            //     <span className="font-bold">{record.age}</span>
            // ),
        },
        {
            title: "Electricity Consumed (hrs)",
            dataIndex: "eleConsumed",
            align: "right",
            sorter: (a, b) => a.eleConsumed - b.eleConsumed,
            render: (_, record) => (
                <>{Intl.NumberFormat("es-US").format(record.eleConsumed)}</>
            ),
        },
        {
            title: "Production (tones)",
            dataIndex: "production",
            align: "right",
            sorter: (a, b) => a.production - b.production,
            render: (_, record) => (
                <>{Intl.NumberFormat("es-US").format(record.production)}</>
            ),
        },
        {
            title: "Status",
            dataIndex: "status",
            align: "center",
            render: (_, record) => {
                const colors =
                    record.status === "Online"
                        ? "success"
                        : record.status === "Offline"
                        ? "warning"
                        : "error";
                return (
                    <Space size="middle" className="font-bold">
                        <Badge status={colors} />
                        <Text
                            type={`${colors === "error" ? "danger" : colors}`}
                        >
                            {record.status}
                        </Text>
                    </Space>
                );
            },
        },
    ];
    const data = [
        {
            key: "1",
            productName: "hello",
            serialNo: "1",
            age: 4,
            eleConsumed: 3000000,
            production: 800000,
            status: "Online",
        },
        {
            key: "2",
            serialNo: "1",
            productName: "hello",
            age: 4,
            eleConsumed: 30,
            production: 80,
            status: "Offline",
        },
        {
            key: "3",
            serialNo: "1",
            productName: "hello",
            age: 4,
            eleConsumed: 30,
            production: 80,
            status: "online",
        },
        {
            key: "4",
            serialNo: "1",
            productName: "hello",
            age: 4,
            eleConsumed: 30,
            production: 80,
            status: "online",
        },
    ];
    // const onChange = (pagination, filters, sorter, extra) => {
    //     console.log("params", pagination, filters, sorter, extra);
    // };
    // const rowSelection = {
    //     onChange: (selectedRowKeys, selectedRows) => {
    //         console.log(
    //             `selectedRowKeys: ${selectedRowKeys}`,
    //             "selectedRows: ",
    //             selectedRows
    //         );
    //     },
    //     getCheckboxProps: (record) => ({
    //         disabled: record.productName === "Disabled User",
    //         // Column configuration not to be checked
    //         productName: record.productName,
    //     }),

    return (
        <div className="h-max">
            <Table
                rowSelection={{
                    type: "radio",
                    // ...rowSelection,
                }}
                dataSource={data}
                columns={columns}
                pagination={{
                    pageSize: 50,
                }}
                scroll={{
                    y: 500,
                }}
            />
        </div>
    );
};

export default Tables;
