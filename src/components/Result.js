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
            <Container fluid={true} className="pt-3 m-auto">
                <Row className="m-auto pb-5 mb-5" style={{textAlign: 'right'}}>
                    <div className="m-auto title">
                        {this.state.title}
                    </div>
                </Row>
            <Row className=" m-auto mt-5" style={{textAlign: 'right'}}>
                    <div className="m-auto personality">
                        {this.state.personality}
                    </div>
                </Row>
            </Container>
        );
    }
}

export default Result;