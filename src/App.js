import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ImgPrimary from './Components/ImgPrimary/imgPrimery';
import NavMenu from './Components/navMenu/navMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ImgPrimary></ImgPrimary>
          </Col>
        </Row>
        <Row>
            <NavMenu></NavMenu>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            Aqui va otra cosa
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
