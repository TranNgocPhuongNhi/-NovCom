import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from '../components/Home';
import Main from '../components/Main';
import All from '../components/All';
import Detail from '../components/Detail';
import Reading from '../components/Reading';
import Followed from '../components/Followed';

class DieuHuongURL extends React.Component {
    render() {
        return (
            <div id="body">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/tieu-thuyet" component={Main}/>
                    <Route exact path="/truyen-tranh" component={Main}/>
                    <Route exact path="/truyen-theo-doi" component={Followed}/>
                    <Route exact path="/tieu-thuyet/:name" component={Detail}/>
                    <Route path="/tieu-thuyet/:name/:chapter" component={Reading}/>
                    {/* <Route path="/tieu-thuyet/tat-ca-truyen" component={All}/> */}
                </Switch>
                
            </div>
        )
    }
}

export default DieuHuongURL;