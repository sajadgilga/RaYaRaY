import React from 'react';
import ChoiceImage from "./ChoiceImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.onImageChosen = this.onImageChosen.bind(this);
        this.state = {border1: "", border2: ""}
    }

    onImageChosen(event, whichImg, ) {
        event.preventDefault();
        console.log('clicked');
        if (whichImg === 1) {
            if (this.state.border1 === "")
                this.setState({border1: "yellowgreen solid medium"});
            else
                this.props.answerCallback();
            this.setState({border2: ""});
        } else if (whichImg === 2) {
            if (this.state.border2 === "")
                this.setState({border2: "yellowgreen solid medium"});
            else
                this.props.answerCallback();
            this.setState({border1: ""});
        }
    }

    render() {
        // TODO: edit src and image url getting
        return (
            <Container fluid={true} className="m-0 mt-1 mb-2 p-0" style={{verticalAlign: 'bottom'}}>
                <Row className="m-0">
                    <ChoiceImage src={this.props.src1} border={this.state.border1}
                                 onClick={(e) => this.onImageChosen(e, 1)}/>
                    <ChoiceImage src={this.props.src2} border={this.state.border2}
                                 onClick={(e) => this.onImageChosen(e, 2)}/>
                </Row>
            </Container>
        );
    }
}

export default Choices;