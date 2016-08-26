/* 
 * Component: SampleProjectBar
 */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// CSS
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import './Bar.less';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// External Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper'

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Internal Dependencies
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// ...

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
// Component Definition
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

class SampleProjectBar extends Component {
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
            <div className="sampleproject-bar">
                <Paper>
                    This is the "Bar" Page!
                </Paper>
            </div>
        );
    }
}

export default SampleProjectBar;
