import React from 'react'
import CreateReactClass from 'create-react-class'

import TestColour from './TestColour'
import Expenses from './Expenses'
import Currency from './Currency'

export default CreateReactClass({
  render() {
    return (
      <div>
      <h1>Manage My Money</h1>
      <Expenses />
      <Currency />
      <TestColour />
      </div>
    )
  }
})
