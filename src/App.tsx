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
import { CardComponent } from './components/CardComponent';

import Card from "./models/Card";
import CardType from "./models/cardTypes/CardType";
import CardColors from "./models/cardTypes/CardColors"
import CardFactions from "./models/cardTypes/CardFactions";
import WorkerSubTypes from "./models/cardTypes/factionSubTypes/WorkerSubTypes";


let testCardType = new CardType(
  CardColors.Orange
  ,CardFactions.Workers
  ,WorkerSubTypes.CarnivalWorkers
)

let testCard = new Card(
  1
  ,"BillyMays"
  ,0
  ,0
  ,"with an exicting new product"
  ,testCardType
  )


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
          <GridColumn>
            <CardComponent card={testCard}/>
          </GridColumn>
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
