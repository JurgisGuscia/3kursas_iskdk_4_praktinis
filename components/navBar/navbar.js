export function Navbar() {
  return `
    <div class="navLogo">DRIVE<span class="navLogoBlue">LEASE</span></div>
    <div class="navWrapper">
        <a href="index.html" class="navBarLink">Pagrindinis</a>
        <a href="cars.html" class="navBarLink">Automobiliai</a>
        <a href="aboutUs.html" class="navBarLink">Apie mus</a>
        <a href="contacts.html" class="navBarLink">Kontaktai</a>
        <div id="burgerWrapper" class="burgerWrapper"><img id="burgerere" src="./icons/burger.png" rel="burger menu"></div>
        <ul id="phoneMenu" class="phoneMenu">
          <li class="phoneMenuItem"><a class="link" href="index.html" class="navBarLink">Pagrindinis</a></li>
          <li class="phoneMenuItem"><a class="link" href="cars.html" class="navBarLink">Automobiliai</a></li>
          <li class="phoneMenuItem"><a class="link" href="aboutUs.html" class="navBarLink">Apie mus</a></li>
          <li class="phoneMenuItem"><a class="link" href="contacts.html" class="navBarLink">Kontaktai</a></li>
        </ul>
    </div>
    <a class="callToAction" href="contacts.html">Gauti pasiūlymą<img class="callToActionArrow" src="./icons/right-arrow.png" rel="right arrow"></a>
  `;
}
