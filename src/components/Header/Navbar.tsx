import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";


export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={showNavbar ? styles.NavbarWrapperVisible : styles.NavbarWrapper}>
            Navbar
        </div>
    )
}
