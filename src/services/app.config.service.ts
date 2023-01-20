import {AppConfig} from '../app/api/appconfig';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

export enum THEM_LISTS {
    aryaBlue = 'arya-blue',
    laraDarkTeal = 'lara-dark-teal',
    mdcLightIndigo = 'mdc-light-indigo',
    aryaGreen = 'arya-green',
    laraLightBlue = 'lara-light-blue',
    sagaBlue = 'saga-blue',
    aryaOrange = 'arya-orange',
    laraLightIndigo = 'lara-light-indigo',
    sagaGreen = 'saga-green',
    aryaPurple = 'arya-purple',
    laraLightPurple = 'lara-light-purple',
    sagaOrange = 'saga-orange',
    bootstrap4DarkBlue = 'bootstrap4-dark-blue',
    laraLightTeal = 'lara-light-teal',
    sagaPurple = 'saga-purple',
    bootstrap4DarkPurple = 'bootstrap4-dark-purple',
    mdDarkDeeppurple = 'md-dark-deeppurple',
    tailwindLight = 'tailwind-light',
    bootstrap4LightBlue = 'bootstrap4-light-blue',
    mdDarkIndigo = 'md-dark-indigo',
    velaBlue = 'vela-blue',
    bootstrap4LightPurple = 'bootstrap4-light-purple',
    mdLightDeeppurple = 'md-light-deeppurple',
    velaGreen = 'vela-green',
    fluentLight = 'fluent-light',
    mdLightIndigo = 'md-light-indigo',
    velaOrange = 'vela-orange',
    laraDarkBlue = 'lara-dark-blue',
    mdcDarkDeeppurple = 'mdc-dark-deeppurple',
    velaPurple = 'vela-purple',
    laraDarkIndigo = 'lara-dark-indigo',
    mdcDarkIndigo = 'mdc-dark-indigo',
    laraDarkPurple = 'lara-dark-purple',
    mdcLightDeeppurple = 'mdc-light-deeppurple'
}

@Injectable()
export class ConfigService {
    //   arya-blue
    // lara-dark-teal
    // mdc-light-indigo
    // arya-green
    // lara-light-blue
    // saga-blue
    // arya-orange
    // lara-light-indigo
    // saga-green
    // arya-purple
    // lara-light-purple
    // saga-orange
    // bootstrap4-dark-blue
    // lara-light-teal
    // saga-purple
    // bootstrap4-dark-purple
    // md-dark-deeppurple
    // tailwind-light
    // bootstrap4-light-blue
    // md-dark-indigo
    // vela-blue
    // bootstrap4-light-purple
    // md-light-deeppurple
    // vela-green
    // fluent-light
    // md-light-indigo
    // vela-orange
    // lara-dark-blue
    // mdc-dark-deeppurple
    // vela-purple
    // lara-dark-indigo
    // mdc-dark-indigo
    // lara-dark-purple
    // mdc-light-deeppurple

    public config: AppConfig = {
        // vela-green
        theme: 'saga-green',
        dark: true,
        inputStyle: 'outlined',
        ripple: true
    };

    private configUpdate = new Subject<AppConfig>();

    configUpdate$ = this.configUpdate.asObservable();

    updateConfig(config: AppConfig) {
        this.config = config;
        this.configUpdate.next(config);
        this.changeTheme(config.theme);
    }

    getConfig() {
        return this.config;
    }

    changeTheme(theme: string) {
        // const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = `assets/theme/${theme}/theme.css`;
        this.replaceThemeLink(newHref, () => {});
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }
}
