import { useState } from "react";

export function calculateWinner(currSquare , squares) {

    var linesDIR = [];
    var linesMID1 = [];
    var linesMID2 = [];
    var linesESQ = [];
    var linesI = [];

    function CALC_DIR() {
       linesDIR = [
        [currSquare, currSquare - 5, currSquare - 10, currSquare -15], 
        [currSquare, currSquare + 1, currSquare + 2, currSquare + 3],  
        [currSquare, currSquare + 7, currSquare + 14, currSquare +21], 
      ];
    }
    function CALC_ESQ() {
       linesESQ = [
        [currSquare, currSquare - 7, currSquare - 14, currSquare - 21], 
        [currSquare, currSquare - 1, currSquare - 2, currSquare - 3],
        [currSquare, currSquare + 5, currSquare + 10, currSquare + 15], 
      ];
    }

    function CALC_MID1() {
        linesMID1 = [
 
         [currSquare + 5, currSquare, currSquare - 5, currSquare - 10], 
         [currSquare - 1, currSquare, currSquare + 1, currSquare + 2], 
         [currSquare - 7, currSquare, currSquare + 7, currSquare + 14],  
       ];
     }

    function CALC_MID2() {
        linesMID2 = [
         [currSquare + 10, currSquare + 5, currSquare, currSquare - 5],  
         [currSquare - 2, currSquare - 1, currSquare, currSquare + 1], 
         [currSquare - 14, currSquare - 7, currSquare, currSquare + 7],  
       ];
     }
    
    const COL = [0 , 6 , 12 , 18 , 24 , 30];

    for(var col=1; col <= 6; col = col + 1) {
        if(COL.includes(currSquare)){
            break;
        }
        COL.forEach((current, index, array) => {
            current++;
            array[index]=current;
        });
    }

    if(col < 4) {CALC_DIR()}
    if(col > 3) {CALC_ESQ()}
    if(col > 1 && col < 5) {CALC_MID1()}
    if(col > 2 && col < 6) {CALC_MID2()}
    linesI = [
      [currSquare, currSquare - 6, currSquare - 12, currSquare - 18],  
      [currSquare - 6, currSquare, currSquare + 6, currSquare +12],  
      [currSquare -12, currSquare - 6, currSquare, currSquare + 6],
      [currSquare, currSquare + 6, currSquare + 12, currSquare + 18],  
    ];

 let winCon = [linesDIR, linesESQ, linesMID1, linesMID2, linesI];

  for(let line = 0; line < winCon.length; line++) {

      if (winCon[line].length) {

        for (let i = 0; i < winCon[line].length; i++) {
          console.log(i);
          var [a, b, c, d] = winCon[line][i];
          console.log('slka');
          var allOK = [a , b , c, d].every(function(number) {
            return number >= 0 && number < 36;
          });

          if (allOK) {

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === squares[d]) {
              return [a, b, c, d];
            }
          }
        }
      }

  };

  return null; 
}