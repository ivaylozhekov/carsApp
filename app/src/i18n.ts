import * as dot from 'dot-object';
import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as bg from 'react-intl/locale-data/bg';
import * as es from 'react-intl/locale-data/es';

// Import locales from modules

// Merge all locales
const allLocales = {};

// Transform nested objects to dot notation
let locales: Object = {};
for (let lang in allLocales) {
    if (allLocales.hasOwnProperty(lang)) {
        let current: Object = allLocales[lang];
        locales[lang] = dot.dot(current, {});
    }
}

export default locales;

addLocaleData(en);
addLocaleData(bg);
addLocaleData(es);
