/* 
 * Component: SampleProjectFoo
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import './Foo.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import Paper from 'material-ui/Paper'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

class SampleProjectFoo extends Component {
    static propTypes = {
    };

    static defaultProps = {
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentWillMount() {
        // Component created
    }

    componentDidMount() {
        // Component ready
    }

    render() {
        return (
            <div className="sampleproject-foo">
                <Paper>
                    This is the "Foo" Page! Click <Link to="/bar">here</Link> to go to the "Bar" page.
                </Paper>
            </div>
        );
    }
}

export default SampleProjectFoo;
