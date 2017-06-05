import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({
  getInitialState() {
      return {
        currency: 'NZD'
      }
    },

  handleCurrency() {
    const element = document.getElementById('currency')
    this.setState({
      currency: element.options[element.selectedIndex].value
    })
  },

    render () {
      return(
        <div>
          <select id='currency'>
            <option value='NZD'>NZD</option>
            <option value='USD'>USD</option>
          </select>
          <button onClick={this.handleCurrency}>Change Currency</button>
          <p>{this.state.currency}</p>
        </div>
      )
    }
  })
