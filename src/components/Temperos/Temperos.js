import React from "react";
import './Temperos.css';

export default () => {
    return (
        <div className="temperos">
            <h3 className="temperosTitle">Plante <span>Temperos</span> Conosco</h3>

            <div className="temperosContent">                
                <div className="box tomilho">
                    <div className="boxText">
                        <h3 className="boxTitle">Tomilho</h3>
                        <p className="boxP">Erva picante, pungente, com notas de cravo da índia e hortelã, um toque de cânfora e sabor residual de enxague bucal. Seu aroma é quente, terroso e apimentado.</p>
                        <p className="link"><a href="https://www.receiteria.com.br/receitas-com-tomilho/"><span>Descubra mais</span></a></p>
                    </div>
                </div>
                
                <div className="box salsa">
                    <div className="boxText">
                        <h3 className="boxTitle">Salsa</h3>
                        <p className="boxP">A salsa é uma das ervas aromáticas mais populares da culinária mundial. Tem um sabor levemente picante e uma cor intensa, deixando os pratos mais bonitos, saborosos.</p>
                        <p className="link"><a href="https://www.receiteria.com.br/receitas-com-salsa/"><span>Descubra mais</span></a></p>
                    </div>
                </div>
                
                <div className="box alecrim">
                    <div className="boxText">
                        <h3 className="boxTitle">Alecrim</h3>
                        <p className="boxP">Tempero que pode ser usado em diferentes tipos de alimentos e combina com carne de boi, frango, carne de porco e cordeiro. O alecrim oferece diversos benefícios para o corpo.</p>
                        <p className="link"><a href="https://www.receiteria.com.br/receitas-com-alecrim/"><span>Descubra mais</span></a></p>
                    </div>
                </div>
                
                <div className="box manjericao">
                    <div className="boxText">
                        <h3 className="boxTitle">Manjericão</h3>
                        <p className="boxP">Tempero aromático é muito utilizado principalmente na culinária italiana, acompanhando massas, molhos vermelhos, carnes, entre outras receitas.</p>
                        <p className="link"><a href="https://www.receiteria.com.br/receitas-com-manjericao/"><span>Descubra mais</span></a></p>
                    </div>
                </div>
                
                <div className="box oregano">
                    <div className="boxText">
                        <h3 className="boxTitle">Orégano</h3>
                        <p className="boxP">Aquele tempero que dá um sabor incrível a diversos pratos é uma erva aromática originária da região mediterrânea. Muito utilizado nas culinárias italiana e portuguesa. </p>
                        <p className="link"><a href="https://www.receiteria.com.br/receitas-com-oregano/"><span>Descubra mais</span></a></p>
                    </div>
                </div>
                
                <div className="box hortela">
                    <div className="boxText">
                        <h3 className="boxTitle">Hortelã</h3>
                        <p className="boxP">Aquela folha miudinha e mais escura, que normalmente se encontra nas feiras, é a Hortelã. Muito utilizada para chá, suco e também no tempero de carnes e saladas.</p>
                        <p className="link"><a href="https://www.receiteria.com.br/receitas-com-hortela/"><span>Descubra mais</span></a></p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}