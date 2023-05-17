import styles from './Dropdown2.module.scss';



export const Dropdown2 = () => {


    return (
        <div className={styles.Dropdown}>
            <a className={styles.DropdwonButton}>Dropdown2</a>
            <div className={styles.DropdownContent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                <a href="#">Link 3</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}
