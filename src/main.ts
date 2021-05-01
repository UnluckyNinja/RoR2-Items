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
	uniEnglishToChinese,
} from 'vue-unicons/dist/icons';
import { steam } from './icons/steam';
import 'virtual:windi.css'
import './index.css';

import messages from '@intlify/vite-plugin-vue-i18n/messages';

Unicon.add([uniGithub, uniCheckCircle, uniTimes, uniUnlock, uniExternalLinkAlt, uniInfoCircle, uniTimesCircle, steam, uniEnglishToChinese]);

const i18n = createI18n({
	locale: 'en', // set locale
	fallbackLocale: 'en', // set fallback locale
	messages // set locale messages
});

createApp(App)
	.directive('lazyload', LazyLoadDirective)
	.use(Unicon)
	.use(i18n)
	.mount('#app');
