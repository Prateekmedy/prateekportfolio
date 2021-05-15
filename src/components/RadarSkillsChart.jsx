import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'

export default class RadarSkillsChart extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
      
        series: [{
          name: 'Skills',
          data: Object.values(this.props.skillsRecord.skill),
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
            categories: Object.keys(this.props.skillsRecord.skill)
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