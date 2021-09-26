import SidebarView from '../Sidebar/SidebarView';

export default function ProfilePage() {
    return (
        <div style={{ width: '100vw' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Profile'} />
                </div>
                <div className='col-md-9'>
                    <div className="dashboard-crumb">
                        Dashboard {'>'} Profile
                    </div>
    
                    <div className="profile-header">
                        PROFILE
                    </div>
                    <div>
                        <div className="left-info">
                            <div className="profile-pic"></div>
                            <div className="edit-profile-button">Edit Profile</div>
                        </div>

                        <div className="right-info">
                            <div className="user-info">
                                <p> Name: inputName </p>
                                <p>Email: inputEmail </p>
                                <p>Joined: inputDate</p>
                                <p>Clan Name: inputName</p>
                                <p>Clan ID: inputID</p>
                                <p>Member Total: inputTotal</p>
                                <p>Assests Total: inputTotal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}