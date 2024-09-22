import Card from "./Card";
import { useEffect, useState } from "react";
import axios from './api/axios';
import { Outlet } from "react-router-dom";
import SearchDiv from './SearchDiv';
import Button from "./Button";

export default function PackagesSection() {
    const [cards, setCards] = useState([]);
    const [searchDiv, setSearchDiv] = useState([]);
    const [filterationBtns, setFilterationBtns] = useState([]);
    
    const [showSearch, setShowSearch] = useState(false);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("");

    function handleClick() {
        setShowSearch(prev => !prev);
    }


    function handleSearch(e) {
        setSearch(e.target.value);
        setFilter("");
    }

    function handleFilter(e) {
        setFilter(e.target.innerText);
        setSearch("");
    }

    function resetFilterSearch() {
        setSearch("");
        setFilter("");
    }

    useEffect(() => {
        if (search) {
            axios.get(`/cards/search/${search}`)
                .then((data) => {
                    setCards(data.data);
                    setSearchDiv(data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        else if (filter) {
            axios.get(`/cards/search/${filter}`)
                .then((data) => {
                    setCards(data.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
        else {
            axios.get('/cards')
                .then((data) => {
                    setCards(data.data);
                    setFilterationBtns(data.data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [search, filter]);  //trigger the effect when search or filter changes

    return (
        <div style={{display: "flex",
            flexDirection:" column",
            alignItems: "center",
            justifyContent: "center"}}>
            <br />

            {/*filter buttons*/}
            <div id="filteration-wrapper" style={{ display: "flex", gap:"10px" }}>
                {
                    filterationBtns.map((filterItem, _id) => (
                        <div key={_id} onClick={handleFilter}>
                            <Button content={filterItem.span} style={{ minWidth: "auto" }} />
                        </div>
                    ))
                }
                <button onClick={resetFilterSearch} style={{ minWidth: "auto", cursor:"pointer", borderRadius:"50%", border:"none", backgroundColor:"red", width:"30px", color:"white" }}>X</button>
            </div>

            {/*search bar*/}
            <div style={{
                position: "relative",
                left: "0%",
                top: "50%",
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row-reverse",
                margin: "10px"
            }}>
                <div style={{
                    position: "absolute",
                    right: "6%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    height: "40px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#3e2a1b",
                    color: "white",
                    cursor: "pointer"
                }} onClick={handleClick}>
                    <i className="fas fa-search"></i>
                </div>

                {showSearch && (
                    <div>
                        <input
                            type="text"
                            value={search}
                            onChange={handleSearch}
                            style={{
                                padding: "10px 20px",
                                width: "400px",
                                border: "none",
                                backgroundColor: "#d6a059",
                                borderRadius: "10px"
                            }}
                            placeholder="search..."
                        />
                        {search&&searchDiv.length > 0 && (
                            <div style={{
                                border: "1px solid black",
                                borderTop: "none",
                                borderBottomLeftRadius: "10px",
                                borderBottomRightRadius: "10px",
                                padding: "10px 20px",
                                position:"absolute",
                                zIndex:1,
                                backgroundColor: "white",
                                width: "400px",
                                maxHeight: "300px",
                                overflowY: "auto"
                            }}>
                                {searchDiv.map((card, _id) => (
                                    <SearchDiv key={_id} p={card.p} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <br />

            <div className="cards-container">
                {cards.map((card, _id) => (
                    <Card
                        key={_id}
                        id={card._id}
                        img={`http://localhost:5000/uploads/${card.img}`}
                        span={card.span}
                        p={card.p}
                        price={card.price}
                        includes={card.includes}
                        excludes={card.excludes}
                    />
                ))}
            </div>

            <Outlet />
        </div>
    );
}
