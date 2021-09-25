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
        // <div style={{ padding: '200px', paddingTop: '100px', minHeight: '100vh', backgroundColor: '#9381FF' }}>
        <div>
            {/* <div className="grid grid-cols-2 divide-x divide-green-500 " style={{ backgroundColor: 'black', borderRadius: '10%'}}> */}
            <div>
                {/* <div style={{ backgroundColor: 'pink' }}> */}
                <div>
                    <div>
                        CRYPTO CLAN
                    </div>
                    {/* <div style={{ padding: '20px' }}> */}
                    <div>
                        <h2>Crypto Trading just became a team effort</h2>
                    </div>
                    {/* <div style={{ padding: '50px' }}> */}
                    <div>
                        <img src={'https://img.freepik.com/free-vector/online-registration-sign-up-concept-with-man-character_268404-98.jpg?size=626&ext=jpg'} />
                    </div>
                </div>
                {/* <div style={{ backgroundColor: 'yellow' }}> */}
                <div>
                    {/* <span style={{ float: 'right' }}>New here ? <a onClick={() => { props.history.push('/signup'); }}>Sign up here!</a> </span> */}
                    <span>New here ? <a onClick={() => { props.history.push('/signup'); }}>Sign up here!</a> </span>
                    <div>
                        {/* <div style={{ marginTop: '50px', marginLeft: '20px' }}> */}
                        <div>
                            <div>
                                <div>Full Name</div>
                                {/* <input className="input-lg" name="first_name" type="text" style={{  }}></input> */}
                                <input name="first_name" type="text"></input>
                            </div>
                            <div>
                                <div>Last Name</div>
                                {/* <input className="input-lg" name="last_name" type="text" style={{  }}></input> */}
                                <input name="last_name" type="text"></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div>Email Address</div>
                            {/* <input className="input-lg" name="email" type="email" style={{  }}></input> */}
                            <input name="email" type="email"></input>
                        </div>
                        <div className='row'>
                            <div>Password</div>
                            {/* <input className="input-lg" name="pwd" type="password" title="10+ characters" style={{  }}></input> */}
                            <input name="pwd" type="password" title="10+ characters"></input>
                        </div>
                        <div className='row grid grid-cols-2 '>
                            <div>
                                <div>Join a Clan</div>
                                <div>Clan ID</div>
                                {/* <input className="input-lg" name="join-clan-id" type="text"></input> */}
                                <input name="join-clan-id" type="text"></input>
                            </div>
                            <div>
                                <div>Create a Clan</div>
                                <div>Clan Name</div>
                                {/* <input className="input-lg" name="create-clan-name" type="text"></input> */}
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