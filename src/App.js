import './App.css';
import Header from './components/Header'
import Products from './components/products/Products'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
import {useState} from 'react'

function App() {
  const [showAddProduct, setShowAddProduct] = useState(false)

  
  return (
    <Router>
      <div className="container">
        <Header />
          <Route exact path="/">
            <Products /> 
          </Route>
        <Route exact path="/dashboard">
          <Dashboard 
            onButtonClick={()=> setShowAddProduct(!showAddProduct)}  
            showAdd={showAddProduct}
          /> 
        </Route>
        <Footer />
      </div>
    </Router>
    );
}

export default App;

// <Route exact path="/add">
// </Route>