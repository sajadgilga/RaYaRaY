import React from 'react';
import ChoiceImage from "./ChoiceImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.onImageChosen = this.onImageChosen.bind(this);
        this.state = {border: ["", "", "", ""]}
    }

    onImageChosen(event, whichImg) {
        event.preventDefault();

        let border = ["", "", "", ""];
        if (this.state.border[whichImg] === "") {
            border[whichImg] = "yellowgreen solid medium";
            this.setState({border: border});
        } else {
            this.setState({border: border});
            this.props.answerCallback(whichImg + 1);
        }
    }


    render() {
        // TODO: edit src and image URL getting
        return (
            <Container fluid={true} className="m-0 mt-1 mb-2 p-0" style={{verticalAlign: 'bottom'}}>
                <Row className="m-0 mb-3">
                    <ChoiceImage src={this.props.src[0]} desc={this.props.desc[0]} border={this.state.border[0]}
                                 onClick={(e) => this.onImageChosen(e, 0)}/>
                    <ChoiceImage src={this.props.src[1]} desc={this.props.desc[1]} border={this.state.border[1]}
                                 onClick={(e) => this.onImageChosen(e, 1)}/>
                </Row>
                <Row className="m-0">
                    <ChoiceImage src={this.props.src[2]} desc={this.props.desc[2]} border={this.state.border[2]}
                                 onClick={(e) => this.onImageChosen(e, 2)}/>
                    <ChoiceImage src={this.props.src[3]} desc={this.props.desc[3]} border={this.state.border[3]}
                                 onClick={(e) => this.onImageChosen(e, 3)}/>
                </Row>
            </Container>
        );
    }
}

export default Choices;