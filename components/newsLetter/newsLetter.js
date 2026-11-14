export function NewsLetter() {
  return `
    <h2>Gaukite naujausius pasiūlymus</h2>    
    <p>Užsiprenumeruokite ir pirmieji sužinokite apie naujus automobilius bei išskirtines sąlygas.</p>
    <form action="#">
        <input type="text" required placeholder="Jūsų vardas">
        <input type="email" required placeholder="El. pašto adresas">
        <button type="submit">Prenumeruoti <img src="./icons/right-arrow.png" rel="right arrow" class="newsLetterArrow"></button>
    </form>    
    `;
}
