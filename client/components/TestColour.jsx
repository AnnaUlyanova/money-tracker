import React from 'react'
import CreateReactClass from 'create-react-class'

export default CreateReactClass({

  changeColour() {
    const colours = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#01FF70', '#FFDC00', '#FF851B', '#FF4136', '#85144b', '#F012BE', '#DDDDDD']
    const randomColour = colours[Math.floor(Math.random() * colours.length)]
    document.getElementById('colour').style.boxShadow = `15px 15px 0 ${randomColour}`
  },

  render() {
    return (
      <div id='colour-container'>
        <div id='colour'></div>
        <button onClick={this.changeColour} className='buttons'>Get Random Colour</button>
      </div>
    )
  }
})
