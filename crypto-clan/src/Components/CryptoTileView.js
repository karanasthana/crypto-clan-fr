export default function CryptoTileView(props) {
    const color1 = '#9381FF';
    const rgb = [color1.substring(1,3), color1.substring(3,5), color1.substring(5,7)];
    const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;

    const isProfit = props.profit > 0 ? 'profit' : 'loss';

    return (
        <div style={{ margin: '25px' }}>
            <div style={{ color: `${color1}`, marginBottom: '10px', cursor: 'pointer' }}>{props.cryptoName || 'Bitcoin'}</div>
            <div style={{ height:'150px', width:'250px', cursor: 'pointer', background: `linear-gradient(${color1}, ${color2})`, borderRadius: '5%', color: 'white' }}>
                <div style={{ padding: '25px', display: 'flex', flexDirection: 'row' }}>
                    <div className="text-xl" style={{ fontSize: '50px', color: 'E4E4E4' }} >$</div>
                    <div className="text-xl" style={{ fontSize: '50px' }}>{props.value || '1820'}</div>
                </div>
                <div className='row' style={{ display: 'flex', paddingLeft: '25px' }}>
                    <div className="profit" style={{ padding: '10px', color: 'lightgreen', flexDirection: 'column', display: `${isProfit ? 'flex' : 'none'}` }}>
                        <div>Profit</div>
                        <div>{`+ ${props.profit || '2.4'} %`}</div>
                    </div>
                    <div className="loss" style={{ padding: '10px', color: 'orange', flexDirection: 'column', display: `${isProfit ? 'none' : 'flex'}` }}>
                        <div>Loss</div>
                        <div>{`- ${props.loss || '2.4'} %`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// props - 
// cryptoName
// value
// profit
// loss