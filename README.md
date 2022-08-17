# tsdx-template

基于tsdx, 整合storybook, less, sass

基于Typescript语法, 创建Npm组件

## storybook编写注意事项

**文件名必须与导出的自定义组件同名, 否则无法生成属性信息.**

即: 组件文件名为:`Button.tsx`, 那么该文件内部也必须`export default Button`, 如果不这样无法生成属性列表

**编写storybook时, 必须引用组件的源文件, 而不能使用引用的引用, 否则无法生成属性信息**

即: 如果有组件:`src/lib/button/Button.tsx`, 在`src/index.tsx`导出了该组件, 如果编写`storybook`时, 引入的是`src/index.tsx`那么将无法生成属性列表, 必须引用`src/lib/button/Button.tsx`才行

## 目录说明

```
src                     # 源代码目录
|-index.tsx             # 只有在该文件导出的组件,才能被用户引用
|-index.config.ts       # ts配置文件
stories                 # storybook目录
example                 # 自行调用实验目录(基于parcel)
main.ts                 # storybook配置文件
manager.js              # storybook配置文件
YourTheme.js            # storybook配置文件
tsdx.config.js          # tsdx配置文件
tsconfig.json           # ts配置文件
```

## 命令说明

### 运行tsdx的监听

```bash
npm start # or yarn start
```

### 执行tsdx打包

```bash
npm build # or yarn build
```

### 运行storybook

```bash
npm storybook # or yarn storybook
```

### storybook打包

```bash
npm build-storybook # or yarn build-storybook
```

## 将组件上传npm

```bash
yarn build
npm login # npm登录
npm pub # 组件发布
```
