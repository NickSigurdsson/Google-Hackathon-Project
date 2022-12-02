import "./App.scss";
// import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
    return (
        <>
            <Header />
            <SearchBar/>
            {/* <FilterBar /> */}
            <Footer />
        </>
    );
}

export default App;
