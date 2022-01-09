import CardColors from "./CardColors"
import CardFactions from "./CardFactions"
import AssassinSubTypes from "./factionSubTypes/AssassinSubTypes"
import BanditSubTypes from "./factionSubTypes/BanditSubTypes"
import RobotSubTypes from "./factionSubTypes/RobotSubTypes"
import UndeadSubTypes from "./factionSubTypes/UndeadSubTypes"
import WorkerSubTypes from "./factionSubTypes/WorkerSubTypes"


interface iCardType{
    cardColor: CardColors;
    cardFaction: CardFactions;
    cardSubFaction: (AssassinSubTypes 
                    | BanditSubTypes 
                    | RobotSubTypes
                    | UndeadSubTypes
                    | WorkerSubTypes);
};

export default iCardType;