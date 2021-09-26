export default function AssetsPage() {
    return (<div>

        <div className="dashboard-crumb"> Dashboard {'>'} Assets </div>
        <div className="asset-total"> Asset Tital: $insertNumber </div>
        <div className="asset-name"> Bicoin
            <div className="asset-graphic"> $insertValue
                <div className="bottom-left-graphic">
                    <p> Profit</p>
                    <p>+ insertPercent%</p>
                </div>
            </div>

        </div>

    </div>);
}