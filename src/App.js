import "./App.scss";
import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
    return (
        <>
            <Header />
            <h1 className="Home__title">Alerts</h1>
            <FilterBar />
            <div>
                <h2>Dashboard</h2>
                <h3>My Alerts</h3>
            </div>
            <Footer />
        </>
    );
}

export default App;
