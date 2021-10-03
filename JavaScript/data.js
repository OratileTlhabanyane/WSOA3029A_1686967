const apiurl21 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2021';
const apiurl20 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2020';
async function getCryptomarketcap()

{const response = await fetch(apiurl21);
    const data21 = await response.json();
    console.log(data21.market_data);
    
    const response2 = await fetch(apiurl20);
    const data20 = await response2.json();
    console.log(data20.market_data);
    
    const cryptocurrentprice =
    [
        {name: 'YEAR 2021', price: parseInt (data21.market_data.current_price.zar)},
        {name: 'YEAR 2020', price: parseInt (data20.market_data.current_price.zar)}, 
    ];
    
    const width = 1000;
    const height = 500;
    const topMargin = 50;
    const bottomMargin = 50;
    const rightMargin = 50;
    const leftMargin = 50;
    
    const drawGraph1 = d3.select('#data1').append('svg').attr('height', height - topMargin - bottomMargin).attr('width', width - rightMargin - leftMargin).attr('viewBox', [0, 0, width, height]);
    const x1 = d3.scaleBand().domain(d3.range(cryptocurrentprice.length)).range([leftMargin, width - rightMargin]). padding(0.5);
    const y1 = d3.scaleLinear().domain([0 , 1000000]).range([height - bottomMargin, topMargin]);
    
    drawGraph1.append('g').attr('fill', '#faebd7').selectAll('rect').data(cryptocurrentprice.sort ((a, b) => d3.ascending(a.price, b.price))).join('rect').attr('x', (d, i) => x1(i)).attr('y', (d) => y1(d.price)).attr('height', d => y1(0) - y1(d.price)).attr('width', x1.bandwidth());
    
    function x1Axis (g)
    {
        g.attr('transform', `translate (0, ${height - bottomMargin})`).call(d3.axisBottom(x1).tickFormat(i => cryptocurrentprice[i].name)).attr('font-size', '14px').attr('color', 'white');
    }
    function y1Axis (g)
    {
        g.attr('transform', `translate(${leftMargin}, 0)`).call(d3.axisLeft(y1).ticks(null, cryptocurrentprice.format)).attr('font-size', '20px').attr('color', 'white');
    }
    drawGraph1.append ('g').call(y1Axis);
    drawGraph1.append ('g').call(x1Axis);
    drawGraph1.node();    
}
getCryptomarketcap()


