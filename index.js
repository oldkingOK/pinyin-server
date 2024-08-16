const CompleteDict = require('@pinyin-pro/data/complete');
const { segment, OutputFormat, addDict } = require('pinyin-pro');
const express = require('express');
const app = express();

app.use(express.json());
app.post('/', (req, res) => {
    console.log(req.body);
    let strs = [];
    req.body.raw.forEach(element => {
        strs.push(segment(
            element,
            {
                toneType: 'none',
                format: OutputFormat.PinyinArray,
            }
        ));
    });

    res.send({
        'strs': strs,
    });
});

addDict(CompleteDict);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;