import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import indLogo from './logo.svg';
import './Style.css';
import searchLogo from './img/search.svg'
import product1 from './img/product-1.jpg'

class Content extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Content;

function Header() {
  return (
    <header className="page-header">
      <img src={indLogo} className="page-header__logo" alt="logo" />
      <SearchForm />
    </header>
  );
}

function SearchForm() {
  return (
    <form 
      className='page-header__search'
      action="#" 
      method="get"
    >
      <div className="field-text">
        <label className="field-text__item">
          <img className="field-text__icon" src={searchLogo} />
          <input
            className="field-text__input"
            type="search"
            name="search" 
            placeholder="Search"
          />
        </label>
      </div>
    </form>
  );
}

function Subscribe() {
  return (
    <div className="subscribe">
      <h3 className="subscribe__title">
        Get our freshest content delivered to your inbox
      </h3>
      <p className="subscribe__text">
        For the latest stories, news, events, promotions and exclusive offers, sign up today. We know you get a lot of emails, but we promise...ours is the one you want.
      </p>
      <form className="subscribe__form" action="#" method="post">
        <div className="field-text field-text--email">
          <label className="field-text__item">
            <input 
              className="field-text__input" 
              type="email" 
              name="email" 
              autocomplete="on" 
              placeholder="Your email"
              />
          </label>
        </div>
        <input 
          className="subscribe__btn btn" 
          type="submit" 
          value="Subscribe"
        />
      </form>
    </div>
  );
}

function Main() {
  return (
    <main className="main">
      <Catalog data={catalogItems}/>
      <Subscribe />
    </main>
  );
}
var catalogItems = [
  {
    name: 'Gina',
    description: 'A coffee instrument combining classic coffee techniques with the latest technology',
    btn: 'Shop Now',
    index: '1',
    size: 'large'
  },
  {
    name: 'Beoplay A1',
    description: 'The ultra-portable Bluetooth speaker that will travel with you anywhere',
    btn: 'buy',
    index: '2',
    size: 'medium'
  },
  {
    name: 'Leica MP',
    description: 'Focused technology for focused photography',
    btn: 'buy',
    index: '3',
    size: 'medium'
  },
  {
    name: 'Molekule',
    description: 'The world\'s first molecular air purifier',
    btn: 'details',
    index: '4',
    size: 'small'
  },
  {
    name: 'P9 Signature',
    description: 'Bowers & Wilkins',
    btn: 'details',
    index: '5',
    size: 'small'
  },
  {
    name: 'DR-II',
    description: 'An homage to Dieter Rams',
    btn: 'details',
    index: '6',
    size: 'small'
  }
];

var Catalog = React.createClass ({
  render: function() {
    var data = this.props.data;
    var itemsTemplate = data.map(function(item, index) {
      return (
        <section className={"catalog-item catalog-item__item-"+item.index + " catalog-item--"+item.size} key={item.index}>
          <h2 className="catalog-item__title">{item.name}</h2>
          <p className="catalog-item__desc">{item.description}</p>
          <a className={"catalog-item__btn btn btn--"+item.btn} href="#">{item.btn}</a>
        </section>
      )
    })
    
    return (
    <div className="catalog">
      {itemsTemplate}
    </div>
    );
  }
});



function Footer() {
  return (
    <footer className="page-footer">
      <SocialLinks />
      <address className="page-footer__copyright">
        &#169 Industrial Design Magazine
      </address>
    </footer>
  );
}

function SocialLinks() {
  return (
    <section className="page-footer__links">
    </section>
  );
}

ReactDOM.render (
  <Content />,
  document.getElementById('container')
);