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
          <input value={this.state.value} onChange={this.handleChange}/>
          <button onClick={this.addExpense}>Add expense</button>
        </form>
        <p>Total amount spent: {this.state.totalCounter}</p>
      </div>
    )
  }
})