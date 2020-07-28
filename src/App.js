import React from 'react';
import Menu from './Components/Menu'
import './index.css'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './Components/BannerMain'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu/>
      <BannerMain 
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript parte da rotina das desenvolvedoras e desnvovlvedores. Mas o que els fazem afinal? Descubra com a Vanessa!"}
        />

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[1]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[2]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[3]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[4]}
        /> 
                <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[5]}
        /> 

        <Footer />
    </div>
  );
}

export default App;
