export default function CryptoTileView() {
    const color1 = '#9381FF';
    const rgb = [color1.substring(1,3), color1.substring(3,5), color1.substring(5,7)];
    const color2 = `rgb(${rgb.map(c => (parseInt(c, 16) * 0.8)).join()})`;

    return (
        <div style={{ margin: '25px' }}>
            <div style={{ color: `${color1}` }}>Bitcoin</div>
            <div style={{ height:'150px', width:'250px', background: `linear-gradient(${color1}, ${color2})`, borderRadius: '5%', color: 'white' }}>
                <div className='row' style={{ padding: '10px' }}>
                    <span className="text-xl" style={{ color: 'E4E4E4' }} >$</span>
                    <span className="text-xl">1820</span>
                </div>
                <div className='row' style={{ display: 'flex' }}>
                    <div className="profit" style={{ padding: '10px' }}>
                        <div>Profit</div>
                        <div>{'+ <val> %'}</div>
                    </div>
                    <div className="loss" style={{ padding: '10px' }}>
                        <div>Loss</div>
                        <div>{'- <val> %'}</div>
                    </div>
                </div>
            </div>
        </div>);
}