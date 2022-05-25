import css from './TransactionHistory.module.css';
import TransactionData from './TransactionData';
import propTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.head}>
                <tr >
                    <th className={css.headItem}>Type</th>
                    <th className={css.headItem}>Amount</th>
                    <th className={css.headItem}>Currency</th>
                </tr>
            </thead>
           
            <tbody>

                {items.map(item => 
                <TransactionData
                    key={item.id}
                    type={item.type}
                    amount={item.amount}
                    currency={item.currency}
                />
             )}
               
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: propTypes.array.isRequired,
}

export default TransactionHistory;

{/* <TransactionData
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    // /> */}