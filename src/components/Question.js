import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components.css"
import Story from "./Story";
import Choices from "./Choices";
import ProgressBar from "react-bootstrap/ProgressBar";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOver: false, question: props.question}
    }

    render() {
        return (
            <div className="question h-100">
                <ProgressBar now={this.props.progress} variant="success"/>
                <Story text={this.props.question.text} className="m-auto"/>
                <Choices className="m-auto"
                         answerCallback={this.props.answerCallback}
                         src={this.props.question.URL}
                         desc={this.props.question.desc}
                />
            </div>
        )
    }
}

export default Question;