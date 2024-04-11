import React from 'react';

const Footer = () => {
  return (
    <footer className="footer has-background-info has-text-white" style={{ marginTop: 'auto', flexShrink: 0 }}>
      <div className="container">
        <div className="columns is-centered is-multiline"> {/* Use is-multiline for responsiveness */}

          {/* Footer column 1 */}
          <div className="column is-half-tablet is-one-quarter-desktop"> {/* Adjust column widths for responsiveness */}
            <h4 className="title is-4">Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/results">Results</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Footer column 2 */}
          <div className="column is-half-tablet is-one-quarter-desktop"> {/* Adjust column widths for responsiveness */}
            <h4 className="title is-4">Important Links</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Use</a></li>
            </ul>
          </div>

          {/* Footer column 3 */}
          <div className="column is-half-tablet is-one-quarter-desktop"> {/* Adjust column widths for responsiveness */}
            <h4 className="title is-4">Contact Us</h4>
            <p>Email: info@kimc.ac.ke</p>
            <p>Phone: +254-020-699 7000</p>
            <p>Address: Uholo road,Nairobi south B Off Mombasa road,Nairobi Kenya.</p>
          </div>

        </div>

        {/* Bottom section */}
        <hr />
        <div className="content has-text-centered">
          <p>
            &copy; {new Date().getFullYear()} Kenya Institute Of Mass Communication. All rights reserved.
          </p>
        </div>
      </div>

      {/* Additional styles for sticky footer */}
      <style jsx>{`
        .footer {
          position: relative;
          bottom: -450px;
          width: 100%;
          margin-top: auto;
        }

        html, body {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        #__next {
          flex: 1;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
