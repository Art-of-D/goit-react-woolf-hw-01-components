import style from './TransactionHistory.module.css';

export const TransactionHistory = data => {
  const { items } = data;
  return (
    <table className={style.transactionHistory}>
      <thead>
        <tr className={style.transactionTop}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={style.transactionData} key={id}>
            <td className={style.transactionType}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
