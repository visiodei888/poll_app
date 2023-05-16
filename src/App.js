
import './App.css';
import Create_poll from './components/Create_poll';
import Mod_signup from './components/Mod_signup';
import Navbar_mod from './components/Navbar_mod';
import Navbar_user from './components/Navbar_user';
import Profile from './components/Profile';
import User_login from './components/User_login';
import User_signup from './components/User_signup';


function App() {
  return (
    <div className="App">
      <Navbar_user/>
     <Create_poll/>
    </div>
  );
}

export default App;
