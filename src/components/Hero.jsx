import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { SplitText } from "gsap/SplitText";
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {

    const videoRef = useRef()

    const isMobie = useMediaQuery({maxWidth: 768})

    useGSAP(() => {
        const heroSplit = new SplitText(".title", { type: 'chars, words' });
        const paragraphSplit = new SplitText(".subtitle", { type: 'lines' });

        const gtl = gsap.timeline();

        gtl.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.5,
            ease: "expo.out",
            stagger: 0.08,
            opacity: 0,
        })
            .from(paragraphSplit.lines, {
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.08,
                opacity: 0,
            }, ">-0.3")
            .from(".left-leaf", {
                xPercent: -100,
                duration: 1.5,
                ease: "expo.out",
            }, "<")
            .from(".right-leaf", {
                xPercent: 100,
                duration: 1.5,
                ease: "expo.out",
            }, "<");

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
        })
            .to(".left-leaf", {y: -200}, 0)
            .to(".right-leaf", {y: 200}, 0)

        const startValue = isMobie ? "top 50%" : "center 60%";
        const endValue = isMobie ? "120% top" : "bottom top";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "video",
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                pinSpacing: false,
            }
        })
        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
        })}
    }, [])

    return (
        <>
            <section id='hero' className='noisy'>
                <h1 className='title'>Mojito</h1>
                <img src="/images/hero-left-leaf.png" alt="" className='left-leaf' />
                <img src="/images/hero-right-leaf.png" alt="" className='right-leaf' />

                <div className='body'>
                    <div className='content'>
                        <div>
                            <p>Cool. Crisp. Classic</p>
                            <p className='subtitle'>
                                Sip the spirit <br /> of summer
                            </p>
                        </div>

                        <div className='view-cocktails'>
                            <p className='subtitle'>
                                Every cocktail on our menu is a <br />
                                blend of premium ingredients, <br />
                                creative flair, and timeless recipes <br />
                                - designed to delight your your senses
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>

                </div>
            </section>

            <div className='video absolute inset-0'>
                <video 
                    ref={videoRef}
                    src="/videos/input.mp4"
                    muted
                    playsInline
                    preload='auto'
                />
            </div>

        </>
    )
}

export default Hero