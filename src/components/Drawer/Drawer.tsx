import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';

import styles from './Drawer.module.scss';


export const Drawer = () => {

    const { isDrawerOpen, setIsDrawerOpen } = useContext(CartContext);

    console.log(isDrawerOpen);
    

    return (

        <div className={isDrawerOpen ? styles.DrawerWrapperVisible : styles.DrawerWrapper}>

            <button onClick={() => setIsDrawerOpen(false)}>
                <h1>ЗАТВОРИ</h1>
            </button>
            <h1>Your shopping cart is empty.</h1>
            <h2>Continue Shopping to add items to your cart.</h2>
        </div>
    )
}
