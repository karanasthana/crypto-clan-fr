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
import AssetsPage from './Assets/AssetsPage';
import LiveTradePage from './LiveTrade/LiveTradePage';
import ActivityPage from './Activity/ActivityPage';
import SignupPage from './Signup/SignupPage';

export default function App() {
    let isLoggedIn = true; // some logic
    return (
        <>
            <Router>
                <div>
                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/assets">
                            <AssetsPage />
                        </Route>
                        <Route path="/live">
                            <LiveTradePage />
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
                        <Route exact  path="/signup">
                            <SignupPage />
                        </Route>
                        <Route path="/" render={()=> <LoginContainer/>} />
                    </Switch>
                </div>
            </Router>
        </>
    );
}
