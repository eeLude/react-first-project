import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div>
      <div className="expense-item">
        <div>Jan 1th 2023</div>
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
          <div className="expense-item__price">$294.67</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;