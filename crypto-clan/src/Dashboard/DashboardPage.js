import axios from 'axios';
import { Component } from 'react';
import CryptoTileView from '../Components/CryptoTileView';
import SidebarView from '../Sidebar/SidebarView';

export default class DashboardPage extends Component {

    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount = () => {
        axios.get('http://e0dd-67-8-247-98.ngrok.io/api/v1/user/')
            .then(user => {
                global.user = user;
                this.setState({ user: user });
            })
            .catch(e => {
                console.error(e);
            });

        // Do an API call here to fetch all the assets
        // Do an API call here to fetch all the recent values of cryptos
    };

    render = () => {
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
            </div>
        );
    }
}