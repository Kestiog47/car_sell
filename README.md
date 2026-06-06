# PRESTIGE MOTORS — 极致豪华汽车销售页面

高端豪华汽车品牌单页面展示网站，Next.js 15 + React 19 实现，暗黑奢华设计风格，全端响应式适配。

---

## 技术栈

| 层面 | 技术选择 |
|------|---------|
| **框架** | Next.js 15 (App Router) |
| **UI** | React 19 + TypeScript |
| **样式** | CSS3 — CSS 自定义属性、Grid、Flexbox、`@keyframes`、`clamp()`、`backdrop-filter` |
| **字体** | Google Fonts（Cinzel / Cormorant Garamond / Noto Sans SC）|
| **图片** | Unsplash CDN 按需加载 |
| **依赖** | 零第三方 UI 库 |

---

## 项目结构

```
car_sell/
├── app/
│   ├── layout.tsx         # 根布局（metadata、字体）
│   ├── page.tsx           # 主页面（组合所有 section）
│   └── globals.css        # 全局样式（CSS 变量、动画、响应式）
├── components/
│   ├── Preloader.tsx      # 预加载动画（Client）
│   ├── CustomCursor.tsx   # 自定义光标（Client）
│   ├── Navbar.tsx         # 导航栏 + 移动端菜单（Client）
│   ├── Hero.tsx           # 全屏首页轮播 + 粒子（Client）
│   ├── BrandStrip.tsx     # 品牌滚动条（Server）
│   ├── Inventory/
│   │   └── Inventory.tsx  # 车型筛选网格（Client）
│   ├── Showcase.tsx       # 传承与超越轮播（Client）
│   ├── Services.tsx       # 尊享服务卡片（Server）
│   ├── Contact.tsx        # 预约表单（Client）
│   ├── Footer.tsx         # 页脚（Server）
│   └── RevealWrapper.tsx  # 滚动渐入动画包装器（Client）
├── lib/
│   └── data.ts            # 车型数据、品牌列表、常量
├── index.html             # [原始] 单文件版本（已废弃）
└── README.md
```

## 核心板块

### 1. Hero 全屏首页
- 3 张 Unsplash 高清图片轮播（6 秒自动切换）
- 40 个随机金色粒子动画
- 暗色蒙版 + 渐变遮罩
- CTA 双按钮 + 入场动画

### 2. 品牌滚动条
- 10 个顶级品牌 CSS 无缝循环滚动

### 3. 臻选车源
- 12 款精选车型，TypeScript 数据驱动
- 5 类筛选标签（全部/轿车/SUV/超跑/Hyper Car）
- 卡片悬浮效果

### 4. 传承与超越
- 左右分栏布局，图片轮播 + 品牌故事
- 三组金色数据展示

### 5. 尊享服务
- 6 张服务卡片，自适应网格布局

### 6. 预约品鉴
- 联系信息 + 浮动标签表单
- 提交反馈动画

---

## 使用方式

```bash
# 安装依赖
npm install

# 开发模式
npm run dev
# 访问 http://localhost:3000

# 生产构建
npm run build
npm start
```

---

## 图片来源声明

本页面所有汽车图片均来自 [Unsplash](https://unsplash.com)，遵循 [Unsplash License](https://unsplash.com/license) —— 免费用于商业与非商业用途，无需署名。
