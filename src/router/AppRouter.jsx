import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "../pages/App";
import StravaRedirect from "../pages/StravaRedirect";
//import YourDistance from "../pages/YourDistance";

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Switch>
                        <Route path="/" component={App} exact={true} />
                        <Route path="/redirect" component={StravaRedirect} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;