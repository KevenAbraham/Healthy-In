import React from "react";
import './Conheca.css';
import eating from '../../img/eating.svg';
import food from '../../img/food.svg';
import meditating from '../../img/meditating.svg';
import check from '../../img/check.svg';

function Conheca() {
    return (
        <div className="conheca">
            <h2 className="conhecaTitle">O que é o Projeto Healthy-In?</h2>

            <div className="conhecaContainer">
                <div className="content">
                    <p>O Projeto Healthy-In visa conscientizar a comunidade a plantar e praticar o hábito alimentar de forma mais saudável, à fim de prolongar a vida.</p>
                    <div className="check">
                        <img src={check} /> 
                        <label>Aprenda a plantar temperos</label>
                    </div>
                    <div className="check">
                        <img src={check} /> 
                        <label>Aprenda a plantar legumes</label>
                    </div>
                    <div className="check">
                        <img src={check} /> 
                        <label>Descubra receitas deliciosas</label>
                    </div>
                    <div className="check">
                        <img src={check} /> 
                        <label>Tenha uma vida saudável</label>
                    </div>
                </div>

                <div className="images">
                    <div className="sideBySide">
                        <img src={meditating} />
                        <img src={eating} />
                    </div>
                    <img src={food} />
                </div>
            </div>
        </div>
    );
}

export default Conheca;