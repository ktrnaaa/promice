const fs = require('fs');
const fsp = fs.promises;

const testPromice = async () => {

    const text_1 = await fsp.readFile(__dirname + '/public/text1.txt', 'utf-8');

    console.log(text_1);

    const text2 = '===' + text_1 + 'new random text1' + '===';
    await fsp.writeFile(__dirname + '/public/text2.txt', text2);

    console.log(text2);

    const text3 = '===' + text2 + 'newrandomtext3'+ '===';
    await fsp.writeFile(`${__dirname}/text3`, text3);
    console.log(text3);

};


testPromice();