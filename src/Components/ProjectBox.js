import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    BulletinBoardDesc : "“Interactive Bulletin Board” application in React.This React application is an interactive bulletin board where users can add, view, and delete advertisements",
    BulletinBoardGithub : "https://github.com/Qazrevkom10/task10",
    BulletinBoardWebsite : "https://qazrevkom10.github.io/task10/",

    RegistrationDesc : "user registration forms, which includes fields for entering name, email, password and password confirmation. The form must validate the data on the client side before sending it to the server via GraphQL mutation..",
    RegistrationGithub : "https://github.com/Qazrevkom10/react-graphql-form.git",
    RegistrationWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    WigglesDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox