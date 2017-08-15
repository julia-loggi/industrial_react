import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./Style.css";
import searchLogo from "./img/search.svg"

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


class Header extends Component {
  render () {
    return (
      <header className="page-header">
        <img src={logo} className="page-header__logo" alt="logo" />
        <SearchForm />
      </header>
    );
  }
}

class SearchForm extends Component {
  render () { 
    return (
      <form 
        className="page-header__search"
        action="https://echo.htmlacademy.ru"
        method="get"
      >
        <div className="field-text">
          <label className="field-text__item">
            <img className="field-text__icon" src={searchLogo} alt="search" />
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
}

class Subscribe extends Component  {
  render () {
    return (
      <div className="subscribe">
        <h3 className="subscribe__title">
          Get our freshest content delivered to your inbox
        </h3>
        <p className="subscribe__text">
          For the latest stories, news, events, promotions and exclusive offers, sign up today. We know you get a lot of emails, but we promise...ours is the one you want.
        </p>
        <Form />
      </div>
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      emailIsEmpty: true
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
    if ( event.target.value.trim().length > 0 ) {
      this.setState({emailIsEmpty: false})
    } else {
      this.setState({emailIsEmpty: true})
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
  }
  
  render() {
    var emailIsEmpty = this.state.emailIsEmpty;
    
    return (
      <form 
        className="subscribe__form" 
        action="https://echo.htmlacademy.ru" 
        method="post"
      >
        <div className="field-text field-text--email">
          <label className="field-text__item">
            <input 
              className="field-text__input" 
              type="email" 
              name="email" 
              autoComplete="on" 
              placeholder="Your email"
              ref="email"
              onChange={this.handleChange}
              />
          </label>
        </div>
        <input 
          className="subscribe__btn btn" 
          type="submit" 
          value="Subscribe"
          onClick={this.handleSubmit}
          disabled = {emailIsEmpty}
        />
      </form>
    );
  }
}

class Main extends Component {
  render () {
    return (
      <main className="main">
        <Catalog data={catalogItems} />
        <Subscribe />
      </main>
    );
  }
}

var catalogItems = [
  {
    name: "Gina",
    description: "A coffee instrument combining classic coffee techniques with the latest technology",
    moreAbout: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
    btn: "Shop Now",
    index: "1",
    size: "large"
  },
  {
    name: "Beoplay A1",
    description: "The ultra-portable Bluetooth speaker that will travel with you anywhere",
    moreAbout: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
    btn: "buy",
    index: "2",
    size: "medium"
  },
  {
    name: "Leica MP",
    description: "Focused technology for focused photography",
    moreAbout: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
    btn: "buy",
    index: "3",
    size: "medium"
  },
  {
    name: "Molekule",
    description: "The world's first molecular air purifier",
    moreAbout: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
    btn: "details",
    index: "4",
    size: "small"
  },
  {
    name: "P9 Signature",
    description: "Bowers & Wilkins",
    moreAbout: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
    btn: "details",
    index: "5",
    size: "small"
  },
  {
    name: "DR-II",
    description: "An homage to Dieter Rams",
    moreAbout: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor.",
    btn: "details",
    index: "6",
    size: "small"
  }
];

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.readmoreClick = this.readmoreClick.bind(this);
    this.closeClick = this.closeClick.bind(this);
  }
  
  readmoreClick() {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }
  
  closeClick() {
    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  }
  
  render () {
    var name = this.props.data.name,
        description = this.props.data.description,
        moreAbout = this.props.data.moreAbout,
        btn = this.props.data.btn,
        index = this.props.data.index,
        size = this.props.data.size,
        visible = this.state.visible;
  
    return (
      <section className={"catalog-item catalog-item__item-"+index + " catalog-item--"+size} key={index}>
        <h2 className="catalog-item__title">{name}</h2>
        <p className="catalog-item__desc">{description}</p>
        <a
          onClick={this.readmoreClick}
          className={"catalog-item__btn btn btn--"+btn}
          tabIndex="0"
        >
          {btn}
        </a>
        <div className={"catalog-item__overlay "+ (visible ? "" : "none")}>
          <p className="catalog-item__info">
            {moreAbout}
          </p>
          <button 
            onClick={this.closeClick}
            className="catalog-item__close-btn"
          >
            Close
          </button>
        </div>
      </section>
    );
  }
}

class Catalog extends Component {
  render() {
    var data = this.props.data;
    var itemsTemplate;
  
    itemsTemplate = data.map(function(item, index) {
      return (
          <Item data={item} key={index}/>
      );
    })
    
    return (
      <div className="catalog">
        {itemsTemplate}
      </div>
    );
  } 
}


class Footer extends Component {
  render () {  
    return (
      <footer className="page-footer">
        <SocialLinks socialLinks={socialLinks} />
        <address className="page-footer__copyright">
        {String.fromCharCode(169) + " Industrial Design Magazine"}
        </address>
      </footer>
    );
  }
}

const socialLinks = ['About', 'Search', 'Contact', 'Facebook', 'Twitter'];

function SocialLinks(props) {
  const socialLinks = props.socialLinks;
  const listItems = socialLinks.map((socialLinks) => 
    <li key={socialLinks.toString()} className="links-list__item">
      <a className="links-list__link">
        {socialLinks}
      </a>
    </li>
  );
  
  return (
    <section className="page-footer__links">
      <ul className="links-list">
        {listItems}
      </ul>
    </section>
  );

}

ReactDOM.render (
  <Content />,
  document.getElementById("container")
);