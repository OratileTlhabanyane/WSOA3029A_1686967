const apiurl21 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2021';
const apiurl20 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2020';
const apiurl19 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2019';
const apiurl18 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2018';
const apiurl17 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2017';
const apiurl16 = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-10-2016';
async function getCryptomarketcap()

{
    const response = await fetch(apiurl21);
    const data21 = await response.json();
    console.log(data21.market_data);
    
    const response2 = await fetch(apiurl20);
    const data20 = await response2.json();
    console.log(data20.market_data);

    const response3 = await fetch(apiurl19);
    const data19 = await response3.json();
    console.log(data19.market_data);

    const response4 = await fetch(apiurl18);
    const data18 = await response4.json();
    console.log(data18.market_data);

    const response5 = await fetch(apiurl17);
    const data17 = await response5.json();
    console.log(data17.market_data);

    const response6 = await fetch(apiurl16);
    const data16 = await response6.json();
    console.log(data16.market_data);
    
    const cryptocurrentprice =
    [
        {id: 'btc1', name: 2021 , price1: parseInt (data21.market_data.current_price.zar)},
        {id: 'btc2', name: 2020 , price2: parseInt (data20.market_data.current_price.zar)},
        {id: 'btc3', name: 2019 , price3: parseInt (data19.market_data.current_price.zar)},
        {id: 'btc4', name: 2018 , price4: parseInt (data18.market_data.current_price.zar)}, 
        {id: 'btc5', name: 2017 , price5: parseInt (data17.market_data.current_price.zar)},
        {id: 'btc6', name: 2016 , price6: parseInt (data16.market_data.current_price.zar)}, 
    ];

    const width = 1000;
    const height = 600;
    const topMargin = 50;
    const bottomMargin = 80;
    const rightMargin = 50;
    const leftMargin = 50;
    
   

    //DRAW THE GRAPH X-LINE AND Y-LINE
    const drawGraph1 = d3.select('#data3').append('svg').attr('height', height - topMargin - bottomMargin).attr('width', width - rightMargin - leftMargin).attr('viewBox', [0, 0, width, height]);
    const x3scale = d3.scaleBand().domain(d3.range(cryptocurrentprice.length)).range([leftMargin, width - rightMargin]). padding(1);
    const y3scale = d3.scaleLinear().domain([0 , 1000000]).range([height - bottomMargin, topMargin]);

    const graph1 = drawGraph1.append('g');

   //draw 2021 spot
graph1.attr('fill', '#faebd7').selectAll('.dots').data(cryptocurrentprice.sort ((a) => d3.descending(a.price1))).enter().append('circle').attr('class','btc-2021').attr('cx', (d, i) => x3scale(i)).attr('cy', (d) => y3scale(d.price1)).attr('height', d => y3scale(0) - y3scale(d.price1)).attr('width', x3scale.bandwidth()).attr('r',7);  

     //draw 2020 spot
graph1.attr('fill', '#faebd7').selectAll('.dots').data(cryptocurrentprice.sort ((a) => d3.descending(a.price2))).enter().append('circle').attr('class','btc-2020').attr('cx', (d, i) => x3scale(i)).attr('cy', (d) => y3scale(d.price2)).attr('height', d => y3scale(0) - y3scale(d.price2)).attr('width', x3scale.bandwidth()).attr('r',7);  

   //draw 2019 spot
   graph1.attr('fill', '#faebd7').selectAll('.dots').data(cryptocurrentprice.sort ((a) => d3.descending(a.price3))).enter().append('circle').attr('class','btc-2019').attr('cx', (d, i) => x3scale(i)).attr('cy', (d) => y3scale(d.price3)).attr('height', d => y3scale(0) - y3scale(d.price3)).attr('width', x3scale.bandwidth()).attr('r',7);  

   //draw 2018 spot
   graph1.attr('fill', '#faebd7').selectAll('.dots').data(cryptocurrentprice.sort ((a) => d3.descending(a.price4))).enter().append('circle').attr('class','btc-2018').attr('cx', (d, i) => x3scale(i)).attr('cy', (d) => y3scale(d.price4)).attr('height', d => y3scale(0) - y3scale(d.price4)).attr('width', x3scale.bandwidth()).attr('r',7);  

   //draw 2017 spot
   graph1.attr('fill', '#faebd7').selectAll('.dots').data(cryptocurrentprice.sort ((a) => d3.descending(a.price5))).enter().append('circle').attr('class','btc-2017').attr('cx', (d, i) => x3scale(i)).attr('cy', (d) => y3scale(d.price5)).attr('height', d => y3scale(0) - y3scale(d.price5)).attr('width', x3scale.bandwidth()).attr('r',7);  

   //draw 2016 spot
   graph1.attr('fill', '#faebd7').selectAll('.dots').data(cryptocurrentprice.sort ((a) => d3.descending(a.price6))).enter().append('circle').attr('class','btc-2016').attr('cx', (d, i) => x3scale(i)).attr('cy', (d) => y3scale(d.price6)).attr('height', d => y3scale(0) - y3scale(d.price6)).attr('width', x3scale.bandwidth()).attr('r',7);  



    function x1Axis (g)
    {
        g.attr('transform', `translate (0, ${height - bottomMargin})`).call(d3.axisBottom(x3scale).tickFormat(i => cryptocurrentprice[i].name)).attr('font-size', '14px').attr('color', 'white');
    }
    function y1Axis (g)
    {
        g.attr('transform', `translate(${leftMargin}, 0)`).call(d3.axisLeft(y3scale).ticks(null, cryptocurrentprice.format)).attr('font-size', '20px').attr('color', 'white');
    }
    drawGraph1.append ('g').call(y1Axis);
    drawGraph1.append ('g').call(x1Axis);
    drawGraph1.node();    

//interactive
$(document).ready(function() {
    
    
    $(".btc-2021").click(function(){ $('.hide').hide();
    $(".btc2021-fact").toggle();
    });
    
      $(".btc-2020").click(function(){
         $('.hide').hide();
      $(".btc2020-fact").toggle();
    });
    
      $(".btc-2019").click(function(){
        $('.hide').hide();
        $(".btc2019-fact").toggle();
      });
    
      $(".btc-2018").click(function(){
        $('.hide').hide();
        $(".btc2018-fact").toggle();
      });

      $(".btc-2017").click(function(){
        $('.hide').hide();
        $(".btc2017-fact").toggle();
      });
      
      $(".btc-2016").click(function(){
        $('.hide').hide();
        $(".btc2016-fact").toggle();
      });
  
  });
    
    

}
getCryptomarketcap(); 