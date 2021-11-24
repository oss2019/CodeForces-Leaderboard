import React from 'react';
import { Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LocationOn as LocationOnIcon, GitHub as GitHubIcon, Link as LinkIcon } from '@material-ui/icons';

import useStyles from './styles';

const Footer = (props:any) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={6} xs={12}>
          <Typography variant="h6" className={classes.style}>
            Copyright&copy; 2021
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className={classes.icons}>
            <Link href="https://iitdh.ac.in/" >
              <Typography variant="h6" className={classes.style}>
                <LinkIcon className={classes.icon}/>
              </Typography>
            </Link>
            &nbsp;
            <Link href="https://oss2019.github.io/">
              <Typography variant="h6" className={classes.style}>
                <GitHubIcon className={classes.icon}/>
              </Typography>
            </Link>
            &nbsp;
            <Link href="https://codeforces.com/group/z1uKc5KMEJ/blog">
              <Typography variant="h6" className={classes.style}>
                <LocationOnIcon className={classes.icon}/>
              </Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>

    )
}

export default Footer;
