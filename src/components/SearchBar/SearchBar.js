import './SearchBar.scss'
import data from'../../data/dog-data.json';
import {useState} from 'react';
function SearchBar(){
    const [searchValue, setSearchValue] = useState('');
    const searchLogic = (event) =>{
        setSearchValue(event.target.value);
    }
    const onSearch = (searchTerm) =>{
        // we wanna do an axios get here for http request to backend to return data to us 
        console.log('search', searchTerm)
    }
    return(
        <div className='search-bar'>
            <h2>Monitor keywords and specific terms you set</h2>
            <div className='search-bar-container'>
                <input type="text" value={searchValue} onChange={searchLogic} />
                <button onClick={()=>{onSearch(searchValue)}}>submit</button>
            </div>
            <div>
                {data
                .filter((item)=>{
                    const searchTerm = searchValue.toLowerCase();
                    const title = item.Title.toLowerCase();
                    return(
                        searchTerm && 
                        title.startsWith(searchTerm) &&
                        title !== searchTerm
                    );
                })
                .slice(0, 10)
                .map((item)=> (
                <div 
                onClick={()=>onSearch(item.Title)}
                key={item.Title}
                >
                {item.Title}
                </div>
                ))}
            </div>
        </div>
    )
}
export default SearchBar;