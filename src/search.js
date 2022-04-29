import React from 'react';
import { useState } from 'react';
import MOCK_DATA from './data/MOCK_DATA.json';


export function Search() {
    const [searchQuery, setSearchQuery] = useState("");
    const dataset = MOCK_DATA.mockdata;
    let result = [];


    const onClick = (e) => {
        setSearchQuery(document.getElementById("query").value);
    }

    for (var i = 0; i < dataset.length; i++) {
        if (dataset[i].name.includes(searchQuery)) {
            result.push(dataset[i]);
        }
    }

    return (
        <div id="searchbox">
            <h2>Search</h2>
            <div id="searchbar">
                <input type="text" placeholder="Search.." id="query"></input>
                <button type="button" onClick={onClick}><i class="fa fa-search"></i></button>
            </div>
            <HandleSearch filtered={result} />
        </div>
    )
}

export function HandleSearch(props) {
    let results = props.filtered;
    const print = results.map((row) => {
        return (
            <tbody>
                <tr>
                    <td>{row.name}</td>
                    <td>{row.method}</td>
                    <td>{row.type}</td>
                    <td>{row.insight}</td>
                </tr>
            </tbody>
        )
    });

    return (
        <div id="table">
            <table>
                <thead>
                    <tr>
                        <th>Request Name</th>
                        <th>Request Method</th>
                        <th>Request Type</th>
                        <th>Insight</th>
                    </tr>
                </thead>
                {print}
            </table>
        </div>
    )
}