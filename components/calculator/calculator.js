export function Calculator() {
  return `
    <div class="calculatorTopMarker"></div>
    <h2>Lizingo skaičiuoklė</h2>
    <p>Sužinokite preliminarią mėnesio įmoką</p>
    <label for="carPrice" class="priceLabels">
        <span>Automobilio kaina:</span>
        <output id="priceValue" for="carPrice">30 000 €</output>
    </label>
    <input type="range" id="carPrice" min="10000" max="100000" step="1000" value="30000">
    <div class="rangeLabels">
        <span>10 000 €</span>
        <span>100 000 €</span>
    </div>
    <label for="leaseTerm" class="timeFrameLabel">Laikotarpis</label>

    <select id="leaseTerm" class="timeFrameSelect">
        <option value="36">36 mėnesiai</option>
        <option value="48">48 mėnesiai</option>
        <option value="60" selected>60 mėnesių</option>
    </select>

    <div class="monthlyPayment">
        <span>Mėnesio įmoka nuo</span>
        <div>
            <output id="paymentValue" for="carPrice leaseTerm">450 €</output>
            <span>/ mėn.</span>
        </div>
    </div>
    <a class="checkPriceButton" href="contacts.html">Gauti individualų pasiūlymą <img src="./icons/right-arrow.png" rel="right arrow" class="callToActionArrow"></a>
    `;
}
