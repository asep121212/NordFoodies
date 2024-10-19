class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="backgrounds" >
       
      <div class= "background">
      <h1> Selamat Datang </h1>
      <h1> NordFoodies </h1>
    </div>
      </section>
    `;
  }
}
customElements.define('law-jumbotron', Jumbotron);
