import React from "react";
import Graph from "./Graph";

const GraphContainer = () => {
    return (
        <div className="flex flex-col gap-5">
            <span className="font-semibold text-lg">Graphical Stats</span>
            <div className="flex flex-row flex-wrap gap-10 ">
                <Graph />
                <Graph />
                <Graph />
                <Graph />
            </div>
        </div>
    );
};

export default GraphContainer;
