import * as React from 'react';
import { IntlProvider } from 'react-intl';
import i18n from './i18n';

interface PropTypes {
    location: {
        query: {
            lang: string
        }
    };
}

export class App extends React.Component <PropTypes, {}> {
    private locale: string;

    public componentWillMount() {
        let language = navigator.language.split('-')[0] || 'en';
        this.locale = (i18n[language]) ? language : 'en';
    }

    public render() {
        return (
            <IntlProvider locale={this.locale} messages={i18n[this.locale]}>
                {this.props.children}
            </IntlProvider>
        );
    }

};

export const onEnter = (next, replace) => {
    // some login functionality may go here
};
