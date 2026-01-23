// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import AddReview from './components/add-review';
// import MoviesList from './movies-list';
// import Movie from './components/movie';
// import Login from './components/login';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MovieList from './Components/Movies-list';

export default function App() {
  return (
    <div className="App">
      <NavBar bg='light' expand='lg'>
        <NavBar.Brand href='#home'>React Bootstrap</NavBar.Brand>
        <NavBar.Toggle aria-controls='basic-navbar-nav'></NavBar.Toggle>
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className='mr-auto'>
            <Nav.Link >
                <Link to={"/Movies-list"}>Movies</Link>
                </Nav.Link> {/*creo il routing */}
            <Nav.Link href='#link'>Link</Nav.Link>
          </Nav>
        </NavBar.Collapse>
      </NavBar>
      <Switch>
        <Route exact path={["/","/Movies-list"]} component={MovieList}></Route>
      </Switch>
    </div>
  );
}
