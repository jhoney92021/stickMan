import iCard from "./iCard";
import iCardType from "./cardTypes/iCardType";

class Card implements iCard {
    readonly cardId: number;
    readonly cardName: string;
    cost: number;
    owner: number;
    text: string | null;
    type: iCardType;

    constructor(
        cardId: number
        ,cardName: string
        ,cost: number
        ,owner: number
        ,text: string | null
        ,type: iCardType
    )
    {
        this.cardId = cardId;
        this.cardName = cardName;
        this.cost = cost;
        this.owner = owner;
        this.text = text;
        this.type = type;
    }

  };
  
  export default Card;