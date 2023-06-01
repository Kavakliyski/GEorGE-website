import { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.scss';
import Link from 'next/link';


interface DropdownProps {
    text: string;
    links: {
        label: string;
        href: string;
    }[];
    parent_link: string;
}
// for header
export const DropdownWhite = ({ text, parent_link, links }: DropdownProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setIsDropdownOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (

        <div
            className={styles.DropdwonMenu}
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            <div className={styles.DropdwonMenuTextWhite}>
                <p>{text}</p>
                <span className={`${isDropdownOpen ? styles.RotateUp : styles.RotateDown}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
                </span>
            </div>
            {
                isDropdownOpen ?
                    <ul className={styles.DropDownMenuListWhite}>
                        {
                            links.map(link => <li key={link.href}>
                                <Link href={`/${parent_link}/${link.href}`}>{link.label}</Link>
                            </li>)
                        }
                    </ul>
                    : null
            }
        </div>
    )
}


// for navbar
export const DropdownBlack = ({ text, parent_link, links }: DropdownProps) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsDropdownOpen(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as HTMLElement)) {
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (

        <div
            ref={dropdownRef}
            className={styles.DropdwonMenu}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
            <div className={styles.DropdwonMenuTextBlack}>
                <p>{text}</p>
                <span className={`${isDropdownOpen ? styles.RotateUp : styles.RotateDown}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" /></svg>
                </span>
            </div>
            {
                isDropdownOpen ?
                    <ul className={styles.DropDownMenuListBlack}>
                        {
                            links.map(link => <li key={link.href}>
                                <Link href={`/${parent_link}/${link.href}`}>{link.label}</Link>
                            </li>)
                        }
                    </ul>
                    : null
            }
        </div>
    )
}
