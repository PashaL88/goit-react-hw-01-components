import PropTypes from 'prop-types'
import Items from './Items';
import styles from './Statistics.module.css'


function Statistics({ stats, title }) {
  return (
    <section className={styles.statistics}>
          {title && <h2 className={styles.title}>{title}</h2>}
      <Items data={stats}/>
    </section>
  );
}

Statistics.defaultProps = {
    stats: [],
}

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
}

