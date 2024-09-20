import React from "react";
import './App.css'; // Assuming you will have a CSS file for styles

function App() {
  return (
    <div>
      <header id="Header">
        <div className="Banner">
          <div className="banner-content">
            <div className="Gaslogo">
              <a href="https://ghanagas.com.gh/">
                <img
                  className="Gas-logo"
                  src="https://res.cloudinary.com/dsgrxksw0/image/upload/v1719936877/ghana-gas-logo_mehja2.png"
                  alt="Ghana Gas Logo"
                />
              </a>
            </div>
            <div className="signIn">
              <button className="signInBtn">
                <a href="https://ghanagas-gh.zoom.us/signin/">Sign In</a>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main id="main">
        <div className="container">
          <div className="button-info">
            <div className="gas-container">
              <div className="gas-main">
                <a href="https://ghanagas.com.gh/">
                  <img
                    className="gl-main"
                    src="https://res.cloudinary.com/dsgrxksw0/image/upload/v1719936877/ghana-gas-logo_mehja2.png"
                    alt="Ghana Gas Logo"
                  />
                </a>
              </div>
            </div>
            <div className="buttons">
              <ul>
                <li>
                  <button className="btn-login">
                    <a href="https://ghanagas-gh.zoom.us/signin/">Login</a>
                  </button>
                </li>
                <li>
                  <button className="btn-join">
                    <a href="https://ghanagas-gh.zoom.us/join/">Join</a>
                  </button>
                </li>
                <li>
                  <button className="btn-host">
                    <a href="https://ghanagas-gh.zoom.us/start/webmeeting/">Host</a>
                  </button>
                </li>
              </ul>
            </div>
            <div className="txt-banner">
              <div className="txt-1">
                <p>Discovery awaits</p>
              </div>
              <div className="txt-2">
                <h3>Take part, join in!</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer id="Footer">
        <div className="footer">
          <div className="link-group">
            <div className="support">
              <a className="support-link" href="mailto:itssupport@ghanagas.com.gh">
                SUPPORT
              </a>
            </div>
            <div className="intranet">
              <a className="intranet-link" href="http://intranet.ghanagas.local/">
                INTRANET
              </a>
            </div>
            <div className="website">
              <a className="website-link" href="https://ghanagas.com.gh">
                WEBSITE
              </a>
            </div>
            <div className="download">
              <a
                className="download-link"
                href="https://zoom.us/client/latest/ZoomInstaller.exe/"
              >
                DOWNLOAD
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>Ghana Gas All Rights Reserved, 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
