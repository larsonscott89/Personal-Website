import Headshot from '../assets/Personal Website-DSTVdpJV.png'

export default function AboutMe () {
  return (
    <div>
      <h1 className='title-label'>About Me</h1>
      <div className='aboutme-container'>
        <img className='headshot' src={Headshot} alt='Headshot'/>
        <div>
          <p className='about-me-main'>Greetings! I have a background in troubleshooting automation systems in the refined fuels industry and 5 years in a commission based sales experience. Originally from Texas and now based in Ocala, Florida, I've cultivated a deep appreciation for the intersection of human intellect and technological innovation.</p>

          <p className='about-me-main'>My journey into software engineering began when I was troubleshooting automation systems. The intricacies of how the systems work scratched a particular part of my brain and through my experiences at General Assembly, I have gained proficiency in various technologies. However, my true passion lies in game development—a realm where creativity flourishes and imagination knows no bounds. Despite the competitive nature of the field, my enthusiasm remains undeterred as I seek every opportunity to refine my skills and work towards my ultimate goal.</p>

          <p className='about-me-main'>In every project, whether it's crafting intuitive user interfaces or delving into algorithmic complexities, I am committed to excellence. Challenges are viewed as opportunities for growth, and my aspiration is to leverage my skills to create transformative gaming experiences that resonate with users and make a lasting impact on the world. Join me as we explore the frontiers of technology, embrace innovation, and embark on a journey of discovery and collaboration towards a future where gaming serves as a catalyst for positive change.</p>
        </div>
      </div>
    </div>
  )
}