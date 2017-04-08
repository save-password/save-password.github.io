import React, { PropTypes } from 'react'
import cx from 'classnames'

// import loader from 'hoc-react-loader'
import styles from './vaultbar.style'

/* eslint-disable react/no-danger */

const VaultBar = ({ className, content, passphrase, savedContent, onSave, loading }) => {
  const dynamicClassName = cx(styles.vaultbar, {
    [styles.visible]: content !== savedContent,
  })

  return (
    <div className={`${styles.vaultbar} ${className} ${dynamicClassName}`}>
      <div className={styles.extend} />
      {loading() ? <span className={styles.loading}>Saving...</span> : null }
      {!loading() && content !== savedContent ? <button className={`uk-button uk-button-primary ${loading() ? 'uk-disabled' : null}`} onClick={onSave(passphrase, content)}>save</button> : null }
    </div>
  )
}

/* eslint-enable react/no-danger */

VaultBar.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  passphrase: PropTypes.string,
  savedContent: PropTypes.string,
  onSave: PropTypes.func.isRequired,
  loading: PropTypes.func.isRequired,
}


// const LoadingIndicator = () => <div />
// export default loader(Vault, { LoadingIndicator })

export default VaultBar
