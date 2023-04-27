import './App.css';
import Diagram from './body/diagram';
import questions from "./body/questions.json"
import {createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reducer from "./redux/reducers/combine"
import thunk from 'redux-thunk';
import React,{useState} from 'react';

function App() {
  const store = createStore (reducer, compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
  const [open, openChose] = useState(false)
  return (
    <Provider store = {store}>
        <div className="App"  style={{background: `url(${require('./static/background.jpg')}) 1vh 1vh repeat`}}>
          <div className='welcome'>
            <h1 style={{display: open? "none": ""}}>Добро пожаловать в "Мир часов"</h1>
            <button className = "btn" style={{display: open? "none": ""}}onClick= {()=> openChose(true)}> Выбрать часы </button>
          </div>
          {open? 
          questions.map ((item,index)=>{
          return(
            <Diagram numb = {item.id} key ={index} ind={index} ques={item.question} vara={item.vara} varb={item.varb} varc={item.varc} vard={item.vard}/>
          )}) : ""
          }
        </div>
    </Provider>
  );
}

export default App;
