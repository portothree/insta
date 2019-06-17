import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route path="/" component={Feed} />
            <Route path="/" component={New}  />
        </Switch>
    );
}

export default Routes;