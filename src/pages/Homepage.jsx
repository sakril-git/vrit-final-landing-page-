import React from 'react';
import Slider from '../components/Slider';
import Facts from '../components/Facts';
import About from '../components/About';
import Reason from '../components/Reason';
import Feature from '../components/Feature';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Banner from '../components/Banner';
import Contactus from '../components/Contactus';

const Homepage = () => {
  return (
    <>
      <Slider />
      <Facts />
      <About />
      <Reason />
      <Feature />
      <Testimonials />
      <Faq />
      <Banner />
      <Contactus />
    </>
  );
};

export default Homepage;
