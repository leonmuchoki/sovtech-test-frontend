import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import ChuckCategories from './components/ChuckCategories';
import ChuckCategoryDetail from './components/ChuckCategoryDetail';
import SwapiPeople from './components/SwapiPeople';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <React.Fragment>
      <CssBaseline />
      <Container>
        <Router>
          <Header />
          <div>
            <Routes>
              <Route path='/categories' element={<ChuckCategories/>} />
              <Route path='/category/:category' element={<ChuckCategoryDetail/>} />
              <Route path='/people' element={<SwapiPeople/>} />
              <Route path='/search' element={<Search/>} />
              <Route path='/' element={<ChuckCategories/>} />
            </Routes>
          </div>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
