import { useContext } from 'react';
import styles from './Drawer.module.scss';
import { CartContext } from '@/context/CartContext';


export const Drawer = () => {

    const { isDrawerOpen, setIsDrawerOpen } = useContext(CartContext);

    console.log('isDrawerOpen', isDrawerOpen)

    return (

        <div className={isDrawerOpen ?  styles.DrawerWrapperVisible : styles.DrawerWrapper}>

            <button onClick={() => setIsDrawerOpen(false)}>
                <h1>ЗАТВОРИ</h1>
            </button>
        </div>
    )
}
