// styles
import "@splidejs/react-splide/css";

// next, react
import Image from "next/image";

// splide
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Slider() {
    return (
        <Splide
            aria-label="My Favorite Images"
            options={{
                rewind: true,
                gap: "1rem",
            }}
        >
            <SplideSlide>
                <Image
                    src="/static/george-jar10.jpg"
                    alt="Image 1"
                    width={1920}
                    height={1280}
                />
            </SplideSlide>
            <SplideSlide>
                <Image
                    src="/static/george-jar10.jpg"
                    alt="Image 2"
                    width={1920}
                    height={1280}
                />
            </SplideSlide>
        </Splide>
    );
}
