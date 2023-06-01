import styles from './FeaturedProducts.module.scss';


export const FeaturedProducts = () => {


    return (
        <div className={styles.FeaturedProductsWrapper}>

            <div className={styles.FeaturedProductsContainer}>

                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <img alt='test' src="https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <img alt='test' src="https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <img alt='test' src="https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.Box}>
                    <div className={styles.ImageBox}>
                        <img alt='test' src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" />
                    </div>
                    <div className={styles.BoxContent}>
                        <div>
                            <h2>Image Title</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
