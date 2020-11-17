import React from 'react';
import NextLink from 'next/link';

import Navbar from '../src/navbar';
import Footer from '../src/footer';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({ 
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


function Enterprise(){
	const classes = useStyles();

	return(
		<React.Fragment>
		  <Navbar/>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>			     
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
	              Enterprise Page
	            </Typography>
	            <Typography variant="h5" align="center" color="textSecondary" paragraph>
	              Something short and leading about the collection contents, the creator, etc.
	              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
	              entirely.
	            </Typography>
		    </Container>
		  <Footer/>
		</React.Fragment>
	);
}

export default Enterprise