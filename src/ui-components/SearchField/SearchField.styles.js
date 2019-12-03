export const styles = theme => ({
    root: {
      flexGrow: 1,
      width: 300,
      paddingLeft: '10px',
      paddingTop: '20px',

    },
    container: {
      flexGrow: 1,
      position: 'relative',
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    
    inputRoot: {
      flexWrap: 'wrap',
    },
    inputInput: {
      width: 'auto',
      flexGrow: 1,
      fontSize: 'small',
    },
    divider: {
      height: theme.spacing(2),
    },
    menuItem: {
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    }
  })
