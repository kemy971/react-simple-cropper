import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cropper from './js/index';
import 'cropperjs/dist/cropper.css';

const imgUrl = "img/picture.jpg";
const containerSize = {
    width: 400,
    height: 400
};

class App extends Component {

    state = {
        imgSrc: "img/picture.jpg"
    }

    crop()
    {
       let data = this.refs.cropper.getCroppedImg();
       this.setState({imgSrc: data});
    }

    render()
    {
        const {imgSrc} = this.state;
        return (
            <div>
                <Cropper ref="cropper" containerSize={containerSize} imgUrl={imgUrl}/>
                <button onClick={() => this.crop()}>crop</button>
                <br/>
                <img src={imgSrc} style={{maxWidth: "200px"}} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));