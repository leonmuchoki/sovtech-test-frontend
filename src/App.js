import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import ChuckCategories from './components/ChuckCategories';

function App() {
  return (
      <React.Fragment>
      <CssBaseline />
      <Container>
        <Header />
        <ChuckCategories></ChuckCategories>
      </Container>
    </React.Fragment>
  );
}

export default App;
