import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import SideNav from '../components/SideNav'
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideBar: true,
    }
  }

  render() {
    return (
      <div>
        <SideNav />
      </div>
    )
  }
}



export default Home;
