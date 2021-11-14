const apiurl19 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2019';
const apiurl18 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2018';
async function getCryptocurrentprices()

{const response = await fetch(apiurl19);
    const data19 = await response.json();
    console.log(data19.market_data);
    
    const response2 = await fetch(apiurl18);
    const data18 = await response2.json();
    console.log(data18.market_data);
    
    const cryptocurrentprice =
    [
        {name: 'Value of 1 BTC IN ZAR in 2019', price: parseInt (data19.market_data.current_price.zar)},
        {name: 'Value of 1 BTC IN ZAR in 2018', price: parseInt (data18.market_data.current_price.zar)}, 
    ];
    
    const width = 600;
    const height = 500;
    const colors = d3.scaleOrdinal(d3.schemeDark2)
    const svg = d3.select('#data2').append('svg').attr('width', width).attr('height', height).style('background', '#3b202b59');
    const data_ = d3.pie().sort(null).value(function (d) {return d.price;})
    (cryptocurrentprice);
    console.log(data_);
    let selected = data_;

const segments = d3.arc().innerRadius(0).outerRadius(200).padAngle(.05).padRadius(50);
const sections = svg.append('g').attr('transform', 'translate (250, 250)').selectAll('path').data(selected, data => data.name);


    // draw the segments
    sections.enter().append('path').attr('d', segments).attr('fill', function(d) {return colors (d.data.price); });
    
    //remove the segments
    sections.selectAll('#data2').data(selected).exit().remove();

    //add labeling text
    var labels = d3.select('g').selectAll('text').data(selected);
    labels.enter().append('text').each(function (d) 
    { 
        var center = segments.centroid(d);
        d3.select(this).attr('x', center [0]).attr('y', center [1]).text(function(d) {return d.data.name})
    });
    


}
getCryptocurrentprices(); 