import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from "react-router-dom";
import {RoomProvider} from "./Context/Context";

ReactDOM.render(

    <RoomProvider> {/*Обертка для Context API - основная цель - передача данных для компонентов.
    Для получения данных из стейта нужно заимпортить в компоненту RoomContext, компонтета должна быть
    классовой, создать в компоненте статический метод static contextType  = RoomContext; - это важно.
    Можно менять только название RoomContext, которое импортируется, после этого переданные данные будут
    доступны по this.context: const {name, surename} = this.context; пример теоретической детсруктуризации,
    если бы в стейте находился объекь з полями: name, surename.
    */}
        <Router>
            <App/>
        </Router>
    </RoomProvider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
