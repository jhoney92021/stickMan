import CardColors from "./CardColors"
import CardFactions from "./CardFactions"
import AssassinSubTypes from "./factionSubTypes/AssassinSubTypes"
import BanditSubTypes from "./factionSubTypes/BanditSubTypes"
import RobotSubTypes from "./factionSubTypes/RobotSubTypes"
import UndeadSubTypes from "./factionSubTypes/UndeadSubTypes"
import WorkerSubTypes from "./factionSubTypes/WorkerSubTypes"
import iCardType from "./iCardType"

class CardType implements iCardType{
    cardColor: CardColors;
    cardFaction: CardFactions;
    cardSubFaction: (AssassinSubTypes 
                    | BanditSubTypes 
                    | RobotSubTypes
                    | UndeadSubTypes
                    | WorkerSubTypes);
    constructor(
        cardColor: CardColors
        ,cardFaction: CardFactions
        ,cardSubFaction: (AssassinSubTypes 
                        | BanditSubTypes 
                        | RobotSubTypes
                        | UndeadSubTypes
                        | WorkerSubTypes)
    )
    {
        this.cardColor = cardColor;
        this.cardFaction = cardFaction;
        this.cardSubFaction = cardSubFaction;
    }
};

export default CardType;