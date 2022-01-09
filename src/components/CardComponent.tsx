import React from "react";
import { Label, List, Popup, Segment } from "semantic-ui-react";
import iCard from "../models/iCard";
import Card from "../models/Card";
import CardType from "../models/cardTypes/CardType";
import CardColors from "../models/cardTypes/CardColors"
import CardFactions from "../models/cardTypes/CardFactions";
import WorkerSubTypes from "../models/cardTypes/factionSubTypes/WorkerSubTypes";


interface CardProps {
  active?: boolean;
  card: iCard;
}

export const CardComponent: React.FC<CardProps> = ({ card, active = true }) => {
  const { type, cost, cardName, text } = card;

  return (
    <Popup
      trigger={
        <div>
          <List.Header>{cardName}</List.Header>

          <Segment basic vertical disabled={!active}>
            {/* <CardArt alt={name} cardID={cardID} size="tiny" centered /> */}

            <Label attached={"top left"} circular size="large" color="blue">
              {cost}
            </Label>

            <Label attached={"bottom left"} circular size="large">
              {type.cardColor}
              {type.cardFaction}
              {type.cardSubFaction}
            </Label>
            <Label attached={"bottom right"} circular size="large">
              {/* {isMinion(card) && card.maxHealth} */}
              {/* {isWeapon(card) && card.health} */}
            </Label>
          </Segment>
        </div>
      }
      content={
        <div>
          <h4>{cardName}</h4>
          <p>{text}</p>
          {/* <AbilityList list={card.abilities} /> */}
        </div>
      }
    />
  );
};