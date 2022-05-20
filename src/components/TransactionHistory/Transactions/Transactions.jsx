import styles from './transactions.module.css'
function Transactions({data}) {

    const elements = data.map(el => {
       return (
    <tr className={styles.label} key={el.id}>
      <td className={styles.number}>{el.type}</td>
      <td className={styles.number}>{el.amount}</td>
      <td className={styles.number}>{el.currency}</td>
    </tr>
)
   })
    return elements;
}

export default Transactions;