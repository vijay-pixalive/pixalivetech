import React from 'react'
import HeroSection from '../components/Hireus/Herosection'
import ProjectSection from '../components/Hireus/Projectsection'
import ProductLifeCycle from '../components/Hireus/Productlifecycle'
import CardSlider from '../components/Hireus/Cardslider'
import ToolsCard from '../components/Hireus/Toolscard'
import Industries from '../components/Hireus/Industries'
import MethodologySection from '../components/Hireus/Methodology'
import Stages from '../components/Hireus/Stages'
import TestimonialsTabs from '../components/Home/TestimonialsTabs'
import Faq1 from '../components/Hireus/Faq1'


const HireUs = () => {
  return (
    <div>
        <HeroSection />
        <ProjectSection />
        <ProductLifeCycle />
        <CardSlider />
        <ToolsCard />
        <Industries />
        <MethodologySection />
        <Stages />
        <TestimonialsTabs />
        <Faq1 />
        
    </div>
  )
}

export default HireUs