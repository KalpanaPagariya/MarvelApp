export const styles = theme => ({

    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    carouselItem:{
      backgroundColor:'#cfe2ea',
      height: 250,
      borderRadius: theme.spacing(0.5),
      paddingTop: theme.spacing(3)
    },
    carouselItemWrapper: {
      paddingLeft: '30px',
      paddingRight: '30px',
    },
    favButton: {
      flexGrow: 1,
      width: 300,
      paddingLeft: '10px',
      paddingTop: '20px',
      
    },
    paddingLeft20: {
      paddingLeft: theme.spacing(2)
    },
    cursorPointer:{
      cursor: 'pointer'
    }
    
})
  