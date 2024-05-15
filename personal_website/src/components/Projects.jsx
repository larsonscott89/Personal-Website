import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Autoplay, Navigation, Pagination, EffectCoverflow} from 'swiper/modules'

import project1_image1 from '../assets/Bartenders Best Friend Drink Details-DsaGi8mg.png'
import project1_image2 from '../assets/Bartenders Best Friend Drink List-CNuFx3re.png'
import project1_image3 from '../assets/Bartenders Best Friend Landing Page-B9z48kNy.png'

import project2_image1 from '../assets/Ultimate Anime API Anime List-CPHl2rDB.png'
import project2_image2 from '../assets/Ultimate Anime API Character list-CT2VYk6x.png'
import project2_image3 from '../assets/Ultimate Anime API landing Page-WcJW4GsK.png'

import project3_image1 from '../assets/Gaming Elite Game list-DufwXnEH.png'
import project3_image2 from '../assets/Gaming Elite landing page-C5iVBS-q.png'
import project3_image3 from '../assets/Gaming elite Retro page-vIpw-eNf.png'

import project4_image1 from '../assets/BCS-Darts landing page-CGWs5ejT.png'
import project4_image2 from '../assets/BCS-Darts sign-up-DRtrHOIW.png'
import project4_image3 from '../assets/BCS-Darts team sign-up-DqZ5ZRWo.png'

export default function Projects() {
  const defaultSwiperSettings = {
    effect: 'coverflow',
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: -400,
    coverflowEffect: {
      rotate: 90,
      stretch: -200,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
    modules: [EffectCoverflow, Pagination, Navigation],
    autoplay: { delay: 2500, disableOnInteraction: false },
    className: 'swiper-main',
  };

  const [swiperSettings, setSwiperSettings] = useState(defaultSwiperSettings);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 738) {
        setSwiperSettings({
          effect: 'coverflow',
          centeredSlides: true,
          centeredSlidesBounds: true,
          loop: true,
          initialSlide: 0,
          slidesPerView: 1,
          spaceBetween: -300,
          coverflowEffect: {
            rotate: 90,
            stretch: 100,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          },
          pagination: { el: '.swiper-pagination', clickable: true },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          },
          modules: [EffectCoverflow, Pagination, Navigation],
          autoplay: { delay: 2500, disableOnInteraction: false },
          className: 'swiper-main',
        });
      } else {
        setSwiperSettings(defaultSwiperSettings);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])


  return (
    <div className='projects-container'>
      <div className='title-label'>
        <h1> Projects </h1>
      </div>
      <div className='projects-intro'>
        <p className='projects-intro'>Welcome to the project section of my portfolio. Here, you'll find a curated list of projects I've undertaken, presented in chronological order.</p>
        <p className='projects-intro'>Every project description includes links to its corresponding GitHub repository and, if applicable, the deployed website. I encourage you to revisit this section periodically to explore the latest enhancements and additions.</p>
        <hr className='project-divider' />
      </div>
{ /* Project 1 */ }
      <div className='project1-container'>
        <div className='project-title'>
          <h1> Bartenders Best Friend </h1>
        </div>
        <div className='project-description-container'>
        <div className='project1-description'>
          <p>"Bartenders Best Friend" is your go-to solution for those moments when you find yourself at a loss for what to order at a restaurant or bar. Leveraging an API call alongside HTML, CSS, and JavaScript, this project empowers users to effortlessly search for a drink either by its name or by specifying a particular type of liquor they desire. Whether you're craving a classic cocktail or exploring new flavors, Bartenders Best Friend provides a curated selection of drinks to suit every taste and occasion. <a href='https://github.com/larsonscott89/Drink-Website' target='blank' className='git-link'> GitHub </a></p>
        </div>
        <div className='swiper-container'>
        <Swiper {...swiperSettings}>
            <div className='photo-media'>
              <SwiperSlide>
                <img src={project1_image1} alt='Landing Page'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={project1_image2} alt='Drink List'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={project1_image3} alt='Drink Details'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={project1_image1} alt='Landing Page'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={project1_image2} alt='Drink List'/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={project1_image3} alt='Drink Details'/>
              </SwiperSlide>
            </div>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <hr className='project-divider' /> 
        </div>
      </div>
{ /* Project 2 */ }
      <div className='project2-container'>
        <div className='project-title'>
          <h1> Ultimate Anime API </h1>
        </div>
        <div className='project-description-container'>
        <div className='project2-description'>
          <p>"Ultimate Anime API" is a dynamic website showcasing the seamless integration of JavaScript components on the front-end with a robust Express, MongoDB, and Node.js backend. I've implemented RESTful API fetch calls for CRUD operations, rigorously tested backend routes using Postman, and ensured data integrity with Mongoose-defined schemas for MongoDB collections. This project represents a harmonious blend of front-end and back-end technologies, delivering a seamless user experience. <a href='https://github.com/larsonscott89/ultimate_anime_API' target='blank' className='git-link'> GitHub </a></p>
        </div>
        <div className='swiper-container'>
        <Swiper {...swiperSettings}>
            <SwiperSlide>
              <img src={project2_image1} alt='Landing Page'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project2_image2} alt='Drink List'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project2_image3} alt='Drink Details'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project2_image1} alt='Landing Page'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project2_image2} alt='Drink List'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project2_image3} alt='Drink Details'/>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <hr className='project-divider' /> 
        </div>
      </div>
{ /* Project 3 */ }
      <div className='project3-container'>
        <div className='project-title'>
          <h1> Gaming Elite </h1>
        </div>
        <div className='project-description-container'>
        <div className='project3-description'>
          <p>Introducing Gaming Elite—an eCommerce platform for gaming enthusiasts, crafted collaboratively under my leadership. I directed a team of three developers in harnessing the power of the MERN stack to deliver a seamless user experience.</p>
          <p>My contributions included implementing a conditional rendering system for the retro page and orchestrating API calls from our AtlasDB backend. Leveraging MongoDB, we efficiently managed product catalogsand user profiles.</p>
          <p>Through meticulous testing and debugging, I ensured Gaming Elite maintains high-quality standards and optimal performance. This project embodies our commitment to excellence in technology and commerce, tailored for the gaming community. <a href='https://github.com/larsonscott89/Gaming-Elite' target='blank' className='git-link'> GitHub </a></p>
        </div>
        <div className='swiper-container'>
        <Swiper {...swiperSettings}>
            <SwiperSlide>
              <img src={project3_image1} alt='Landing Page'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project3_image2} alt='Drink List'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project3_image3} alt='Drink Details'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project3_image1} alt='Landing Page'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project3_image2} alt='Drink List'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project3_image3} alt='Drink Details'/>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <hr className='project-divider' /> 
        </div>
      </div>
{ /* Project 4 */ }
      <div className='project4-container'>
        <div className='project-title'>
          <h1> BCS Darts </h1>
        </div>
        <div className='project-description-container'>
        <div className='project4-description'>
          <p>Introducing BCS Darts—a dynamic application built on the versatile MERN stack, tailored for dart enthusiasts. At its core, BCS Darts seamlessly integrates authentication for administrative users, ensuring data security and user privacy through bcrypt encryption.</p>

          <p>This project encompasses a range of functionalities, including the creation of teams and users via user-friendly forms. Upon submission, team information is seamlessly stored in the database, accessible within the dedicated teams section of the site.</p>

          <p>Key features include:</p>

          <ul>Authentication for administrative users, prioritizing data security with bcrypt encryption.</ul>
          <ul>User-friendly forms facilitating the creation of teams and user profiles.</ul>
          <ul>Seamless integration with the database, ensuring efficient storage and retrieval of team information.</ul>
          <p>BCS Darts exemplifies my proficiency in leveraging the MERN stack to develop robust applications tailored to specific user needs. <a href='https://github.com/larsonscott89/BCS_Darts' target='blank' className='git-link'> GitHub </a></p>
        </div>
        <div className='swiper-container'>
        <Swiper {...swiperSettings}>
            <SwiperSlide>
              <img src={project4_image1} alt='Landing Page'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project4_image2} alt='Drink List'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project4_image3} alt='Drink Details'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project4_image1} alt='Landing Page'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project4_image2} alt='Drink List'/>
            </SwiperSlide>
            <SwiperSlide>
              <img src={project4_image3} alt='Drink Details'/>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
        <hr className='project-divider' /> 
        </div>
      </div>
    </div>
  )
}