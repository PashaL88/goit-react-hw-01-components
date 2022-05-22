import FriendListItem from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'


function FriendList({ friends}) {
    return (
         <ul className={styles.list}>
             {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
</ul>
    )
}

export default FriendList

FriendList.defaultProps = {
    friends: [],
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}