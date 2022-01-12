import React from 'react'
import './LeftSide.css'
import foto from '../img/1.jpg'
import phone from '../img/phone-30-16.png'
import email from '../img/email-16.png'
import telega from '../img/telegram-3-16.png'
import git from '../img/github-9-16.png'
function LeftSide() {

    return (
        <div className="LeftSide">
              <img src={foto} className="foto"/>
              <div className="contacts">
            <div className="contact">
            <img src={phone} className="icon"/>
            <p className="contact_text">+7 995 330 10 09</p></div>
            <div className="contact">
            <img src={email} className="icon"/>
            <p className="contact_text">kiraanikeev@mail.ru</p></div>
            <div className="contact">
            <img src={telega} className="icon"/>
            <p className="contact_text">@kiraanikeev</p></div>
            <div className="contact">
            <img src={git} className="icon"/>
            <p className="contact_text">kiraanikeev</p></div>
            </div>
            <div className='line_contacts'></div>
            <div>
                <h3 className='skills_title'>Skills</h3>
                <ul  className='skills'>
                <li className='skill'>HTML/CSS</li>
                <li className='skill'>JavaScript/ES6+</li>
                <li className='skill'>React JS, Redux</li>
                <li className='skill'>Git</li>
                <li className='skill'>Responsive design</li>
                <li className='skill'>BEM</li>
                <li className='skill'>Ajax</li>
                <li className='skill'>Webpack</li>
                
                </ul>
            </div>
            <div className='line_contacts'></div>
            <div className='languages'>
            <h3 className='skills_title'>Languages</h3>
            <p className='text_p'>Russian — Native</p>
            <p className='text_p'>English — B2 — Upper Intermediate</p>

            </div>
        </div>
    )
}

export default LeftSide
