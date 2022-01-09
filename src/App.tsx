import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Container,
  Grid,
  Header,
  Label,
  GridRow,
  GridColumn
} from "semantic-ui-react";

function App() {
  return (
    <Grid>
      <GridRow>
        <GridColumn>
        <Label image='src/stickyTheMan.jpg' />

          <img src="src/stickyTheMan.jpg" alt="stickyTheMan"/>
        </GridColumn>
        <GridColumn>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </GridColumn>
      </GridRow>
    </Grid>
  );
}

export default App;
