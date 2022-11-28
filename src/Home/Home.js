import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <>
      <div className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-1 border-line-right"></div>

            <div className="col-11">
              {/* navbar */}
              <nav className="navbar navbar-expand-lg pb-0">
                <div className="container-fluid">
                  {/* <a className="navbar-brand" href="/"></a> */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      <li className="nav-item pe-5">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item pe-5">
                        <a className="nav-link" href="/">
                          Services
                        </a>
                      </li>
                      <li className="nav-item pe-5">
                        <a className="nav-link" href="/">
                          About
                        </a>
                      </li>
                      <li className="nav-item pe-5">
                        <a className="nav-link" href="/">
                          Gallery
                        </a>
                      </li>
                      <li className="nav-item pe-5">
                        <a className="nav-link" href="/">
                          Contact
                        </a>
                      </li>
                      <li className="nav-item ps-5 border-line">
                        <a className="nav-link active" href="/">
                          Signin/Login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <hr className="line-break" />

              {/* spacer starts  */}
              <div className="pt-5 pb-5"></div>
              {/* spacer ends  */}

              <div className="row mb-5 ps-4">
                <div className="col-12 col-lg-6">
                  <h1 className="banner-text mb-4">
                    Always Make <br /> Room for a Little <br /> Beauty in Your
                    Life
                  </h1>
                  <button type="button" className="banner-button pinky me-4">
                    {" "}
                    Book Appointment
                  </button>
                 <Link to="/user"> <button type="button" className="banner-button ">
                    {" "}
                  Go to User table
                  </button></Link>
                </div>
              </div>
              {/* salon info  */}
              <div className="row pt-4 ps-4">
                <div className="col-12 col-lg-4">
                  <h1 className="salon-info-head">CONTACT</h1>
                  <p className="salon-info-desc mb-0">T:070 9485 7568</p>
                  <p className="salon-info-desc">info@beautysalon.com</p>
                </div>
                <div className="col-12 col-lg-4">
                  <h1 className="salon-info-head">HOURS</h1>
                  <p className="salon-info-desc mb-0">
                    Mon-Fri 7:30am to 1:00am
                  </p>
                  <p className="salon-info-desc">Sat 9:00am to 1:00am</p>
                </div>
                <div className="col-12 col-lg-4">
                  <h1 className="salon-info-head">LOCATION</h1>
                  <p className="salon-info-desc mb-0">85 Royal Mint Street</p>
                  <p className="salon-info-desc">
                    Lndon, E1 8LG United Kingdom
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
