// stlyes
import styles from './Drawer.module.scss';

// react
import { useContext, useEffect } from 'react';

// context
import { CartContext } from '@/context/CartContext';

// icon
import XIcon from '../../../public/icons/close-x-icon.svg';
import Image from 'next/image';


export const Drawer = () => {

    const { isDrawerOpen, setIsDrawerOpen } = useContext(CartContext);

    console.log(isDrawerOpen);


    useEffect(() => {

        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isDrawerOpen]);


    return (
        <>
            <div
                onClick={() => setIsDrawerOpen(false)}
                className={isDrawerOpen ? styles.GrayScreen : styles.DrawerWrapper}
            ></div>

            <div className={`${styles.DrawerWrapperVisible} ${isDrawerOpen ? styles.Open : styles.Close}`}>

                <div className={styles.DrawerContainer}>

                    <div
                        className={styles.ButtonClose}
                        onClick={() => setIsDrawerOpen(false)}>
                        <Image src={XIcon} alt='X'/>
                    </div>

                    <div className="DrawerProducts">
                        <h1>Your shopping cart is empty.</h1>
                        <h2>Continue Shopping to add items to your cart.</h2>
                    </div>

                    <div className={styles.DrawerTotal}>
                        <div className={styles.Subtotal}>
                            <h3>Subtotal</h3>
                            <h3>1,454 лв.</h3>
                        </div>
                        <p>Shipping, taxes, and discount codes calculated at checkout.</p>
                        <button
                            id={styles.CheckoutButton}
                        >Check out</button>
                    </div>
                </div>
            </div>
        </>
    )
}
