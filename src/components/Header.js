import React from 'react'
import Monkeypic from "./monkey.png";

function Header() {
    return (
        <nav style={navStyle}>
            <img style={stylesImg} src={Monkeypic} alt="monkey"></img>
            <h1 style={styleH}> WELCOME TO ONLINE CASINO</h1>
            <button className="btn" style={styleBtn}>Log in</button>
        </nav>
    )
}

const navStyle = {
    background: '#E58320',
    height: '75px',
    paddingTop: '30px',
    textAlign: 'center'
}

const stylesImg = {
    height: '50px',
    float: 'left',
    marginLeft: '25px'
}

const styleH = {
    display: 'inline',
    fontSize: '35px',
    fontFamily: 'Times New Roman'
    // marginTop: '50px'
}

const styleBtn = {
    float: 'right',
    marginRight: '25px'
}

export default Header;