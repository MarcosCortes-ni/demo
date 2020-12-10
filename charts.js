google.charts.load('current', { 'packages': ['sankey', 'corechart', 'bar', 'calendar'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    drawChartP1();
    drawChartP2();
    drawChartP3();
    drawChartP4();
    drawChartP5();
}

function drawChartP1() {
    var data = google.visualization.arrayToDataTable([
        ['From', 'To', 'Weight'],
        ['A', 'X', 5],
        ['A', 'Y', 7],
        ['A', 'Z', 6],
        ['B', 'X', 2],
        ['B', 'Y', 9],
        ['B', 'Z', 4]
    ]);

    var chart = new google.visualization.Sankey(document.getElementById('p1Chart'));
    chart.draw(data, {});
}

function drawChartP2() {
    var data = google.visualization.arrayToDataTable([
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
    ]);

    var chart = new google.visualization.BarChart(document.getElementById('p2Chart'));
    chart.draw(data, {
        backgroundColor: 'transparent',
        legend: 'bottom'
    });
}

function drawChartP3() {
    var data = google.visualization.arrayToDataTable([
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
        ['CAN', 80.66, 1.67, 'North America', 33739900],
        ['DEU', 79.84, 1.36, 'Europe', 81902307],
        ['DNK', 78.6, 1.84, 'Europe', 5523095],
        ['EGY', 72.73, 2.78, 'Middle East', 79716203],
        ['GBR', 80.05, 2, 'Europe', 61801570],
        ['IRN', 72.49, 1.7, 'Middle East', 73137148],
        ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
        ['ISR', 81.55, 2.96, 'Middle East', 7485600],
        ['RUS', 68.6, 1.54, 'Europe', 141850000],
        ['USA', 78.09, 2.05, 'North America', 307007000]
    ]);

    var chart = new google.visualization.BubbleChart(document.getElementById('p3Chart'));
    chart.draw(data, {
        backgroundColor: 'transparent',
        legend: 'bottom'
    });
}

function drawChartP4() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
    ]);

    var chart = new google.visualization.PieChart(document.getElementById('p4Chart'));
    chart.draw(data, {
        backgroundColor: 'transparent',
        legend: 'bottom'
    });
}

function drawChartP5() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2020', 1030, 540]
    ]);

    var options = {
        title: 'Company Performance',
        hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
        vAxis: { minValue: 0 }
    };

    var chart = new google.visualization.AreaChart(document.getElementById('p5Chart'));
    chart.draw(data, options);
}