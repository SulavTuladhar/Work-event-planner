import { Routes } from "react-router-dom";
import { BrowserRouter, Route ,Switch } from "react-router-dom";
import { HeaderComponents } from "./Header/Header.components";
import { HomeComponents } from './Home/Home.components';

export const AppRouting = (pros) =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ HomeComponents } exact/>
            </Switch>
        </BrowserRouter>
    )
}