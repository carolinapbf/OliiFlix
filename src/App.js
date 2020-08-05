import React from 'react';
import Menu from './componentes/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import Banner from './componentes/BannerMain';
import Caroulsel from './componentes/Carousel';
import Footer from './componentes/Footer';
import BannerMain from './componentes/BannerMain';



function App() {
  return (
    <div >
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}
      />
        
    </div>
  );
}

export default App;
