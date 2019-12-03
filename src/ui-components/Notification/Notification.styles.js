export const styles = theme => ({

    margin: {
        margin: theme.spacing(1),
    },

    success: {
        backgroundColor: 'green',
        width: '100%',
      },
      error: {
        backgroundColor: theme.palette.error.dark,
        width: '100%',
      },
      info: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
      },
      warning: {
        backgroundColor: 'amber',
        width: '100%',
      },
      icon: {
        fontSize: 20,
      },
      iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing(1),
      },
      message: {
        display: 'flex',
        alignItems: 'center',
      },
      snackBar: {
          position: 'absolute',
          width: '100%',
          left: 0,
          top: 0
          
      }
})
  