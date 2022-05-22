
import PropTypes from 'prop-types';
import Transactions from './Transactions/Transactions'
import styles from './TransactionHistory.module.css'

function TransactionHistory({items}) {
    return (
        <table className={styles.transaction}>
  <thead>
    <tr className={styles.label}>
      <th className={styles.type}>Type</th>
      <th className={styles.type}>Amount</th>
      <th className={styles.type}>Currency</th>
    </tr>
  </thead>

  <tbody>
          <Transactions data={items}/>
  </tbody>
</table>
    )
}

export default TransactionHistory

TransactionHistory.defaultProps = {
    items: [],
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}