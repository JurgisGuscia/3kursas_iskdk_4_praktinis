import { Navbar } from '../components/navBar/navbar.js';
import { Header } from '../components/header/header.js';
import { WhyUs } from '../components/whyUs/whyUs.js';
import { Calculator } from '../components/calculator/calculator.js';
import { ContactUs } from '../components/contactUs/contactUs.js';
import { WhyUsDash } from '../components/whyUsDash/whyUsDash.js';
import { NewsLetter } from '../components/newsLetter/newsLetter.js';
import { Footer } from '../components/footer/footer.js';
import { initCalculator } from './calculator.js';
import { ControlButtons } from '../components/controlButtons/controlButtons.js';

document.getElementById('navbar').innerHTML = Navbar();
document.getElementById('header').innerHTML = Header();
document.getElementById('whyUsWrapper').innerHTML = WhyUs();
document.getElementById('contactUsDash').innerHTML = ContactUs();
document.getElementById('whyUsDash').innerHTML = WhyUsDash();
document.getElementById('newsLetterWrapper').innerHTML = NewsLetter();
document.getElementById('footer').innerHTML = Footer();
document.getElementById('calculatorWrapper').innerHTML = Calculator();
document.getElementById('controlButtonWrapper').innerHTML = ControlButtons();

initCalculator();
