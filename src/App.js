import React, { Component } from 'react';
import './App.css';
import {Layout, Header ,Navigation,Drawer,Content,Grid,Cell} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          {/* <Header className="header-color" title="SERVICIOS DE SALUD - TACNA" scroll> */}
          <Header title={<span><span style={{ color: '#ddd' }}>SERVICIOS DE SALUD / </span><strong>Tacna</strong></span>}>
              <Navigation>
                <Link to="/odontologos">ODONTOLOGOS</Link>
                <Link to="/spa's">SPA'S</Link>
                <Link to="/clinicas">CLINICAS</Link>
                <Link to="/opticas">OPTICAS</Link>
                <Link to="/tomografia">TOMOGRAFIA</Link>
                <Link to="/medicina">MEDICINA ESTETICA</Link>
              </Navigation>
          </Header>
          <Drawer title="SERVICIOS DE SALUD - TACNA">
              <Navigation>
              <Link to="/odontologos">ODONTOLOGOS</Link>
                <Link to="/spa's">SPA'S</Link>
                <Link to="/clinicas">CLINICAS</Link>
                <Link to="/opticas">OPTICAS</Link>
                <Link to="/tomografia">TOMOGRAFIA</Link>
                <Link to="/medicina">MEDICINA ESTETICA</Link>
              </Navigation>
          </Drawer>
          <Content>
              <Grid>
                <Cell col={3}>
                    aqui iria los sladers
                </Cell>
                <Cell col={7}>
                  <Main/>
                </Cell>
                <Cell col={2}>
                  los demas
                </Cell>
              </Grid>
          </Content>
      </Layout>
  </div>  
    );
  }
}

export default App;