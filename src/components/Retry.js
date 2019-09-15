import React from 'react';
import retry from '../retry.png'

class Retry extends React.Component {
    render() {
        return (
            <div className="App">
                <img className="retry-png m-auto" src={retry} onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default Retry;