var boardContainer = document.querySelector(".board-container");
var rows = document.querySelectorAll(".row");
var cells = document.querySelectorAll(".cell");
var token = "X";
var isX = true;

var virtualBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
];

cells.forEach(function(cell){
    cell.addEventListener("click",function(e){
        // Do something;
        var activeCellId = e.target.dataset.cell;
        var activeRowId = e.target.parentElement.dataset.row;

        displayToken(e.target,activeRowId,activeCellId);
        winAlgorithm(activeRowId,activeCellId);
        // console.log(e.target.dataset.cell);
        // console.log(activeRowId, activeCellId);
    })
});



function displayToken(target,row,column)
{
    if(isX)
    {
        token = "X";
        isX = false;
    }
    else
    {
        token = "O";
        isX = true;
    }

    target.innerHTML = token;
    virtualBoard[row][column] = token;
    // console.log(virtualBoard);
}

function winAlgorithm(row,column)
{
    var counter = 0;

    // check row
    var currentColVal = "";
    var prevColVal = "";
    var rowCount = 0;
    // debugger;
    for(var col = 0; col<virtualBoard[row].length; col++)
    {
        if(col==0)
        {
            currentColVal = virtualBoard[row][col];
            prevColVal = virtualBoard[row][col];
        }
        else
        {
            prevColVal = currentColVal;
            currentColVal = virtualBoard[row][col];
        }

        if(prevColVal == currentColVal)
        {
            ++rowCount;
        }

    }

    if(rowCount == 3){
        console.log("Game Over!");
    }

    // check column
    var currentRowVal = "";
    var prevRowVal = "";
    var colCount = 0;
    // debugger;
    for(var rowNum = 0; rowNum<virtualBoard[column].length; rowNum++)
    {
        if(rowNum==0)
        {
            currentRowVal = virtualBoard[rowNum][column];
            prevRowVal = virtualBoard[rowNum][column];
        }
        else
        {
            prevRowVal = currentRowVal;
            currentRowVal = virtualBoard[rowNum][column];
        }

        if(prevRowVal == currentRowVal)
        {
            ++colCount;
        }

    }

    if(colCount == 3){
        console.log("Game Over!");
    }



    // check diagonal

    // Access Primary diagonal
    // var primaryDiagonalCount = 0;
    // var currentPrimaryRowVal = "";
    // var prevPrimaryRowVal = "";
    // for (var r = 0; r < virtualBoard.length; r++) { 
    //     for (var c = 0; c < virtualBoard.length; c++) { 
  
    //         if (r == c) 
    //         {
    //             if(primaryDiagonalCount==0)
    //             {
    //                 currentPrimaryRowVal = virtualBoard[r][c];
    //                 prevPrimaryRowVal = virtualBoard[r][c];
    //             }
    //             else
    //             {
    //                 prevPrimaryRowVal = currentPrimaryRowVal;
    //                 currentPrimaryRowVal = virtualBoard[r][c];
    //             }

    //             if(prevPrimaryRowVal == currentPrimaryRowVal)
    //             {
    //                 ++primaryDiagonalCount;
    //             }
    //         }

    //     } 
    // } 

    // if(primaryDiagonalCount == 3){
    //     console.log("Game Over!");
    // }

    // Access Secondary diagonal
    var secondaryDiagonalCount = 0;
    var currentSDigVal = "";
    var prevSDigVal = "";
    // debugger;
    for (var i = 0; i < virtualBoard.length; i++) { 
        for (var j = 0; j < virtualBoard.length; j++) { 
            // debugger;
            if ((i + j) == (virtualBoard.length - 1))
            {
                if(currentSDigVal=="" && prevSDigVal=="")
                {
                    prevSDigVal = virtualBoard[i][j];
                    currentSDigVal = virtualBoard[i][j];
                }

                if(prevSDigVal == currentSDigVal && currentSDigVal!="" && prevSDigVal!="")
                {
                    ++secondaryDiagonalCount;
                }
                else
                {
                    prevSDigVal = currentSDigVal;
                    currentSDigVal = virtualBoard[i][j];
                }
            }
        } 
    }

    if(secondaryDiagonalCount == 3){
        console.log("Game Over!");
    }
}