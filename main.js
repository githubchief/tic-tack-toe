//module for the game board

const gameBoard = (
    ()=> {

        let gameArr = ["x", "o", "x",
                        "x", "o", "x",
                        "x", "o", "x"];


        const drawGameBoard = () => {

            let draw = document.querySelectorAll(".cell")
            
            draw.forEach((cell, id, className) => {
                
                id = cell.getAttribute("id");
                className = cell.getAttribute("class");
                id=id.charAt(id.length-1);
                cell.innerHTML = `${gameArr[id-1]}`;

            });

        };

        const updateGameBoard = () => {

        };

        const isGameOver = () => {

        };

        const reset = () => {

        };

        return {updateGameBoard, drawGameBoard, reset, isGameOver};

    }

) ();

gameBoard.drawGameBoard();
const player = () => {



};