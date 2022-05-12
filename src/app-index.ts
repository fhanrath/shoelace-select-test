import { html, css, LitElement } from 'lit';
// eslint-disable-next-line import/extensions
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';

import darkSlTheme from '../public/shoelace/themes/dark.css';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';

const routes = [
  // Redirect to URL without trailing slash
  {
    path: '(.+)/',
    action: (context, commands) => {
      const newPath = context.pathname.slice(0, -1);
      return commands.redirect(newPath);
    },
  },
  {
    path: '/',
    component: 'app-view',
    action: async () => {
      await import('./components/app-view');
    },
    children: [
      {
        path: '/',
        component: 'problematic-view',
        action: async () => {
          await import('./components/problematic-view');
        },
      }
    ]
  },
  // Remove the following section to deactivate defaultUrl
  {
    path: '(.*)',
    action: (context, commands) => commands.redirect(defaultUrl),
  },
];

@customElement('app-index')
export class AppIndex extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100%;
      }
    `;
  }

  get _mainElement() {
    return this.renderRoot.querySelector('.app-container');
  }

  render() {
    // language=html
    return html`
    <style>
      ${darkSlTheme}
    </style>
    <sl-select
      class="item"
      label="good sized popup, unnecessary horizontal scrollbar"
      placement="bottom"
      multiple>
      <sl-menu-item value="1">1</sl-menu-item>
      <sl-menu-item value="2">2</sl-menu-item>
      <sl-menu-item value="3">3</sl-menu-item>
      <sl-menu-item value="4">4</sl-menu-item>
      <sl-menu-item value="5">5</sl-menu-item>
      <sl-menu-item value="6">6</sl-menu-item>
      <sl-menu-item value="7">7</sl-menu-item>
      <sl-menu-item value="8">8</sl-menu-item>
      <sl-menu-item value="9">9</sl-menu-item>
      <sl-menu-item value="10">10</sl-menu-item>
      <sl-menu-item value="11">11</sl-menu-item>
      <sl-menu-item value="12">12</sl-menu-item>
      <sl-menu-item value="13">13</sl-menu-item>
      <sl-menu-item value="14">14</sl-menu-item>
      <sl-menu-item value="15">15</sl-menu-item>
      <sl-menu-item value="16">16</sl-menu-item>
      <sl-menu-item value="17">17</sl-menu-item>
      <sl-menu-item value="18">18</sl-menu-item>
      <sl-menu-item value="19">19</sl-menu-item>
      <sl-menu-item value="20">20</sl-menu-item>
    </sl-select>
    <div class="app-container"></div>
    `;
  }

  firstUpdated() {
    if (routes && this._mainElement) {
      const router = new Router(null, { baseUrl: '/' });
      router.subscribe();

      router.setRoutes(routes);
      router.setOutlet(this._mainElement);
    } else {
      console.error(
        `couldn't initialize router!`,
      );
    }
  }
}
