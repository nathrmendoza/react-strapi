import {BrowserRouter as Router, Route} from 'react-router-dom'
//routes
import Home from './routes/Home'
import Shop from './routes/Shop'
//components
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />

      <Route path="/" exact component={Home}/>
      <Route path="/shop" exact component={Shop}/>

    </Router>
  )
}

export default App
