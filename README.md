## create-react-app与electron构建桌面应用

### 启动方式：

```
npm run dev
```

### 主要用到的包

```
// 判断electron是否为开发环境
electron-is-dev 

// 一次运行多个命令
concurrently

// 等一个命令执行完毕再执行下一个命令
wait-on

// 解决跨平台设置环境变量
cross-env
```