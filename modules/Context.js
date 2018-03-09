import React from 'react'
import createReactContext from 'create-react-context'

// name your context
const MyContext = React.createContext
  ? React.createContext()
  : createReactContext()

const {
  Provider,
  Consumer,
} = MyContext

Provider.displayName = 'MyContext.Provider'
Consumer.displayName = 'MyContext.Consumer'

export {
  Provider,
  Consumer,
}
export default Context
