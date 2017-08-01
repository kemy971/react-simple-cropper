import React, {
    Component
} from 'react';
import PropTypes from 'prop-types';
import CropperJS from 'cropperjs';

class Cropper extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            imgUrl: this.props.imgUrl,
            containerWidth: this.props.containerSize.width,
            containerHeight: this.props.containerSize.height
        };

    }

    componentDidMount()
    {
        let {containerWidth, containerHeight} = this.state;
        this.cropper = new CropperJS(this.refs.img, {
            viewMode: 3,
            dragMode: 'move',
            autoCropArea: 1,
            restore: false,
            guides: false,
            center: false,
            highlight: false,
            cropBoxMovable: false,
            cropBoxResizable: false,
            toggleDragModeOnDblclick: false,
            minContainerWidth: containerWidth,
            minContainerHeight: containerHeight,
            minCanvasWidth: containerWidth,
            minCanvasHeight: containerHeight,
            minCropBoxWidth: containerWidth,
            minCropBoxHeight: containerHeight
        })
    }

    getCroppedCanvas()
    {
        return this.cropper.getCroppedCanvas()
    }

    getCroppedImg()
    {
        return this.getCroppedCanvas().toDataURL();
    }

    render() {
        let {imgUrl, containerWidth, containerHeight} = this.state;
        let styles = {
            container: {
                width: containerWidth,
                height: containerHeight
            },
            img: {
                maxWidth: '100%',
                display: 'none'
            }
        };
        return (
            <div style={styles.container}>
                <img ref="img" src={imgUrl} style={styles.img}/>
            </div>
        );
    }
}

Cropper.propTypes = {
    containerSize: PropTypes.shape({
        width: PropTypes.number.is,
        height: PropTypes.number
    }).isRequired,
    imgUrl: PropTypes.string.isRequired
};
Cropper.defaultProps = {};

export default Cropper;
