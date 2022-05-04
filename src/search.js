import React from 'react';
import { useState } from 'react';
import MOCK_DATA from './data/MOCK_DATA.json';
import DATA from './data/classification_data.json';


export function Search({width, height}) {
    const [searchQuery, setSearchQuery] = useState("create");
    const dataset = DATA.data;
    let result = [];
    dataset[0].Insight.replace("\n", "<br />")


    const onClick = (e) => {
        setSearchQuery(document.getElementById("query").value);
    }

    for (var i = 0; i < dataset.length; i++) {
        if (dataset[i].Name.toLowerCase().includes(searchQuery)) {
            result.push(dataset[i]);
        }
    }

    return (
        <div id="searchbox" style={{width: width, height: height}}>
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
                    <td>{row.Name}</td>
                    <td>{row.Type}</td>
                    <td>{row.Common_Sources}</td>
                    <td>{row.Insight}</td>
                </tr>
            </tbody>
        )
    });

    // const insight_break = arr.map(() => {

    // })

    // function insight_break(row) {
    //     const arr = row.Insight.split("\n");
    //     for (var i = 0; i < arr.length; i++) {

    //     }
    //     // for (var i = 0; i < arr.length; i++) {
    //     //     return <p>{arr.length}<br />2</p>
    //     // }
    // }

    return (
        <div id="table">
            <table>
                <thead>
                    <tr>
                        <th>Request Name</th>
                        <th>Failure Type</th>
                        <th>Common Sources</th>
                        <th>Insight</th>
                    </tr>
                </thead>
                {print}
            </table>
        </div>
    )
}