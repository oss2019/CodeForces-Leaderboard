import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

import useStyles from './styles';
import SignupButton from '../SignupButton';

const Header = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Code Geass Leaderboard
                    </Typography>
                    <SignupButton/>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
