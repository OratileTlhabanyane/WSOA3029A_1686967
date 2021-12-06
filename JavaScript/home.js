const boredApeNFT = 'https://api.coingecko.com/api/v3/coins/unicly-bored-ape-yacht-club-collection?';
const wizardsdragonsNFT = 'https://api.coingecko.com/api/v3/coins/wizards-and-dragons?';
const cryptoToadsNFT = 'https://api.coingecko.com/api/v3/coins/cryptoads-marketplace';


async function getCryptocurrentprices()

{ const response = await fetch(boredApeNFT);
    const nft1 = await response.json();
    console.log(nft1.coingecko_score);

    const response2 = await fetch(wizardsdragonsNFT);
    const nft2 = await response2.json();
    console.log(nft2.coingecko_score);

    const response3 = await fetch(cryptoToadsNFT);
    const nft3 = await response3.json();
    console.log(nft3.coingecko_score);

    const trendingcoins =
    [
       

        {name1: '1', d1: nft1.description.en},
        {name2: '2', d2: nft2.description.en},
        {name3: '3', d3: nft3.description.en},
     
    ];
    console.log(trendingcoins);


    svg1= d3.select('.image-description').selectAll('text').data(trendingcoins).enter().append('text').text(function (d) { return d.d1}).attr('font-size', '20px').attr('color', 'white');
    svg2= d3.select('.image-description2').selectAll('text').data(trendingcoins).enter().append('text').text(function (d) { return d.d2}).attr('font-size', '20px').attr('color', 'white');
    svg3= d3.select('.image-description3').selectAll('text').data(trendingcoins).enter().append('text').text(function (d) { return d.d3}).attr('font-size', '20px').attr('color', 'white');

}
getCryptocurrentprices();