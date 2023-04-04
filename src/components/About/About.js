import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
    const {photo,name, description, resume, linkedin, github } = about
  
    return (
      <div className='about center'>
        {photo && (
         <img height="200px" alt="Avatar placeholder" src={photo} />
        )}
        {name && (
          <h1>
            Hi, I am <span className='about__name'>{name}.</span>
          </h1>
        )}
        <p className='about__desc'>{description}</p>
  
        <div className='about__contact center'>
          {resume && (
            <a href={resume} download>
              <span type='button' className='btn btn--outline'>
                Resume
              </span>
            </a>
          )}
  
         
            {github && (
                <a
                  href={github}
                  aria-label='github'
                  className='link link--icon'
                >
                  <GitHubIcon />
                </a>
              )}
  
            {linkedin && (
                <a
                  href={linkedin}
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
            )}
         
        </div>
      </div>
    )
  }
  
  export default About