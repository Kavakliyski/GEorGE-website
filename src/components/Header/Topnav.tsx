
import stlyes from "./Topnav.module.scss"

export default function Topnav() {


    return (
        <div className={stlyes.TopnavContainer}>
            <ul>
                <li className="">info@george-cosmetics.com</li>
                <li>Phone: +359 123 888 999</li>
                <li>youtube facebook instagram</li>
            </ul>
        </div>
    )
}
