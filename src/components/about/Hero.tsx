import React from 'react';
import FadeUp from '../common/animations/FadeUp';
import { SplitCome } from '../common/animations/SplitCome';

const Hero = () => {
  return (
    <section className='hero__about'>
      <div className='container g-0 line'>
        <span className='line-3'></span>
        <div className='row'>
          <div className='col-xxl-12'>
            <div className='hero__about-content'>
              <SplitCome type='words'>
                <h1 className='hero-title animation__word_come'>
                  We’re a full service creative and digital agency, working globally with leargest
                  brands.
                </h1>
              </SplitCome>

              <div className='hero__about-info'>
                <div className='hero__about-btn'>
                  <div className='btn_wrapper'>
                    <a href='service.html' className='wc-btn-primary btn-hover btn-item'>
                      <span></span> Trends & <br />
                      technology
                      <i className='fa-solid fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
                <FadeUp className='hero__about-text'>
                  <p>
                    Think of the world&apos;s most iconica and successful brands easily findable,
                    impactful. Interactional and exceptional designs. Our story takes beginning in
                    2013
                  </p>
                </FadeUp>

                <div className='hero__about-award'>
                  <img src='/imgs/about/award.png' alt='Best Studio Award' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row hero__about-row'>
          <div className='col-xxl-12'>
            <div className='hero__about-video'>
              <video loop={true} muted={true} autoPlay={true} playsInline={true}>
                <source src='/video/video.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
