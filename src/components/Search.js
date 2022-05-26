import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { searchApi } from '../api'
import SearchResults from './SearchResult';

const Search =(props)=> {
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(false);
    const [joke, setJoke] = React.useState('');
    const [starWar, setStarWar] = React.useState('');
    const [chuckData, setChuckData] = useState({});
    const [swapiData, setSwapiData] = useState({});

    const handleJokeChange = (event) => {
        setJoke(event.target.value);
    };

    const handleStarWarChange = (event) => {
        setStarWar(event.target.value);
    };

    const doSearch =async()=> {
        try {
            if (joke === '' && starWar === '') return;
            setIsLoading(true);
            const payload = {
                joke: joke,
                swp: starWar
            };
            const res = await searchApi.search(payload);
            if(res) {
                //console.log('search data ' + JSON.stringify(res));
                setChuckData(res?.chuck);
                setSwapiData(res?.swapi);
            }
            setIsLoading(false);
        }
        catch(ex) {
            console.error(JSON.stringify(ex));
        }
    };


    return (
        <div className={classes.root}>
            <div>
            <form className={classes.root} noValidate autoComplete="off">
                <div>
                    <h3>Search Joke or Star war:</h3>
                </div>
                <div className={classes.textFieldContainer}>
                    <TextField
                        id="outlined-name"
                        label="Joke"
                        value={joke}
                        onChange={handleJokeChange}
                        variant="outlined"
                        className={classes.textField}
                    />
                    <TextField
                        id="outlined-name"
                        label="Star War"
                        value={starWar}
                        onChange={handleStarWarChange}
                        variant="outlined"
                        className={classes.textField}
                    />
                </div>
                <div>
                {isLoading && <CircularProgress />}
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SearchIcon />}
                    onClick={doSearch}
                >
                    Search
                </Button>
                </div>
                </form>
            </div>
            <Card className={classes.root2}>
                <CardContent>
                    <SearchResults chuck={chuckData} swapi={swapiData} />
                </CardContent>
            </Card>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      padding: 30
    },
    root2: {
        minWidth: 275,
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
      textFieldContainer: {
          display: 'flex',
          flexDirection: 'column',
          width: '40%',
          padding: 2
      },
      textField: {
          margin: 15
      }
  }));
  
export default Search;