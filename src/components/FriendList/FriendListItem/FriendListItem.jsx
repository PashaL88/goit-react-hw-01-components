
import styles from './FriendListItem.module.css'

function FriendListItem({ friend }) {
     const { avatar, name, isOnline } = friend;
   
    return (
        <li className={styles.item}>
            <span className={`${styles.status} ${isOnline ? styles.online : false}`} ></span>
            <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
}

 export default FriendListItem