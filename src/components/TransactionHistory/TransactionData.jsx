import css from './TransactionHistory.module.css';
import propTypes from 'prop-types';

const TransactionData = ({ type, amount, currency }) => {
    
    return (
        <tr>
             <td className={css.bodyItem}>{type}</td>
            <td className={css.bodyItem}>{amount}</td>
            <td className={css.bodyItem}>{currency}</td>
        </tr>
    )
}

TransactionData.propTypes = {
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
}
    
export default TransactionData;