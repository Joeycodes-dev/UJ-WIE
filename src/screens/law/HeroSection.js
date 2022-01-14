import React, { useEffect } from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  path,
  imgStart
}) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <main>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='hrow home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
            data-aos="zoom-in-right" 
            data-aos-delay="400"
          >
            <div className='hcol'>
              <div className='home__hero-text-wrapper' data-aos="zoom-in-left" data-aos-delay="400">
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to={path}>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt="hero_img" className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
