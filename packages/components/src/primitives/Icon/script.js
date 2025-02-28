const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const lodash = require('lodash');

const base = path.resolve(__dirname, './react');
const dirs = fs.readdirSync(base);

const pascalCase = (str) =>
  lodash.camelCase(str).replace(/^(.)/, lodash.toUpper);

const items = [];

dirs.forEach((dir) => {
  if (dir !== '.DS_Store') {
    const files = fs.readdirSync(path.resolve(base, `${dir}`));
    files
      .filter((item) => !item.includes('index'))
      .forEach((file) => {
        const basicName = path.basename(file, path.extname(file));
        if (!basicName.toLowerCase().includes('.ds_store')) {
          items.push({
            symbol: pascalCase(`${basicName}${dir.toUpperCase()}`),
            path: `${dir}/${basicName}`,
            name: pascalCase(`${basicName}${dir.toUpperCase()}`),
          });
        }
      });
  }
});

const typesTemplate = `
/* eslint-disable */
  import { I18nManager } from "react-native";

  const icons = {
    ${items
      .map((item) => {
        if (item.symbol.includes('Left')) {
          const rightSymbol = item.symbol.replace('Left', 'Right');
          const rightItem = items.find((i) => i.symbol === rightSymbol);
          if (rightItem) {
            return `${item.symbol}: () => I18nManager.isRTL ? import('./react/${rightItem.path}') : import('./react/${item.path}')`;
          }
        }
        if (item.symbol.includes('Right')) {
          const leftSymbol = item.symbol.replace('Right', 'Left');
          const leftItem = items.find((i) => i.symbol === leftSymbol);
          if (leftItem) {
            return `${item.symbol}: () => I18nManager.isRTL ? import('./react/${leftItem.path}') : import('./react/${item.path}')`;
          }
        }
        return `${item.symbol}: () => import('./react/${item.path}')`;
      })
      .join(',')}
  }
  export type IKeyOfIcons = keyof typeof icons;
  export default icons;
`;
fs.writeFileSync(
  path.resolve(__dirname, `./Icons.tsx`),
  prettier.format(typesTemplate, { parser: 'typescript' }),
  'utf8',
);
