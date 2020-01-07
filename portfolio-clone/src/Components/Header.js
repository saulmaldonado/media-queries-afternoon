import React from 'react'
import './Header.css'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            nav: 'nav-bar',
            list: 'no-mini-list'
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = e => {
        if(window.scrollY > 200){
            this.setState({nav: 'small-nav-bar'})
        } else {
            this.setState({nav: 'nav-bar'})
        }
    }

    showList = () => {
        if(this.state.list === 'no-mini-list'){

            this.setState({list: 'mini-list'})
        }else{
            this.setState({list: 'no-mini-list'})
        }

    }

    render(){
        return(
            <>
            <header>
                <nav>
                    <div id={this.state.nav}>
                        <div id='title'>Start Bootstrap</div>
                        <ul id='nav-links'>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                        </ul>
                        <button id='menu-icon' onClick={this.showList}> Menu
                            <img src='https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png' />
                        </button>
                    </div>
                    <ul id={this.state.list}>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>ABOUT</li>
                        <li>TEAM</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>

                <main>
                    <div id='welcome'>Welcome To Out Studio!</div>
                    <div id='nice'>IT'S NICE TO MEET YOU</div>
                    <button id='tell'>TELL ME MORE</button>
                </main>

            </header>
            <body>

            </body>
            </>
            
        )
    }
}