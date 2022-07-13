import { defineConfig } from 'dumi';

export default defineConfig({
  title: '@one-piece-rick/react-ui',
  favicon: 'https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/png/1.png',
  logo: 'https://cdn.jsdelivr.net/gh/rick-chou/rick-assets/png/1.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: 'GitHub',
      path: 'https://github.com/rick-chou/rick-ui-react',
    },
  ],
  apiParser: {
    // 自定义属性过滤配置，也可以是一个函数，用法参考：https://github.com/styleguidist/react-docgen-typescript/#propfilter
    propFilter: {
      // 是否忽略从 node_modules 继承的属性，默认值为 false
      skipNodeModules: true,
      // 需要忽略的属性名列表，默认为空数组
      skipPropsWithName: [],
      // 是否忽略没有文档说明的属性，默认值为 false
      skipPropsWithoutDoc: false,
    },
  },
  // more config: https://d.umijs.org/config
});
