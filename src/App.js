import React, { Component } from 'react';
import Card from './card';
import './styles/css/style.css';
import img from './videoplayback.gif';
import logo from './MARVEL-STUDIOS.png';


class App extends Component {

  constructor() {
    super();
    this.state = { herois: null, show: false };
    this.hero = null;
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (!this.hero) return;
      const sectionTop = this.hero.getBoundingClientRect().top;
      const widowMetade = window.innerHeight * 0.6;
      const isSectionVisible = (sectionTop - widowMetade) < 0;
      if (isSectionVisible) { 
        // console.log(this.hero.children)
        this.setState({ show: true })
      }
    })
  }


  componentWillMount() {
    const key = "apikey=0e5a7606893ca3e68b848ad7d7244101";
    const hast = "hash=af4a425d885ab7f78b2c44901e7fc761";
    fetch(`https://gateway.marvel.com/v1/public/characters?limit=5&${key}`)
      .then(res => res.json())
      .then(res => this.setState({ herois: res }))
  }

  render() {
    return (
      <main>
        <nav className="nav-hero" >
          <ul className="nav-hero__menu-hero">
            <li className="nav-hero__menu-hero-item"><img className="nav-hero__menu-hero-logo" src={logo} alt="logo" /></li>
            <li className="nav-hero__menu-hero-item" >Home</li>
            <li className="nav-hero__menu-hero-item" >Heroes</li>
            <li className="nav-hero__menu-hero-item" >History</li>
          </ul>
          <img className="img-hero" src={img} />
        </nav>
        <h2 className="title-heroes" >heroes</h2>
        <section className="section-hero" >
          <div className="section-hero__container" ref={hero => (this.hero = hero)} >
            {
              !this.state.herois ? 'Loading...' : this.state.herois.data.results.map((hero, index) => {
                return (
                  <Card
                  show={!this.state.show ? '': true}
                  index={index} 
                  hero={hero}
                  />
                )
              })
            }
          </div>
        </section>
        <section>
          <p>viloes</p>
        </section>
      </main>
    );
  }
}

export default App;
