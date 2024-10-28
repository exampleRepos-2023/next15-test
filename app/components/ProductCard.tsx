import AddToCart from './AddToCart'
import styles from './ProductCard.module.css'

export function ProductCard() {
  return (
    <div className={styles.card}>
      <AddToCart />
    </div>
  )
}
