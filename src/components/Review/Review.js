import React, { useState } from "react";
import "./Review.css";

export default function Review({ text, author, stars, avatar }) {

    const renderStars = () => {
        const int = Math.floor(stars);
        const isInt = Number.isInteger(stars);
        let starsArray = [];
        for (let i = 0; i < int; i++) {
            starsArray.push(<i className="fa-solid fa-star"></i>)
        }
        if (!isInt) starsArray.unshift(<i className="fa-solid fa-star-half"></i>);

        return (
            <div className="stars-wrapper">
                {starsArray.map((star, index) => {
                    return <div className="star" key={index}>
                        {star}
                    </div>;
                })}
            </div>
        )
    }

    return (
        <div className="review-container">
            {/* <div className={["avatar", "avatar-pop"].join(" ")}>
                <i className="fa-solid fa-quote-right" > </i>
            </div> */}
            <img src={avatar} alt="Avatar" className="avatar"></img>
            <div className="review-main-content" >
                {text}
            </div>
            <div className="divider" />

            <div
                className="star"
                style={{ fontSize: "16px", fontWeight: 600, paddingBottom: "1rem" }}
            >
                {renderStars()}
                {/* <i className="fa-solid fa-star"></i> */}
                {/* {stars} */}

            </div>
            <div style={{ margin: "3px", fontSize: "18px", fontWeight: 600 }}>
                {author}
            </div>
        </div>
    );
}