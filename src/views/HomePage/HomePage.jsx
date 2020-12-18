
import React, { Component } from 'react'
import {UserService} from '../../services/UserService'
import {BitcoinService} from '../../services/BitcoinService'

import './HomePage.scss'

export default class HomePage extends Component {
    state = {
        user: null,
        btcPrice: null
    }

    async componentDidMount() {
        const user = UserService.getUser();
        const btcPrice = await BitcoinService.getRate(user.coins);
        this.setState({user,btcPrice});
    }

    render() {
        const {user,btcPrice} = this.state
        return (
            <div>
                <h1>HomePage</h1>
                <h4>Hello {user ? user.name : ''}</h4>
                <p>Coins: {user ? user.coins : ''}</p>
                <p>BTC: {btcPrice ? btcPrice : ''}</p>

                <button>Show contacts</button>
            </div>
        )
    }
}

