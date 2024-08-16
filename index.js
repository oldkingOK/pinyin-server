const CompleteDict = require('@pinyin-pro/data/complete');
const { segment, OutputFormat, addDict } = require('pinyin-pro');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.post('/', (req, res) => {
    console.log(req.body);
    let pinyin = [];
    req.body.raw.forEach(element => {
        pinyin.push(segment(
            element,
            {
                toneType: 'none',
                format: OutputFormat.PinyinArray,
            }
        ));
    });

    res.send({
        'pinyin': pinyin,
    });
});

addDict(CompleteDict);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;