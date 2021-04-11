import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

export default class RadarSkillsChart extends Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Skills',
          data: [100, 80, 70, 80, 95, 60],
        }],
        options: {
          chart: {
            height: '100%',
            type: 'radar',
          },
          title: {
            text: 'Major Skills I Have'
          },
          xaxis: {
            categories: ['Javascript', 'ReactJS', 'Blockchain', 'Servicenow', 'UI/UX', 'Firebase/MongoDB']
          },
          dataLabels: {
            enabled: false,
          }
        },
      
      
      };
    }

  

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="radar" height='100%' />
    );
  }
}