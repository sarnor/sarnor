let htmlPages = [];

const importHtml = (r) => r.keys().forEach((s) => htmlPages.push(s));

importHtml(require.context("../../veiw/", true, /\.html$/));

module.exports = htmlPages;