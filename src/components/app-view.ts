import { html, css, LitElement } from 'lit';
// eslint-disable-next-line import/extensions
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';

@customElement('app-view')
export class AppView extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .main-content-container {
        flex: 1;
        width: 100%;
        overflow-y: auto;
      }
    `;
  }

  render() {
    // language=html
    return html`
    <sl-select
      class="item"
      label="too small popup, unnecessary horizontal scrollbar"
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
    <div class="main-content-container">
      <slot></slot>
    </div>
    `;
  }
}
