import React from "react";
import EmailTile from "./EmailTile";

function EmailList({filteredEmails, toggleStar, toggleRead, setCurrentEmail, currentEmail}) {
  return (
    <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <EmailTile 
            key={index}
            email={email}
            toggleStar={toggleStar}
            toggleRead={toggleRead}
            setCurrentEmail={setCurrentEmail}
            currentEmail={currentEmail}
            />
          ))}
        </ul>
      </main>)
}

export default EmailList;