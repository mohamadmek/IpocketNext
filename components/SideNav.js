import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true,
    }
  }

  render() {
    const SideNav = styled.div`
      position: relative;
      height: 100vh;
      background-color: rgb(95, 113, 132);
      z-index: 2;
      width: 18%;
      transform: translateX(${props => props.showSideBar ? '0' : '-250px'});
      display: ${props => props.showSideBar ? '0' : 'none'};
      display: inline-block;
      .SideNav_profile{
        border-radius: 50%;
        width: 100px;
        height: 100px;
      }
      .SideNav_logout{
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .btn_logout{
        background: none;
        border: none;
      }
    `;

    const TopBar = styled.div`
      width: ${props => props.showSideBar ? '82%' : '100%'};
      background-color: rgb(81, 197, 183);
      height: 70px;
      position: absolute;
      top: 0;
      margin-left: ${props => props.showSideBar ? '244px' : '0'};
    `;
    const Burger = styled.button`
      /* position: absolute;
      top: 10px;
      right: 10px; */
      align-self: flex-start;
      transform:translateX(${props => props.showSideBar ? '0' : '12px'});
      margin-top: 20px;
    `;
    const toogleBurger = () => {
      this.setState({
      showSideBar: !this.state.showSideBar
      })
    }

    const Tab = styled.button`
      text-align: left;
      background: none;
      width: 100%;
      border: none;   
      display: block;
      padding-left: 35px;
      margin-bottom: 15px;
      font-weight: bold;
      background-color: rgba(150, 100, 110,0.1);
    `;
    return (
      <>
      <div style={{ display: 'flex'}}>
        <SideNav showSideBar={this.state.showSideBar}>
            <div style={{textAlign:'center',fontWeight:'bold',marginTop:'20px',fontSize:'1.5rem'}}>Ipocket</div>
            <div className="SideNav_logout" style={{marginTop: '20px'}}>
              <img className="SideNav_profile" src="../static/01-shutterstock_476340928-Irina-Bg-1024x683.jpg"></img>
              <button className="btn_logout" style={{marginTop: '15px', fontWeight:'bold'}}>
               <Link href="/auth"><a style={{textDecoration:'none', color: 'black'}}>Logout</a></Link>
              </button>
            </div>
            <div style={{marginTop: '30px'}}>
              <Tab>Account</Tab>
              <Tab>Income</Tab>
              <Tab>Expenses</Tab>
              <Tab>Transactions</Tab>
            </div>
        </SideNav>
        <div style={{marginTop:'90px'}}>
          mohamad
        </div>
        
      </div>
      <TopBar showSideBar={this.state.showSideBar}>
      <Burger 
      showSideBar={this.state.showSideBar} 
      onClick={toogleBurger}>
        <i class="fa fa-bars" style={{fontSize:'20px',color:'black'}}>mo</i>
      </Burger>
    </TopBar>
    </>
    )
  }
}

export default SideNav;
