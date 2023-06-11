// stlyes
import styles from './Drawer.module.scss';

// react, next
import { useContext, useEffect } from 'react';
import { useTranslation } from 'next-i18next'
import Link from 'next/link';

// context
import { CartContext } from '@/context/CartContext';

// icon
import XIcon from '../../../public/icons/close-x-icon.svg';
import Image from 'next/image';


export const Drawer = () => {

    const { t: translate } = useTranslation('header');
    const { isDrawerOpen, setIsDrawerOpen, cartProducts } = useContext(CartContext);


    useEffect(() => {

        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isDrawerOpen]);


    console.log('cartProducts', cartProducts);


    return (
        <>
            <div
                onClick={() => setIsDrawerOpen(false)}
                className={isDrawerOpen ? styles.GrayScreen : styles.DrawerWrapper}
            ></div>

            <div className={`${styles.DrawerWrapperVisible} ${isDrawerOpen ? styles.Open : styles.Close}`}>

                <div className={styles.DrawerContainer}>

                    <div className={styles.ButtonClose}>
                        <Image src={XIcon} alt='X' onClick={() => setIsDrawerOpen(false)} />
                    </div>

                    {
                        cartProducts?.length ? <>
                            <div className={styles.DrawerProducts}>
                                <p>product</p>
                                <p>opisanie</p>
                            </div>

                            <div className={styles.DrawerTotal}>
                                <div className={styles.Subtotal}>
                                    <h3>{translate('subtotal1')}</h3>
                                    <h3>products_sum</h3>
                                </div>
                                <p>{translate('subtotal2')}</p>
                                <button
                                    id={styles.CheckoutButton}
                                >{translate('checkout')}</button>
                            </div>
                        </> : <>
                            <div className={styles.DrawerEmptyCart}>
                                <p>{translate('empty1')}</p>
                                <p>{translate('empty2')} <Link href="/shop">{translate('here')}</Link>.</p>
                            </div>
                        </>
                    }


                </div>
            </div>
        </>
    )
}
