#! /usr/bin/env node
var request = require('request');
var colors = require('colors');
/**
 * 美化 api 返回的数据，让在命令行上显示更好看
 * @param  {JSON} data 返回的结果
 * @return {[type]}      [description]
 */
var prettify = function (data) {
    if (data.ticker_btccny !== null) {
        console.log('\n ' + 'btccny'.bold+'【btc-￥】')
        var btccnyH = data.ticker_btccny.high;
        var btccnyL = data.ticker_btccny.low;
        var btccnySell = data.ticker_btccny.sell;
        var btccnyLast = data.ticker_btccny.last;
        var btccnyV = data.ticker_btccny.vol;
        var btccnyD = data.ticker_btccny.date;
        var btccnyVwap = data.ticker_btccny.vwap;
        var btccnyP = data.ticker_btccny.prev_close;
        var btccnyO = data.ticker_btccny.open;
        console.log('\n'+'近24小时内最高价格：'.bold.underline+btccnyH+'\n'+'近24小时内最低价格：'.bold.underline+btccnyL+'\n'+'最高出价：'.bold.underline+btccnySell+'\n'+'最低出价：'.bold.underline+btccnySell+'\n'+'近24小时内比特币成交量：'.bold.underline+btccnyV+'\n'+'最新更新时间：'.bold.underline+btccnyD+'\n'+'近24小时内平均成交价：'.bold.underline+btccnyVwap+'\n'+'昨日收盘价：'.bold.underline+btccnyP+'\n'+'今日开盘价：'.bold.underline+btccnyO)

    }
    if (data.ticker_ltccny !== null) {
        console.log('\n ' + 'ltccny'.bold+'【ltc-￥】')
        var btccnyH = data.ticker_ltccny.high;
        var btccnyL = data.ticker_ltccny.low;
        var btccnySell = data.ticker_ltccny.sell;
        var btccnyLast = data.ticker_ltccny.last;
        var btccnyV = data.ticker_ltccny.vol;
        var btccnyD = data.ticker_ltccny.date;
        var btccnyVwap = data.ticker_ltccny.vwap;
        var btccnyP = data.ticker_ltccny.prev_close;
        var btccnyO = data.ticker_ltccny.open;
        console.log('\n'+'近24小时内最高价格：'.bold.underline+btccnyH+'\n'+'近24小时内最低价格：'.bold.underline+btccnyL+'\n'+'最高出价：'.bold.underline+btccnySell+'\n'+'最低出价：'.bold.underline+btccnySell+'\n'+'近24小时内比特币成交量：'.bold.underline+btccnyV+'\n'+'最新更新时间：'.bold.underline+btccnyD+'\n'+'近24小时内平均成交价：'.bold.underline+btccnyVwap+'\n'+'昨日收盘价：'.bold.underline+btccnyP+'\n'+'今日开盘价：'.bold.underline+btccnyO)

    }
    if (data.ticker_ltcbtc !== null) {
        console.log('\n ' + 'ltcbtc'.bold+'【ltc-btc】')
        var btccnyH = data.ticker_ltcbtc.high;
        var btccnyL = data.ticker_ltcbtc.low;
        var btccnySell = data.ticker_ltcbtc.sell;
        var btccnyLast = data.ticker_btccny.last;
        var btccnyV = data.ticker_ltcbtc.vol;
        var btccnyD = data.ticker_ltcbtc.date;
        var btccnyVwap = data.ticker_ltcbtc.vwap;
        var btccnyP = data.ticker_ltcbtc.prev_close;
        var btccnyO = data.ticker_ltcbtc.open;
        console.log('\n'+'近24小时内最高价格：'.bold.underline+btccnyH+'\n'+'近24小时内最低价格：'.bold.underline+btccnyL+'\n'+'最高出价：'.bold.underline+btccnySell+'\n'+'最低出价：'.bold.underline+btccnySell+'\n'+'近24小时内比特币成交量：'.bold.underline+btccnyV+'\n'+'最新更新时间：'.bold.underline+btccnyD+'\n'+'近24小时内平均成交价：'.bold.underline+btccnyVwap+'\n'+'昨日收盘价：'.bold.underline+btccnyP+'\n'+'今日开盘价：'.bold.underline+btccnyO)

    }

}

request('https://data.btcchina.com/data/ticker?market=all', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var result = prettify(JSON.parse(body));
        // console.log(body);
    }
});

