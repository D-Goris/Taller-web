const boardgamesService = {};

let boardgames = [];
let contadorID= 1;

boardgamesService.getBoardgames = () => {
    return boardgames;
}

boardgamesService.addBoardgames = (name, minPlayer, maxPlayer, duration, date, status)=>{
    const newBoardgame = {
        id          :   contadorID,
        name        :   name,
        minPlayer   :   minPlayer,
        maxPlayer   :   maxPlayer,
        duration    :   duration,
        date        :   date,
        status      :   status
    }
    contadorID++;
    boardgames.push(newBoardgame);
    return newBoardgame;
}

export default boardgamesService;