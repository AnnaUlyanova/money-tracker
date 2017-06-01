import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  getInitialState() {
    return {
      totalCounter: 0,
      value: 0
    }
  },

  handleChange: function(event) {
    this.setState({
      value: Number(event.target.value)
    });
  },

  addExpense(event) {
    this.setState({
      totalCounter: this.state.totalCounter + this.state.value
    })
  },

  render() {
    return (
      <div>
        <h2>My Expenses</h2>
        <form>
          <label>Category</label><input onChange={this.handleChange}/>
          <label>Amount</label><input onChange={this.handleChange}/>
          <button onClick={this.addExpense}>Add expense</button>
        </form>
        <table>
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
