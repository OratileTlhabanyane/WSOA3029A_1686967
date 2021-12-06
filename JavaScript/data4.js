const apiurl21 = 'https://api.coingecko.com/api/v3/coins/ethereum/history?date=01-10-2021';
const apiurl20 = 'https://api.coingecko.com/api/v3/coins/ethereum/history?date=01-10-2020';
const apiurl19 = 'https://api.coingecko.com/api/v3/coins/ethereum/history?date=01-10-2019';
const apiurl18 = 'https://api.coingecko.com/api/v3/coins/ethereum/history?date=01-10-2018';
async function getCryptocurrentprices()

{ const response = await fetch(apiurl21);
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

    
        const margin = { left: 50, top: 10, right: 50, bottom: 30 }
    const getRatio = side => (margin[side] / width) * 100 + '%'

const marginRatio = {
  left: getRatio('left'),
  top: getRatio('top'),
  right: getRatio('right'),
  bottom: getRatio('bottom'),}


   var svg = d3.select('#data4').style('padding',marginRatio.top +' ' + marginRatio.right + ' ' + marginRatio.bottom + ' ' + marginRatio.left + ' ');
    var height = svg.attr('height');
    var width = svg.attr('width');

    const cryptocurrentprice = {
        nodes: [{ name: 'eth1', radius: parseInt (data19.market_data.current_price.zar / 20) }, {name: 'eth2', radius: parseInt (data20.market_data.current_price.zar / 20)}, {name: 'eth3', radius: parseInt (data19.market_data.current_price.zar / 20)}, { name: 'eth4', radius: parseInt (data18.market_data.current_price.zar /20)}],
        links: [
            {source: 'eth1', target: 'eth2'},
            { source: 'eth2', target: 'eth3'},
            {source: 'eth4', target: 'eth3'}
        ]
    
       /* {name: 'Value of 1 BTC IN ZAR in 2021', price: parseInt (data21.market_data.current_price.zar)},
        {name: 'Value of 1 BTC IN ZAR in 2020', price: parseInt (data20.market_data.current_price.zar)}, 
    */
 
    

}
 
     var simultation = d3.forceSimulation(cryptocurrentprice.nodes).force('charge', d3.forceManyBody().strength(300)).force('center', d3.forceCenter(width / 2, height /2)).force('collide', d3.forceCollide(function(d){return d.radius})).on('tick', ticked);
     var links = svg.append('g').selectAll('line').data(cryptocurrentprice.links).enter().append('line').attr('stroke-width', 3).style('stroke', 'orange');
     var drag = d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);
     var textAndNodes= svg.append('g').selectAll('g').data(cryptocurrentprice.nodes).enter().append('g').call(drag);

     var cicles= textAndNodes.append('circle').attr('r', function(d) {return d.radius}).attr('fill', 'blue');
     var texts = textAndNodes.append('text').text(function(d){ return d.name});

     function ticked (){
         textAndNodes.attr('transform', function(d){ return 'translate(' + d.x + ', ' + d.y + ')'});

         links.attr('x1', function(d){return d.source.x}).attr('y1',function(d){return d.source.y}).attr('x2', function(d){return d.target.x}).attr('y2',function(d){return d.target.y} )
     }
console.log(simultation.alpha()); 

     function dragstarted(d){
    simultation.alphaTarget(0.3).restart();
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragged(d){
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}
function dragended(d){
    simultation.alphaTarget(0)
    d.fx = null;
    d.fy = null;
}
}
getCryptocurrentprices();



