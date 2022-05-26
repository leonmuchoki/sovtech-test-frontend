import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SearchResults =(props)=> {
  const classes = useStyles();
  const {chuck: chuckData, swapi: swapiData} = props;

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Joke Results</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <List component="nav" aria-label="main mailbox folders">
            {Array.isArray(chuckData?.result) && chuckData.result.map((res, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={res.value || ''} />
                    </ListItem>
                ))}
            </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Star War Result:</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <List component="nav" aria-label="main mailbox folders">
                {Array.isArray(swapiData?.results) && swapiData.results.map((res, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={res.name || ''} />
                    </ListItem>
                ))}
            </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SearchResults;