

export class Card {
    constructor(){

        cardId: number,        
        cardName: string,
        cost: number,
        owner: Controller;
        text: string | null;
        zone: Zone;
        type: CardType;
    }
  }
  