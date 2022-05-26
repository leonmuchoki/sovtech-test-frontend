import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import { swapiApi } from '../api'

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'height', label: 'Height', minWidth: 100 },
    {
      id: 'gender',
      label: 'Gender',
      minWidth: 170,
      align: 'right',
    },
    {
      id: 'skin_color',
      label: 'Skin Color',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'mass',
      label: 'mass',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];

const SwapiPeople =()=> {
    const classes = useStyles();
    const [people, setSwapiPeople] = useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [isLoading, setIsLoading] = useState(false);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    useEffect(() => {
        const getSwapiPeopleData =async()=> {
            setIsLoading(true);
            const people = await swapiApi.getSwapiPeople();
            console.log("swapi people " + JSON.stringify(people));
            if(people) setSwapiPeople(people);
            setIsLoading(false);
        };
        getSwapiPeopleData();
    }, [])

    return (
        <div className={classes.root}>
            {isLoading && <CircularProgress />}
            <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                        const value = row[column.id];
                        return (
                        <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                        );
                    })}
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={people.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
            {/* <Card className={classes.root2}>
                <CardContent>
                <List component="nav" aria-label="main mailbox folders">
                    {people && people.map((person, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary={person.name} />
                        </ListItem>
                    ))}
                </List>
                </CardContent>
            </Card> */}
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
  
export default SwapiPeople;