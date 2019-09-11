import React, { Component } from 'react';
import { Container, Header, Body, Logo, List, Flag, Star } from './styles';
import defaultLogo from '../../images/logo-default.svg';
import { MdStar, MdStarBorder } from 'react-icons/md';

export default class Home extends Component {
  state = {
    dicionario: [
      {
        key: 'PALAVRA',
        value: 'Palavra',
        currentLang: 'br',
        translatedLangs: ['us', 'es', 'br'],
        favorite: true,
      },
      {
        key: 'PALAVRA1',
        value: 'Palavra',
        currentLang: 'br',
        translatedLangs: ['us', 'es', 'ru'],
        favorite: true,
      },
    ],
  };

  handleChange = (e, key) => {
    var target = e.target.value;
    this.setState(state => {
      const words = state.dicionario.map(word => {
        if (word.key === key) {
          word.value = target;
        }
      });
      return words;
    });
  };

  handleFavorite = key => {
    this.setState(state => {
      const words = state.dicionario.map(word => {
        if (word.key === key) {
          word.favorite = word.favorite ? false : true;
        }
      });
      return words;
    });
  };

  render() {
    const { dicionario } = this.state;
    return (
      <Container>
        <Header>
          <Logo>
            <img src={defaultLogo} />
            <span>PZM Translate</span>
          </Logo>
        </Header>
        <Body>
          <List>
            {dicionario.map((element, index) => (
              <li key={element.key}>
                <span>{element.key}</span>
                <div>
                  {element.favorite ? (
                    <MdStar
                      size={22}
                      color="#f0e813"
                      onClick={() => this.handleFavorite(element.key)}
                    />
                  ) : (
                    <MdStarBorder
                      size={22}
                      color="#FFF000"
                      onClick={() => this.handleFavorite(element.key)}
                    />
                  )}
                  <input
                    type="text"
                    value={element.value}
                    onChange={e => this.handleChange(e, element.key)}
                  />
                  {element.translatedLangs.map(flag => (
                    <Flag code={flag} svg />
                  ))}
                </div>
              </li>
            ))}

            {/* <li>
              <span>PALAVRA</span>
              <div>
                <MdStarBorder size={22} color="yellow" />
                <input type="text" value="PALAVRA" />
                <Flag code="us" svg />
              </div>
            </li> */}
          </List>
        </Body>
      </Container>
    );
  }
}
