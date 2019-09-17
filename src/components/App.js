import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Question from "./Question";
import axios from "axios";
import Constants from "../Constants";
import Result from "./Result";
import Loading from "./Loading";
import Retry from './Retry'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOver: false,
            questionReady: false,
            error: false,
            question: {text: '', URL: ['', '', '', ''], desc: ['','','','']},
            result: {title: '', personality: ''},
            lastAnswer: 0,
            QIdx: -1
        };
    }

    componentDidMount() {
        this.nextQuestion(this.state.lastAnswer);
    }

    onRetryClick() {
        this.nextQuestion(this.state.lastAnswer);
    }

    setQuestion(question) {
        this.setState((state, props) => ({
            questionReady: true,
            question: {text: question.text, URL: question.url, desc: question.desc}
        }))
    }

    showResult(result) {
        this.setState({isOver: true, result: result});
    }

    nextQuestion(e, answer) {
        this.setState((state, props) => ({
            questionReady: false,
            error: false,
            lastAnswer: answer,
            QIdx: state.QIdx + 1
        }));
        axios({
            method: "post",
            url: Constants.URL + Constants.GET_QUESTION_API,
            data: {
                id: this.props.match.params.id,
                answer: answer,
                QIdx: this.state.QIdx
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
                    <Question question={this.state.question} progress={this.state.QIdx * Constants.QUESTION_PROGRESS}
                              answerCallback={this.nextQuestion.bind(this)}/>
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
