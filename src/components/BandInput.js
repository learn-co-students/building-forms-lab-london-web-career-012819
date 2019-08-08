// Add BandInput component
import React, { Component } from 'react'
import {connect} from 'react-redux'

class BandInput extends Component {

  state = {
    band: ''
  }

  handleChange = e => {
    this.setState({band: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state.band)
    this.setState({band: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add a Band</label>
            <input type={"text"} onChange={this.handleChange} value={this.state.band}/>
          </p>
          <input type={"submit"} />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: bandName => dispatch({type: 'ADD_BAND', band: bandName})
  }
};

export default connect(null, mapDispatchToProps)(BandInput)
