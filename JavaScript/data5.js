const boredApeNFT = 'https://api.coingecko.com/api/v3/coins/unicly-bored-ape-yacht-club-collection?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true';
const wizardsdragonsNFT = 'https://api.coingecko.com/api/v3/coins/wizards-and-dragons?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true';
const metaheroNFT = 'https://api.coingecko.com/api/v3/coins/metahero?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true';


async function getCryptocurrentprices()

{ const response = await fetch(boredApeNFT);
    const nft1 = await response.json();
    console.log(nft1.coingecko_score);

    const response2 = await fetch(wizardsdragonsNFT);
    const nft2 = await response2.json();
    console.log(nft2.coingecko_score);

    const response3 = await fetch(metaheroNFT);
    const nft3 = await response3.json();
    console.log(nft3.coingecko_score);

    const trendingcoins =
    [
        {name: '1', score: parseInt (nft1.coingecko_score *15)},
        {name: '2', score: parseInt (nft2.coingecko_score *15)},
        {name: '3', score: parseInt (nft3.coingecko_score *15)},


     
    ];
   

    console.log(trendingcoins);    
 var domain = [0, trendingcoins[trendingcoins.length - 1]];
 var range = [0, 200];
 
 var margin = {
   top: 300,
   left: 200,
   right: 100,
   bottom: 400
 };
 
 const margin1 = { left: 50, top: 10, right: 50, bottom: 30 }
 const getRatio = side => (margin1[side] / width) * 100 + '%'

const marginRatio = {
left: getRatio('left'),
top: getRatio('top'),
right: getRatio('right'),
bottom: getRatio('bottom'),}

 var svg = d3.select("#data5").append("svg").attr('class', 'image')
   .attr("width", 1000)
   .attr("height", 1000)
   .style('padding',marginRatio.top +' ' + marginRatio.right + ' ' + marginRatio.bottom + ' ' + marginRatio.left + ' ');
 
 var height = svg.attr("height") - margin.top - margin.bottom;
 var width = svg.attr("width") - margin.left - margin.right;
 
 var sqrt = d3.scaleSqrt()
     .range(range)
     .domain(domain);
 
 
 var g = svg.append("g")
     .attr("transform", `translate(${margin.left}, ${margin.top})`);
 
 g.selectAll(".sqrt")
     .data(trendingcoins)
     .enter()
     .append("circle")
     .attr('id','data5')
     .classed("sqrt", true)
     .attr("r", function(d) {return d.score})
     .attr("fill", "none")
     .attr("stroke", "#000")
     .attr("stroke-width", 0.7)
  
     
     let test = document.getElementById("data5");
     test.addEventListener("mouseenter", function( event ) {
       // highlight the mouseenter target
       event.target.style.background = "purple";
      
     
       // reset the color after a short delay
       setTimeout(function() {
         event.target.style.background = "";
       }, 500);
     }, false);

     // This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseover target
  event.target.style.background = "orange";
  

  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.background = "";
  }, 500);
}, false);
}
getCryptocurrentprices();
 
 
 
     