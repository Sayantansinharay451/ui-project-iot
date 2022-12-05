import React from "react";
import DateSelect from "./DateSelect";
import DeviceSelect from "./DeviceSelect";
import LocationSelect from "./LocationSelect";
import SerialSelect from "./SerialSelect";
import StatusSelect from "./StatusSelect";

const SideNav = () => {
    return (
        <div className="flex h-full w-72 fixed z-10 left-0 bg-white flex-col justify-center  shadow-md font-bold border-2 py-20 px-5 gap-6 ">
            <DateSelect />
            <DeviceSelect />
            <SerialSelect />
            <LocationSelect />
            <StatusSelect />
        </div>
    );
};

export default SideNav;
