import PropTypes from 'prop-types';
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

Items.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
   label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
 }))
}