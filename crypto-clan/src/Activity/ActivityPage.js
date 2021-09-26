import SidebarView from '../Sidebar/SidebarView';

export default function ActivityPage() {
    return (
        <div style={{ width: '100vw' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Activity'} />
                </div>
                <div className='col-md-9'>
                    <h2>Activity</h2>
                </div>
            </div>
        </div>
    );
}