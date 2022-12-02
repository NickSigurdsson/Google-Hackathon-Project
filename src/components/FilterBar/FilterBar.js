import './FilterBar.scss';
function FilterBar(){
    return(
        <form action="#">
            <div>
                <div>
                    <label htmlFor="frequency-dropdown">How often</label>
                    <select name="filters-item" id="frequency-dropdown">
                        <option value="OnceADay">At most once a day</option>
                        <option value="AsItHappens">As-it-happens</option>
                        <option value="OnceAWeek">At most once a week</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sources">Sources</label>
                    <select name="filters-item" id="sources">
                        <option value="Automatic">Automatic</option>
                        <option value="News">News</option>
                        <option value="Blogs">Blogs</option>
                        <option value="Web">Web</option>
                        <option value="Video">Video</option>
                        <option value="Books">Books</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="language">Language</label>
                <select name="filters-item" id="language">
                    <option value="Any Language">Any Language</option>
                    <option value="English">English</option>
                    <option value="Afrikaans">Afrikaans</option>
                    <option value="Arabic">Arabic</option>
                    <option value="Armenian">Armenian</option>
                    <option value="Belarusian">Belarusian</option>
                    <option value="Bulgarian">Bulgarian</option>
                    <option value="Catalan">Catalan</option>
                    <option value="Chinese (Simplified)">Chinese (Simplified)</option>
                    <option value="Chinese (Traditional)">Chinese (Traditional)</option>
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
            <div>
                <label htmlFor="region">Region</label>
                <select name="filters-item" id="region">
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
            <div>
                <label htmlFor="howmany">How many</label>
                <select name="filters-item" id="howmany">
                    <option value="OnlyTheBestResults">Only the best results</option>
                    <option value="AllResults">All results</option>
                </select>
            </div>
            <div>
                <label htmlFor="deliverto">Deliver to</label>
                <select name="filters-item" id="deliverto">
                    <option value="iswim@dog.com">iswim@dog.com</option>
                    <option value="ifly@dog.com">ifly@dog.com</option>
                    <option value="isleep@dog.com">isleep@dog.com</option>
                </select>
            </div>
            <button>Create an Alert</button>
        </form>
    )
}
export default FilterBar;