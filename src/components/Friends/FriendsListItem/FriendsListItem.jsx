import css from './FriendsListItem.module.css';
import propTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            {isOnline
                ? <span className={css.status + ' ' + css.on}></span>
                : <span className={css.status + ' ' + css.off}></span>
            }
           
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
}

export default FriendListItem;