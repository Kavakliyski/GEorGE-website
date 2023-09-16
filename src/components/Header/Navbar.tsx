// styles
import styles from "./Navbar.module.scss";

// next
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

// assets
import CartSVGBlack from "../../../public/icons/cart-black.svg";
import LogoImage from "../../../public/static/george-aurum.png";
import LogoImage2 from "../../../public/icons/george-logo-finalver-02.webp";

// context
import { InternalizationContext } from "@/context/InternalizationContext";
import { CartContext } from "@/context/CartContext";
import { DropdownBlack } from "../CustomItems/Dropdown/Dropdown";

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const { setIsDrawerOpen, getTotalProductCount } = useContext(CartContext);

    const { t: translate } = useTranslation("header");

    const { isLanguagesActive, push } = useContext(InternalizationContext);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <nav
            className={
                showNavbar ? styles.NavbarWrapperVisible : styles.NavbarWrapper
            }
        >
            <div className={styles.NavbarContainer}>
                <div className={styles.BurgerMenu}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div
                            className={`${styles.BurgerIcon} ${
                                isMenuOpen ? styles.Open : ""
                            }`}
                        >
                            <span />
                            <span />
                            <span />
                        </div>
                    </button>
                </div>

                <div className={styles.LanguageButton}>
                    <button
                        className={isLanguagesActive("bg") ? styles.Active : ""}
                        onClick={() => push("/", undefined, { locale: "bg" })}
                    >
                        BG
                    </button>
                    |
                    <button
                        className={isLanguagesActive("en") ? styles.Active : ""}
                        onClick={() => push("/", undefined, { locale: "en" })}
                    >
                        EN
                    </button>
                </div>

                <div className={styles.NavbarLinksLeft}>
                    <ul>
                        <li>
                            <Link href="/">{translate("home")}</Link>
                        </li>
                        <li>
                            <Link href="/about">{translate("about")}</Link>
                        </li>
                        <li>
                            <Link href="/foryou">{translate("foryou")}</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.NavbarLinksMiddle}>
                    <Link href="/">
                        <Image src={LogoImage2} alt="" width={150} />
                    </Link>
                </div>

                <div className={styles.NavbarLinksRight}>
                    <ul>
                        <li>
                            <DropdownBlack
                                onClick={() => setIsMenuOpen(false)}
                                text={translate("products")}
                                parent_link={"products"}
                                links={[
                                    {
                                        label: translate("stop_aging"),
                                        href: "stop_aging",
                                    },
                                    {
                                        label: translate("аnti_acne"),
                                        href: "anti_acne",
                                    },
                                ]}
                            />
                        </li>
                        <li>
                            <DropdownBlack
                                onClick={() => setIsMenuOpen(false)}
                                text={translate("series")}
                                parent_link={"series"}
                                links={[
                                    {
                                        label: translate("аurum"),
                                        href: "aurum",
                                    },
                                    {
                                        label: translate("ZnAg"),
                                        href: "znag",
                                    },
                                ]}
                            />
                        </li>
                        <li>
                            <Link href="/reviews">{translate("reviews")}</Link>
                        </li>
                    </ul>
                </div>

                <div
                    className={`${
                        isMenuOpen ? styles.MenuItems : styles.LinkIsInvisible
                    }`}
                >
                    <ul>
                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/">{translate("home")}</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/about">{translate("about")}</Link>
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/foryou">{translate("foryou")}</Link>
                        </li>
                        <li>
                            <DropdownBlack
                                onClick={() => setIsMenuOpen(false)}
                                text={translate("products")}
                                parent_link={"products"}
                                links={[
                                    {
                                        label: translate("stop_aging"),
                                        href: "stop_aging",
                                    },
                                    {
                                        label: translate("аnti_acne"),
                                        href: "аnti_acne",
                                    },
                                ]}
                            />
                        </li>
                        <li>
                            <DropdownBlack
                                onClick={() => setIsMenuOpen(false)}
                                text={translate("series")}
                                parent_link={"series"}
                                links={[
                                    {
                                        label: translate("аurum"),
                                        href: "aurum",
                                    },
                                    {
                                        label: translate("ZnAg"),
                                        href: "znag",
                                    },
                                ]}
                            />
                        </li>
                        <li onClick={() => setIsMenuOpen(false)}>
                            <Link href="/reviews">{translate("reviews")}</Link>
                        </li>
                    </ul>
                </div>

                {isMenuOpen ? (
                    <div
                        className={`${
                            isMenuOpen
                                ? styles.LanguageButtonMobile
                                : styles.LanguageButtonMobileInv
                        }`}
                    >
                        <button
                            className={
                                isLanguagesActive("bg") ? styles.Active : ""
                            }
                            onClick={() => {
                                push("/", undefined, { locale: "bg" }),
                                    setIsMenuOpen(false);
                            }}
                        >
                            BG
                        </button>
                        |
                        <button
                            className={
                                isLanguagesActive("en") ? styles.Active : ""
                            }
                            onClick={() => {
                                push("/", undefined, { locale: "en" }),
                                    setIsMenuOpen(false);
                            }}
                        >
                            EN
                        </button>
                    </div>
                ) : null}

                <div className={styles.ShoppingCart}>
                    <Image
                        src={CartSVGBlack}
                        alt=""
                        width={50}
                        onClick={() => {
                            setIsDrawerOpen(true), setIsMenuOpen(false);
                        }}
                    />
                    {getTotalProductCount() > 0 && (
                        <span className={styles.cartCount}>
                            {getTotalProductCount()}
                        </span>
                    )}
                </div>
            </div>
        </nav>
    );
};
