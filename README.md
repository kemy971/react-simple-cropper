# Simple Cropper

## Quick Example
```jsx
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cropper from 'simple-cropper'

const imgUrl = "picture.jpg";
const containerSize = {
    width: 400,
    height: 400
};

class App extends Component {
    crop()
    {
       window.open(this.refs.cropper.getCroppedImg());
    }

    render()
    {
        return (
            <div>
                <Cropper ref="cropper" containerSize={containerSize} imgUrl={imgUrl}/>
                <button onClick={() => this.crop()}>crop</button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('target')
);
```