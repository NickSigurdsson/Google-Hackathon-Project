import "./App.scss";
import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Alerts from "./components/Alerts/Alerts";
import WebAccount from "./components/WebAccount/WebAccount";
function App() {
    return (
        <>
            <Header />
            <h1 className="Home__title">Alerts</h1>
            <FilterBar />
            <div className="Dashboard">
                <h2 className="Dashboard__title">Dashboard</h2>
                <h3>My Alerts</h3>
                <Alerts />
                <h3>Me on the web</h3>
                <WebAccount />
            </div>

            <Footer />
        </>
    );
}

export default App;
