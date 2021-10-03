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
        {name: 'YEAR 2019', price: parseInt (data19.market_data.current_price.zar)},
        {name: 'YEAR 2018', price: parseInt (data18.market_data.current_price.zar)}, 
    ];
    
    const width = 1000;
    const height = 500;
    const topMargin = 50;
    const bottomMargin = 50;
    const rightMargin = 50;
    const leftMargin = 50;
    
    const drawGraph2 = d3.select('#data2').append('svg').attr('height', height - topMargin - bottomMargin).attr('width', width - rightMargin - leftMargin).attr('viewBox', [0, 0, width, height]);
    const x2 = d3.scaleBand().domain(d3.range(cryptocurrentprice.length)).range([leftMargin, width - rightMargin]). padding(0.5);
    const y2 = d3.scaleLinear().domain([0 , 200000]).range([height - bottomMargin, topMargin]);
    
    drawGraph2.append('g').attr('fill', '#faebd7').selectAll('rect').data(cryptocurrentprice.sort ((a, b) => d3.descending(a.price, b.price))).join('rect').attr('x', (d, i) => x2(i)).attr('y', (d) => y2(d.price)).attr('height', d => y2(0) - y2(d.price)).attr('width', x2.bandwidth());
    
    function x2Axis (g)
    {
        g.attr('transform', `translate (0, ${height - bottomMargin})`).call(d3.axisBottom(x2).tickFormat(i => cryptocurrentprice[i].name)).attr('font-size', '17px').attr('color', 'white');
    }
    function y2Axis (g)
    {
        g.attr('transform', `translate(${leftMargin}, 0)`).call(d3.axisLeft(y2).ticks(null, cryptocurrentprice.format)).attr('font-size', '20px').attr('color', 'white');
    }
    drawGraph2.append ('g').call(y2Axis);
    drawGraph2.append ('g').call(x2Axis);
    drawGraph2.node();
        
}
getCryptocurrentprices();