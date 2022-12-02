import "./FilterBar.scss";
import data from "../../data/dog-data.json";
import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AlertsArticle from "../AlertsArticle/AlertsArticle";
import { useNavigate } from "react-router-dom";
function FilterBar() {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");
    const searchLogic = (event) => {
        setSearchValue(event.target.value);
    };
    const onSearch = (searchTerm) => setSearchValue(searchTerm);
    const articleData = data
        .filter((item) => {
            const searchTerm = searchValue.toLowerCase();
            const title = item.Title.toLowerCase();
            return (
                searchTerm &&
                title.startsWith(searchTerm) &&
                title !== searchTerm
            );
        })
        .slice(0, 10);
    // searchTerm is whatever that search value is (that is being typed into the search box)
    const onSubmit = (event) => {
        event.preventDefault();
        const alertData = {
            id: uuidv4(),
            Name: searchValue,
            how_often: event.target.frequencydropdown.value,
            sources: event.target.sources.value,
            language: event.target.language.value,
            region: event.target.region.value,
            how_many: event.target.howmany.value,
            deliver_to: event.target.deliverto.value,
        };
        console.log(alertData);
        axios.post("http://localhost:8080/alerts", alertData).then(() => {
            navigate("/success");
        });
    };
    return (
        <form onSubmit={onSubmit} className="filter-item-overall-container">
            <div className="search-bar">
                <h2>Monitor keywords and specific terms you set</h2>
                <div className="search-bar-overall-container">
                    <div className="search-bar-container">
                        <input
                            className="search-bar-container-input"
                            placeholder="Search keywords"
                            type="text"
                            value={searchValue}
                            onChange={searchLogic}
                        />
                    </div>
                    <div className="search-bar-autofill">
                        {data
                            .filter((item) => {
                                const searchTerm = searchValue.toLowerCase();
                                const title = item.Title.toLowerCase();
                                return (
                                    searchTerm &&
                                    title.startsWith(searchTerm) &&
                                    title !== searchTerm
                                );
                            })
                            .slice(0, 10)
                            .map((item) => (
                                <div
                                    onClick={() => onSearch(item.Title)}
                                    key={item.Title}
                                >
                                    {item.Title}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <div className="filter-item-outer-container">
                <div className="filter-item-inner-container">
                    <label
                        className="filter-item-label"
                        htmlFor="frequencydropdown"
                    >
                        How often
                    </label>
                    <select
                        className="filter-item-dropdown"
                        name="filters-item"
                        id="frequencydropdown"
                    >
                        <option value="OnceADay">At most once a day</option>
                        <option value="AsItHappens">As-it-happens</option>
                        <option value="OnceAWeek">At most once a week</option>
                    </select>
                </div>
                <div className="filter-item-inner-container">
                    <label className="filter-item-label" htmlFor="language">
                        Language
                    </label>
                    <select
                        className="filter-item-dropdown"
                        name="filters-item"
                        id="language"
                    >
                        <option value="Any Language">Any Language</option>
                        <option value="English">English</option>
                        <option value="Afrikaans">Afrikaans</option>
                        <option value="Arabic">Arabic</option>
                        <option value="Armenian">Armenian</option>
                        <option value="Belarusian">Belarusian</option>
                        <option value="Bulgarian">Bulgarian</option>
                        <option value="Catalan">Catalan</option>
                        <option value="Chinese (Simplified)">
                            Chinese (Simplified)
                        </option>
                        <option value="Chinese (Traditional)">
                            Chinese (Traditional)
                        </option>
                        <option value="Croatian">Croatian</option>
                        <option value="Czech">Czech</option>
                        <option value="Danish">Danish</option>
                        <option value="Dutch">Dutch</option>
                        <option value="Esperanto">Esperanto</option>
                        <option value="Estonian">Estonian</option>
                        <option value="Filipino">Filipino</option>
                        <option value="Finnish">Finnish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Greek">Greek</option>
                        <option value="Hebrew">Hebrew</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Hungarian">Hungarian</option>
                        <option value="Icelandic">Icelandic</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Korean">Korean</option>
                        <option value="Latvian">Latvian</option>
                        <option value="Lithuanian">Lithuanian</option>
                        <option value="Norwegian">Norwegian</option>
                        <option value="Persian">Persian</option>
                        <option value="Polish">Polish</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="Romanian">Romanian</option>
                        <option value="Russian">Russian</option>
                        <option value="Serbian">Serbian</option>
                        <option value="Slovak">Slovak</option>
                        <option value="Slovenian">Slovenian</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Swahili">Swahili</option>
                        <option value="Swedish">Swedish</option>
                        <option value="Thai">Thai</option>
                        <option value="Turkish">Turkish</option>
                        <option value="Ukrainian">Ukrainian</option>
                        <option value="Vietnamese">Vietnamese</option>
                    </select>
                </div>
            </div>
            <div className="filter-item-outer-container">
                <div className="filter-item-inner-container">
                    <label className="filter-item-label" htmlFor="sources">
                        Sources
                    </label>
                    <select
                        className="filter-item-dropdown"
                        name="filters-item"
                        id="sources"
                    >
                        <option value="Automatic">Automatic</option>
                        <option value="News">News</option>
                        <option value="Blogs">Blogs</option>
                        <option value="Web">Web</option>
                        <option value="Video">Video</option>
                        <option value="Books">Books</option>
                    </select>
                </div>
                <div className="filter-item-inner-container">
                    <label className="filter-item-label" htmlFor="region">
                        Region
                    </label>
                    <select
                        className="filter-item-dropdown"
                        name="filters-item"
                        id="region"
                    >
                        <option value="AnyRegion">Any Region</option>
                        <option value="UnitedStates">United States</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra </option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antartica">Antartica</option>
                    </select>
                </div>
            </div>
            <div className="filter-item-inner-container">
                <label className="filter-item-label" htmlFor="howmany">
                    How many
                </label>
                <select
                    className="filter-item-dropdown"
                    name="filters-item"
                    id="howmany"
                >
                    <option value="OnlyTheBestResults">
                        Only the best results
                    </option>
                    <option value="AllResults">All results</option>
                </select>
            </div>
            <div className="filter-item-inner-container">
                <label className="filter-item-label" htmlFor="deliverto">
                    Deliver to
                </label>
                <select
                    className="filter-item-dropdown"
                    name="filters-item"
                    id="deliverto"
                >
                    <option value="james.marshall@gmail.com">
                        james.marshall@gmail.com
                    </option>
                    <option value="welovesdoingCSSSytling@gmail.com">
                        welovesdoingCSSSytling@gmail.com
                    </option>
                    <option value="RSS Feed">RSS Feed</option>
                </select>
            </div>

            <button className="filter-item-button">Create an Alert</button>

            <div className="Alerts-Data">
                <h2 className="Alerts-Data__title">
                    Alerts Preview ({articleData.length})
                </h2>

                {articleData.map((data) => {
                    return <AlertsArticle data={data} />;
                })}
            </div>
        </form>
    );
}
export default FilterBar;
