import { HomeStyle } from "../css/HomeStyle";
import Tabela from "../components/Tabela.jsx";

import {Link} from 'react-router-dom';
import Corrida from "../components/Corrida.jsx";
import { CorridaStyle } from "../css/CorridaStyle.jsx";

const Home = () => {

    return (
        <HomeStyle>
        <section id="home">
            <div id="noticias">
                <h1>Últimas Notícias</h1>
                <div className="noticia">
                    <img alt="thumbnail" src="./src/assets/thumbnail/noticia1.jpeg" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia">ERT vira Kiro após concluir negociação para ser cliente da Porsche na Fórmula E</Link></h3>
                </div>
                <div className="noticia">
                    <img alt="thumbnail" src="./src/assets/thumbnail/noticia2.webp" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia2">Fórmula E promove teste exclusivo para mulheres em Valência em novembro</Link></h3>
                </div>
                <div className="noticia">
                    <img alt="thumbnail" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia2">Mitch Evans destrói corrida</Link></h3>
                </div>
                <div className="noticia">
                    <img alt="thumbnail" className="noticia-thumbnail"/>
                    <h3 className="noticia-titulo"><Link to="/noticias/noticia2">Mitch Evans destrói corrida</Link></h3>
                </div>
            </div>

            <div id="ultimas-corridas">
                <h1>Últimas Corridas</h1>

                <Corrida cidade="Paris, França" corrida="corrida-1" />
                <Corrida cidade="Madrid, Espanha" corrida="corrida-2" />
                <Corrida cidade="Lisboa, Portugal" corrida="corrida-3" />
            </div>

            <div id="proxima-corrida">
                <h1>Próxima Corrida</h1>
                <h2>GP da Espanha</h2>
                <div id="corrida">
                    <img id="nextrace-picture" src="/src/assets/formula-e.webp" alt="foto" className="corrida-item"/>
                    <div id="nextrace-data" className="corrida-item">
                        <div id="nextrace-place" className="race-stat">MADRID</div>
                        <div id="nextrace-date" className="race-stat">Data: 22/06/2024</div>
                        <div id="nextrace-time" className="race-stat">às 10h00 - horário de Brasília GMT-3</div>
                    </div>
                    <div id="buttons" className="corrida-item">
                        <div id="watch-button" className="btn">Assistir no YouTube</div>
                        <div id="purchase-button" className="btn">Comprar Ingresso</div>
                    </div>
                </div>
            </div>

            <Tabela size={8}></Tabela>
        </section>
        </HomeStyle>
    );

};

export default Home;