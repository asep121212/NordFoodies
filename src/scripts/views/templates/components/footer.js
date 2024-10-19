class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
 
    <div class="frame">
    <p>Copyright © 2022 - NordFoodies</p>

    <a href="https://github.com/asep121212" id="github">
    <img src="icons/github.png" alt="" />
    </a>
    <a href="https://www.instagram.com/aryadi.ay48" id="instagram">
    <img  src="icons/instagram.png" alt="" />
    </a>
    <a href="https://twitter.com/Nebeinaja" id="twitter">
    <img src="icons/twitter.png" alt="" />
    </a>
  </div>
      </footer>
    `;
  }
}
customElements.define("law-footer", Footer);
