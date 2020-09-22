'use strict';

let fs = require('fs');
let path = require('path');

async function* walk(dir) {
  for await (const file of await fs.promises.opendir(dir)) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory())
      yield* walk(fullPath);
    if (file.isFile())
      yield fullPath;
  }
}

module.exports = async function(content, map, meta) {
  const callback = this.async();

  const dir = path.dirname(this.resourcePath);

  const fileMap = {};
  for await (const file of walk(dir)) {
    this.addDependency(file);
    let name = path.relative(dir, file);
    name = name.replace(/\\/g, '/');
    name = name.replace(/^\//, '');

    // TODO: also, maybe it'd be better to chain loaders here so we can minify this?
    const fileContents = await fs.promises.readFile(file, { encoding: 'utf8' });
    fileMap[name] = fileContents;
  }

  // TODO: I think the only way to get this is by reading the directory.
  // The entry name does not seem accessible, nor is there a way to pass it
  // as an option.
  const entryName = 'raidboss';

  // This is a total hack to pollute the global namespace with this data
  // until everything is switched over to use webpack imports.
  const contents = `
     const data = ${JSON.stringify(fileMap)};
     module.exports = data;
     if (typeof window !== 'undefined')
       window.${entryName}FileData = data;
   `;

  callback(null, contents, map, meta);
};
