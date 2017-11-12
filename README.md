## Käyttö
* Asenna [Node](https://nodejs.org/en/)-runtime ja [Yarn](https://yarnpkg.com/lang/en/)-pakettienhallinta.
* `yarn install` asentaa työkalut ja riippuvuudet.
* `yarn dev` kääntää ja paketoi koodin selain-yhteensopivaan muotoon. Se jää tarkkailemaan lähdekooditiedostoja ja tekee uuden paketin niiden muuttuessa.
* Avaa `dist/index.html` verkkoselaimessa.
* `yarn build` tekee optimoidun ja minifioidun paketin. Kopioi dist-kansion sisältö HTTP-palvelimelle.
