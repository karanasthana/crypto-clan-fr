export default function ProfilePage() {
    return (
    <div>
        <div className="dashboard-crumb"> Dashboard {'>'} Profile </div>
    
        <div className="profile-header">PROFILE</div>
    
        <div>
    
            <div className="left-info">
    
                <div className="profile-pic"></div>
                <div className="edit-profile-button">Edit Profile</div>
    
            </div>
    
            <div className="right-info">
    
                <div className="user-info">
                    Name: inputName
                    Email: inputEmail
                    Joined: inputDate
                    Clan Name: inputName
                    Clan ID: inputID
                    Member Total: inputTotal
                    Assests Total: inputTotal
                </div>
    
            </div>
    
        </div>
    </div>
    );
}