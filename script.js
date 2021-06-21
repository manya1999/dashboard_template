    
var options = {
   series: [{
   name: "Desktops",
   data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
   chart: {
   height: 350,
   type: 'line',
   zoom: {
   enabled: false
    }
   },
   dataLabels: {
   enabled: false
     },
    stroke: {
    curve: 'straight'
    },
    title: {
    text: 'Applications Recieved',
    align: 'left'
    },
   grid: {
   row: {
   colors: ['black', 'transparent'], // takes an array which will be repeated on columns
   opacity: 0.5
     },
    },
    xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
     }
   };

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();


//donogut
var options2 = {
  series: [25,45,30],
  chart: {
  width: 300,
  type: 'donut',
},
plotOptions: {
  customSize: 0.5,
  expandOnClick: true    
},
dataLabels: {
  enabled: false
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 50
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  position: 'right',
  offsetY: 0,
  height: 130,
}
};

var chart2 = new ApexCharts(document.querySelector("#apex2"), options2);
chart2.render();


      
var options3 = {
  series: [{
  data: [60,80,30,15,100]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: true,
  }
},
dataLabels: {
  enabled: true
},
xaxis: {
  categories: ['Applications','Short Listed','On hold','Rejected','Recieved'],
},
grid: {
  xaxis: {
    lines: {
      show: false
    }
  }
},
yaxis: {
  reversed: true,
  axisTicks: {
    show: false
  }
}
};

var chart3 = new ApexCharts(document.querySelector("#apex3"), options3);
chart3.render();
//cav

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}