'use strict';

const fs = require('fs');
const JSZip = require('jszip');

let dirs = fs.readdirSync('./download/');

for (const dir of dirs) {
  console.log(`processing ${dir}...`)
  let zip = new JSZip();
  const files = fs.readdirSync(`./download/${dir}`);
  for (const file of files) {
    const buf = fs.readFileSync(`./download/${dir}/${file}`);
    zip.file(file, buf);
  }
  const buffer = zip.generate({type: 'nodebuffer'});
  fs.writeFileSync(`./download/${dir}.zip`, buffer);
}
