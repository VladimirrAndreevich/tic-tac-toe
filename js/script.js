// after loading page
window.onload = function () {
  let recordGameField = ["", "", "", "", "", "", "", "", ""];

  const let__cells = document.getElementsByClassName("game__cell");
  //? true is X turn
  //? false is O turn
  let turn = Math.random() < 0.5 ? true : false;

  for (let index = 0; index < let__cells.length; index++) {
    const element = let__cells[index];

    element.addEventListener("click", () => {
      if (recordGameField[index] === "") {
        recordGameField[index] = turn ? "x" : "o";
        turn
          ? element.classList.toggle("game__cell_x")
          : element.classList.toggle("game__cell_o");

        // console.log(recordGameField);
        if (checkWin()) {
          document.getElementById("victory").style.display = "block";
          document.getElementById("winner").innerHTML = turn
            ? "The cross"
            : "The zero";
        } else if (isFullField()) {
          document.getElementById("victory").style.display = "block";
          document.getElementById("state").innerHTML = "Draw!";
        }

        turn = !turn;
      }
    });
  }

  function checkWin() {
    let charTurn = turn ? "x" : "o";

    if (
      recordGameField[0] === charTurn &&
      recordGameField[1] === charTurn &&
      recordGameField[2] === charTurn
    ) {
      //? if x turn, then structure:
      // x x x
      // o o o
      // o o o

      let__cells[0].classList.add("game__cell_select");
      let__cells[1].classList.add("game__cell_select");
      let__cells[2].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[3] === charTurn &&
      recordGameField[4] === charTurn &&
      recordGameField[5] === charTurn
    ) {
      //? if x turn, then structure:
      // o o o
      // x x x
      // o o o

      let__cells[3].classList.add("game__cell_select");
      let__cells[4].classList.add("game__cell_select");
      let__cells[5].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[6] === charTurn &&
      recordGameField[7] === charTurn &&
      recordGameField[8] === charTurn
    ) {
      //? if x turn, then structure:
      // o o o
      // o o o
      // x x x

      let__cells[6].classList.add("game__cell_select");
      let__cells[7].classList.add("game__cell_select");
      let__cells[8].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[0] === charTurn &&
      recordGameField[3] === charTurn &&
      recordGameField[6] === charTurn
    ) {
      //? if x turn, then structure:
      // x o o
      // x o o
      // x o o

      let__cells[0].classList.add("game__cell_select");
      let__cells[3].classList.add("game__cell_select");
      let__cells[6].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[1] === charTurn &&
      recordGameField[4] === charTurn &&
      recordGameField[7] === charTurn
    ) {
      //? if x turn, then structure:
      // o x o
      // o x o
      // o x o

      let__cells[1].classList.add("game__cell_select");
      let__cells[4].classList.add("game__cell_select");
      let__cells[7].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[2] === charTurn &&
      recordGameField[5] === charTurn &&
      recordGameField[8] === charTurn
    ) {
      //? if x turn, then structure:
      // o o x
      // o o x
      // o o x

      let__cells[2].classList.add("game__cell_select");
      let__cells[5].classList.add("game__cell_select");
      let__cells[8].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[0] === charTurn &&
      recordGameField[4] === charTurn &&
      recordGameField[8] === charTurn
    ) {
      //? if x turn, then structure:
      // x o o
      // o x o
      // o o x

      let__cells[0].classList.add("game__cell_select");
      let__cells[4].classList.add("game__cell_select");
      let__cells[8].classList.add("game__cell_select");
      return true;
    } else if (
      recordGameField[2] === charTurn &&
      recordGameField[4] === charTurn &&
      recordGameField[6] === charTurn
    ) {
      //? if x turn, then structure:
      // o o x
      // o x o
      // x o o

      let__cells[2].classList.add("game__cell_select");
      let__cells[4].classList.add("game__cell_select");
      let__cells[6].classList.add("game__cell_select");
      return true;
    }

    return false;
  }

  function isFullField() {
    for (let index = 0; index < recordGameField.length; index++) {
      const element = recordGameField[index];
      if (element === "") {
        return false;
      }
    }
    return true;
  }

  // Reload page by pressing /= try again =/
  document.getElementById("reloadBtn").addEventListener("click", () => {
    location.reload();
  });
};
