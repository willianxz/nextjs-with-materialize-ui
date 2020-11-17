import React from 'react';
import NextLink from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


function Navbar(){
	const classes = useStyles();

	return(
		<React.Fragment>
			 <CssBaseline />
		      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
		        <Toolbar className={classes.toolbar}>
		          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
		            Company name
		          </Typography>
		          <nav>
			         <NextLink href="/">
			               <a>
				              <Link variant="button" color="textPrimary" className={classes.link}>
				                Home
				              </Link>
			              </a>
			         </NextLink>
			          <NextLink href="/features">
			               <a>
				              <Link variant="button" color="textPrimary" className={classes.link}>
				                Features
				              </Link>
			              </a>
			          </NextLink>
			          <NextLink href="/enterprise">
				            <a>
					            <Link variant="button" color="textPrimary" className={classes.link}>
					              Enterprise
					            </Link>
				            </a>
			         </NextLink>		            
		          </nav>
		          <Button href="#" color="primary" variant="outlined" className={classes.link}>
		            Login
		          </Button>
		        </Toolbar>
		     </AppBar>
		</React.Fragment>
	);
}

export default Navbar