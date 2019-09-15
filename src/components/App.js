import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from "./Question";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Question userId={this.props.match.params.id}/>
            </div>
        );
    }
}

export default App;
