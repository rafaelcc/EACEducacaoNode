import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import LessonPlan from './pages/LessonPlan';
import Home from './pages/Home';
import LessonCurr from './pages/LessonCurr';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />

                <Route path="/home" component={Home} />
                <Route path="/lessonplan" component={LessonPlan} />
                <Route path="/lessoncurr" component={LessonCurr} />
            </Switch>
        </BrowserRouter>
    )

}