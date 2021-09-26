import { Link } from 'react-router-dom';

export default function AddCryptoTileView(props) {
    const color1 = '#9381FF';
    const rgb = [color1.substring(1,3), color1.substring(3,5), color1.substring(5,7)];
    const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;

    const isProfit = props.profit > 0 ? 'profit' : 'loss';

    return (
        <div style={{ margin: '25px' }}>
            <div style={{ color: 'white', marginBottom: '10px' }}>{'New'}</div>
            <div style={{ height:'150px', width:'250px', borderRadius: '5%', color: `${color1}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', borderColor: `${color1}`, borderWidth: '1px', cursor: 'pointer' }}>
                <Link to="\live" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ borderRadius: '50%', borderColor: `${color1}`, borderWidth: '1px', paddingLeft: '8px', paddingRight: '8px' }}>  +  </span>
                    <div>
                        New Asset
                    </div>
                </Link>
            </div>
        </div>
    );
}

// props - 
// cryptoName
// value
// profit
// loss