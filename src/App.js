import React from 'react';
import ViewCharacters from './containers/ViewCharacters.container';
import CharacterNotification from './containers/CharacterNotification.container';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <ViewCharacters/>
      <CharacterNotification/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
