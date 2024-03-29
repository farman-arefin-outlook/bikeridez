import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/contexts/AuthProvider';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Items from './components/Items/Items';
import Details from './components/Details/Details';
import PrivateRoute from './route/PrivateRoute';
import Cart from './Cart/Cart';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route exact path='/items'>
              <Items></Items>
            </Route>
            <Route path='/items/:key'>
              <Details></Details>
            </Route>
            <PrivateRoute path='/cart'>
              <Cart></Cart>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
