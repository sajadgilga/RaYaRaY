import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


class ChoiceImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isImageLoaded: false,
            imageState: 'none',
            imageLoadError: false,
            border: props.border
        };
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    imageLoaded(_this) {
        _this.setState({isImageLoaded: true, imageState: 'display'})
    }

    imageError(_this) {
    }

    render() {
        return (
            <div className="answer-image col-5 m-auto p-0">
                {!this.state.imageLoadError &&
                <div className="m-auto">
                    <img src={this.props.src} alt="choiceImg" className="image m-auto"
                         onLoad={() => this.imageLoaded(this)}
                         onErrorCapture={() => this.imageError(this)} style={{
                        border: this.props.border
                    }} onClick={this.props.onClick}/>
                    <div className="answer-text">
                        {this.props.desc}
                    </div>
                </div>
                }
                {!this.state.isImageLoaded &&
                <div className="choice-container w-100 h-100 p-0">
                    <Spinner variant="info" animation="grow" className="m-auto"/>
                </div>
                }
            </div>
        )
    }
}

export default ChoiceImage;