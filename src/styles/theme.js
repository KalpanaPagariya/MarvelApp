import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    props: {
      // Name of the component ⚛️
      typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: 'OpenSans, Arial, sans-serif',
        fontFamilyBold: 'OpenSans, Arial, sans-serif',
        useNextVaraiants: true,
        h5: {
            fontSize: '24px',
            fontWeight: 'bold',
            letterSpacing: 'normal',
            lineHeight: 34 / 24
        },
        h6: {
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: 'normal',
            lineHeight: 28 / 18
        },
        body1: {
            fontSize: '16px',
            fontWeight: 'normal',
            letterSpacing: 'normal',
            lineHeight: 24 / 16
        },
        body2: {
            fontSize: '14px',
            fontWeight: 'normal',
            letterSpacing: 'normal',
            lineHeight: 20 / 14
        },
      },
    },
  });

  export default theme;