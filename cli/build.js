const fs = require('fs');
const path = require('path');
const { transformAsync } = require('@babel/core');

const build = async fileName => {
  const filePath = path.resolve(__dirname, `../src/${fileName}`);
  const code = fs.readFileSync(filePath, 'utf8');
  const res = await transformAsync(code, { filename: filePath });
  // const jsFilePath = replaceExt(filePath, '.js');
  // removeSync(filePath);
  console.log('res.code', res.code);

  const outDir = path.resolve(__dirname, `../lib/${fileName}`);

  fs.writeFileSync(outDir, res.code);
};

/**
 * 构建组件包
 */
const runBuild = () => {
  const srcDirNames = fs.readdirSync(path.resolve(__dirname, '../src'));
  console.log('srcDirNames', srcDirNames);

  srcDirNames.forEach(name => {
    build(name);
  });
};

runBuild();
