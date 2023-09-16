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
                    gap: "2rem",
                    interval: 8000, // seconds
                    type: "loop",
                    autoplay: true,
                }}
            >
                <SplideSlide>
                    <Image
                        priority
                        src="/static/nachalo-znag.jpg"
                        alt="Image 2"
                        width={5000}
                        height={3750}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Image
                        priority
                        src="/static/nach-str-za-vas.jpg"
                        alt="Image 1"
                        width={5000}
                        height={3750}
                    />
                </SplideSlide>

                <SplideSlide>
                    <Image
                        priority
                        src="/static/nachalo.jpg"
                        alt="Image 2"
                        width={5000}
                        height={3750}
                    />
                </SplideSlide>
            </Splide>
        </div>
    );
}
