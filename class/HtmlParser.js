const ejs = require('ejs');
const path = require('path');

class HtmlParser {
    static async Parse(table, nomeArq, num_rows, num_coluns) {
        const filePath = path.join(__dirname, '../views/table.ejs');
        return await ejs.renderFile(filePath, {
            header: table.header,
            rows: table.rows,
            nomeArq: nomeArq,
            Nrows: num_rows,
            Ncoluns: num_coluns
        });
    }
}

module.exports = HtmlParser;
