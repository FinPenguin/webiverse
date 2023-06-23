import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Navigations from './navigations'

function App() {

  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Navigations />
        </PersistGate>
    </Provider>
  )
}

export default App
