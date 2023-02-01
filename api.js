const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const usdt = document.getElementById("tether");
const bnb = document.getElementById("binancecoin");
//const date = document.getElementById("current_date");
const settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Cbinancecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    usdt.innerHTML = response.tether.usd;
    bnb.innerHTML = response.binancecoin.usd;
});