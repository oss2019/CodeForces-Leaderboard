import React, { useState, useEffect } from 'react';
import { Grid, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar } from '@material-ui/core';

import useStyles from './styles';
import Loading from '../../components/Loading';
import { getLeaderboardData } from "../../api/Leaderboard";

interface Row {
  handle: string,
  email: string,
  avatar: string,
  firstName: string,
  lastName: string,
  rank: string,
  rating: number
}

const createData = (handle: string, email: string, avatar: string, firstName: string, lastName: string, rank: string, rating: number) => {
  return { handle, email, avatar, firstName, lastName, rank, rating };
}

const Home = () => {

    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [rows, setRows] = useState<Row[]>([]);

    useEffect(() => {
      setLoading(true);
      getLeaderboardData().then(({ data }) => {
        data?.data.forEach((id: Row) => {
          setRows(rows => [ ...rows, createData(id.handle, id.email, id.avatar, id.firstName, id.lastName, id.rank, id.rating) ]);
        });
        setLoading(false);
      }).catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
          {loading?(
            <Loading/>
          ):(
            <div className={classes.container}>
              <div className={classes.contents}>
                <h2>Leaderboard</h2>
                <br/>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Avatar</TableCell>
                              <TableCell align="center">Name</TableCell>
                              <TableCell align="center">Handle</TableCell>
                              <TableCell align="center">Email</TableCell>
                              <TableCell align="center">Rank</TableCell>
                              <TableCell align="center">Rating</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row, index) => (
                              <TableRow key={index}>
                                <TableCell>
                                  <Avatar src={row.avatar} alt="avatar" />
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                  {`${row.firstName} ${row.lastName}`}
                                </TableCell>
                                <TableCell align="center">{row.handle}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.rank}</TableCell>
                                <TableCell align="center">{row.rating}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                </Grid>
              </div>
            </div>
          )}
        </>
    )
}

export default Home;
