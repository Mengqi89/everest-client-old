import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chinaOne from '../../assets/china-1.jpg';
import chinaTwo from '../../assets/china-2.jpg';
// import chinaThree from '../../assets/china-3.jpg';
import chinaFour from '../../assets/china-4.png';
import Typing from 'react-typing-animation';

import './LandingPage.scss';

class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <section className="hero">
          <Typing>
            <h2>Your Link to</h2>
            <h1>Teaching in China</h1>
          </Typing>
          {/* <CreateDemoBtn /> */}
          {/* <img id="crystal-vector" src={vector} alt="crystal-vector" /> */}
        </section>
        <section id="why-everest">
          <h2>Everest International Education</h2>
          <p>We're here to help you get the teaching job you want</p>
          <p>You want to teach. Chinese students want to learn. All you need is a little help. Someone with experience who knows what it's like and understands what you need. Someone to help you navigate the paperwork and negotiate the contracts. Someone to look out for your best interests and make sure you get everything you need to be successful and truly enjoy your experience teaching in China. That’s where we come in, at no cost to you.</p>
        </section>
        <section id="why-china">
          <h2>Why China?</h2>
          <div className="cards-container">
            <div className="description-card">
              <div className="contents">
                <img src={chinaFour} alt="" />
                <div className="description">
                  <h3>Rich History Meets Modernity</h3>
                  <p>With a unique combination of rich history and rapidly growing economic advancement, China is an unmatched treasure trove of cultural beauty, exquisite natural wonders, and unparalleled modern achievements. </p>
                </div>
                {/* <img src={collecting} alt="collecting" /> */}
              </div>
            </div>
            <div className="description-card">
              <div className="contents">
                <img src={chinaOne} alt="" />
                <div className="description">
                  <h3>Rapidly Growing City</h3>
                  <p>Teaching in China gives you the opportunity to experience everything this country has to offer. The Great Wall and the Terracotta Army. The modern allure of the Pudong Skyline, the 798 Art District and the bustling Victoria Harbor. The ancient beauty of the Potala Palace and the Forbidden City, and so much more.</p>
                </div>
              </div>
            </div>
            <div className="description-card">
              <div className="contents">
                <img src={chinaTwo} alt="" />
                <div className="description">
                  <h3>Immerse Yourself</h3>
                  <p>Be more than a teacher. Be more than a tourist. Immerse yourself in a vast tapestry of living history, cultural beauty and modern achievements. Teaching in China is truly the opportunity of a lifetime</p>
                </div>
                {/* <img src={calendar} alt="collecting" /> */}
              </div>
            </div>
          </div>
        </section>
        <section id="start">
          <h3>Start your adventure today</h3>
          <Link to="/register">Apply - it's free!</Link>
        </section>
      </div>
    );
  }
}

export default LandingPage;