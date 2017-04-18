import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './faq.style'

const Faq = ({ className }) => {

  const openDoubleAuthentication = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://support.google.com/accounts/answer/185839')
  }

  const openBruteForce = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://support.google.com/accounts/answer/185839')
  }

  const openGithub = (event) => {
    event.preventDefault()
    /* global window */
    window.open('https://github.com/save-password/save-password.github.io/issues')
  }


  return (
    <div className={`${className} ${styles.faq}`}>
      <img src="/src/img/p.png" alt="logo" className={styles.brandLogo} />
      <header className={styles.header}>
        <h1>FAQ</h1>
      </header>
      <ul data-uk-accordion>
        <li className="uk-open">
          <h2 className="uk-accordion-title">Why Google Drive?</h2>
          <div className="uk-accordion-content">
            <p>
              Google Drive is a well known cloud storage service so almost everybody
               has an account and the free space is very large.
            </p>
            <p>
               Moreover, Google is a very significant storage service and provides a
               lot of security enhancements like the&nbsp;
               <a href="https://support.google.com/accounts/answer/185839" onClick={openDoubleAuthentication}>double authentication</a>.
               So basic attacks like <a href="https://en.wikipedia.org/wiki/Brute-force_attack" onClick={openBruteForce}>brute-force attacks</a>
               &nbsp;or <a href="https://en.wikipedia.org/wiki/Denial-of-service_attack">DDoS attacks</a> should be ineffective.
            </p>
            <p>
              Finally Google Drive has a private folder by application so everything you
              store with <strong>Save password</strong> is hidden to other applications
               and even to yourself.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">Why is <strong>Save password</strong> so secured?</h2>
          <div className="uk-accordion-content">
            <p>
              <strong>Save password</strong> encrypts your data on your browser before transfering
               it on your Google Drive so your data are never transfered online in clear.
              Moreover, your data are stored encrypted so even if your Google Drive account
              is compromised nobody will have access to your data.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">How to reset my password/passphrase?</h2>
          <div className="uk-accordion-content">
            <p>
              You have lost the passphrase to decrypt your data on <strong>Save password</strong>?
              That is too bad because for security reasons, we have no way to retrieve
               your password or to reset it.
              Because if we could reset your passphrase, it means that hackers could do it too.
            </p>
            <p>
              So all your data stored in your vault are lost
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">What is a passphrase?</h2>
          <div className="uk-accordion-content">
            <p>
              We often use the terme passphrase in the application.
              A passphrase is, like a password, a secret expression
              used to protect your privacy. However passphrase is most of the time longer
              than password but easier to remember. In order to do it, a good practice is to
              select a sentence you secretly love like a citation, a poem and to pick only
              specific letters of this sentence.
            </p>
            <p>
              For example you may pick the first letter of each word:<br />
              <strong>C</strong>hoose <strong>a</strong> <strong>j</strong>ob <strong>y</strong>ou <strong>l</strong>ove, <strong>a</strong>nd <strong>y</strong>ou <strong>w</strong>ill <strong>n</strong>ever <strong>h</strong>ave <strong>t</strong>o <strong>w</strong>ork <strong>a</strong> <strong>d</strong>ay <strong>i</strong>n <strong>y</strong>our <strong>l</strong>ife.
            </p>
          </div>
        </li>
        <li>
          <h2 className="uk-accordion-title">You need specific help?</h2>
          <div className="uk-accordion-content">
            <p>
              You can contact use by posting an issue on the &nbsp;
              <a
                href="https://github.com/save-password/save-password.github.io/issues"
                onClick={openGithub}
              >
                github
              </a> of this project.
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

// <img src="/src/img/spartiates.jpeg" alt="spartiates"  />


Faq.propTypes = {
  className: PropTypes.string,
}

// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

// export default loader(Wizard, { Loader: null })
export default Faq
