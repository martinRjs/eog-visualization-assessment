import React from "react";
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Dashboard from './components/Dashboard';
import client from './store/api/';
import { ApolloProvider } from '@apollo/react-hooks';
import './App.css';
import {saveState} from './store/localStorage';

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "rgb(39,49,66)"
    },
    secondary: {
      main: "rgb(197,208,222)"
    },
    background: {
      main: "rgb(226,231,238)"
    }
  }
});

store.subscribe(() => {
  saveState(store.getState());
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <ApolloProvider client={client.metricsAPI}>
      <Provider store={store}>
        <Wrapper>
          <Header />
          <Dashboard />
          <ToastContainer />
        </Wrapper>
      </Provider>
    </ApolloProvider>
  </MuiThemeProvider>
);

export default App;
