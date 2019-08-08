import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>
          {
            this.props.bands.map((band, index) => <li id={index}>{band}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default connect(state => ({bands: state.bands}))(BandsContainer)
