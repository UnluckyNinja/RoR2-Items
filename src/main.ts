import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'
import LazyLoadDirective from './directives/LazyLoadDirective';
import App from './App.vue';
import Unicon from 'vue-unicons';
import {
	uniGithub,
	uniCheckCircle,
	uniTimes,
	uniUnlock,
	uniExternalLinkAlt,
	uniInfoCircle,
	uniTimesCircle,
} from 'vue-unicons/icons';
import { steam } from './icons/steam';
import './index.css';

import en from './locales/en.json';

Unicon.add([uniGithub, uniCheckCircle, uniTimes, uniUnlock, uniExternalLinkAlt, uniInfoCircle, uniTimesCircle, steam]);

const i18n = createI18n({
	locale: 'en', // set locale
	fallbackLocale: 'en', // set fallback locale
	messages: { en }, // set locale messages
});

createApp(App)
	.directive('lazyload', LazyLoadDirective)
	.use(Unicon)
	.use(i18n)
	.mount('#app');
