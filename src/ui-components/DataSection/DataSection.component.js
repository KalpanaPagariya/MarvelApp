import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './DataSection.styles';

const useStyles = makeStyles(styles);

/**
 * Common componenet for giving layout for details section
 * @param {} props 
 */
const DataSection = (props) =>{
    const { children, label } = props;
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid container className={classes.sectionWrapper}>
                <Grid className={classes.section} >
                    <Typography variant="h6">
                        {label}
                    </Typography>
                    <Grid>
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

DataSection.propTypes = {
    children: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired
}

export default DataSection;