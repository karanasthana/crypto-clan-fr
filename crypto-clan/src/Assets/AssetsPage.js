import CryptoTileView from '../Components/CryptoTileView';
import SidebarView from '../Sidebar/SidebarView';

export default function AssetsPage() {
    return (
        <div style={{ width: '100vh' }}>
            <div className='row'>
                <div className='col-md-3'>
                    <SidebarView currentPage={'Assets'} />
                </div>
                <div className='col-md-9'>
                    <div>
                        <div className="dashboard-crumb">
                            Dashboard {'>'} Assets
                        </div>
                        <div style={{ display: 'flex' }}>
                            <CryptoTileView />
                            <CryptoTileView />
                            <CryptoTileView />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}