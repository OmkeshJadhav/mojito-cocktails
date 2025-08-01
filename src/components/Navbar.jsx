import React from 'react'
import { navLinks } from '../constants'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top",
                scrub: true,
                // markers: true,
            }
        });

        navTween.fromTo("nav", {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
            {
                backgroundColor: "rgba(0, 0, 0, 1)",
                backgroundFilter: "blur(10px)",
                duration: 1,
                ease: "power1.inOut",
            })
    }, []);

    return (
        <nav>
            <div>
                <a href="#home" className='flex items-center gap-2'>
                    <img src="/images/logo.png" alt="logo" />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar