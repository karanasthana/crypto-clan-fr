import React, { useState } from 'react';

export default function LoginPage(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clanId, setClanId] = useState('');
    const [clanName, setClanName] = useState('');

    const captureDetailsAndSignup = () => {
        debugger;
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        CRYPTO CLAN
                    </div>
                    <div>
                        <h2>Crypto Trading just became a team effort</h2>
                    </div>
                    <div>
                        <img src={'https://img.freepik.com/free-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?size=626&ext=jpg'} />
                    </div>
                </div>
                <div>
                    <span>New here ? <a onClick={() => { props.history.push('/signup'); }}>Sign up here!</a> </span>
                    <div>
                        <div>
                            <div>
                                <div>Full Name</div>
                                <input name="first_name" type="text"></input>
                            </div>
                            <div>
                                <div>Last Name</div>
                                <input name="last_name" type="text"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div>Email Address</div>
                            <input name="email" type="email"></input>
                        </div>
                        <div className='row'>
                            <div>Password</div>
                            <input name="pwd" type="password" title="10+ characters"></input>
                        </div>
                        <div className='row grid grid-cols-2 '>
                            <div>
                                <div>Join a Clan</div>
                                <div>Clan ID</div>
                                <input name="join-clan-id" type="text"></input>
                            </div>
                            <div>
                                <div>Create a Clan</div>
                                <div>Clan Name</div>
                                <input name="create-clan-name" type="text"></input>
                            </div>
                        </div>
                        <div className="row">
                            <input type="checkbox" name="terms"></input>
                            <span>Creating an account means you're okay with Terms of Service, Privacy Policy and our default Notification settings</span>
                            <div>
                                <button onClick={captureDetailsAndSignup}>Create Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}