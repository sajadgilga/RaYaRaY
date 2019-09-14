import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Story extends React.Component {
    constructor(props) {
        super(props);

        this.state = {storyText: props.text};
    }

    render() {
        return (
            <Container fluid={true} className="p-5 m-auto">
                <Row className="m-0 m-auto" style={{textAlign: 'right'}}>
                    <p className="m-auto story">
                        {this.state.storyText}
                    </p>
                </Row>
            </Container>
        );
    }
}

export default Story;