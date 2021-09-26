import AddCryptoTileView from '../Components/AddCryptoTileView';
import CryptoTileView from '../Components/CryptoTileView';
import SidebarView from '../Sidebar/SidebarView';

export default function AssetsPage(props) {
    return (
        <div style={{ width: '100vw' }}>
            <div className='row'>
                <div className='col-lg-2 col-md-3'>
                    <SidebarView currentPage={'Assets'} />
                </div>
                <div className='col-lg-10 col-md-9'>
                    <div>
                        <div className="dashboard-crumb">
                            Dashboard {'>'} Assets
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <span style={{ color: '#9381FF', fontSize: '42px' }}>
                                {`${props.clanName || 'CLAN'} ASSET` }
                            </span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <span style={{ color: '#9381FF', fontSize: '24px' }}>
                                {`Asset Total: $ ${props.assetTotal || '20,000'}`}
                            </span>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <CryptoTileView />
                            <AddCryptoTileView />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}