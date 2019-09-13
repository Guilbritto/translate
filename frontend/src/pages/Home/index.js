import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
  MainFooter,
  SideItem,
} from './styles';
import defaultLogo from '../../images/logo-default.svg';
import { MdStar, MdStarBorder, MdSearch } from 'react-icons/md';
import api from '../../services/api';
export default class Home extends Component {
  state = {
    dicionario: [],
    words: [],
    selectedWord: {},
    languages: [],
    currentLang: 'br',
  };

  async componentDidMount() {
    document.addEventListener('keydown', this.handleTab);

    const response = await api.get('/word');
    const lang = await api.get('/languages');
    const langs = [];

    lang.data.map(element => {
      langs.push({ lang: element, active: false });
    });
    this.setState({
      words: response.data,
      languages: langs,
    });
  }

  handleChange = (e, key) => {
    const target = e.target.value;
    const { selectedWord } = this.state;

    selectedWord.translated = target;

    this.setState({
      selectedWord,
    });
  };

  handleFavorite = key => {
    this.setState(async state => {
      const { selectedWord } = this.state;
      selectedWord.favorite = selectedWord.favorite ? false : true;
      const response = await api.put('/translate', {
        favorite: selectedWord.favorite,
        id: selectedWord.id,
      });
      if (response.status === 200) {
        toast('Palavra Favoritada com sucesso!', { type: toast.TYPE.INFO });
      }
      return response.data;
    });
  };

  handleSubmit = async () => {
    const { selectedWord } = this.state;
    const response = await api.put('/translate', selectedWord);
  };

  async handleSelectWord(e) {
    const response = await api.get(`/translate/${e}?lang=br`);
    const { words } = this.state;

    const index = words.findIndex(element => e === element.key);

    const active = words.findIndex(element => {
      if (element.active === true) {
        return element;
      }
    });

    if (active !== -1) {
      words[active].active = false;
    }
    words[index].active = true;

    this.setState({ selectedWord: response.data, words });
  }

  handleSearch = async e => {
    if (e.target.value.length > 4 || e.target.value.length === 0) {
      const response = await api.get(`/word/${e.target.value}`);
      this.setState({
        words: response.data,
      });
    }
  };

  handleActiveLanguages = async lang => {
    const e = this.state.selectedWord.Word.key;
    const response = await api.get(`/translate/${e}?lang=${lang}`);
    this.setState({ selectedWord: response.data });
  };

  handleShortCut = e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const { words } = this.state;
      const active = words.findIndex(element => {
        if (element.active === true) {
          return element;
        }
      });
      this.handleSelectWord(words[active + 1].key);
    } else {
      console.log(e);
    }
  };
  cursorToTheEnd(e) {
    var temp = e.target.value;
    e.target.value = '';
    e.target.value = temp;
  }
  render() {
    const { words, selectedWord } = this.state;

    return (
      <Container onKeyDown={this.handleShortCut}>
        <Header>
          <Logo>
            <img src={defaultLogo} />
            <span>PZM Translate</span>
          </Logo>
          <ToastContainer />
        </Header>
        <Body>
          <SideList>
            <SearchInput>
              <MdSearch />
              <input
                type="text"
                placeholder="Pesquisar"
                onChange={this.handleSearch}
              />
            </SearchInput>
            <ul>
              {words.map(element => (
                <SideItem
                  active={element.active}
                  key={element.key}
                  onClick={() => this.handleSelectWord(element.key)}
                >
                  {element.value}
                </SideItem>
              ))}
            </ul>
          </SideList>
          {selectedWord.favorite !== undefined && (
            <Main>
              <MainHeader>
                <h1>{selectedWord.Word.value}</h1>
                {selectedWord.favorite ? (
                  <MdStar
                    size={50}
                    color="#f0e813"
                    onClick={() => this.handleFavorite(selectedWord.Word.key)}
                  />
                ) : (
                  <MdStarBorder
                    size={50}
                    color="#f0e813"
                    onClick={() => this.handleFavorite(selectedWord.Word.key)}
                  />
                )}
              </MainHeader>
              <MainBody>
                <div>
                  <span>Idiomas Disponíveis: </span>

                  {this.state.languages.map(element => (
                    <div
                      key={element.lang}
                      onClick={() => this.handleActiveLanguages(element.lang)}
                    >
                      <Flag
                        key={element.lang}
                        code={element.lang}
                        svg
                        active={this.state.active}
                      />
                    </div>
                  ))}
                </div>
                <textarea
                  type="text"
                  name="translated"
                  id="translated"
                  autoFocus
                  onFocus={this.cursorToTheEnd}
                  value={selectedWord.translated}
                  onChange={e => this.handleChange(e, selectedWord.Word.key)}
                />
              </MainBody>
              <MainFooter>
                <button onClick={this.handleSubmit}> Salvar </button>
              </MainFooter>
            </Main>
          )}

          <Chat></Chat>
        </Body>
      </Container>
    );
  }
}
