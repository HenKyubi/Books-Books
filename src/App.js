import "./App.css";

function App() {
  return (
    <div>
      <header className="background">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              myLorem
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="#">
                  Welcome
                </a>
                <a class="nav-link" href="#">
                  Dropdown
                </a>
                <a class="nav-link" href="#">
                  Left Sidebar
                </a>
                <a class="nav-link" href="#">
                  Right Sidebar
                </a>
                <a class="nav-link" href="#">
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
      <div>
        <div className="container"></div>
        <div className="container"></div>
        <div className="container"></div>
      </div>
      <div>
        <div className="container">
          <h4>Interesting stuff</h4>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <button>More</button>
        </div>
        <div className="container">
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
        <span>Untitle. All rights reserved</span>
      </footer>
    </div>
  );
}

export default App;
