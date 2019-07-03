const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    PLAN:  Symbol("plan"),
    WOODS: Symbol("woods"),
    OUIJA: Symbol("ouija"),
    HIKE: Symbol("hike"),
    FOOT: Symbol("foot"),
    WAIT: Symbol("wait"),
    PLAY: Symbol("play"),
    CONTINUE: Symbol("continue"),
    CONTINUE2: Symbol("continue2"),
    HOME: Symbol("home")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "You invited your friends for night party at your house. You planned to go out in woods nearby. Do you want to go out in woods or stay?";
                this.stateCur = GameState.PLAN;
                break;
            case GameState.PLAN:
                if(sInput.toLowerCase().match("woods")){
                    sReply = "You all are there in the woods and suddenly you hear wolves howling. Do you want to hike or go back?";
                    this.stateCur = GameState.WOODS
                }else if(sInput.toLowerCase().match("back")){
                    sReply ="You plan to play Ouija cardboard game and everything is placed as it was supposed to be. You chant the name of spirit you want to summon. Suddenly lights go out. Do you want to play or quit playing?";
                    this.stateCur = GameState.OUIJA;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.PLAN;
                }
                break;
            case GameState.WOODS:
                if(sInput.toLowerCase().match("hike")){
                    sReply = "You all continue to hike. Suddenly temperature drops, fog appears and you see someone walking in white dress. Do you want to go ahead or run back?";
                    this.stateCur = GameState.HIKE;
                }else if(sInput.toLowerCase().match("back")){
                    sReply = "It was good ideas to run back. You have reached home back safe. Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;

                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.WOODS;
                }
                break;
            case GameState.HIKE:
                if(sInput.toLowerCase().match("ahead")){
                    sReply = "You and your friends move further and you all notice giant foot imprints that doesn't match human or animal on the ground. Do you still want to go ahead or move back?";
                    this.stateCur = GameState.FOOT;

                }else if(sInput.toLowerCase().match("back")){
                    sReply = "It was good ideas to run back. You have reached home back safe. Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;
    
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.HIKE;
                }
                break;
            case GameState.FOOT:
                if(sInput.toLowerCase().match("ahead"))
                {
                    sReply = "You and your friends have covered a lot of distance. You all are tired and want to take some rest. As you all sat together to take rest, you all see same white dress person coming towards you all. Do you want to wait or run back?";
                    this.stateCur = GameState.WAIT;
                }
                else if(sInput.toLowerCase().match("back"))
                {
                    sReply = "It was good ideas to run back. You have reached home back safe. Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.FOOT;
                }
                break;
            case GameState.WAIT:
                if(sInput.toLowerCase().match("wait"))
                {
                    sReply = "It's a scary looking woman caring a dead child and chopped animal's head in her hands. The only way to save your life is stick together and run back. But its too late for that. You all are going to die eventually. Just live your last moments. BYE!!!!!!";
                }
                else if(sInput.toLowerCase().match("back"))
                {
                    sReply = "It was good ideas to run back. You have reached home back safe. Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.WAIT;
                }
                break;
            case GameState.OUIJA:
                if(sInput.toLowerCase().match("play"))
                {
                    sReply = "Lights starts to flicker and furniture starts moving. Do you all still want to play or quit?";
                    this.stateCur = GameState.PLAY;
                }
                else if(sInput.toLowerCase().match("quit")){
                    sReply = "Its good ideas to quit playing such games. This game has already killed many people so its your lucky day that you survived.  Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.OUIJA;
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("play"))
                {
                    sReply = "You ask spirit if it's there in the room. Your fingers that were placed on the board starts to move and stops on yes. Do you want to continue or quit?";
                    this.stateCur = GameState.CONTINUE;
                }
                else if(sInput.toLowerCase().match("quit")){
                    sReply = "Its good ideas to quit playing such games. This game has already killed many people so its your lucky day that you survived. Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.PLAY;
                }
                break;
            case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue"))
                {
                    sReply = "As you all begin to ask questions to the spirit, one of your friends faints away. Do you want to continue or call 911?";
                    this.stateCur = GameState.CONTINUE2;
                }
                else if(sInput.toLowerCase().match("quit"))
                {
                    sReply = "Its good ideas to quit playing such games. This game has already killed many people so its your lucky day that you survived. Do you want to sleep or have beer with friends?";
                    this.stateCur = GameState.HOME;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.CONTINUE;
                }
                break;
            case GameState.CONTINUE2:
                if(sInput.toLowerCase().match("continue"))
                {
                    sReply = "Bad idea. Its a devil spirit that was summoned. Now it's going to kill you all one by one. Good luck with that. Game is over for you my friends. BYE!!!!";
                }
                else if(sInput.toLowerCase().match("911")){
                    sReply = "You lift your finger up to call 911 in the middle of the game and that against the game rules. Now by doing so spirit is free. That means now it's going to kill all of you one by one. Game over. BYE!! ";
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.CONTINUE2;
                }
                break;
            case GameState.HOME:
                if(sInput.toLowerCase().match("sleep"))
                {
                    sReply = "Good night. It was a long night. Sleep well."
                }
                else if(sInput.toLowerCase().match("beer")){
                    sReply = "You and your friends have couple of beer bottles. Now you all are tired. Do you want to sleep. Yes or NO?"
                    this.stateCur = GameState.TIRED;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.HOME;
                }
                break;
            case GameState.TIRED:
                if(sInput.toLowerCase().match("yes"))
                {
                    sReply = "Good night. It was a long night. Sleep well.";
                    
                }
                else if(sInput.toLowerCase().match("no")){
                    sReply = "One of your friend is too drunk to walk or do anything. Do you want to sleep. Yes or No?";
                    this.stateCur = GameState.TIRED;
                }
                else{
                    sReply = "please enter a valid input";
                    this.stateCur = GameState.TIRED;
                }
                break;
        }
        return([sReply]);
    }
}