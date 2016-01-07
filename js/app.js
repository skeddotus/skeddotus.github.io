var Header = React.createClass({
  render: function() {
    return (
      <header className="container">
        <div className="jumbotron">
          <h1>Sked.Us</h1>
          <hr />
          <p>Coming soon to the internets near you</p>
        </div>
      </header>
    );
  }
});

var Section = React.createClass({
  render: function() {
    return (
      <section className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src="http://www.unicorn-cs.co.uk/SiteAssets/unicorn-logo-2.jpg" alt="" />
          </div>
        </div>
      </section>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-center">
            <a href="https://github.com/txredking">@txredking</a>
            &nbsp;-&nbsp;
            <a href="https://github.com/dominiquejane">@dominiquejane</a>
            &nbsp;-&nbsp;
            <a href="https://github.com/hh83917">@hh83917</a>
            &nbsp;-&nbsp;
            <a href="https://github.com/kpfein">@kpfein</a>
            &nbsp;-&nbsp;
            <a href="https://github.com/odran037.io">@odran037</a>
          </p>
        </div>
      </footer>
    );
  }
});

React.render(
  <div>
    <Header />
    <Section />
    <Footer />
  </div>,
  document.getElementById('root')
);