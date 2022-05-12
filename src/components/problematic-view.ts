import { html, css, LitElement } from 'lit';
// eslint-disable-next-line import/extensions
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';

@customElement('problematic-view')
export class ProblematicView extends LitElement {
  static get styles() {
    return css`
      :host {
        width: calc(100%-20px);
        height: calc(100%-20px);
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }

      .item {
        width: 100%;
      }
    `;
  }

  render() {
    // language=html
    return html`
    <sl-input
      class="item"
      label="Number input"
      type="number"
      min="1"
      max="40"
      inputmode="numeric"
      clearable
    ></sl-input>
    <sl-select
      class="item"
      label="popup too small, popup location broken, double vertical scrollbar, no unnecessary horizontal scrollbar"
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
    `;
  }
}
