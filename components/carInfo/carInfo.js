export function CarInfo() {
  return `
        <h2>Automobilio informacija</h2>
        <img src="./img/audi.png" rel="audi" class="headImage">
        <div class="infoHeader">
            <h3>Audi A6</h3>
            <span>nuo 475 € / mėn</span>
        </div>
        <p>Audi A6 – modernus verslo klasės automobilis, pasižymintis santūriu dizainu, aukšto lygio komfortu ir užtikrintu važiavimu. Erdvus salonas, kokybiškos apdailos medžiagos ir gerai izoliuota keleivių erdvė sukuria malonią aplinką ilgoms kelionėms. Galingas dyzelinis variklis suteikia užtikrintą trauką, ypač važiuojant magistralėmis ar lenkiant. Audi A6 puikiai tinka vairuotojams, kurie daug keliauja, vertina stabilumą, komfortą ir praktiškumą. Tai universalus pasirinkimas tiek verslo reikmėms, tiek šeimos kelionėms, derinantis solidžią išvaizdą ir kasdienį funkcionalumą.</p>
        <div class="detailCardsContainer">
            <div class="detailCard borderRight">
                <div class="leftSide">
                    <div class="iconWrapper"><img src="./icons/gas.png" rel="gas"></div>
                </div>
                <div class="rightSide">
                    <div class="topRow">Kuro tipas</div>
                    <div class="botRow">Dyzelinas</div>
                </div>
            </div>
            <div class="detailCard borderRight">
                <div class="leftSide">
                    <div class="iconWrapper"><img src="./icons/gear.png" rel="gear"></div>
                </div>
                <div class="rightSide">
                    <div class="topRow">Pavarų dėžė</div>
                    <div class="botRow">Automatinė</div>
                </div>
            </div>
            <div class="detailCard">
                <div class="leftSide">
                    <div class="iconWrapper"><img src="./icons/engine.png" rel="engine"></div>
                </div>
                <div class="rightSide">
                    <div class="topRow">Galia</div>
                    <div class="botRow">210 kW (286 AG)</div>
                </div>
            </div>
        </div>
    `;
}
