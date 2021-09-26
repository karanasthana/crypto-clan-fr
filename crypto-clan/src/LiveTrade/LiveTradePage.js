import SidebarView from '../Sidebar/SidebarView';

export default function LiveTradePage() {
    return (
        <div style={{ width: '100vh' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Live Trade'} />
                </div>
                <div className='col-md-9'>
                    <h2>Live Trade</h2>
                </div>
            </div>
        </div>
    );
}