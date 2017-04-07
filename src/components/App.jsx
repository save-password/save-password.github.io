import React /* , { PropTypes }*/ from 'react'
// import loader from 'hoc-react-loader'
import { Router, Route, browserHistory } from 'react-router'

// FIXME(router): import { RelativeFragment, AbsoluteFragment } from 'redux-little-router'
// import Results from './Results'
// import TVShow from './TVShow'
// import Vault from './Vault'
import LandingPage from './LandingPage'
import Wizard from './Wizard'

const App = () => {
  return (
    <div className="app">
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/vault" component={Wizard} />
      </Router>
    </div>
  )
}

// { step === 'loading' || step === 'account' || step === 'passphrase'
// || step === 'passphrase-confirmation'
// || step === 'passphrase-decrypt' || step === 'vault' ? <Wizard /> : null }

//        { step === 'vault' ? <Vault /> : null }


// <Router history={browserHistory}>
//   <Route path="/" component={Wizard} />
//   <Route path="/vault" component={Vault} />
// </Router>

App.propTypes = {}


//   ok <span className="uk-badge">100</span>
// <!-- <span data-uk-icon="icon: check" /> -->

// export default loader(App, { Loader: null })
export default App
