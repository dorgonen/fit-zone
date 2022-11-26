import React, { useEffect } from 'react';
import './SplitSection.css';
import { Button } from '../../Buttons/Button/Button';
import RoundButton from '../../Buttons/RoundButton/RoundButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

function SplitSection({
  items,
  bgImg,
  headline,
  description,
  lightBgColor
}) {

  useEffect(() => {
    AOS.init();
  }, [])

  const itemsCnt = items.length;
  const itemPercent = itemsCnt > 0 ? (1 / itemsCnt) * 100 : 0;

  return (
    <div className='background-section'
      style={{ backgroundColor: lightBgColor ? 'white' : 'var(--secondary)', backgroundImage: bgImg ? `url(${bgImg})` : 'none' }}
    >
      <div className='container mobile-centered'>
        <div
          className='row home__hero-row'
          style={{
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <h1 className='heading dark'>
            {headline}
          </h1>
          {description &&
            <h5 className='heading-third dark'>
              {description}
            </h5>
          }
          <div className='split-section-row'>
            {items.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-delay={400 * index}
                  key={index} className="split-section-col" style={window.innerWidth <= 960 ? {} : { flex: `0 0 ${itemPercent}%`, maxWidth: `${itemPercent}%` }}>
                  {item.img &&
                    <div className='split-section-img-wrapper'>
                      <img src={item.img} alt={item.alt} className='split-section-img' />
                    </div>
                  }
                  {item.icon &&
                    <div className='split-section-btn'>
                      <RoundButton link={item.link}>
                        <i className={item.icon}></i>
                      </RoundButton>
                    </div>
                  }
                  <div className='split-section-text'>
                    <h3 className='heading-secondary dark'>
                      {item.headline}
                    </h3>
                    <p
                      className={
                        item.lightTextDesc
                          ? 'split-section-subtitle'
                          : 'split-section-subtitle dark'
                      }
                    >
                      {item.description}
                    </p>
                  </div>
                  {item.buttonLabel &&
                    <div className='split-section-btn'>
                      <Button buttonStyle='btn--outline' buttonColor='red' route={item.route}>{item.buttonLabel}</Button>
                    </div>
                  }
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitSection;
