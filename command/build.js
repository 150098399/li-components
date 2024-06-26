// @ts-nocheck
import { defineConfig, build } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import fsExtra from 'fs-extra';

import path from 'path';
import * as fs from 'fs';

import { fileURLToPath } from 'url';

const __filenameNew = fileURLToPath(import.meta.url);

const __dirnameNew = path.dirname(__filenameNew);

// 打包入口
const entryDir = path.resolve(__dirnameNew, '../packages');
// 打包出口
const outDir = path.resolve(__dirnameNew, '../lib');

// vite配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()],
});

// rollup配置
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

// 全量打包构建
const buildAll = async () => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, 'index.ts'),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir,
    },
  });
};

// 单个组件打包
const buildSingle = async (name) => {
  await build({
    ...baseConfig,
    build: {
      rollupOptions,
      lib: {
        entry: path.resolve(entryDir, name),
        name: 'index',
        fileName: 'index',
        formats: ['es', 'umd'],
      },
      outDir: path.resolve(outDir, name),
    },
  });
};

// 每个组件生成package.json
const createPackageJson = (name) => {
  const fileStr = `
    {
      "name": "${name}",
      "main": "index.umd.cjs",
      "module": "index.js",
      "style": "style.css"
    }
  `;
  fsExtra.outputFile(
    path.resolve(outDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  );
};

const buildLib = async () => {
  await buildAll();

  console.log('-------------------------------------------------------------');
  console.log('aaaa', fs.readdirSync(entryDir));

  // 获取组件名称
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componendDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componendDir).isDirectory();
    return isDir && fs.readdirSync(componendDir).includes('index.ts');
  });

  // 循环构建
  for (const name of components) {
    await buildSingle(name);
    createPackageJson(name);
  }
};

buildLib();
