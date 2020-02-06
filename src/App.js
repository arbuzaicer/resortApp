import React from 'react';
import styles from './App.css'
import Home from "./Components/Home/Home";
import Rooms from "./Components/Rooms/Rooms";
import {SingleRoom} from "./Components/singleRoom/SingleRoom";
import Error from "./Components/Error/Error";
import {Route, Switch} from 'react-router-dom'
import Navbar from "./Components/Navbar/Navbar";

function App() {

    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/rooms/" component={Rooms}/>
                <Route exact path="/rooms/:slug" component={SingleRoom}/>
                {/*Slug - это ключ/кастомный, можно назвать как хочешь.
            Главное при прописывании роутов использовать именно его*/}
                <Route component={Error}/>
            </Switch>
            {/*Switch юзается тут для того, что бы словить ошибки линков
            Т.е. если ссылки не номер не существует, будет срабатывать свич
            и рендерится компонента Error. Все, что не оборачивается внутри свича будет рендерится
            всегда.*/}
        </>
    );
}

export default App;
