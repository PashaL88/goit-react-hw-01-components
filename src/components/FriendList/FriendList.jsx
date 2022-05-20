import FriendListItem from './FriendListItem'
import PropTypes from 'prop-types'
import styles from './FriendList.module.css'


function FriendList({ data}) {
    return (
         <ul className={styles.list}>
            <FriendListItem friends={data}/>
</ul>
    )
}

export default FriendList

FriendList.defaultProps = {
    items: [],
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
}