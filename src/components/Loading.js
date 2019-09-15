import React from 'react';
import Spinner from "react-bootstrap/Spinner";

function Loading () {
    return (
        <div className="App">
            <Spinner className="m-auto" animation="border" variant="warning" size="lg"/>
        </div>
    );
}

export default Loading;