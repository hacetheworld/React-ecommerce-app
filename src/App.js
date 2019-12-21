import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import CheckoutPage from './pages/checkout/checkout.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selector'
class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // get created user data snapshot
        userRef.onSnapshot(snapShot => {
          // set current state to newly created data so that we can use it in our app
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()

          });

        });

      } else {
        // if current user is SIGNOUT then we set  currentUser to null
        setCurrentUser(userAuth);
      }


    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>

          <Route exact path='/' component={HomePage} />

          <Route exact path='/shop' component={ShopPage} />

          <Route
            exact
            path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />

          <Route
            exact
            path='/checkout'
            component={CheckoutPage} />

        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);