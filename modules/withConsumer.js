import React from 'react'
import PropTypes from 'prop-types'
import hoistStatics from 'hoist-non-react-statics'
import { Consumer } from './Context'

// name your HOC, suggestion: withMyFeature, such as:
// connectToX or withX
const withConsumer = Component => {
  const C = props => (
    <Consumer>
      {
        context => 
          <Component {...props} {...context} />
      }
    </Consumer>
  )
  // remember to change the displayName here to whatever this component is named
  //                    v
  C.displayName = `withConsumer(${Component.displayName || Component.name})`
  return hoistStatics(C, Component)
} 

export default withConsumer