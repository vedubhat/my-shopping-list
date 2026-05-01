import axios from "axios";
import React, { use } from "react";
import { useState, useEffect } from 'react'
import { SuggestionBox } from "./SuggestionBox";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState(searchTerm);
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const callApi = (searchItem) => {
        axios.get(`http://api.frontendeval.com/fake/food/${searchTerm}`)
            .then(response => {
                setSearchResults(response.data);
                console.log("Search results:", response.data);
            })
            .catch(error => {
                console.error("Error fetching search results:", error);
            });
    }
    useEffect(() => { 
        if(debouncedQuery && debouncedQuery.length > 2) {
            callApi(debouncedQuery);
        }
     }, [debouncedQuery]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchTerm);
        }, 500);
        return () => {clearTimeout(timer)}
    }, [searchTerm]);

    return (
        <>
            <div className="search-bar">
                <input type="text" placeholder="Search here..." onChange={handleChange} style={{ width: "200px" }} />
            </div>
            {/* TODO refactor this below block of code */}
            {
                searchResults.length > 0 && <div style={{ height: "200px", overflow: "auto", backgroundColor: "white", width: "200px", margin: "3px auto" }}>
                    {
                        searchResults.map((result) => {
                            return <SuggestionBox result={result} />
                        })
                    }
                </div>
            }
        </>
    )
}

export default SearchBar;