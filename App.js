import logo from './logo.svg';
import './App.css';
import {GoogleLogin} from 'react-google-login'

function App() {

  const responseGoogle = response => {
    console.log(response)
  }

  const responseError = error => {
    console.log(error)
  }

  return (
    <div>

    
      <div className="App">
        <h1>Deep Work Tracker</h1>
      </div>
      <div>
        <GoogleLogin clientId='179022813380-08umargn0gl6nua74b82g8cimlg1orsk.apps.googleusercontent.com'
        buttonText='Sign in and Authorize Calendar'
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={'single_host_origin'}
        responseType='code'
        accessType='offline'
        scope='openid email profile https://www.googleapis.com/auth/calendar'
        />
      </div>
    </div>
  );
}

export default App;
