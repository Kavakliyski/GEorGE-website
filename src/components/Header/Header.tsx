// styles
import styles from "./Header.module.scss";

// next
import { useContext } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import Image from "next/image";

// img
import GeorgeLogoText2 from "../../../public/static/george.png";
import CartSVGWhite from "../../../public/icons/cart-white.svg";
import SVGLogo from "../../../public/icons/george-logo-white.svg";
import SVGLogo2 from "../../../public/static/logo-1.svg";

// context
import { InternalizationContext } from "@/context/InternalizationContext";
import { CartContext } from "@/context/CartContext";

// components
import { DropdownWhite } from "../CustomItems/Dropdown/Dropdown";

export default function Header() {
    const router = useRouter();

    const { push } = useRouter();
    const { t: translate } = useTranslation("header");

    const isLinkActive = (href: string) => router.pathname === href;

    const { isLanguagesActive } = useContext(InternalizationContext);
    const { setIsDrawerOpen, getTotalProductCount } = useContext(CartContext);

    return (
        <header>
            <nav>
                <div className={styles.NavigationWrapper}>
                    <div className={styles.NavigationContainer}>
                        <div className={styles.NavigatioLeftLinks}>
                            <Link href="/">
                                <Image src={SVGLogo2} alt={""} />
                            </Link>
                        </div>

                        <div className={styles.NavigatioMiddleLinks}>
                            <div className={styles.NavigationLinksContainer}>
                                <ul>
                                    <li
                                        className={
                                            isLinkActive("/")
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <Link href="/">
                                            {translate("home")}
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isLinkActive("/about")
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <Link href="/about">
                                            {translate("about")}
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isLinkActive("/foryou")
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <Link href="/foryou">
                                            {translate("foryou")}
                                        </Link>
                                    </li>
                                    <li
                                        className={
                                            isLinkActive("/products")
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <DropdownWhite
                                            text={translate("products")}
                                            parent_link={"products"}
                                            links={[
                                                {
                                                    label: translate(
                                                        "stop_aging"
                                                    ),
                                                    href: "stop_aging",
                                                },
                                                {
                                                    label: translate(
                                                        "аnti_acne"
                                                    ),
                                                    href: "anti_acne",
                                                },
                                            ]}
                                        />
                                    </li>
                                    <li
                                        className={
                                            isLinkActive("/series")
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <DropdownWhite
                                            text={translate("series")}
                                            parent_link={"series"}
                                            links={[
                                                {
                                                    label: translate("аurum"),
                                                    href: "aurum",
                                                },
                                                {
                                                    label: translate(
                                                        "coming_soon"
                                                    ),
                                                    href: "coming_soon",
                                                },
                                            ]}
                                        />
                                    </li>
                                    <li
                                        className={
                                            isLinkActive("/reviews")
                                                ? styles.active
                                                : ""
                                        }
                                    >
                                        <Link href="/reviews">
                                            {translate("reviews")}
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className={styles.ShoppingCart}
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <Image
                                className={styles.Cart}
                                src={CartSVGWhite}
                                alt=""
                                width={50}
                            />
                            {getTotalProductCount() > 0 && (
                                <span className={styles.cartCount}>
                                    {getTotalProductCount()}
                                </span>
                            )}
                        </div>

                        <div className={styles.LanguageButton}>
                            <button
                                className={
                                    isLanguagesActive("bg") ? styles.Active : ""
                                }
                                onClick={() =>
                                    push("/", undefined, { locale: "bg" })
                                }
                            >
                                BG
                            </button>
                            |
                            <button
                                className={
                                    isLanguagesActive("en") ? styles.Active : ""
                                }
                                onClick={() =>
                                    push("/", undefined, { locale: "en" })
                                }
                            >
                                EN
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
