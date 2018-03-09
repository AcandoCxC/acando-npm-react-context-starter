import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from './Context'

class MyProvider extends React.Component {
  static contextTypes = {
    data: PropTypes.object,
  }
  static childContextTypes = {
    data: PropTypes.object,
  }
  static defaultProps = {
    data: {},
  }
  static propTypes = {
    data: PropTypes.object,
  }
  constructor(props, context) {
    super(props, context)
    this.state = {
      data: this.props.data || {},
    }
  }
  getChildContext() {
    return {
      data: this.state.data,
    }
  }
  componentWillMount() {
    if (!this.props.data) throw new Error("You need to pass data for the lib to work")
    this.props.data !== this.state.data && 
      this.setState({ data: this.props.data })
  }
  componentWillUnmount() {
    // if you have added listeners or need to 'unregister' something else to 
    // clean up after yourself, do it here
  }
  myMethod = name => {
    return `Hello ${name}`
  }
  render() {
    const {
      children
    } = this.props
    return (
      <Provider value={this.getChildContext()}>
        {children ? React.Children.only(children) : null}
      </Provider>
    )
  }
}

export default MyProvider