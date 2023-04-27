import React from "react";
import "./result.css"
import { connect } from 'react-redux';

const Result =(props)=>{
    return (
        <div className={`result ${props.ind} ${props.ind === 4 ? "active": "non-active"}`} style= {{width: props.disp? "100vw" : "900px"}}>
            {props.disp?<h2>Вам подходят следующие часы:</h2>:<h2>Наши часы: </h2>}
            <div className="watches">
            {props.watches.length?
            props.watches.map(item=>
                <div className="watch_item">
                    <p>{item.model}</p>
                    <img src={item.photo}></img>
                    <div>
                        <h2>Характеристики:</h2>
                        <div className="chars">
                            <p><b>Тип:</b> {item.Type}</p>
                            <p><b>Производитель:</b> {item.Maker}</p>
                            <p><b>Цена:</b> {item.Price}</p>
                            <p><b>Цвет:</b> {item.Colour}</p>
                            <p><b>Материал ремешка:</b> {item.guard}</p>
                            <p><b>Материал корпуса:</b> {item.Body}</p>
                        </div>
                    </div>
                    </div>
            ) : <p className="err">К сожалению, ничего не нашлось :( </p>}
            </div>
        </div>
    )
}
const mapStateToProps = function(state) {
    return {
        watches: state.setNum.watches
    }
  }
export default connect(mapStateToProps)(Result)