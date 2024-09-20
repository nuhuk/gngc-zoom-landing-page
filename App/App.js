import React from "react";

const App = () => {
  return (
    <div>
      <section id="Header">
        <div className="Banner">
          <div className="banner-content">
            <div className="Gaslogo">
              <a href="https://ghanagas.com.gh/">
                <img
                  className="Gas-logo"
                  src="https://res.cloudinary.com/dsgrxksw0/image/upload/v1721746242/eb005896-2231-497b-94b3-b8d61cdbd872_i58yt9.png"
                  alt="Gas Logo"
                />
              </a>
            </div>
            <div className="signIn">
              <button
                className="signInBtn"
                onClick={() => (window.location.href = "https://ghanagas-gh.zoom.us/signin/")}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container">
          <div className="button-info">
            <div className="gas-container">
              <div className="gas-main">
                <a href="https://ghanagas.com.gh/">
                  <img
                    className="gl-main"
                    src="https://res.cloudinary.com/dsgrxksw0/image/upload/v1721746242/eb005896-2231-497b-94b3-b8d61cdbd872_i58yt9.png"
                    alt="Gas Main"
                  />
                </a>
              </div>
            </div>
            <div className="buttons">
              <ul>
                <li>
                  <button
                    className="btn-login"
                    onClick={() => (window.location.href = "https://ghanagas-gh.zoom.us/signin/")}
                  >
                    Login
                  </button>
                </li>
                <li>
                  <button
                    className="btn-join"
                    onClick={() => (window.location.href = "https://ghanagas-gh.zoom.us/join/")}
                  >
                    Join
                  </button>
                </li>
                <li>
                  <button
                    className="btn-host"
                    onClick={() => (window.location.href = "https://ghanagas-gh.zoom.us/start/webmeeting/")}
                  >
                    Host
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
      </section>
      <section id="Footer">
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
              <a className="download-link" href="https://zoom.us/client/latest/ZoomInstaller.exe/">
                DOWNLOAD
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>Ghana Gas All Rights Reserved, 2024</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
