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
import Pages from './components/Pages/Pages';
import Gallery from './components/Gallery/Gallery';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/header/Header';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import AuthProvider from './components/contexts/AuthProvider';
import Login from './components/Login/Login';

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
            <Route path='/cart'>
              <Gallery></Gallery>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <Gallery></Gallery>
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
