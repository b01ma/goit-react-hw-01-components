import FriendsListItem from '../FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';


const FriendsList = ({friends}) => {
    return (
        <ul className={css.riendList}>

            {friends.map(friend => 
                <FriendsListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
                )}
        </ul>
            
    )
};

FriendsList.propTypes = {
    friends: PropTypes.array,
};

export default FriendsList;