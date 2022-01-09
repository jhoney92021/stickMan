import iCardType from "./cardTypes/iCardType"

interface iCard {
    readonly cardId: number;
    readonly cardName: string;
    cost: number;
    owner: number;
    text: string | null;
    type: iCardType;
  };
  
  export default iCard;