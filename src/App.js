import Cards from "./components/Cards/Cards";
import GraphContainer from "./components/Graph/GraphContainer";
import Navbar from "./components/Navbar/Navbar";
import SideNav from "./components/SideNav/SideNav";
import Tables from "./components/Tables/Tables";

function App() {
    return (
        <div className="h-screen overflow-hidden">
            <Navbar />
            <SideNav />
            <main className="h-full w-full flex overflow-y-scroll items-start justify-center gap-10">
                <section className="w-9/12 flex flex-col justify-start item-center ml-auto gap-5 mr-10">
                    <Cards />
                    <Tables />
                    <GraphContainer />
                </section>
            </main>
        </div>
    );
}

export default App;
