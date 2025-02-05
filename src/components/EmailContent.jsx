import React from "react";
import flaticonWelcomeImage from './../assets/images/flaticon-welcome-image.png'
import backArrow from './../assets/icons/back-arrow.png'
import downloadButton from './../assets/icons/download-button.png'
import rateStarButton from './../assets/icons/rate-star-button.png'
import rubbishButton from './../assets/icons/rubbish-bin-delete-button.png'

function EmailContent({currentEmail, setCurrentEmail}) {

    return(
         <article className="email-content">
        <div className="title">
          <h1>{currentEmail.title}</h1>
        </div>
        <header className="email-content--header">
          <div className="avatar"></div>
          <div className="email-info">
            <div className="sender-info">
              <h2>{currentEmail.sender}</h2>
              <em>&lt;no-reply@freepik.com&gt;</em>
            </div>
            <div className="user-info">
              <p>
                to me <em>&lt;nicolas@boolean.co.uk&gt;</em>
              </p>
            </div>
          </div>
          <div className="date-info">
            <p>17 March 2021, 09:33</p>
          </div>
          <div className="email-action-icons">
            <ul>
              <li>
                <img className="icon" src={backArrow} alt="reply button" onClick={() => setCurrentEmail(null)} />
              </li>
            </ul>
          </div>
        </header>
        <section className="email-body">
          <div className="content">
            <img src={flaticonWelcomeImage} alt="Flaticon welcome message" className="contentImage"/>
          </div>
        </section>
      </article> 
    )
}

export default EmailContent;