import { useState } from 'react'

import initialEmails from './data/emails'

import './styles/App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import EmailList from './components/EmailList'
import EmailContent from './components/EmailContent'

const getReadEmails = emails => emails.filter(email => !email.read)

const getStarredEmails = emails => emails.filter(email => email.starred)

function App() {
  const [emails, setEmails] = useState(initialEmails)
  const [hideRead, setHideRead] = useState(false)
  const [currentTab, setCurrentTab] = useState('inbox')
  const [currentEmail, setCurrentEmail] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')


  const unreadEmails = emails.filter(email => !email.read)
  const starredEmails = emails.filter(email => email.starred)

  const toggleStar = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      )
    setEmails(updatedEmails)
  }

  const getFilteredEmails = () =>{
    return emails.filter(email => email.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
    setEmails(updatedEmails)
  }

  let filteredEmails = emails

  if (hideRead) filteredEmails = getReadEmails(filteredEmails)

  if (currentTab === 'starred')
    filteredEmails = getStarredEmails(filteredEmails)

  filteredEmails = getFilteredEmails()

  return (
    <div className="app">
      <Header 
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      />
      <Navbar setHideRead={setHideRead}
      setCurrentTab={setCurrentTab}
      currentTab={currentTab}
      unreadEmails={unreadEmails}
      starredEmails={starredEmails}
      hideRead={hideRead}
      />
      {currentEmail ? (
        <>
        <EmailContent
        currentEmail={currentEmail}
        setCurrentEmail={setCurrentEmail}
        ></EmailContent>
        </>
      ) : (
        <EmailList 
          filteredEmails={filteredEmails}
          toggleStar={toggleStar}
          toggleRead={toggleRead}
          currentTab={currentTab}
          hideRead={hideRead}
          setCurrentEmail={setCurrentEmail}
          currentEmail={currentEmail}
        />
      )}
      
    </div>
  )
}

export default App
