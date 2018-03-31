import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="center size-90">
          <p>
            Questions? Call <a href="tel:900 866 617">900 866 617</a>
          </p>

          <ul className="columns flex-wrap">
            <li className="column is-25">
              <a href="https://help.netflix.com/support/412">
                <span>FAQ</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://help.netflix.com">
                <span>Help Center</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://www.netflix.com/yourAccount">
                <span>Account</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://media.netflix.com/">
                <span>Media Center</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="http://ir.netflix.com/">
                <span>Investor Relations</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://jobs.netflix.com/jobs">
                <span>Jobs</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://www.netflix.com/redeem">
                <span>Gift Cards</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://www.netflix.com/watch">
                <span>Ways to Watch</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://help.netflix.com/legal/termsofuse">
                <span>Terms of Use</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://help.netflix.com/legal/privacy">
                <span>Privacy</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://help.netflix.com/legal/privacy#cookies">
                <span>Cookie Preferences</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://fast.com">
                <span>Speed Test</span>
              </a>
            </li>
            <li className="column is-25">
              <a href="https://www.netflix.com/es-en/originals">
                <span>Netflix Originals</span>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Footer;
