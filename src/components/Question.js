import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components.css"
import Story from "./Story";
import Choices from "./Choices";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOver: false, question: props.question}
    }

    render() {
        return (
            <div className="question h-100">
                <Story text={this.props.question.text} className="m-auto"/>
                <Choices className="m-auto"
                         answerCallback={this.props.answerCallback}
                         src={this.props.question.URL}/>
            </div>
        )
    }
}

export default Question;