import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from "./Question";
import axios from "axios";
import Constants from "../Constants";
import Result from "./Result";
import Spinner from "react-bootstrap/Spinner";
import Loading from "./Loading";
import Retry from './Retry'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false,
            questionReady: false,
            error: false,
            question: {text: '', URL: ['', '', '', '']},
            result: {title: '', personality: ''},
            lastAnswer: 0
        };
        this.nextQuestion(this.state.lastAnswer);
    }

    onRetryClick() {
        this.nextQuestion(this.state.lastAnswer);
    }

    setQuestion(question) {
        this.setState({questionReady: true, question: {text: question.text, URL: question.url}})
    }

    showResult(result) {
        this.setState({isOver: true, result: result});
    }

    nextQuestion(answer) {
        this.setState({questionReady: false, error: false, lastAnswer: answer});
        axios({
            method: "post",
            url: Constants.URL + Constants.GET_QUESTION_API,
            data: {
                id: this.props.match.params.id,
                answer: answer
            }
        }).then((response) => {
                if (response.data.state === 0)
                    this.setQuestion(response.data);
                else
                    this.showResult(response.data);
            }
        ).catch((reason) => {
            this.onError(reason);
        });
    }

    onError(reason) {
        this.setState({error: true});
    }

    render() {
        if (this.state.isOver)
            return (
                <div className="ResultPage">
                    <Result title={this.state.result.title} personality={this.state.result.personality}/>
                </div>
            );
        if (this.state.questionReady)
            return (
                <div className="App">
                    <Question question={this.state.question} answerCallback={this.nextQuestion.bind(this)}/>
                </div>
            );
        if (this.state.error)
            return (
                <Retry onClick={this.onRetryClick.bind(this)}/>
            );
        return (
            <Loading/>
        );
    }
}

export default App;
