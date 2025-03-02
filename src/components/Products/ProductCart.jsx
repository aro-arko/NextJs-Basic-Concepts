import Image from "next/image";
import React from "react";
import styles from "./ProductCart.module.css";

const ProductCart = ({ product }) => {
  const { productName, category, brand, price, image } = product;
  return (
    <div className={styles.productCard}>
      <Image
        src={image}
        alt={`${productName}`}
        className={styles.productImage}
        width={300}
        height={300}
      />
      <div className={styles.productDetails}>
        <h2 className={styles.productName}>{productName}</h2>
        <p className={styles.productCategory}>{category}</p>
        <p className={styles.productBrand}>{brand}</p>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCart;
