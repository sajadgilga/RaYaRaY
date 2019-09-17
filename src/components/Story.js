import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Story extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container fluid={true} className="p-1 m-auto">
                <Row className="m-0 m-auto" style={{textAlign: 'right'}}>
                    <p className="m-auto story">
                        {this.props.text}
                    </p>
                </Row>
            </Container>
        );
    }
}

export default Story;