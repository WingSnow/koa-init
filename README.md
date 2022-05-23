# Koa Init

基于`Koa2`+`Typescript`+`sqlite`的开箱即用的Koa框架，封装了一些必备的中间件。

## 介绍

- 💥基于`Koa`+`Typescript`
- 👉添加了`koa-bodyparser`解析请求参数，`koa-router`使用路由
- 🔑`jsonwebtoken`进行jwt权限校验
- 💾`sqlite3`连接数据库
- 📑`log4js`记录日志
- 📐集成`ESlint(airbnb)`+`Prettier`+`EditorConfig`进行代码格式化
- 🔄使用`nodemon`实现热更新
- 📌配置了路径别名（`@`指向目录`/src`）

## 用法

### 安装依赖

```
npm install
```

### 运行项目

```
npm run dev
```

### 获取token

Method: `Post`

Request URL: `http://localhost:3000/token`

Body:

```json
{
    "username": "admin",
    "password": "admin"
}
```

Response（Sample）:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1MjM0NDg3NywiZXhwIjoxNjUyMzUyMDc3fQ.B36q8EzU9vt1i-2lB3ao1bkh2IMW-WKGaR93Pu7T9N4"
}
```

### 访问接口

Method: `Get`

Request URL: `http://localhost:3000/`

Header（Sample）:

```json
{
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1MjM0NDg3NywiZXhwIjoxNjUyMzUyMDc3fQ.B36q8EzU9vt1i-2lB3ao1bkh2IMW-WKGaR93Pu7T9N4“
}
```

Response:

```
Hello Koa and TS.
```

## 说明
目录结构
```
│   .editorconfig
│   .eslintrc.js
│   .gitignore
│   .prettierrc.js
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
├───logs
└───src
    │   app.ts
    │   config.ts
    │   router.ts
    ├───controllers
    │       authController.ts
    ├───middlewares
    │       logger.ts
    ├───schema
    │   │   db.ts
    │   │   index.ts
    │   └───model
    │           user.ts
    └───secrets
            db.db
            jwt-key
```

路由放在`router.ts`中，通过修改`defaultPath`设置不需要jwt验证就可以访问的路径。

数据库文件为`/secrets/db.db`，默认只有一张`users`表。

jwt密钥在`/secrets/jwt-key`。

数据库相关代码在`schema`目录中，在`db.ts`中用`Promise`封装了`get`方法，可以根据需要自行封装其他方法。实际执行的sql脚本在`schema/model`目录。

业务代码在`controllers`目录中。

日志自动生成在`logs`目录中，按日期分成不同的文件。