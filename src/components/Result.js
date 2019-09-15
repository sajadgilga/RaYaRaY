import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: props.title, personality: props.personality};
    }

    render() {
        //TODO: add share button
        return (
            <Container fluid={true} className="p-5 m-auto">
                <Row className="m-auto pb-5 mb-5" style={{textAlign: 'right'}}>
                    <p className="m-auto title">
                        {this.state.title}
                    </p>
                </Row>
            <Row className=" m-auto p-5 mt-5" style={{textAlign: 'right'}}>
                    <p className="m-auto personality">
                        {this.state.personality}
                    </p>
                </Row>
            </Container>
        );
    }
}

export default Result;