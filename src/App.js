import React, { Component } from 'react';
import logo from './img/logo.svg';
import './App.css';
import Feature from './Feature';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <a className="logo" href="#">
              <img src={logo} alt="logo" />
            </a>
            <a className="signin" href="https://www.netflix.com/login">
              로그인
            </a>
          </nav>
          <section className="pitch">
            <h1 className="pitch_title">언제 어디서나 자유롭게</h1>
            <p className="pitch_subtitle">
              자유롭게 시청하고 부담없이 해지하세요. 한 달 무료 이용 신청
            </p>
            <button className="btn">한 달 무료 이용 신청</button>
          </section>
        </header>
        <Feature />
        <Footer />
      </div>
    );
  }
}

export default App;
