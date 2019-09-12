import React, { Component } from 'react';
import {
  Container,
  Header,
  Body,
  Logo,
  Main,
  MainHeader,
  MainBody,
  SideList,
  SearchInput,
  Flag,
  Chat,
} from './styles';
import defaultLogo from '../../images/logo-default.svg';
import { MdStar, MdStarBorder, MdSearch } from 'react-icons/md';
import api from '../../services/api';
export default class Home extends Component {
  state = {
    dicionario: [],
    selectedWord: [],
    languages: [],
    currentLang: 'br',
  };

  async componentDidMount() {
    const response = await api.get('/translate/br');
    const lang = await api.get('/languages');
    const langs = [];
    lang.data.map(element => {
      langs.push({ lang: element, active: false });
    });
    this.setState({
      dicionario: response.data,
      languages: langs,
    });
  }

  handleChange = (e, key) => {
    var target = e.target.value;
    this.setState(state => {
      const words = state.dicionario.map(word => {
        if (word.Word.key === key) {
          word.translated = target;
        }
      });
      return words;
    });
  };

  handleFavorite = key => {
    this.setState(state => {
      const words = state.dicionario.map(word => {
        if (word.Word.key === key) {
          word.favorite = word.favorite ? false : true;
        }
      });
      return words;
    });
  };

  handleSelectWord = e => {
    const { dicionario } = this.state;
    const word = dicionario.find(element => element.Word.key === e);
    this.setState({ selectedWord: [word] });
  };

  handleActiveLanguages(lang) {
    const languages = this.state;

    languages.map(element => {
      if (element.lang === lang) {
        element.active = true;
      }
    });

    this.setState({
      languages,
    });
  }
  render() {
    const { dicionario, selectedWord } = this.state;

    return (
      <Container>
        <Header>
          <Logo>
            <img src={defaultLogo} />
            <span>PZM Translate</span>
          </Logo>
        </Header>
        <Body>
          <SideList>
            <SearchInput>
              <MdSearch />
              <input type="text" placeholder="Pesquisar" />
            </SearchInput>
            <ul>
              {dicionario.map(element => (
                <li
                  key={element.Word.key}
                  onClick={() => this.handleSelectWord(element.Word.key)}
                >
                  {element.Word.value}
                </li>
              ))}
            </ul>
          </SideList>
          <Main>
            {selectedWord.map(element => (
              <>
                <MainHeader>
                  <h1>{element.Word.value}</h1>
                  {element.favorite ? (
                    <MdStar
                      size={50}
                      color="#f0e813"
                      onClick={() => this.handleFavorite(element.Word.key)}
                    />
                  ) : (
                    <MdStarBorder
                      size={50}
                      color="#f0e813"
                      onClick={() => this.handleFavorite(element.Word.key)}
                    />
                  )}
                </MainHeader>
                <MainBody>
                  <div>
                    <span>Idiomas Disponíveis: </span>
                    {this.state.languages.map(element => (
                      <Flag
                        code={element.lang}
                        svg
                        onClick={this.handleActiveLanguages}
                        active={this.state.active}
                      />
                    ))}
                  </div>
                  <textarea
                    type="text"
                    value={element.translated}
                    onChange={e => this.handleChange(e, element.Word.key)}
                  />
                </MainBody>
              </>
            ))}
          </Main>
          {/* <List>
            {dicionario.map((element, index) => (
              <li key={element.Word.key}>
                <span>{element.Word.value}</span>
                <div>
                  {element.favorite ? (
                    <MdStar
                      size={22}
                      color="#f0e813"
                      onClick={() => this.handleFavorite(element.Word.key)}
                    />
                  ) : (
                    <MdStarBorder
                      size={22}
                      color="#FFF000"
                      onClick={() => this.handleFavorite(element.Word.key)}
                    />
                  )}
                  <input
                    type="text"
                    value={element.translated}
                    onChange={e => this.handleChange(e, element.Word.key)}
                  />
                  
                </div>
              </li>
            ))}

            
          </List> */}
          <Chat></Chat>
        </Body>
      </Container>
    );
  }
}
