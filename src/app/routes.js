/* 
 * Component: AlchemySelectCampaignType
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import React from 'react'
import { Route, IndexRoute } from 'react-router'


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import SampleProject from './components/SampleProject'

import SampleProjectFoo from './pages/foo/Foo'
import SampleProjectBar from './pages/bar/Bar'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Routes Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

export default (
    <Route path="/" component={SampleProject}>

        <IndexRoute component={SampleProjectFoo}/>

        <Route path="/bar" component={SampleProjectBar}>
        </Route>
    </Route>
)
