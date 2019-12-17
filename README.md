## create-react-app与electron构建桌面应用脚手架

### 启动方式：

```
// clone项目后先安装依赖

npm i

// 开发模式启动

npm run dev 或 yarn dev

// 生成安装完毕后的文件,执行失败的话可能需要科学上网
// 添加钩子 prepack 会在pack执行前执行
// package.json内build的files还需添加mian.js引用过的资源

npm run pack

// 生成安装包

npm run dist

```

### 主要用到的包:

```

// 判断electron是否为开发环境
electron-is-dev 

// 一次运行多个命令
concurrently

// 等一个命令执行完毕再执行下一个命令
wait-on

// 解决跨平台设置环境变量
cross-env

// 为生产环境build代码
electron-builder

```

### create-react-app 各种配置:

请参考： [tiger-react-cli](https://github.com/TigerHee/tiger-react-cli)