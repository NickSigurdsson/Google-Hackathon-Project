import "./App.scss";
import FilterBar from "./components/FilterBar/FilterBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Video from "./components/Video/Video";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    return (
        <>
            <Header />
            <FilterBar />
            <Video />
            <Footer />
        </>
    );
}
export default App;
