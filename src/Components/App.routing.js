import { BrowserRouter, Route ,Switch } from "react-router-dom";
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