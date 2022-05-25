import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import ChuckCategories from './components/ChuckCategories';
import SwapiPeople from './components/SwapiPeople';
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
        <Header />
        <Router>
          <div>
            <Routes>
              <Route path='/categories' element={<ChuckCategories/>} />
              <Route path='/people' element={<SwapiPeople/>} />
              <Route path='/' element={<ChuckCategories/>} />
            </Routes>
          </div>
        </Router>
      </Container>
    </React.Fragment>
  );
}

export default App;
