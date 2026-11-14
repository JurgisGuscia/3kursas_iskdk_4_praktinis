export function ControlButtons() {
  return `
        <div class="switchWrapper">
            <img src="../icons/sun.png" rel="sun">
            <label class="switch">
                <input type="checkbox" id="theme-toggle">
                <span class="slider"></span>
            </label>
            <img src="../icons/moon.png" rel="moon">
        </div>
        <button id="showGame" class="showGame"><img src="../icons/console.png" rel="moon"></button>
    `;
}
