import "./App.css";

function App() {
  return (
    <div>
      <div className="background">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                myLorem
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">
                    Welcome
                  </a>
                  <a className="nav-link" href="#">
                    Dropdown
                  </a>
                  <a className="nav-link" href="#">
                    Left Sidebar
                  </a>
                  <a className="nav-link" href="#">
                    Right Sidebar
                  </a>
                  <a className="nav-link" href="#">
                    No Sidebar
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section id="hero">
          <div>
            <h2>Hi, This is Lorem.</h2>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto
            </p>
          </div>
          <div>
            <button className="btn">Ok let's go</button>
            <button className="btn">More Info</button>
          </div>
        </section>
        <div id="features">
          <div className="background-white">
            <div className="stuff-item stuff1">Put something here</div>
            <div>
              <h5>Maybe here as well i think</h5>
              <p>
                Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
                Praesent sed semper amet bibendum tristique fringilla.
              </p>
            </div>
          </div>
          <div className="background-white">
            <div className="stuff-item stuff2">An interesting title</div>
            <div>
              <h5>This is also an interesting subtitle</h5>
              <p>
                Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
                Praesent sed semper amet bibendum tristique fringilla.
              </p>
            </div>
          </div>
          <div className="background-white">
            <div className="stuff-item stuff3">Oh, and finally...</div>
            <div>
              <h5>Here's another intriguing subtitle</h5>
              <p>
                Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
                Praesent sed semper amet bibendum tristique fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <div>
          <h4>Interesting stuff</h4>
          <div id="stuff">
            <div className="brown"></div>
            <div className="pink"></div>
            <div className="blue"></div>
            <div className="green"></div>
          </div>
          <button>More</button>
        </div>
        <div>
          <h3>So what's this all about?</h3>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
          <p>
            Suspendisse et massa nec risus ultrices congue. Vivamus quis cursus
            mauris. Fusce enim dolor, varius in interdum et, eleifend sed metus.
            Sed iaculis, ligula at tempus lobortis, turpis massa bibendum massa,
            a scelerisque nisi diam ut quam. Nam aliquet sem et consequat
            dapibus. Nam bibendum rhoncus ultricies. Proin placerat leo eget
            sodales volutpat. Sed vel sapien accumsan, pulvinar tortor ac,
            iaculis sapien.
          </p>
          <button>Continue Reading</button>
        </div>
      </div>
      <footer>
        <div className="background" id="footer">
          <div>
            <h5>Random Stuff</h5>
            <a href="">Etiam feugiat condimentum</a>
            <a href="">Aliquam imperdiet suscipit odio</a>
            <a href="">Sed porttitor crasin erat nec</a>
            <a href="">Felis varius pellentesque potenti</a>
            <a href="">Nullam scelerisque blandit leo</a>
          </div>
          <div>
            <h5>Random Stuff</h5>
            <a href="">Etiam feugiat condimentum</a>
            <a href="">Aliquam imperdiet suscipit odio</a>
            <a href="">Sed porttitor crasin erat nec</a>
            <a href="">Felis varius pellentesque potenti</a>
            <a href="">Nullam scelerisque blandit leo</a>
          </div>
          <div>
            <h5>Random Stuff</h5>
            <a href="">Etiam feugiat condimentum</a>
            <a href="">Aliquam imperdiet suscipit odio</a>
            <a href="">Sed porttitor crasin erat nec</a>
            <a href="">Felis varius pellentesque potenti</a>
            <a href="">Nullam scelerisque blandit leo</a>
          </div>
          <div>
            <h5>Contact Us</h5>
          </div>
        </div>
        <span>Untitle. All rights reserved</span>
      </footer>
      {/* <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-4"
        // style="background-color: rgba(0, 0, 0, 0.05);"
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div> */}
    </div>
  );
}

export default App;
