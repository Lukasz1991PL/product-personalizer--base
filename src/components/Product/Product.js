import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = ({ colors, title, sizes, basePrice, name }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  console.log('sizes', sizes);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price:{basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => {
                console.log(size.name);
                return (
                  <li key={size.name}>
                    <button
                      onClick={() => setCurrentSize(size.name)}
                      type='button'
                      className={clsx(
                        currentSize === size.name && styles.active
                      )}
                    >
                      {size.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => {
                const foo = `color${color.charAt(0).toUpperCase()}${color.slice(
                  1
                )}`;

                return (
                  <li key={color}>
                    <button
                      type='button'
                      onClick={() => {
                        setCurrentColor(color);
                      }}
                      className={clsx(
                        styles[foo],
                        currentColor === color && styles.active
                      )}
                    >
                      aaa
                    </button>
                  </li>
                );
              })}
              {/* <li>
                <button
                  type='button'
                  className={clsx(styles.colorBlack, styles.active)}
                />
              </li>
              <li>
                <button type='button' className={clsx(styles.colorRed)} />
              </li>
              <li>
                <button type='button' className={clsx(styles.colorWhite)} />
              </li> */}
            </ul>
          </div>
          <Button
            onClick={() =>
              console.log(
                'Summary',
                '=======',
                'Name;'({ title }),
                'Price',
                'Color'
              )
            }
            className={styles.button}
          >
            <span className='fa fa-shopping-cart' />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
