import React, {Component} from "react"
import "./LineChart.css"

class LineChart extends Component {
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