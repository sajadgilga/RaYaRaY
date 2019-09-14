import React from 'react';
import ChoiceImage from "./ChoiceImage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Choices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        // TODO: edit src and image url getting
        return (
            <Container fluid={true} className="m-0 mt-1 mb-2 p-0" style={{verticalAlign: 'bottom'}}>
                <Row className="m-0">
                    <ChoiceImage src={this.props.src1}/>
                    <ChoiceImage src={this.props.src2}/>
                </Row>
            </Container>
        );
    }
}

export default Choices;