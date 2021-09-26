import {  } from 'bootstrap';
import { Row, Col, Image, Button } from 'react-bootstrap';
import SidebarView from '../Sidebar/SidebarView';

export default function ProfilePage(props) {
    return (
        <div style={{ width: '100vw', minHeight: '100vh' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Profile'} />
                </div>
                <div className='col-md-9'>
                    <div className="dashboard-crumb">
                        Dashboard {'>'} Profile
                    </div>
    
                    <div style={{ fontSize: '40px', marginBottom: '50px' }}>
                        <strong>PROFILE</strong>
                    </div>
                    <div>
                        <div className="left-info">
                            <div className="profile-pic">
                                <Row>
                                    <Col xs={6} md={4} >
                                        <Image src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg" roundedCircle />
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                            <Button disabled>Edit Profile</Button>
                                        </div>
                                    </Col>
                                    <Col xs={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#9381FF' }}>
                                        <div>
                                            <p>
                                                <strong style={{ color: 'black' }}>Name:</strong> {`${props.userName || 'John Doe'}`}
                                            </p>
                                            <p>
                                                <strong style={{ color: 'black' }}>Email:</strong> {`${props.userEmail || 'john@doe.com'}`}
                                            </p>
                                            <p>
                                                <strong style={{ color: 'black' }}>Clan Name:</strong> {`${props.userClanName || 'John Doe Clan'}`}
                                            </p>
                                            <p>
                                                <strong style={{ color: 'black' }}>Clan ID:</strong> {`${props.userClanId || 'jdcl001'}`}
                                            </p>
                                            <p>
                                                <strong style={{ color: 'black' }}>Assets Total:</strong> ${`${props.userTotal || '1200'}`}
                                            </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}