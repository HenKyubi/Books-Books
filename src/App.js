import "./App.css";

function App() {
  return (
    <div>
      <header className="container">
        <nav className="row justify-space-between">
          <a className="navbar-brand" href="#">
            myLorem
          </a>
          <div className="nav-items">
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
        </nav>
      </header>
      <section className="container" id="hero">
        <div className="card-white row justify-space-between">
          <div className="col-left">
            <h1>Hi, This is Lorem.</h1>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto
            </p>
          </div>
          <div className="col-rigth">
            <button className="btn">
              <div className="pr-4">Ok let's go</div>
              <div>
                <i class="fas fa-arrow-circle-right"></i>
              </div>
            </button>
            <button className="btn-ligth">
              <div className="pr-4">More info</div>
              <div>
                <i class="fas fa-question-circle"></i>
              </div>
            </button>
          </div>
        </div>
      </section>
      <div className="container" id="features">
        <div className="row">
          <div className="card-white ml-0">
            <div className="stuff-item stuff1">
              <div>Put something here</div>
            </div>
            <div className="card-body">
              <h3>Maybe here as well i think</h3>
              <p>
                Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
                Praesent sed semper amet bibendum tristique fringilla.
              </p>
            </div>
          </div>
          <div className="card-white">
            <div className="stuff-item stuff2">
              <div>An interesting title</div>
            </div>
            <div className="card-body">
              <h3>This is also an interesting subtitle</h3>
              <p>
                Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
                Praesent sed semper amet bibendum tristique fringilla.
              </p>
            </div>
          </div>
          <div className="card-white mr-0">
            <div className="stuff-item stuff3">
              <div>Oh, and finally...</div>
            </div>
            <div className="card-body">
              <h3>Here's another intriguing subtitle</h3>
              <p>
                Phasellus quam turpis, feugiat sit amet in, hendrerit in lectus.
                Praesent sed semper amet bibendum tristique fringilla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div id="about">
          <div className="about-left">
            <h3>Interesting stuff</h3>
            <div id="stuff">
              <div className="stuff-box">
                <div className="brown"></div>
              </div>
              <div className="stuff-box">
                <div className="pink"></div>
              </div>
              <div className="stuff-box">
                <div className="blue"></div>
              </div>
              <div className="stuff-box">
                <div className="green"></div>
              </div>
            </div>
            <button className="btn">
              <i class="far fa-file-alt"></i>
              <div>More</div>
            </button>
          </div>
          <div>
            <h2>So what's this all about?</h2>
            <p className="text-grey">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </p>
            <p className="text-grey">
              Suspendisse et massa nec risus ultrices congue. Vivamus quis
              cursus mauris. Fusce enim dolor, varius in interdum et, eleifend
              sed metus. Sed iaculis, ligula at tempus lobortis, turpis massa
              bibendum massa, a scelerisque nisi diam ut quam. Nam aliquet sem
              et consequat dapibus. Nam bibendum rhoncus ultricies. Proin
              placerat leo eget sodales volutpat. Sed vel sapien accumsan,
              pulvinar tortor ac, iaculis sapien.
            </p>
            <button className="btn">
              <i className="fas fa-arrow-circle-right"></i>
              <div>Continue Reading</div>
            </button>
          </div>
        </div>
      </div>
      <footer className="container">
        <div className="background" id="footer">
          <div>
            <h4>Random Stuff</h4>
            <ul>
              <li>
                <a href="">Etiam feugiat condimentum</a>
              </li>
              <li>
                <a href="">Aliquam imperdiet suscipit odio</a>
              </li>
              <li>
                <a href="">Sed porttitor crasin erat nec</a>
              </li>
              <li>
                <a href="">Felis varius pellentesque potenti</a>
              </li>
              <li>
                <a href="">Nullam scelerisque blandit leo</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Random Stuff</h4>
            <ul>
              <li>
                <a href="">Etiam feugiat condimentum</a>
              </li>
              <li>
                <a href="">Aliquam imperdiet suscipit odio</a>
              </li>
              <li>
                <a href="">Sed porttitor crasin erat nec</a>
              </li>
              <li>
                <a href="">Felis varius pellentesque potenti</a>
              </li>
              <li>
                <a href="">Nullam scelerisque blandit leo</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Random Stuff</h4>
            <ul>
              <li>
                <a href="">Etiam feugiat condimentum</a>
              </li>
              <li>
                <a href="">Aliquam imperdiet suscipit odio</a>
              </li>
              <li>
                <a href="">Sed porttitor crasin erat nec</a>
              </li>
              <li>
                <a href="">Felis varius pellentesque potenti</a>
              </li>
              <li>
                <a href="">Nullam scelerisque blandit leo</a>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h4>Contact Us</h4>
            </div>
            <div>
              <a href="">
                <i class="fab fa-twitter-square"></i>
              </a>
              <a href="">
                <i class="fab fa-facebook-square"></i>
              </a>
              <a href="">
                <i class="fab fa-instagram-square"></i>
              </a>
              <a href="">
                <i class="fab fa-dribbble-square"></i>
              </a>
              <a href="">
                <i class="fab fa-pinterest-square"></i>
              </a>
            </div>
            <div>
              <p>1234 Fictional Road</p>
              <p>Nashville, TN 00000</p>
              <p>(800) 555-0000</p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>© Untitle. All rights reserved</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
