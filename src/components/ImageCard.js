import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // Get the current height of the images after it get laoded in the browser
    this.imageRef.current.addEventListener("load", this.setSpan);
  }

  setSpan = () => {
    // Get image's height
    const height = this.imageRef.current.clientHeight;

    // Calculate how much span (columns) the image will take based on the height
    const spans = Math.ceil(height / 10);

    // Set spans to state
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
