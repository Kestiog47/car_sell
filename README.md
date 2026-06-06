# PRESTIGE MOTORS — 极致豪华汽车销售页面

高端豪华汽车品牌单页面展示网站，纯 HTML/CSS/JS 实现，暗黑奢华设计风格，全端响应式适配。

---

## 设计系统

### 配色方案

| 变量 | 色值 | 用途 |
|------|------|------|
| `--gold` | `#c6a55c` | 主强调色（品牌金） |
| `--gold-light` | `#d4b76e` | 悬停高亮 |
| `--gold-dark` | `#a88a3d` | 深色点缀 |
| `--black` | `#0a0a0a` | 主背景 |
| `--black-soft` | `#111111` | 次级背景 |
| `--gray-dark` | `#1a1a1a` | 卡片/面板背景 |
| `--white` | `#f5f5f5` | 主文字 |
| `--gray` | `#888888` | 辅助文字 |

整体采用"黑中黑"层次策略——通过三种深浅不同的黑色区分背景层级，避免单调。香槟金以极小面积点缀，制造稀有感。

### 字体系统

| 字体 | 应用场景 | 字重范围 |
|------|---------|---------|
| **Cinzel** | Hero 标题、车型名、LOGO、数据数字 | 400-900 |
| **Cormorant Garamond** | 正文字体（与中文字体并列） | 300-700 |
| **Noto Sans SC** | 导航、标签、说明文字、表单 | 200-700 |

三款字体全部通过 Google Fonts 加载，无需本地资源。Cinzel 的古典衬线气质与奢侈品调性高度契合。

### CSS 架构

所有主题色通过 CSS 自定义属性 (`:root` 变量) 集中管理，全局过渡动画统一使用 `cubic-bezier(0.25, 0.46, 0.45, 0.94)` 缓动曲线。布局以 CSS Grid + Flexbox 为核心，未使用任何 CSS 框架。

---

## 核心板块

### 1. Hero 全屏首页

| 特性 | 实现 |
|------|------|
| **三图轮播背景** | 3 张 Unsplash 高清图片（1920px），6 秒自动切换，1.5s 淡入淡出 + 10s 缓慢缩放动画 |
| **暗色蒙版** | 双层渐变遮罩 — 底部深黑渐变 + 两侧黑边渐变，确保暗黑主题不受图片色干扰 |
| **金色粒子** | 40 个随机分布的 2px 金色光点，从底部向上浮动的无限循环动画 |
| **内容层** | 副标题 → 大标题 → 描述 → CTA 双按钮，全部带 `fadeUp` 逐级延迟入场动画（0.3s-0.9s） |
| **轮播导航** | 底部金色圆点指示器，点击可跳转，悬停 Hero 区暂停自动轮播 |
| **Scroll 指示器** | 底部居中 "SCROLL" 文字 + 金色渐变竖线呼吸动画 |

Hero 图片来源（Unsplash）：

| 图序 | Photo ID | 描述 |
|------|----------|------|
| 1 | `photo-1485291571150-772bcfc10da5` | 暗黑超跑特写 |
| 2 | `photo-1552561062-532218dd53ad` | 豪华汽车展厅 |
| 3 | `photo-1567808291548-fc3ee04dbcf0` | 暗调豪华轿车 |

### 2. 品牌滚动条

10 个顶级品牌名称（ROLLS-ROYCE / BENTLEY / FERRARI / LAMBORGHINI / PORSCHE / ASTON MARTIN / MCLAREN / BUGATTI / MAYBACH / MASERATI）以 `@keyframes scrollBrands` 实现无限向左滚动。双份数据 + `width: max-content` + `transform: translateX(-50%)` 实现无缝循环。单个品牌 hover 时变色为金色。

### 3. 臻选车源

- **12 款精选车型**，数据通过 JavaScript 数组集中管理，动态渲染 HTML
- **5 类筛选标签**：全部车型 / 奢华轿车 / 豪华SUV / 超级跑车 / Hyper Car — 点击即时过滤重绘
- **卡片设计**：280px 高图片区 → 底部渐变遮罩 → 金色徽章 → 品牌/车型名 → 规格条 → 价格 + 咨询按钮
- **悬浮效果**：卡片上浮 8px + 阴影 + 图片放大 1.08x
- 每台车型均映射到对应的 Unsplash 真实车型照片（通过 `getCarImage()` 函数）

车型图片映射表：

| 车型 | Unsplash Photo ID |
|------|------------------|
| Rolls-Royce Phantom Extended | `photo-1541239370886-851049f91487` |
| Bentley Continental GT Speed | `photo-1471289549423-04adaecfa1f1` |
| Ferrari SF90 Stradale | `photo-1583121274602-3e2820c69888` |
| Lamborghini Revuelto | `photo-1511919884226-fd3cad34687c` |
| Maybach S 680 4MATIC | `photo-1618840484703-dc9dfcea1025` |
| Porsche 911 GT3 RS | `photo-1580274455191-1c62238fa333` |
| Aston Martin DB12 | `photo-1642421694655-fb43c00a957d` |
| Rolls-Royce Cullinan Black Badge | `photo-1599912027611-484b9fc447af` |
| McLaren 750S Spider | `photo-1508974576580-36a2f92ad3bc` |
| Bugatti Chiron Super Sport | `photo-1544636331-e26879cd4d9b` |
| Bentley Bentayga EWB Azure | `photo-1604946881982-a3321fcf07f0` |
| Ferrari Purosangue | `photo-1503736334956-4c8f8e92946d` |

### 4. 传承与超越

左右分栏布局（`display: flex; min-height: 600px`），平板以下切换为上下堆叠：

| 左侧（图片区） | 右侧（内容区） |
|---|---|
| 3 张 Unsplash 品牌主题图片轮播（内饰工艺 / 皮革细节 / 经典细节），5 秒自动切换，底部圆点导航 | 品牌故事（1998 年创立、300+ 项检测、手工级整备）+ 三组金色数据展示（25+年 / 500+座驾 / 98%满意度） |

图片区叠加左侧暗色渐变蒙版，与右侧 `--black-soft` 背景无缝衔接。

Showcase 图片来源：

| 图序 | Photo ID | 主题 |
|------|----------|------|
| 1 | `photo-1584099662811-6744be099a74` | 豪华内饰工艺 |
| 2 | `photo-1502014335594-c026800f24ee` | 奢华皮革细节 |
| 3 | `photo-1549064233-945d7063292f` | 经典豪车细节 |

### 5. 尊享服务

6 张服务卡片，自适应网格布局（`repeat(auto-fit, minmax(280px, 1fr))`）：
🔍 私人寻车 · 🛡️ 认证检测 · 🎨 个性定制 · ✈️ 全球交付 · 🔧 尊享养护 · 🏆 投资顾问

卡片悬浮时边框变金 + 微金背景 + 上浮 5px。

### 6. 预约品鉴

左右两栏网格布局（`align-items: center` 垂直居中）：

**左侧** — 4 条联系信息，每条带金色边框图标：
- 📍 上海静安区旗舰展厅地址
- 📞 专属热线 +86 21 6288 8888
- ✉️ 邮箱 concierge@prestige-motors.cn
- 🕐 营业时间 周一至周六 10:00-19:00

**右侧** — 浮动标签表单，6 个字段：
1. 姓名 (text)
2. 电话 (tel)
3. 邮箱 (email)
4. 意向品牌 (select：10 个品牌 + 其他)
5. **预约时间 (datetime-local)** — 页面加载时自动设为当前本地时间，`min` 属性限制不可选择过去时间
6. 需求 (textarea)

提交按钮点击后显示绿色 "✓ 申请已提交" 反馈，3 秒后自动重置表单并恢复默认预约时间。

---

## 交互体验

### 微交互

| 交互 | 实现方式 |
|------|---------|
| **自定义光标** | 两个 `position: fixed` div — 金色圆环 + 实心圆点，`mousemove` 实时跟随；悬停链接/按钮时圆环放大至 50px + 半透明金色填充 |
| **预加载动画** | 800ms 黑底页面 + PRESTIGE 呼吸灯文字（`opacity` 0.3↔1 + `scale` 0.95↔1.05），加载完成后 `opacity: 0; visibility: hidden` 淡出 |
| **导航栏滚动效果** | 滚动超过 80px 后，导航栏从透明变为 `rgba(10,10,10,0.95)` + `backdrop-filter: blur(20px)` + 金色底边线 |
| **导航链接下划线** | `::after` 伪元素，`width: 0 → 100%` 过渡动画 |
| **滚动渐入动画** | `IntersectionObserver` (threshold 0.15) 监听 `.reveal` 元素，进入视口时从 `translateY(60px) opacity:0` 过渡到原位 |
| **车型筛选** | 点击筛选标签触发热插拔重绘，新卡片自动注册 IntersectionObserver |
| **轮播控制** | Hero（6s）和 Showcase（5s）两处独立轮播，均支持悬停暂停、圆点导航 |

### 响应式适配

| 断点 | 行为 |
|------|------|
| **> 1024px** | 完整桌面布局：导航横排、Showcase 左右分栏、Contact 左右网格、Car Grid 多列 |
| **≤ 1024px** | 内边距压缩、Showcase 上下堆叠、Contact 单列、Car Grid 单列居中 |
| **≤ 768px** | 桌面导航隐藏 → 汉堡菜单 + 全屏覆盖导航（`backdrop-filter: blur(30px)` + 竖向 Cinzel 大号链接）、Hero 按钮竖排、统计数字缩小 |

### 表单标签浮动机制

采用 `:not(:placeholder-shown)` 伪类（所有输入框设置 `placeholder=" "`）实现纯 CSS 浮动标签：
- **有内容时**：标签上移至 `top: -0.6rem`，字号缩小至 0.65rem，颜色变为金色
- **`<select>` 特殊处理**：通过 JS `change` 事件切换 `.has-value` 类触发浮动（因 select 不支持 `:placeholder-shown`）
- **`datetime-local`**：适配深色主题日历控件（`color-scheme: dark` + WebKit 图标滤镜反转）

---

## 技术栈

| 层面 | 技术选择 |
|------|---------|
| **结构** | HTML5 语义标签（`<nav>`, `<section>`, `<footer>`） |
| **样式** | 纯 CSS3 — CSS 自定义属性、Grid、Flexbox、`@keyframes`、`clamp()`、`backdrop-filter` |
| **脚本** | 原生 JavaScript（ES6+） — IntersectionObserver、事件委托、动态 DOM 渲染 |
| **字体** | Google Fonts（Cinzel / Cormorant Garamond / Noto Sans SC） |
| **图片** | Unsplash CDN 按需加载（`?w=X&q=80` 参数控制尺寸与质量），无需 API Key，免费商用 |
| **依赖** | **零外部框架/库** — 无 jQuery、无 Bootstrap、无 React |

---

## 项目结构

```
car_sell/
├── index.html    # 单文件完整页面（HTML + CSS + JS）
└── README.md     # 本文档
```

---

## 使用方式

```bash
# 直接在浏览器中打开
open index.html

# 或使用任意本地服务器
python -m http.server 8000
# 访问 http://localhost:8000
```

所有图片资源通过 Unsplash CDN 在线加载，无需本地图片文件。离线使用时可将 Unsplash URL 替换为本地图片路径。

---

## 图片来源声明

本页面所有汽车图片均来自 [Unsplash](https://unsplash.com)，遵循 [Unsplash License](https://unsplash.com/license) —— 免费用于商业与非商业用途，无需署名。具体 photo ID 见上文各板块对应表格。
