import React from 'react'
import Hero from '../components/Home/Hero'
import WhoweAre from '../components/Home/WhoweAre'
import Achievements from '../components/Home/Achievements'
import Strategy from '../components/Home/Strategy'
import CardsHome from '../components/Home/CardsHome'
import Faq from '../components/Home/Faq'
import Gmail from '../components/Home/Gmail'
import ServiceHeading from '../components/Home/ServiceHeading'
import Services from '../components/Home/Services'
import TestimonialsTabs from '../components/Home/TestimonialsTabs'
import TeamSection from '../components/Home/TeamSection'

const Home = () => {
  return (
    <>
      <div className='py-0'>
        <Hero />
        <WhoweAre />
        <Achievements />
        <Strategy />
        <CardsHome />
        <ServiceHeading/>
        <Services />
        <TestimonialsTabs />
        <Faq />
        <TeamSection />
        <Gmail />
      </div>
    </>
  )
}
export default Home