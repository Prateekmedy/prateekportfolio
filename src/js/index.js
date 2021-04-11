
// import $ from 'jquery'; 
import ApexCharts from 'apexcharts';
// import './isotope.pkgd.min.js';
// import isotope from 'isotope-layout';
console.log("chal rahi hai")
//------ creating the filter gallary for the porfolio cards ------------

// $('.filters ul li').click(function(){
//     $('.filters ul li').removeClass('active');
//     $(this).addClass('active');

//     var data = $(this).attr('data-filter');
//     $grid.isotope({
//         filter: data
//     })
// });

// var $grid = $(".grid").isotope({
//     itemSelector: ".all",
//     percentPosition: true,
//     masonry: {
//         columnWidth: ".all"
//     }
// })

//----adding the Radar Chart for displaying skills-----------

var options = {
  series: [{
    name: 'Skills',
    data: [100, 80, 70, 80, 95, 60],
  }],
  chart: {
    height: 400,
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
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
