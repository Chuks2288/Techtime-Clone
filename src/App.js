import React from 'react';
import styles from './style';

import {
  Navbar, Home, Stats, Classes, Courses, Testimonial, Faq, Footer, AboutUs, Community
} from './components';




export default function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Home />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-[#CCDBF0]`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-[#F8F9FC] pt-10`}>
        <div className={`${styles.boxWidth}`}>
          <Classes />
          <AboutUs />
          <Courses />
        </div>
      </div>

      <div className={` bg-[#F8F9FC] pt-10`}>
        <div>
          <Testimonial />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} image_background mt-20`}>
        <div className={`${styles.boxWidth}`}>
          <Community />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-[#F8F9FC] pt-10 pb-20`}>
        <div className={`${styles.boxWidth}`}>
          <Faq />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart} bg-[#000F24] pt-10`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}
