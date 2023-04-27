import React, {useState} from "react";
import "./diagram.css"
import * as Actions from "../redux/reducers/actions";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import diagram from './questions.json';
import Result from "./result";

const Diagram = (props)=>{
    const {setNumber, selectWatches} = props.actions
    const [close,closequest] = useState (false)
    const setNumReq = (e) => {
        selectWatches(e.target.name, e.target.attributes[0].nodeValue)
        if (props.num === diagram.length-1){
            closequest(true)
        } else {
            setNumber(props.num + 1)
        }
    }
    return(
        <>
        <div className="body">
            <div className={`diagram ${props.ind === props.num ? "active": "non-active"}`}>
                <div className="question" style={{display: close? "none": "flex"}}>
                    <h2>{props.ques}</h2>
                    <div className="variants">
                        <button numb= {props.numb} name = {props.vara} onClick = {(e)=>setNumReq(e)}>{props.vara}</button>
                        <button numb= {props.numb} name = {props.varb} onClick = {(e)=>setNumReq(e)}>{props.varb}</button>
                        <button numb= {props.numb} name = {props.varc? props.varc: ""} onClick = {(e)=>setNumReq(e)} style={{display: props.varc? "block": "none"}}>{props.varc}</button>
                        <button numb= {props.numb} name = {props.vard? props.vard: ""} onClick = {(e)=>setNumReq(e)} style={{display: props.vard? "block":"none"}}>{props.vard}</button>
                    </div>
                </div>
            </div>
            <div>
                <Result ind={props.ind} disp={close}/>
            </div>
        </div>

    </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators (Actions,dispatch)
    }
}
const mapStateToProps = function(state) {
    return {
        num: state.setNum.number,
        openRes: state.setNum.openRes
    }
  }
export default connect(mapStateToProps, mapDispatchToProps) (Diagram)