import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Container,
  Grid,
  Header,
  Label,
  GridRow,
  GridColumn,
  Popup
} from "semantic-ui-react";

function App() {
  return (
    <Grid>
      <GridRow>
        <GridColumn>
          <Container >
            <Popup
            justifyContent="flex"
            trigger={
              <Label image={require('./stickyTheMan.jpg')} />

            }
            content={
              <div>
                <h4>Sticky</h4>
                <p>The Man </p>
              </div>
            }
            />
          </Container>
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
