var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  {/* Bootstrap CSS */}
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
  <link rel="stylesheet" href="styles.css" />
  <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap" rel="stylesheet" />
  <title>Give a Life</title>
  {/* This is the navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-info">
    <a className="navbar-brand" href="#">Give a Life</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Founder</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Volunteer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#" tabIndex={-1} aria-disabled="true">Events</a>
        </li>
      </ul>
    </div>
  </nav>
  {/* This controls the images */}
  <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="homeImage" src="../images/fall.jpg" alt="..." />
        <div className="centered">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure non obcaecati exercitationem consectetur et quos blanditiis! Ullam perspiciatis unde impedit deleniti nam qui id explicabo, vel fugit dolorem recusandae in?"</div>
      </div>
      <div className="carousel-item">
        <img className="homeImage" src="../images/oilseed.jpg" alt="..." />
      </div>
      <div className="carousel-item">
        <img className="homeImage" src="../images/water-lily.jpg" alt="..." />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div><br />
  <div id="bodyText" className="card">
    <div className="card-body">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum blanditiis iure natus perferendis, dolores corrupti delectus quos eos, fuga itaque doloribus? Asperiores quam aut saepe nam deleniti natus animi omnis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, magni. Blanditiis id suscipit nam quaerat illo deserunt voluptatem, impedit cupiditate tempora facilis excepturi, cum a itaque sequi voluptates distinctio voluptatum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero tempore quaerat tempora optio. Facere quasi accusamus quos omnis alias, qui, vel magni quia ratione cum et reprehenderit cupiditate, quam consectetur?
    </div>
  </div>
  {/* Sample mission statement that will be on the bottom of every page.  */}
  <div id="mission" className="card">
    <div className="card-header">
      Our Mission
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique est alias maxime incidunt quasi qui, accusamus recusandae dignissimos quod ea. Maxime perferendis minus placeat nihil reiciendis deleniti distinctio sint quibusdam?</p>
        <footer className="blockquote-footer">Pam Boyd<cite title="Source Title"> - Book Title</cite></footer>
      </blockquote>
    </div>
  </div> 
  {/* Optional JavaScript */}
  {/* jQuery first, then Popper.js, then Bootstrap JS */}
</div>
      
    )
  }
});