## Käyttö
* Asenna [Node](https://nodejs.org/en/)-runtime ja [Yarn](https://yarnpkg.com/lang/en/)-pakettienhallinta.
* `yarn install` asentaa työkalut ja riippuvuudet.
* `yarn dev` kääntää ja paketoi koodin selain-yhteensopivaan muotoon. Se jää tarkkailemaan lähdekooditiedostoja ja tekee uuden paketin niiden muuttuessa.
* Avaa `dist/index.html` verkkoselaimessa.
* `yarn build` tekee optimoidun ja minifioidun paketin. Kopioi dist-kansion sisältö HTTP-palvelimelle.

## React
Tutustu [Quick Start](https://reactjs.org/docs/hello-world.html)-oppaaseen tai vähintään sen viimeiseen osaan, [Thinking in React](https://reactjs.org/docs/thinking-in-react.html).

## Rakenne
* App
    * Login / Register
        * Page 1: basic
        * Page 2: strong auth
        * Page 3: payments
        * Page 4: customization
    * Front page / Deliver something
        * Map with packages to deliver
            * Package info popup
        * Package details
        * Agree to deliver
    * Send something
        * My shipments
        * Page 1: basic info
        * Page 2: cost + receiver

Kaikki olennainen sovelluksen tila sekä kovakoodattu fake-data tulee olla App-komponentin tilana. Alempien komponenttien renderöintiin tarvittava tieto sekä tilan muuttamista varten tarvittavat callback-funktiot annetaan propseina alikomponenteille. Tieto, jonka halutaan säilyvän seuraavaan käyttökertaan tulee tallentaa [localstorageen](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

Monisivuiset komponentit voi toteuttaa yhtenä komponenttina, joka renderöi eri sivut sisäisen tilan perusteella ja vasta lopuksi päivittää tiedot sovelluksen tilaan.
