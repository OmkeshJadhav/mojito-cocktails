import React from "react";
import { cocktailLists, mockTailLists } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Cocktails = () => {
    useGSAP(() => {
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: 1,
                markers: true,
            },
        });

        parallaxTimeline.from("#c-left-leaf", {
            x: -100,
            y: 100,
        })
        .from("#c-right-leaf", {
            x: 100,
            y: 100,
        })
    });

    return (
        <section id="cocktails" className="noisy">
            <img
                src="/images/cocktail-left-leaf.png"
                alt="left-leaf"
                id="c-left-leaf"
            />
            <img
                src="/images/cocktail-right-leaf.png"
                alt="right-leaf"
                id="c-right-leaf"
            />

            <div className="list">
                <div className="popular">
                    <h2>Most Popular Cocktails</h2>
                    <ul>
                        {cocktailLists.map((cocktail, index) => (
                            <li key={index}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>
                                        {cocktail.country} | {cocktail.detail}
                                    </p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="popular">
                    <h2>Most Loved Cocktails</h2>
                    <ul>
                        {mockTailLists.map((mockTail, index) => (
                            <li key={index}>
                                <div className="me-28">
                                    <h3>{mockTail.name}</h3>
                                    <p>
                                        {mockTail.country} | {mockTail.detail}
                                    </p>
                                </div>
                                <span>- {mockTail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Cocktails;
