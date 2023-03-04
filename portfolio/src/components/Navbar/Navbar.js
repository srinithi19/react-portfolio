import { useState } from 'react'
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav>
            <ul className = 'nav-list'>
                {projects.length ? (
                    <li className = 'nav-list-item'>
                        <a href='#projects' onClick={toggleNavList} className='link link-nav'>
                            Projects
                        </a>                
                    </li>

                ) : null}

                {skills.length ? (
                    <li className = 'nav-list-item'>
                        <a href='#skills' onClick={toggleNavList} className='link link-nav'>
                            Skills
                        </a>                
                    </li>

                ) : null}
            

                {
                contact.email ? (
                    <li className='nav-list-item'>
                      <a
                        href='#contact'
                        onClick={toggleNavList}
                        className='link link-nav'
                      >
                        Contact
                      </a>
                    </li>
                  ) : null}
            
                {/* <button
                type='button'
                 onClick={toggleNavList}
                 className='btn btn--icon nav-hamburger'
                 aria-label='toggle navigation'>
                 {showNavList ? <Close /> : <Menu />}
                 </button> */}
            </ul>
        </nav>
    )

}


export default Navbar

