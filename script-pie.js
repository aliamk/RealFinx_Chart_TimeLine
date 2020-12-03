am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_dataviz);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv-pie", am4charts.PieChart3D);
    // chart.responsive.enabled = true;

    // chart.responsive.rules.push({
    //     relevant: function(target) {
    //         if (target.pixelWidth <= 400) {
    //           return true;
    //         }
    //         return false;
    //       }
    // });

    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    chart.hiddenState.properties.angle = -90; // rotate on initial load
    
    // chart.legend = new am4charts.Legend();
    
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9
        // "pulled": true
      },
      {
        country: "Czech Republic",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      }
    ];
    

    chart.innerRadius = 135;
    
    var series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "litres";
    series.dataFields.category = "country";
    series.labels.template.bent = true;
    series.labels.template.radius = 25;
    series.labels.template.fontSize = "0.75em";
    series.ticks.template.disabled = true;
    series.alignLabels = false;
    // series.slices.template.propertyFields.isActive = "pulled";
    }); // end am4core.ready()