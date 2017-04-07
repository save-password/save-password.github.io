import React, { PropTypes } from 'react'
import loader from 'hoc-react-loader'
import Avatar from './Avatar'
import styles from './user.style'

const User = ({ className, displayName, onClick }) => {
  return (
    <div className={`${styles.user} ${className}`} >
      <Avatar className={styles.avatar} />
      <div data-uk-dropdown={`mode: click; `} className={styles.menu}>
                 <ul className="uk-nav uk-dropdown-nav">
                     <li className="uk-nav-header">{displayName}</li>
                     <li className={styles.clickable} onClick={onClick}>Sign out</li>
                     <li className="uk-nav-header">Help</li>
                     <li><a href="https://generate-password.github.io/" onClick="window.open(this.href); return false;" rel="noopener noreferrer" target="_blank">Generate a strong password</a></li>
                 </ul>
             </div>
    </div>
  )
}

// <div data-uk-dropdown={`mode: click; `} className={styles.menu}>
//            <ul className="uk-nav uk-dropdown-nav">
//                <li className="uk-nav-header">{displayName}</li>
//                <li onClick={onClick}>Sign out</li>
//            </ul>
//        </div>

User.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default loader(User, { Loader: null })
