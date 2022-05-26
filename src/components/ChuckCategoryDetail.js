import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router';
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

const ChuckCategoryDetail =(props)=> {
    const classes = useStyles();
    const [chuckCategory, setChuckCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { category } = useParams();

    useEffect(() => {
        const getChuckCategoryData =async()=> {
            setIsLoading(true);

            const categoryData = await chuckApi.getChuckCategory(category);
            console.log("chuck_category " + JSON.stringify(categoryData));
            if(categoryData) setChuckCategory(categoryData);

            setIsLoading(false);
        };
        getChuckCategoryData();
    }, [category])

    return (
        <div className={classes.root}>
            <Card className={classes.root2}>
                <CardContent>
                    <h1>{Array.isArray(chuckCategory?.categories) && chuckCategory?.categories[0]} joke:</h1>
                    {isLoading && <CircularProgress />}
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {chuckCategory?.value}
                    </Typography>
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
  
export default ChuckCategoryDetail;