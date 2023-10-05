import React from "react";
import './Verduras.css';

export default () => {
    return (
        <div className="verduras">
            <h3 className="verdurasTitle">Plante <span>Verduras</span> Conosco</h3>

            <div className="verdurasContent">                
                <div className="box alface">
                    <div className="boxText">
                        <h3 className="boxTitle">Alface</h3>
                        <p className="boxP">Folhas crocantes e refrescantes que podem ser a base perfeita para saladas saudáveis. Alface é uma hortense anual ou bienal, utilizada na alimentação humana desde cerca de 500 a.C..</p>
                        <p className="link"><span>Descubra mais</span></p>
                    </div>
                </div>
                
                <div className="box cebolinha">
                    <div className="boxText">
                        <h3 className="boxTitle">Cebolinha</h3>
                        <p className="boxP">Uma das hortaliças mais utilizadas e comercializadas em todo o mundo, as cebolinhas frescas dão um toque de sabor especial e suave a diversos pratos de nossas rotinas diárias.</p>
                        <p className="link"><span>Descubra mais</span></p>
                    </div>
                </div>
                
                <div className="box espinafre">
                    <div className="boxText">
                        <h3 className="boxTitle">Espinafre</h3>
                        <p className="boxP">O espinafre é uma verdura caracterizada por suas folhas verdes escuras e é rico em nutrientes, sendo uma excelente fonte de vitaminas e minerais essenciais, como as vitaminas K, A, C, ácido fólico, ferro e cálcio.</p>
                        <p className="link"><span>Descubra mais</span></p>
                    </div>
                </div>
                
                <div className="box couve">
                    <div className="boxText">
                        <h3 className="boxTitle">Couve</h3>
                        <p className="boxP">A couve é uma verdura crucífera, com folhas verdes e rica em nutrientes, além de ser versátil podendo ser usada em pratos quentes e frios.</p>
                        <p className="link"><span>Descubra mais</span></p>
                    </div>
                </div>
                
                <div className="box rucula">
                    <div className="boxText">
                        <h3 className="boxTitle">Rúcula</h3>
                        <p className="boxP">Uma verdura da mesma família que a mostarda, Brassicaceae, originária do Mediterrâneo e da Ásia Ocidental, a rúcula adiciona um toque picante e fresco às saladas.</p>
                        <p className="link"><span>Descubra mais</span></p>
                    </div>
                </div>
                
                <div className="box acelga">
                    <div className="boxText">
                        <h3 className="boxTitle">Acelga</h3>
                        <p className="boxP">A acelga, também conhecida como beterraba branca, é uma hortaliça de talos longos e firmes, as folhas podem ser opacas ou brilhantes na coloração verde ou avermelhada.</p>
                        <p className="link"><span>Descubra mais</span></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}