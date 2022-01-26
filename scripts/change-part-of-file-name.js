const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const readline = require('readline');
var getDirName = require('path').dirname;



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const originalName = process.argv[2];
const replacementName = process.argv[3];
const optionalPath = process.argv[4];


if (!originalName) {
  console.log('Info');
  console.log('Arg 1 = Original name');
  console.log('Arg 2 = Replacement name');
  console.log('Arg 3 = Optional absolute path');

  process.exit();
}

if (!replacementName) {
  console.log('Error please provide a replacement string for "' + originalName + '"');
  process.exit();
}



rl.question("Is this safe? Is everything saved? If not cancel with CTRL + C", () => {

  const commandPath = process.cwd();

  const originalPath = commandPath ?? optionalPath;

  console.log(`Searching for paths in `, originalPath);

  const nodeMatches = ThroughDirectory(originalPath);

  console.log(nodeMatches);

  console.log(`Writing new files`);
  nodeMatches.forEach(foundPath => {

    const pathToEdit = foundPath.replace(originalPath, '');

    const splitStringByName = pathToEdit.split(originalName);
    if (splitStringByName.length > 1) {

      const newPath = path.join(originalPath, splitStringByName.join(replacementName));
      console.log(`The new path is`, newPath);

      if (fs.statSync(foundPath).isDirectory()) {
        fs.renameSync(foundPath, newPath)
      } else {
        const content = fs.readFileSync(foundPath);
        writeFile(newPath, content);
      }
    }
  });

  console.log(`deleting old files`);
  nodeMatches.forEach(originalPath => {
    const splitStringByName = originalPath.split(originalName);
    if (splitStringByName.length > 1) {
      fs.unlinkSync(originalPath);
    }
  });

  process.exit();
});


function writeFile(path, contents, cb) {
  fs.mkdirSync(getDirName(path), { recursive: true });
  fs.writeFileSync(path, contents, cb);
}



function ThroughDirectory(dir) {
  let files = [];
  fs.readdirSync(dir).forEach((file) => {
    const absolutePath = path.join(dir, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      files.push(absolutePath);
      ThroughDirectory(absolutePath).forEach(path => files.push(path));
    } else {
      files.push(absolutePath);
    }
  });
  return files;
}
