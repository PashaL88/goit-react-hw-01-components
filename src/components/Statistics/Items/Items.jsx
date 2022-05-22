
import styles from './Items.module.css'

function Items({ data }) {
  const elements = data.map(el  => (<li className={styles.item} key={el.id}>
      <span className={styles.label}>{el.label}</span>
      <span className={styles.percentage}>{el.percentage}%</span>
    </li>))
    return (<ul className={styles.list}>
              {elements}
      </ul>)
}

export default Items;
