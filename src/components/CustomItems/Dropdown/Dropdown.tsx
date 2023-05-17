import { useState } from 'react';
import styles from './Dropdown.module.scss';
import Link from 'next/link';


interface DropdownProps {
    text: string;
    links: string[];
    parent_link: string;
}

export const DropdownWhite = ({ text, parent_link, links }: DropdownProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log(links)
    console.log(isDropdownOpen)

    return (

        <div
            className={styles.DropdwonMenu}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            <div className={styles.DropdwonMenuTextWhite}>
                <a>{text}</a>
                <span className={`${isDropdownOpen ? styles.RotateUp : styles.RotateDown}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
                </span>
            </div>
            {
                isDropdownOpen ?
                    <ul className={styles.DropDownMenuListWhite}>
                        {
                            links.map(link => <li key={link}>
                                <Link href={`/${parent_link}/${link}`}>{link}</Link>
                            </li>)
                        }
                    </ul>
                    : null
            }
        </div>
    )
}


export const DropdownBlack = ({ text, links, parent_link }: DropdownProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    console.log(links)
    console.log(isDropdownOpen)

    return (

        <div
            className={styles.DropdwonMenu}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            <div className={styles.DropdwonMenuTextBlack}>
                <a>{text}</a>
                <span className={`${isDropdownOpen ? styles.RotateUp : styles.RotateDown}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
                </span>
            </div>
            {
                isDropdownOpen ?
                    <ul className={styles.DropDownMenuListBlack}>
                        {
                            links.map(link => <li key={link}>
                                <Link href={`/${parent_link}/${link}`}>{link}</Link>
                            </li>)
                        }
                    </ul>
                    : null
            }
        </div>
    )
}
