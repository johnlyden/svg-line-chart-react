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