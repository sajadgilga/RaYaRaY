import React from 'react';
import Spinner from 'react-bootstrap/Spinner';


class ChoiceImage extends React.Component {
    constructor(props) {
        super(props);
        this.onImageChosen = this.onImageChosen.bind();
        // this.imageLoaded = this.imageLoaded.bind();
        this.state = {src: this.props.src, isImageLoaded: false, imageState: 'none', imageLoadError: false};
    }

    componentDidMount() {
        console.log('mounted')
    }

    componentWillUnmount() {
    }

    onImageChosen(event) {
        event.preventDefault();
        console.log('clicked')
    }

    imageLoaded(_this) {
        _this.setState({isImageLoaded: true, imageState: 'display'})
    }

    imageError(_this) {
        _this.setState({imageLoadError: true})
    }

    render() {
        return (
            <div className="answer-image col-5 m-auto p-0">
                {!this.state.imageLoadError &&
                <img src={this.props.src} alt="choiceImg" className="image m-auto" onLoad={() => this.imageLoaded(this)}
                     onErrorCapture={() => this.imageError(this)}/>
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