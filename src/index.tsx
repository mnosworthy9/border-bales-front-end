import React from 'react';
import ReactDOM from 'react-dom/client';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import i18n from './i18n/i18n';
import store from './store/store';

const root = ReactDOM.createRoot(
	document.getElementById('root')!,
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<App />
			</I18nextProvider>
		</Provider>
	</React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
