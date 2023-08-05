"use client";

// styles
import "@splidejs/react-splide/css";
import styles from "./Slider.module.scss";

// next, react
import Image from "next/image";

// splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Slider() {
    return (
        <div className={styles.SliderContainer}>
            <Splide
                aria-label="My Favorite Images"
                options={{
                    rewind: true,
                    gap: "1rem",
                    interval: 1000,
                }}
            >
                <SplideSlide>
                    <Image
                        src="/static/nachalo.jpg"
                        alt="Image 1"
                        width={5000}
                        height={3750}
                    />
                </SplideSlide>
                <SplideSlide>
                    <Image
                        src="/static/george-jar10.jpg"
                        alt="Image 2"
                        width={5000}
                        height={3750}
                    />
                </SplideSlide>
            </Splide>
        </div>
    );
}
