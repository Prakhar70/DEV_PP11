node_xj = require("xls-to-json");
node_xj(
    {
        input: , // input xls
        output: "output.json", // output json
        sheet: "Sheet 1", // specific sheetname
        rowsToSkip: 0, // number of rows to skip at the top of the sheet; defaults to 0
        allowEmptyKey: true, // avoids empty keys in the output, example: {"": "something"}; default: true
    },
    function (err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
        }
    }
);