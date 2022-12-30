//two player object whose getSign method returns their sign.
const player = (sign) => {

    const getSign = () => {
        return sign;
    }

    return {getSign};

};

//module for the game board
const gameBoard = (
    ()=> {

//arr to store the player markings
        let gameArr = ["", "", "",
                        "", "", "",
                        "", "", ""];
        
//create two players for each sign
        let playerX = player("x");
        let playerO = player("o");

//selecting all 9 cells in the game board
        let cells = document.querySelectorAll(".cell");

//variable to check if game is over or not after each update
        let isGameOver = false;

//variable to track the number of marking/update in the game board
        let updateCount = 1;

//add event listeners for each cell
        cells.forEach((cell, id) => {
            cell.addEventListener(("click"), () => {
                
//when a cell is clicked gets id using getAtrribute
                id = cell.getAttribute("id");
                id=id.charAt(id.length-1);

//use id as array index for the gameArr, and update signs alternatively beginning with X sign
                if (updateCount%2 == 1) {
                    updateGameBoard(id, playerX.getSign());
                }      
                else {
                    updateGameBoard(id, playerO.getSign());
                }

            });
        });

//function to draw the game board
        const drawGameBoard = () => {
            cells.forEach((cell, id) => {
                id = cell.getAttribute("id");
                id=id.charAt(id.length-1);
                cell.innerHTML = `${gameArr[id-1]}`;
            });
        };

//function to update game for each markings
        const updateGameBoard = (id, mark) => {

            //if a cell is empty and if game is not over, only then update the cell.
            if ((gameArr[id-1] == "") && (!isGameOver)) {
                gameArr[id-1] = mark;
            
            //draw the game board again to update the changes in UI
                drawGameBoard();
                updateCount++;
            
            //after each update in the gameArr check if someone has won the game or not
            gameStatus();
            }
        };

//function to check if game is over or not
        const gameStatus = () => {

            if( (gameArr[9] == "X" ) || (gameArr[9] == "O" ) )
            {
                    isGameOver = true; 
            }
            else {
                isGameOver = false;
            }
        };

//event listener to the reset button
        let resetButton = document.querySelector(".resetButton");
        
        resetButton.addEventListener("click", () => {
            reset();
        });
    
//whenever reset is called move all the variables to its initial state
        const reset = () => {

            updateCount = 1;
            isGameOver = false;
            gameArr = ["", "", "",
                        "", "", "",
                        "", "", ""];
            drawGameBoard();

        };
        
        return {updateGameBoard, drawGameBoard, reset, gameStatus, playerX,playerO};

    }

) ();

gameBoard.drawGameBoard();
