import React from "react";
import EmailTile from "./EmailTile";

function EmailList({filteredEmails, toggleStar, toggleRead, currentTab, hideRead}) {
  return (
    <main className="emails">
        <ul>
          {filteredEmails.map((email, index) => (
            <EmailTile 
            key={index}
            email={email}
            toggleStar={toggleStar}
            toggleRead={toggleRead}/>
          ))}
        </ul>
      </main>)
}

export default EmailList;