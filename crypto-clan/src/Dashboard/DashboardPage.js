import CryptoTileView from '../Components/CryptoTileView';
import SidebarView from '../Sidebar/SidebarView';

export default function DashboardPage() {
    return (
        <div style={{ width: '100vw' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Dashboard'} />
                </div>
                <div className='col-md-9'>
                    <h2>Dashboard</h2>
                    <div>
                        <span>Story Views</span>
                    </div>
                    <div>
                        <span>Tiles</span>
                        <CryptoTileView />
                    </div>
                </div>
            </div>
        </div>);
}