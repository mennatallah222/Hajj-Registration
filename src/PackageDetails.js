import axios from "./api/axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";

export default function PackageDetails() {
    const { id } = useParams();
    const [card, setCard] = useState(null);

    useEffect(() => {
        axios.get(`/cards/${id}`)
            .then((response) => {
                const cardData = response.data;
                console.log("Original Data:", cardData);
                setCard(cardData);
            })
            .catch((err) => {
                console.log(err);
                setCard(null);
            });
    }, [id]);

    return (
        <div className="details-page">
            {card === null ? (
                <div id="error-page">
                    ERROR 404!
                </div>
            ) : (
                <div key={card._id} id="card-pkg">
                    <img
                        src={`http://localhost:5000/uploads/${card.img}`.replace(/\\/g, '/')}
                        alt="package"
                        className="package-details-img"
                    />
                    <div className="card-text">
                        <h1>{card.p}</h1>
                        <h3 id="price">{card.price}$ per person</h3>
                        {/* <h3 id="span">{card.span}</h3> */}
                        <h3 id="">{card.description}</h3>
                        <h3 id="">{card.packageProvider}</h3>
                        <h3 id="packageProviderContact">{card.packageProviderContact}</h3>
                        <div id="package-includes-excludes">
                            <div className="includes">
                                <ul>Included:
                                    {Array.isArray(card.includes) && card.includes.map((item, index) => (
                                        <li key={index} className="package-includes-excludes-li">
                                            <i className="fa fa-check" aria-hidden="true"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="excludes">
                                <ul>Excluded:
                                    {Array.isArray(card.excludes) && card.excludes.map((item, index) => (
                                        <li key={index} className="package-includes-excludes-li">
                                            <i className="fa fa-times" aria-hidden="true"></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div id="btn-wrapper">
                            <Link to={"/order"}>
                                <Button content={"Order"} id="order-btn" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
