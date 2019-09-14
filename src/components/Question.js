import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components.css"
import Story from "./Story";
import Choices from "./Choices";

class Question extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isOver: false, question: {text: '', url1: '', url2: ''}}
    }

    nextQuestion(answer) {
        console.log('next question ' + this.state.isOver)
    }

    render() {
        return (
            <div className="question h-100">
                <Story text="سلام جهان" className="m-auto"/>
                <Choices className="m-auto"
                         answerCallback={this.nextQuestion.bind(this)}
                         src1="https://www.picmonkey.com/_/static/images/wall/evergreen/samples/default.947e7aff0713.jpg"
                         src2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_kzJ0rydH34OAftFVHOlKNkEywRfLw3qWgb_xRBk3GkDxq4CU"/>
            </div>
        )
    }
}

export default Question;