import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  getInitialState() {
    return {
      totalCounter: 0,
      value: 0
    }
  },

  handleAmount: function(event) {
    this.setState({
      value: Number(event.target.value)
    })
  },

    addExpense(event) {
      const table = document.getElementById('expense-table')
      const row = table.insertRow(-1)
      const cell1 = row.insertCell(0)
      const cell2 = row.insertCell(1)
      cell1.innerHTML = document.getElementById('category').value
      cell2.innerHTML = document.getElementById('amount').value

      this.setState({
        totalCounter: this.state.totalCounter + this.state.value
      })
    },

  render() {
    return (
      <div>
        <h2>My Expenses</h2>
        <form>
          <label>Category</label><input id='category'/>
          <label>Amount</label><input onChange={this.handleAmount} id='amount'/>
          <button onClick={this.addExpense}>Add expense</button>
        </form>
        <table id='expense-table'>
          <tbody>
            <tr>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </tbody>
        </table>
        <p>Total amount spent: {this.state.totalCounter}</p>
      </div>
    )
  }
})
