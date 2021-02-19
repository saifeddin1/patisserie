import './App.css';
import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'
import ProductForm from './components/ProductForm'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/Dashboard'
function App() {
  return (
    <Router>
    <div className="container">
    <Header />
      <Route exact path="/">
    <Products /> 
    </Route>
    <Route exact path="/dashboard">
    <Dashboard /> 
    </Route>
        <Footer />
        <Route exact path="/add">
        <ProductForm />  
        </Route>
        
        </div>
    </Router>
  );
}

export default App;
