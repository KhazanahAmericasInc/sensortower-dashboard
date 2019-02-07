
// var vdata = {{vehicle_data|tojson}};
//alert(vdata);
//alert("This should show up");

//total of all vehicles that passed
var TotalCars = vdata.length
document.getElementById('TotalNumCars').innerHTML = TotalCars;
console.log("total number of cars:" + TotalCars);

//Total number of trucks
var numTrucks = 0;
for (var i = vdata.length - 1; i >= 0; i--) {
	if (vdata[i]["final_class"] == "TRUCK")
		numTrucks++;
}

document.getElementById('TotalT').innerHTML = numTrucks;

console.log("total number of trucks:" + numTrucks);

//Total number of Sedans
numSedan = 0;
for (var i = vdata.length - 1; i >= 0; i--) {
	if (vdata[i]["final_class"] == "SEDAN")
		numSedan++;
}
console.log("total number of sedans:" + numSedan);

document.getElementById('TotalS').innerHTML = numSedan;

//Total number of Prius
var numPrius = 0;
for (var i = vdata.length - 1; i >= 0; i--) {
	if (vdata[i]["final_class"] == "PRIUS")
		numPrius++;
}

document.getElementById('TotalPrius').innerHTML = numPrius;

console.log("total number of prius:" + numPrius);



//number of trucks, sedan, prius each month of year
// object literal with properties
var c_lookup = {
  TRUCK: "0",
  SEDAN: "1",
  PRIUS: "2"
};

var m_lookup = {
  Jan: "0",
  Feb: "1",
  Mar: "2",
  Apr: "3",
  May: "4",
  Jun: "5",
  Jul: "6",
  Aug: "7",
  Sep: "8",
  Oct: "9",
  Nov: "10",
  Dec: "11",

};

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var JanTrucks = 0;
var FebTrucks = 0;
var MarTrucks = 0;
var AprTrucks = 0;
var MayTrucks = 0;
var JunTrucks = 0;
var JulTrucks = 0;
var AugTrucks = 0;
var SepTrucks = 0;
var OctTrucks = 0;
var NovTrucks = 0;
var DecTrucks = 0;
var JanTrucks = 0;
var FebTrucks = 0;


var JanSedan = 0;
var FebSedan = 0;
var MarSedan = 0;
var AprSedan = 0;
var MaySedan = 0;
var JunSedan = 0;
var JulSedan = 0;
var AugSedan = 0;
var SepSedan = 0;
var OctSedan = 0;
var NovSedan = 0;
var DecSedan = 0;

var JanPrius = 0;
var FebPrius = 0;
var MarPrius = 0;
var AprPrius = 0;
var MayPrius = 0;
var JunPrius = 0;
var JulPrius = 0;
var AugPrius = 0;
var SepPrius = 0;
var OctPrius = 0;
var NovPrius = 0;
var DecPrius = 0;


for (var i = vdata.length - 1; i >= 0; i--) 
{
	c_index = c_lookup[vdata[i]["final_class"]];
	m_index = m_lookup[vdata[i]["img_data"]["month"]];
	
	if(c_index == "0")
	{
		if(m_index == "0")
		{
			JanTrucks += 1;
		}
		if(m_index =='1')
		{
			FebTrucks +=1;
		}
		if(m_index == "2")
		{
			MarTrucks += 1;
		}
		if(m_index =='3')
		{
			AprTrucks +=1;
		}
		if(m_index == "4")
		{
			MayTrucks += 1;
		}
		if(m_index =='5')
		{
			JunTrucks +=1;
		}
		if(m_index =='6')
		{
			JulTrucks +=1;
		}
		if(m_index =='7')
		{
			AugTrucks +=1;
		}
		if(m_index =='8')
		{
			SepTrucks +=1;
		}
		if(m_index =='9')
		{
			OctTrucks +=1;
		}
		if(m_index =='10')
		{
			NovTrucks +=1;
		}
		if(m_index =='11')
		{
			DecTrucks +=1;
		}

	}

		else if(c_index == "1")
	{
		if(m_index == "0")
		{
			JanSedan += 1;
		}
		if(m_index =='1')
		{
			FebSedan +=1;
		}
		if(m_index == "2")
		{
			MarSedan += 1;
		}
		if(m_index =='3')
		{
			AprSedan +=1;
		}
		if(m_index == "4")
		{
			MaySedan += 1;
		}
		if(m_index =='5')
		{
			JunSedan +=1;
		}
		if(m_index =='6')
		{
			JulSedan+=1;
		}
		if(m_index =='7')
		{
			AugSedan+=1;
		}
		if(m_index =='8')
		{
			SepSedan +=1;
		}
		if(m_index =='9')
		{
			OctSedan +=1;
		}
		if(m_index =='10')
		{
			NovSedan +=1;
		}
		if(m_index =='11')
		{
			DecSedan +=1;
		}
	}

		else if(c_index == "2")
	{

		if(m_index == "0")
		{
			JanPrius += 1;
		}
		if(m_index =='1')
		{
			FebPrius +=1;
		}
		if(m_index == "2")
		{
			MarPrius += 1;
		}
		if(m_index =='3')
		{
			AprPrius +=1;
		}
		if(m_index == "4")
		{
			MayPrius += 1;
		}
		if(m_index =='5')
		{
			JunPrius +=1;
		}
		if(m_index =='6')
		{
			JulPrius +=1;
		}
		if(m_index =='7')
		{
			AugPrius +=1;
		}
		if(m_index =='8')
		{
			SepPrius +=1;
		}
		if(m_index =='9')
		{
			OctPrius +=1;
		}
		if(m_index =='10')
		{
			NovPrius +=1;
		}
		if(m_index =='11')
		{
			DecPrius +=1;
		}
	}
	

}

var TruckData = [[0,JanTrucks],[1,FebTrucks],[2,MarTrucks], [3,AprTrucks],[4,MayTrucks],[5,JunTrucks],[6,JulTrucks],[7,AugTrucks],[8,SepTrucks],[9,OctTrucks],[10,NovTrucks],[11,DecTrucks]];
var TruckData1 = [["Jan",JanTrucks],["Feb",FebTrucks],["Mar",MarTrucks], ["Apr",AprTrucks],
["May",MayTrucks],["Jun",JunTrucks],["Jul",JulTrucks],["Aug",AugTrucks],["Sep",SepTrucks],
["Oct",OctTrucks],["Nov",NovTrucks],["Dec",DecTrucks]];

var SedanData = [[0,JanSedan],[1,FebSedan],[2,MarSedan], [3,AprSedan],
[4,MaySedan],[5,JunSedan],[6,JulSedan],[7,AugSedan],[8,SepSedan], [9,OctSedan],
[10,NovSedan],[11,DecSedan]];

var SedanData1 = [["Jan",JanSedan],["Feb",FebSedan],["Mar",MarSedan], ["Apr",AprSedan],
["May",MaySedan],["Jun",JunSedan],["Jul",JulSedan],["Aug",AugSedan],["Sep",SepSedan],
["Oct",OctSedan],["Nov",NovSedan],["Dec",DecSedan]];

var PriusData = [[0,JanPrius],[1,FebPrius],[2,MarPrius], [3,AprPrius],
[4,MayPrius],[5,JunPrius],[6,JulPrius],[7,AugPrius],[8,SepPrius],[9,OctPrius],
[10,NovPrius],[11,DecPrius]];

var PriusData1 = [["Jan",JanPrius],["Feb",FebPrius],["Mar",MarPrius], ["Apr",AprPrius],
["May",MayPrius],["Jun",JunPrius],["Jul",JulPrius],["Aug",AugPrius],["Sep",SepPrius],
["Oct",OctPrius],["Nov",NovPrius],["Dec",DecPrius]];

var TruckDict = {color: "#0088cc", data: TruckData, label: "Trucks"};
var SedanDict = {color: "#2baab1", data: SedanData, label: "Sedans"};
var PriusDict = {color: "#734ba9", data: PriusData, label: "Prius"};

var GraphData = [TruckDict,SedanDict,PriusDict];

var singleTruckData = [{color:"#0088cc", data:TruckData1}];
(function( $ ) {

	'use strict';


	/*
	Sales Selector
	*/
	$('#salesSelector').themePluginMultiSelect().on('change', function() {
		var rel = $(this).val();
		$('#salesSelectorItems .chart').removeClass('chart-active').addClass('chart-hidden');
		$('#salesSelectorItems .chart[data-sales-rel="' + rel + '"]').addClass('chart-active').removeClass('chart-hidden');
	});

	$('#salesSelector').trigger('change');

	$('#salesSelectorWrapper').addClass('ready');

	/*
	Flot: Sales 1
	*/
	var flotDashSales1 = $.plot('#flotDashSales1', singleTruckData, {
		series: {
			lines: {
				show: true,
				lineWidth: 2
			},
			points: {
				show: true
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderColor: 'rgba(0,0,0,0.1)',
			borderWidth: 1,
			labelMargin: 15,
			backgroundColor: 'transparent'
		},
		yaxis: {
			min: 0,
			color: 'rgba(0,0,0,0.1)'
		},
		xaxis: {
			mode: 'categories',
			color: 'rgba(0,0,0,0)'
		},
		legend: {
			show: false
		},
		tooltip: true,
		tooltipOpts: {
			content: '%x: %y',
			shifts: {
				x: -30,
				y: 25
			},
			defaultTheme: false
		}
	});

	/*
	Flot: Sales 2
	*/
	var flotDashSales2 = $.plot('#flotDashSales2', flotDashSales2Data, {
		series: {
			lines: {
				show: true,
				lineWidth: 2
			},
			points: {
				show: true
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderColor: 'rgba(0,0,0,0.1)',
			borderWidth: 1,
			labelMargin: 15,
			backgroundColor: 'transparent'
		},
		yaxis: {
			min: 0,
			color: 'rgba(0,0,0,0.1)'
		},
		xaxis: {
			mode: 'categories',
			color: 'rgba(0,0,0,0)'
		},
		legend: {
			show: false
		},
		tooltip: true,
		tooltipOpts: {
			content: '%x: %y',
			shifts: {
				x: -30,
				y: 25
			},
			defaultTheme: false
		}
	});

	/*
	Flot: Sales 3
	*/
	var flotDashSales3 = $.plot('#flotDashSales3', flotDashSales3Data, {
		series: {
			lines: {
				show: true,
				lineWidth: 2
			},
			points: {
				show: true
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderColor: 'rgba(0,0,0,0.1)',
			borderWidth: 1,
			labelMargin: 15,
			backgroundColor: 'transparent'
		},
		yaxis: {
			min: 0,
			color: 'rgba(0,0,0,0.1)'
		},
		xaxis: {
			mode: 'categories',
			color: 'rgba(0,0,0,0)'
		},
		legend: {
			show: false
		},
		tooltip: true,
		tooltipOpts: {
			content: '%x: %y',
			shifts: {
				x: -30,
				y: 25
			},
			defaultTheme: false
		}
	});

	/*
	Liquid Meter
	*/
	$('#meterSales').liquidMeter({
		shape: 'circle',
		color: '#0088cc',
		background: '#F9F9F9',
		fontSize: '24px',
		fontWeight: '600',
		stroke: '#F2F2F2',
		textColor: '#333',
		liquidOpacity: 0.9,
		liquidPalette: ['#333'],
		speed: 3000,
		animate: !$.browser.mobile
	});

	$('#meterSalesSel a').on('click', function( ev ) {
		ev.preventDefault();

		var val = $(this).data("val"),
			selector = $(this).parent(),
			items = selector.find('a');

		items.removeClass('active');
		$(this).addClass('active');

		// Update Meter Value
		$('#meterSales').liquidMeter('set', val);
	});

	/*
	Flot: Basic
	*/
	var flotDashBasic = $.plot('#flotDashBasic', GraphData, {
		series: {
			lines: {
				show: true,
				fill: true,
				lineWidth: 1,
				fillColor: {
					colors: [{
						opacity: 0.45
					}, {
						opacity: 0.45
					}]
				}
			},
			points: {
				show: true
			},
			shadowSize: 0
		},
		grid: {
			hoverable: true,
			clickable: true,
			borderColor: 'rgba(0,0,0,0.1)',
			borderWidth: 1,
			labelMargin: 15,
			backgroundColor: 'transparent'
		},
		yaxis: {
			min: 0,
			max: 850,
			color: 'rgba(0,0,0,0.1)'
		},
		xaxis: {
			color: 'rgba(0,0,0,0)'
		},
		tooltip: true,
		tooltipOpts: {
			content: '%s: Value of %x is %y',
			shifts: {
				x: -60,
				y: 25
			},
			defaultTheme: false
		}
	});

	console.log(flotDashBasicData);

	/*
	Flot: Real-Time
	*/
	(function() {
		var data = [],
			totalPoints = 300;


		function getRandomData() {

			if (data.length > 0)
				data = data.slice(1);

			// Do a random walk
			while (data.length < totalPoints) {

				var prev = data.length > 0 ? data[data.length - 1] : 50,
					y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				} else if (y > 100) {
					y = 100;
				}

				data.push(y);
			}

			// Zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			}

			return res;
		}

		
		var flotDashRealTime = $.plot('#flotDashRealTime', [getRandomData()], {
			colors: ['#8CC9E8'],
			series: {
				lines: {
					show: true,
					fill: true,
					lineWidth: 1,
					fillColor: {
						colors: [{
							opacity: 0.45
						}, {
							opacity: 0.45
						}]
					}
				},
				points: {
					show: false
				},
				shadowSize: 0
			},
			grid: {
				borderColor: 'rgba(0,0,0,0.1)',
				borderWidth: 1,
				labelMargin: 15,
				backgroundColor: 'transparent'
			},
			yaxis: {
				min: 0,
				max: 100,
				color: 'rgba(0,0,0,0.1)'
			},
			xaxis: {
				show: false
			}
		});

		function update() {

			flotDashRealTime.setData([getRandomData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()
			flotDashRealTime.draw();
			setTimeout(update, ($('html').hasClass( 'mobile-device' ) ? 1000 : 30) );
		}

		update();
	})();

	/*
	Sparkline: Bar
	*/
	var sparklineBarDashOptions = {
		type: 'bar',
		width: '80',
		height: '55',
		barColor: '#0088cc',
		negBarColor: '#B20000'
	};

	$("#sparklineBarDash").sparkline(sparklineBarDashData, sparklineBarDashOptions);

	/*
	Sparkline: Line
	*/
	var sparklineLineDashOptions = {
		type: 'line',
		width: '80',
		height: '55',
		lineColor: '#0088cc'
	};

	$("#sparklineLineDash").sparkline(sparklineLineDashData, sparklineLineDashOptions);

	/*
	Map
	*/
	var vectorMapDashOptions = {
		map: 'world_en',
		backgroundColor: null,
		color: '#FFFFFF',
		hoverOpacity: 0.7,
		selectedColor: '#005599',
		enableZoom: true,
		borderWidth:1,
		showTooltip: true,
		values: sample_data,
		scaleColors: ['#0088cc'],
		normalizeFunction: 'polynomial'
	};

	$('#vectorMapWorld').vectorMap(vectorMapDashOptions);

	}).apply( this, [ jQuery ]);
