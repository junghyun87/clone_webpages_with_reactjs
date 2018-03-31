import React, { Component } from 'react';
import './Feature.css';
import cancle from './img/cancel.svg';
import pickprice from './img/pickprice.svg';
import watchanywhere from './img/watchanywhere.svg';
import cancelanytime_withdevice from './img/cancelanytime_withdevice.png';
import asset_TV_UI from './img/asset_TV_UI.png';
import asset_mobile_tablet_UI_2 from './img/asset_mobile_tablet_UI_2.png';
import asset_website_UI from './img/asset_website_UI.png';

class Feature extends Component {
  removeClassName(eles, className) {
    eles.forEach(function(ele) {
      ele.classList.remove(className);
    });
  }

  componentDidMount() {
    var tabs = document.querySelectorAll('#features > nav a');
    var tabsContent = document.querySelectorAll(
      '#features > article > section'
    );

    let that = this;

    tabs.forEach(function(tab) {
      tab.addEventListener('click', e => {
        e.preventDefault();
        that.removeClassName(tabs, 'is-selected');
        tab.classList.add('is-selected');
        that.removeClassName(tabsContent, 'is-selected');

        var matched = [...tabsContent].filter(
          tabContent => tabContent.dataset.id === tab.dataset.id
        );
        matched[0].classList.add('is-selected');
      });
    });
  }

  render() {
    return (
      <div id="features">
        <nav>
          <div className="center columns size-80">
            <a className="column is-selected" href="#" data-id="cancelanytime">
              <img alt="Cancel anytime" src={cancle} />
              <h2>
                No commitments
                <br />
                Cancel online at anytime
              </h2>
            </a>

            <a className="column" href="#" data-id="watchanywhere">
              <img alt="Watch anywhere" src={watchanywhere} />
              <h2>Watch anywhere</h2>
            </a>

            <a className="column" href="#" data-id="pickprice">
              <img alt="Pick your price" src={pickprice} />
              <h2>Pick your price</h2>
            </a>
          </div>
        </nav>

        <article>
          <section
            className="is-selected center size-70"
            data-id="cancelanytime">
            <div className="columns">
              <div className="column">
                <h2>
                  If you decide Netflix isn't for you - no problem. No
                  commitment. Cancel online anytime.
                </h2>
                <button className="btn btn-large">JOIN FOR A FREE MONTH</button>
              </div>

              <div className="column">
                <img src={cancelanytime_withdevice} />
              </div>
            </div>
          </section>

          <section
            className="center size-80"
            id="watchanywhere"
            data-id="watchanywhere">
            <div className="columns">
              <h2 className="column">
                Watch TV shows and movies anytime, anywhere — personalized for
                you.
              </h2>
              <button className="btn btn-large column is-narrow">
                JOIN FOR A FREE MONTH
              </button>
            </div>

            <div className="columns size-90 center">
              <div className="column text-center">
                <img src={asset_TV_UI} />
                <h3>Watch on your TV</h3>
                <p>
                  Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
                  players and more.
                </p>
              </div>

              <div className="column text-center">
                <img src={asset_mobile_tablet_UI_2} />
                <h3>Watch instantly or download for later</h3>
                <p>Available on phone and tablet, wherever you go.</p>
              </div>

              <div className="column text-center">
                <img src={asset_website_UI} />
                <h3>Use any computer</h3>
                <p>Watch right on Netflix.com.</p>
              </div>
            </div>
          </section>

          <section
            className="center size-70"
            id="pickprice"
            data-id="pickprice">
            <div className="text-center">
              <h2>Choose one plan and watch everything on Netflix.</h2>
              <button className="btn btn-large">JOIN FOR A FREE MONTH</button>
            </div>

            <table>
              <thead>
                <tr>
                  <th />
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly price after free month ends on 6/27/17</td>
                  <td>EUR7.99</td>
                  <td>EUR9.99</td>
                  <td>EUR11.99</td>
                </tr>
                <tr>
                  <td>HD available</td>
                  <td>
                    <i className="fa fa-times" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                </tr>
                <tr>
                  <td>Ultra HD available</td>
                  <td>
                    <i className="fa fa-times" />
                  </td>
                  <td>
                    <i className="fa fa-times" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                </tr>
                <tr>
                  <td>Screens you can watch on at the same time</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                  <td>
                    <i className="fa fa-check" />
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
      </div>
    );
  }
}

export default Feature;
