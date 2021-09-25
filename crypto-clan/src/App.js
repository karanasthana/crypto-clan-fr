// import logo from './logo.svg';
// import './App.css';

// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//           Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//           Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import LoginContainer from './Login/LoginContainer';
import DashboardPage from './Dashboard/DashboardPage';
import ProfilePage from './Profile/ProfilePage';
import ActivityPage from './Activity/ActivityPage';

export default function App() {
    let isLoggedIn = true; // some logic
    return (
        <>
            <Router>
                <div>
                    {/* <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav> */}

                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/assets">
                            <About />
                        </Route>
                        <Route path="/live">
                            <Users />
                        </Route>
                        <Route path="/activity">
                            <ActivityPage />
                        </Route>
                        <Route path="/home">
                            <DashboardPage />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                        </Route>
                        <Route path="/" render={()=> <LoginContainer/>} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}