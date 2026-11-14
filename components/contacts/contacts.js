export function Contacts() {
  return `
    <div class="header">
        <h3>KONTAKTAI</h3>
        <h1>Susisiekime</h1>
        <p>
            Turite klausimų apie automobilio lizingą, norite gauti individualų pasiūlymą ar pasikonsultuoti?
            Mūsų komanda visada pasiruošusi padėti.
        </p>
        
    </div>
    <div class="contactCardsContainer">
        <div class="contactCard">
            <div class="iconWrapper"><img src="./icons/phone.png" alt="phone"></div>
            <h3>Telefonas</h3>
            <h2>+370 640 12345</h2>
            <p><img src="./icons/clock.png" rel="clock"><span>I-V 9:00 - 18:00</span></p>
        </div>
        <div class="contactCard">
            <div class="iconWrapper"><img src="./icons/mail.png" alt="mail"></div>
            <h3>El. paštas</h3>
            <h2>info@drivelease.lt</h2>
            <p><img src="./icons/clock.png" rel="clock"><span>Atsakome per 24 val.</span></p>
        </div>
        <div class="contactCard">
            <div class="iconWrapper"><img src="./icons/location.png" alt="location"></div>
            <h3>Mūsų adresas</h3>
            <h2>Konstitucijos pr. 21, Vilnius</h2>
            <p><img src="./icons/clock.png" rel="clock"><span>Lankytojus priimame I-V 10:00 - 17:00</span></p>
        </div>
    </div>
    <div class="contactFormWrapper">
        <h2>Parašykite mums</h2>
        <p>Užpildykite formą ir mes su jumis susisieksime artimiausiu metu.</p>
        <form id="contactForm" action="#" class="contactForm">
            <div class="labelRow">
                <label for="fullName">Vardas ir pavardė <span>*</span></label>
                <label for="email">El. paštas <span>*</span></label>
            </div>
            <div class="inputRow">
                <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Jonas Jonaitis"
                autocomplete="name"
                required
                >
                <input
                type="email"
                id="email"
                name="email"
                placeholder="jonas@pastas.lt"
                autocomplete="email"
                required
                >
            </div>

            <div class="labelRow">
                <label for="phone">Telefono numeris</label>
                <label for="service">Dominanti paslauga</label>
            </div>

            <div class="inputRow">
                <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+370 600 12345"
                pattern="\+?[0-9]{8,15}"
                oninput="this.value = this.value.replace(/[^0-9+]/g, '').replace(/(?!^)\+/g, '')"
                autocomplete="tel"
                >
                <select id="service" name="service">
                <option value="" selected disabled>Pasirinkite paslaugą</option>
                <option value="leasing">Automobilių lizingas</option>
                <option value="consultation">Konsultacija</option>
                <option value="offer">Individualus pasiūlymas</option>
                <option value="other">Kita</option>
                </select>
            </div>

            <div class="labelRow">
                <label for="phone">Jūsų žinutė <span>*</span></label>
            </div>
            <textarea
                id="message"
                name="message"
                placeholder="Parašykite savo klausimą ar žinutę..."
                rows="5"
                maxlength="1000"
                required
            ></textarea>
            <button type="submit" class="formSubmitButton">Siūsti žinutę</button>
        </form>
    </div>
    <div class="locationWrapper">
        <h2>Kur mus rasti</h2>  
        <div class="mapWrapper">
            <iframe width="100%" height="300px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Konstitucijos%20pr.%2021%2C%20Vilnius%2C%20Vilniaus%20m.%20sav.%2C%20Lietuva&maptype=roadmap" allowfullscreen></iframe>
        </div>
    </div>                  
    `;
}
