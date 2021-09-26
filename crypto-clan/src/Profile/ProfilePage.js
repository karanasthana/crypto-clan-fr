import SidebarView from '../Sidebar/SidebarView';

export default function ProfilePage() {
    return (
        <div style={{ width: '100vh' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Profile'} />
                </div>
                <div className='col-md-9'>
                    <h2>Profile</h2>
                </div>
            </div>
        </div>
    );
}