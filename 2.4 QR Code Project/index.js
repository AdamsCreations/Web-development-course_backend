/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: 'input',
      name: 'qrcode',
      message: 'Write your QR code:',
    }
  ])
  .then((answers) => {
    const userAnswer = answers.qrcode;
    console.log("You entered:" + userAnswer);
    var qr_svg = qr.image(userAnswer, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('image.png'));

    const content = userAnswer;
    const fileName = 'userURL.txt';

    fs.writeFile(fileName, content, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log(`Text file "${fileName}" created successfully.`);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something went wrong:", error);
    }
  });




