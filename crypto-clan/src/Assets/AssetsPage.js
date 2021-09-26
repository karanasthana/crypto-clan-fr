import SidebarView from '../Sidebar/SidebarView';

export default function AssetsPage() {
    return (
        <div style={{ width: '100vh' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Assets'} />
                </div>
                <div className='col-md-9'>
                    <h2>Assets</h2>
                </div>
            </div>
        </div>
    );
}