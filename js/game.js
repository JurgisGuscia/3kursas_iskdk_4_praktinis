const gameField = document.getElementById('gameField');
const levelDisplay = document.getElementById('levelDisplay');
const levelDown = document.getElementById('levelDown');
const levelUp = document.getElementById('levelUp');
const gameCells = [];
const gameState = {
  alive: true,
  level: 3,
};

const gameSettings = {
  1: {
    rows: 9,
    cols: 8,
    bombs: 10,
  },
  2: {
    rows: 14,
    cols: 13,
    bombs: 25,
  },
  3: {
    rows: 28,
    cols: 26,
    bombs: 100,
  },
};

function fillGameField() {
  const { rows, cols } = gameSettings[gameState.level];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        revealed: false,
        bomb: false,
        flagged: false,
        value: '',
      });
    }
    gameCells.push(row);
  }
}

function loadBombs() {
  const { rows, cols, bombs } = gameSettings[gameState.level];
  let bombsPlaced = 0;
  while (bombsPlaced < bombs) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    if (!gameCells[row][col].bomb) {
      gameCells[row][col].bomb = true;
      bombsPlaced++;
    }
  }
}

function checkVictory() {
  const remaining = gameCells.flat().filter((cell) => !cell.bomb && !cell.revealed).length;

  if (remaining === 0 && gameState.alive) {
    showWinScreen();
  }
}

function calculateValues() {
  for (let row = 0; row < gameCells.length; row++) {
    for (let col = 0; col < gameCells[row].length; col++) {
      if (gameCells[row][col].bomb) continue;

      let bombCount = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;

          if (gameCells[row + i]?.[col + j]?.bomb) {
            bombCount++;
          }
        }
      }

      gameCells[row][col].value = bombCount || '';
    }
  }
}

function clearBoard() {
  while (gameCells.length > 0) {
    gameCells.pop();
  }
}

function revealEmptyCells(row, col) {
  const cell = gameCells[row]?.[col];
  // Stop if out of bounds, already revealed, or a bomb
  if (!cell || cell.revealed || cell.bomb || cell.flagged) return;
  cell.revealed = true;
  // Stop expanding when reaching a numbered cell
  if (cell.value !== '') return;
  // Check all 8 neighboring cells
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      revealEmptyCells(row + i, col + j);
    }
  }
}

function revealCell(row, column) {
  if (!gameState.alive) return;

  const cell = gameCells[row][column];

  if (cell.revealed || cell.flagged) return;

  if (cell.bomb) {
    cell.revealed = true;
    gameState.alive = false;
    showGameOverScreen();
  } else {
    revealEmptyCells(row, column);
  }

  drawGameField();
}

function drawGameField() {
  const { cols } = gameSettings[gameState.level];
  gameField.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  gameField.innerHTML = gameCells
    .flatMap((row, rowIndex) =>
      row.map(
        (cell, colIndex) => `
        <div
          class="${cell.revealed ? 'revealedFieldCell' : 'gameFieldCell'}"
          onclick="revealCell(${rowIndex}, ${colIndex})"
          oncontextmenu="event.preventDefault(); flagCell(${rowIndex}, ${colIndex})"
        >
          ${
            cell.revealed
              ? cell.bomb
                ? '<img src="../icons/mine.png" alt="mine">'
                : cell.value
              : cell.flagged
                ? '<img src="../icons/flag.png" alt="flag">'
                : ''
          }
        </div>
      `,
      ),
    )
    .join('');

  checkVictory();
}

function updateLevelDisplay() {
  levelDisplay.textContent = `Level ${gameState.level}`;

  levelDown.disabled = gameState.level === 1;
  levelUp.disabled = gameState.level === 3;
}

function changeLevel(amount) {
  const newLevel = gameState.level + amount;

  if (!gameSettings[newLevel]) return;

  gameState.level = newLevel;

  updateLevelDisplay();
  startNewGame();
}

function flagCell(row, column) {
  if (!gameState.alive) return;

  const cell = gameCells[row][column];

  if (cell.revealed) return;

  cell.flagged = !cell.flagged;

  drawGameField();
}

levelDown.addEventListener('click', () => {
  changeLevel(-1);
  startNewGame;
});

levelUp.addEventListener('click', () => {
  changeLevel(1);
  startNewGame;
});

function hideGameOverScreen() {
  document.getElementById('gameOverScreen').classList.add('hidden');
}

function showGameOverScreen() {
  document.getElementById('gameOverScreen').classList.remove('hidden');
}

function hideWinScreen() {
  document.getElementById('winScreen').classList.add('hidden');
}

function showWinScreen() {
  document.getElementById('winScreen').classList.remove('hidden');
}

function startNewGame() {
  gameState.alive = true;
  updateLevelDisplay();
  hideWinScreen();
  hideGameOverScreen();
  clearBoard();
  fillGameField();
  loadBombs();
  calculateValues();
  drawGameField();
}
