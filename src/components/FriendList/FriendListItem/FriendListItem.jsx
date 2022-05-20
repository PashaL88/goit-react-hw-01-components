import PropTypes from 'prop-types'
import styles from './FriendListItem.module.css'

function FriendListItem({ friends }) { 
    
    const elements = friends.map(el => {
        return (
            <li className={styles.item} key={el.id}>
                <span className={`${styles.status} ${el.isOnline ? styles.online : false}`} ></span>
                <img className={styles.avatar} src={el.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{el.name}</p>
            </li>
        )
    })
    return elements
}

 export default FriendListItem