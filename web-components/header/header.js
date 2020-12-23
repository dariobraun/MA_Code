class AppHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="header/header.css">
        <h1>This is a Web Component Header</h1>
        `
    }
}
window.customElements.define('app-header', AppHeader);