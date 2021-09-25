import React, { useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';

export default function LoginPage(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [clanId, setClanId] = useState('');
    const [clanName, setClanName] = useState('');
    const [privacyAgreed, setPrivacyAgreed] = useState('');

    const captureDetailsAndSignup = () => {
        console.log('Firrst Name --> ' + firstName);
        debugger;
    };

    return (
        <div className='container-fluid' style={{ minHeight: '100vh', backgroundColor: '#9381FF', padding: '20px', display: 'flex', alignItems: 'center' }}> 
            <div className='container' style={{ backgroundColor: '#F68CFE', borderRadius: '10px' }}>
                <div className='row'>
                    <div className='col-5' style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                            <h2><strong style={{ fontSize: '18px', fontFamily: 'fantasy' }}>CRYPTO CLAN</strong></h2>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '30px' }}>Crypto Trading just became a team effort</h2>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={'https://i.pinimg.com/originals/6b/1b/22/6b1b22573f9f3d4bba11a9fa5cb45652.png'} width={'80%'} height={'auto'} />
                        </div>
                    </div>
                    <div className='col-7'  style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px' }}>
                        <div style={{  paddingLeft: '20px', paddingRight: '20px', }}>
                            <span>New here ? <a onClick={() => { props.history.push('/signup'); }}>Sign up here!</a> </span>
                            <div>
                                <div className='row' style={{ paddingTop: '16px' }}>
                                    <div className='col'>
                                        <Form.Label htmlFor="first-name">First name</Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="John"
                                                onChange={e => {setFirstName(e.target.value);}}
                                                id="first-name"
                                                style={{ backgroundColor: '#E8E8E8', color: 'white' }}
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className='col'>
                                        <Form.Label htmlFor="last-name">Last name</Form.Label>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                                placeholder="Doe"
                                                onChange={e => {setLastName(e.target.value);}}
                                                id="last-name"
                                                style={{ backgroundColor: '#E8E8E8', color: 'white' }}
                                            />
                                        </InputGroup>
                                    </div>
                                </div>
                                <Form.Label htmlFor="email">Email Address</Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="john@doe.com"
                                        onChange={e => {setEmail(e.target.value);}}
                                        id="email"
                                        style={{ backgroundColor: '#E8E8E8', color: 'white' }}
                                    />
                                </InputGroup>
                                <Form.Label htmlFor="pwd">Password</Form.Label>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="10+ characters"
                                        onChange={e => {setPassword(e.target.value);}}
                                        id="pwd"
                                        style={{ backgroundColor: '#E8E8E8', color: 'white' }}
                                    />
                                </InputGroup>
                                
                                <div style={{ paddingTop: '16px' }}>
                                    <div className='row grid grid-cols-2 divide-x'>
                                        <div>
                                            <div style={{ fontSize: '16px', fontWeight: '600', paddingBottom: '10px' }}>Join a Clan</div>
                                            <Form.Label htmlFor="clan-id">Clan ID</Form.Label>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Joey Crypto Clan"
                                                    onChange={e => {setClanId(e.target.value); }}
                                                    id="clan-id"
                                                    style={{ backgroundColor: '#E8E8E8', color: 'white' }}
                                                />
                                            </InputGroup>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '16px', fontWeight: '600', paddingBottom: '10px' }}>Create a Clan</div>
                                            <Form.Label htmlFor="clan-name">Clan Name</Form.Label>
                                            <InputGroup className="mb-3">
                                                <FormControl
                                                    placeholder="Johns Crypto Clan"
                                                    onChange={e => {setClanName(e.target.value); }}
                                                    id="clan-name"
                                                    style={{ backgroundColor: '#E8E8E8', color: 'white' }}
                                                />
                                            </InputGroup>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* <input type="checkbox" name="terms"></input> */}
                                    <Form.Check 
                                        type={'checkbox'}
                                        id={'privacy'}
                                        label={'Creating an account means you\'re okay with Terms of Service, Privacy Policy and our default Notification settings'}
                                        onChange={e => { setPrivacyAgreed(e.target.value); }}
                                    />
                                    <div style={{ paddingTop: '20px' }}>
                                        <Button onClick={captureDetailsAndSignup}>Create Account</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}