# Vercel 部署指南 - PC28 API

## 🎯 方案优势

- ✅ **完全免费**（Vercel 提供免费额度）
- ✅ **无需服务器**（无需购买云服务器）
- ✅ **自动 HTTPS**（免费SSL证书）
- ✅ **全球CDN**（访问速度快）
- ✅ **3分钟部署**（超级简单）

---

## 📦 准备工作

### 1. 注册 Vercel 账号
访问：https://vercel.com/signup
- 推荐用 GitHub 账号登录
- 完全免费

### 2. 安装 Vercel CLI（可选）
如果你想用命令行部署：
```bash
npm install -g vercel
```

---

## 🚀 部署步骤

### 方法1：GitHub 部署（推荐，最简单）

#### 步骤1：创建 GitHub 仓库
1. 访问 https://github.com/new
2. 仓库名：`pc28-api`
3. 选择 Public
4. 点 "Create repository"

#### 步骤2：上传文件
创建以下目录结构：
```
pc28-api/
├── api/
│   ├── kj.js
│   ├── ds.js
│   ├── dx.js
│   ├── zh.js
│   └── sha.js
└── vercel.json
```

**方式A：用 GitHub 网页上传**
1. 在仓库页面，点 "Add file" → "Create new file"
2. 文件名输入：`api/kj.js`
3. 粘贴 kj.js 的内容
4. 点 "Commit changes"
5. 重复以上步骤上传其他文件

**方式B：用 Git 命令行**
```bash
git clone https://github.com/你的用户名/pc28-api.git
cd pc28-api
mkdir api
# 把所有文件复制到对应位置
git add .
git commit -m "Initial commit"
git push origin main
```

#### 步骤3：在 Vercel 部署
1. 访问 https://vercel.com/new
2. 选择 "Import Git Repository"
3. 选择你刚创建的 `pc28-api` 仓库
4. 点 "Import"
5. 保持默认设置，点 "Deploy"
6. 等待30秒，部署完成！

#### 步骤4：获取 API 地址
部署成功后，你会得到一个地址，例如：
```
https://pc28-api.vercel.app
```

或者自定义域名：
```
https://你的项目名.vercel.app
```

---

### 方法2：Vercel CLI 部署（快速）

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 进入项目目录
cd pc28-api

# 3. 登录 Vercel
vercel login

# 4. 部署
vercel

# 5. 按提示操作，选择：
# - Set up and deploy? Yes
# - Which scope? 选择你的账号
# - Link to existing project? No
# - Project name? pc28-api
# - In which directory is your code located? ./

# 6. 部署到生产环境
vercel --prod
```

---

### 方法3：拖拽部署（最简单，但需要整理文件）

1. 把所有文件按目录结构整理好
2. 压缩成 ZIP 文件
3. 访问 https://vercel.com/new
4. 拖拽 ZIP 文件到页面
5. 点击 "Deploy"

---

## ✅ 测试 API

部署成功后，在浏览器测试：

```
https://你的项目名.vercel.app/api/kj
```

应该返回 JSON 数据（最新开奖）

其他接口：
- `/api/ds` - 单双预测
- `/api/dx` - 大小预测
- `/api/zh` - 组合预测
- `/api/sha` - 杀组合预测

---

## 📱 配置手机应用

1. **打开 pc28-with-worker.jsx**
2. **点"设置"按钮**
3. **填入 Vercel 地址：**
   ```
   https://你的项目名.vercel.app
   ```
4. **点"保存配置"**
5. **导入历史数据**
6. **开启同步**

---

## 🔄 更新部署

### GitHub 方式
1. 修改 GitHub 仓库的文件
2. Vercel 会自动重新部署（1分钟内）

### CLI 方式
```bash
# 修改文件后
vercel --prod
```

---

## 🆓 Vercel 免费额度

- ✅ 每月 100GB 带宽
- ✅ 无限请求次数
- ✅ 自动 HTTPS
- ✅ 全球 CDN

**对于个人使用完全够用！**

---

## ⚡ 性能优化

### 1. 启用边缘缓存（可选）
在 `vercel.json` 添加：
```json
{
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "s-maxage=5, stale-while-revalidate"
        }
      ]
    }
  ]
}
```

### 2. 使用自定义域名（可选）
1. Vercel 控制台 → Settings → Domains
2. 添加你的域名
3. 按提示配置 DNS

---

## 🐛 常见问题

### Q1: API 返回 404？
**原因：** 文件路径不对
**解决：** 确保文件在 `api/` 目录下，文件名正确

### Q2: CORS 错误？
**原因：** 跨域配置问题
**解决：** 确保 `vercel.json` 配置正确

### Q3: 部署失败？
**原因：** 代码语法错误
**解决：** 检查 Vercel 控制台的错误日志

### Q4: 请求超时？
**原因：** pc28.help 网站响应慢
**解决：** 这是正常现象，API 会自动重试

---

## 📊 监控和日志

### 查看日志
1. Vercel 控制台
2. 选择项目
3. 点击 "Logs"
4. 查看实时日志

### 查看统计
1. Vercel 控制台
2. 选择项目
3. 点击 "Analytics"
4. 查看请求统计

---

## 🔐 安全建议

1. **不要在代码中硬编码敏感信息**
2. **使用环境变量存储密钥**（如果需要）
3. **定期检查 Vercel 日志**

---

## 💡 进阶功能

### 添加认证（可选）
如果想限制API访问：

```javascript
export default async function handler(req, res) {
  // 检查 API Key
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // 原有逻辑...
}
```

在 Vercel 控制台添加环境变量 `API_KEY`

---

## 🎉 优势总结

与云服务器对比：

| 特性 | Vercel | 云服务器 |
|------|--------|---------|
| 价格 | 免费 | ¥99/年 |
| 部署难度 | ⭐ 简单 | ⭐⭐⭐ 复杂 |
| 维护成本 | 零维护 | 需要维护 |
| HTTPS | 自动 | 需配置 |
| CDN | 全球 | 单地域 |
| 扩展性 | 自动 | 手动 |

**Vercel 是个人项目的最佳选择！**

---

## 📞 需要帮助？

如果部署遇到问题，提供：
1. 错误截图
2. Vercel 部署日志
3. 在哪一步遇到问题

我会立即帮你解决！
