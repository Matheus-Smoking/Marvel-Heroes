import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = { class: false, index: this.props.index  };
  }

  show() {
    if (this.props.show == true) {
      // setTimeout(() => this.setState({ class: true })), `${this.state.index}000`;
      setTimeout(() => {
        this.setState({ class: true });
      },(`${this.state.index}000`)/4);
    }
  }


  render() {
    this.show();
    return (
      <div className={`section-hero__card ${this.state.class ? 'ativado' : ''}`} key={this.props.index} >
        <div className="section-hero__card-img" >
          <img src={`${this.props.hero.thumbnail.path}/portrait_uncanny.jpg`} />
        </div>
        <div className="section-hero__card-text">
          <h3 className="section-hero__card-name">{this.props.hero.name}</h3>
        </div>
      </div>
    )
  }
}

export default Card; 