import React, {Component} from "react"
import "./LineChart.css"

class LineChart extends Component {
  // GET MAX & MIN X
  getMinX() {
    const {data} = this.props;
    return data[0].x;
  }
  getMaxX() {
    const {data} = this.props;
    return data[data.length - 1].x;
  }
  // GET MAX & MIN Y
  getMinY() {
    const {data} = this.props;
    return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y); // second argument to reduce is the initial value
  }
  getMaxY() {
    const {data} = this.props;
    return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
  }
  // GET THE SVG X COORDINATES
  getSvgX(x) {
    // get the svg width from props
    const {svgWidth} = this.props;
    // The coordinate is determined by dividing the current data point by the max value. This decimal is then multiplied by the width/height of the containing element.
    return (x / this.getMaxX() * svgWidth);
  }
  //  GET THE SVG Y COORDINATES
  getSvgY(y) {
    const {svgHeight} = this.props;
    return svgHeight - (y / this.getMaxY() * svgHeight);
  }

  render() {
    return (
      <svg>
      </svg>
    );
  }
}
// default props
LineChart.defaultProps = {
  // linechart will be nonexistent if there is no data
  data: [],  
  color: '#2196F3',  
  svgHeight: 300,  
  svgWidth: 700
}
// export component
export default LineChart;