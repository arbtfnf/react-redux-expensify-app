import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, startRemoveExpenses } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpenses({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>  
          <div className="content-container">
            <ExpenseForm
              expense={this.props.expense}
              onSubmit={this.onSubmit}
            />
          <div>
            <button className="button__remove" onClick={this.onRemove}>Remove Expense</button>
          </div>
        </div>  
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);