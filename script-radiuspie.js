am4core.ready(function() {

// Themes begin
am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
var chart = am4core.create("chartdiv-radiuspie", am4charts.PieChart);

chart.responsive.enabled = true;
// chart.responsive.rules.push({
//     relevant: function(target) {
//         if (target.pixelWidth <= 800) {
//           return true;
//         }
//         return false;
//       }
// });

chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart.data = [
  {
    country: "Lithuania",
    value: 260
  },
  {
    country: "Czechia",
    value: 230
  },
  {
    country: "Ireland",
    value: 200
  },
  {
    country: "Germany",
    value: 165
  },
  {
    country: "Australia",
    value: 139
  },
  {
    country: "Austria",
    value: 128,
  }
];

var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.radiusValue = "value";
series.dataFields.category = "country";
series.slices.template.cornerRadius = 6;
series.colors.step = 3;
series.alignLabels = false;
series.labels.template.fontSize = "0.75em";
series.labels.template.bent = true;
series.labels.template.radius = 40;
series.labels.template.padding(10,10,10,10);
series.ticks.template.disabled = false;

series.hiddenState.properties.endAngle = -90;

// chart.legend = new am4charts.Legend();

}); // end am4core.ready()