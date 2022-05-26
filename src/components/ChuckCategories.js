import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { chuckApi } from '../api'

const ChuckCategories =()=> {
    const classes = useStyles();
    const [chuckCategories, setChuckCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getChuckCategoryData =async()=> {
            setIsLoading(true);
            const categories = await chuckApi.getChuckCategories();
            console.log("chucks length " + categories.length + " categories" + JSON.stringify(categories));
            if(categories) setChuckCategories(categories);
            setIsLoading(false);
        };
        getChuckCategoryData();
    }, [])

    return (
        <div className={classes.root}>
            <Card className={classes.root2}>
                <CardContent>
                    {isLoading && <CircularProgress />}
                    <List component="nav" aria-label="main mailbox folders">
                        {chuckCategories && chuckCategories.map((category, index) => (
                            <ListItem button key={index} onClick={() => navigate(`/category/${category}`)}>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary={category} />
                            </ListItem>
                        ))}
                    </List>
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
  }));
  
export default ChuckCategories;