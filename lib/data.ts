export interface Car {
  id: number;
  brand: string;
  name: string;
  category: "sedan" | "suv" | "sport" | "hyper";
  year: string;
  mileage: string;
  engine: string;
  price: string;
  color: string;
  badge: string;
}

export const cars: Car[] = [
  {
    id: 1,
    brand: "Rolls-Royce",
    name: "Phantom Extended",
    category: "sedan",
    year: "2024",
    mileage: "120 km",
    engine: "V12 6.75L",
    price: "¥ 1,280,000",
    color: "Midnight Sapphire",
    badge: "准新车",
  },
  {
    id: 2,
    brand: "Bentley",
    name: "Continental GT Speed",
    category: "sport",
    year: "2024",
    mileage: "2,100 km",
    engine: "W12 6.0L",
    price: "¥ 868,000",
    color: "Silver Storm",
    badge: "限量版",
  },
  {
    id: 3,
    brand: "Ferrari",
    name: "SF90 Stradale",
    category: "sport",
    year: "2023",
    mileage: "860 km",
    engine: "V8 Hybrid 4.0L",
    price: "¥ 1,150,000",
    color: "Rosso Corsa",
    badge: "稀有色",
  },
  {
    id: 4,
    brand: "Lamborghini",
    name: "Revuelto",
    category: "sport",
    year: "2024",
    mileage: "350 km",
    engine: "V12 Hybrid 6.5L",
    price: "¥ 1,420,000",
    color: "Verde Mantis",
    badge: "热门",
  },
  {
    id: 5,
    brand: "Maybach",
    name: "S 680 4MATIC",
    category: "sedan",
    year: "2024",
    mileage: "500 km",
    engine: "V12 6.0L",
    price: "¥ 780,000",
    color: "Obsidian Black",
    badge: "臻选",
  },
  {
    id: 6,
    brand: "Porsche",
    name: "911 GT3 RS",
    category: "sport",
    year: "2024",
    mileage: "180 km",
    engine: "Flat-6 4.0L",
    price: "¥ 580,000",
    color: "Arctic Grey",
    badge: "赛道版",
  },
  {
    id: 7,
    brand: "Aston Martin",
    name: "DB12",
    category: "sport",
    year: "2024",
    mileage: "1,500 km",
    engine: "V8 4.0L",
    price: "¥ 620,000",
    color: "Ionic Blue",
    badge: "新款",
  },
  {
    id: 8,
    brand: "Rolls-Royce",
    name: "Cullinan Black Badge",
    category: "suv",
    year: "2024",
    mileage: "3,200 km",
    engine: "V12 6.75L",
    price: "¥ 1,080,000",
    color: "Black Diamond",
    badge: "Black Badge",
  },
  {
    id: 9,
    brand: "McLaren",
    name: "750S Spider",
    category: "sport",
    year: "2024",
    mileage: "620 km",
    engine: "V8 Twin-Turbo 4.0L",
    price: "¥ 960,000",
    color: "Papaya Orange",
    badge: "敞篷",
  },
  {
    id: 10,
    brand: "Bugatti",
    name: "Chiron Super Sport",
    category: "hyper",
    year: "2023",
    mileage: "200 km",
    engine: "W16 8.0L",
    price: "¥ 5,800,000",
    color: "French Racing Blue",
    badge: "Hyper",
  },
  {
    id: 11,
    brand: "Bentley",
    name: "Bentayga EWB Azure",
    category: "suv",
    year: "2024",
    mileage: "1,800 km",
    engine: "V8 4.0L",
    price: "¥ 720,000",
    color: "Rose Gold",
    badge: "长轴版",
  },
  {
    id: 12,
    brand: "Ferrari",
    name: "Purosangue",
    category: "suv",
    year: "2024",
    mileage: "950 km",
    engine: "V12 6.5L",
    price: "¥ 1,180,000",
    color: "Grigio Titanio",
    badge: "稀缺",
  },
];

export const carImageMap: Record<string, string> = {
  "Rolls-Royce_Phantom Extended":
    "https://images.unsplash.com/photo-1541239370886-851049f91487",
  "Bentley_Continental GT Speed":
    "https://images.unsplash.com/photo-1471289549423-04adaecfa1f1",
  "Ferrari_SF90 Stradale":
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888",
  "Lamborghini_Revuelto":
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c",
  "Maybach_S 680 4MATIC":
    "https://images.unsplash.com/photo-1618840484703-dc9dfcea1025",
  "Porsche_911 GT3 RS":
    "https://images.unsplash.com/photo-1580274455191-1c62238fa333",
  "Aston Martin_DB12":
    "https://images.unsplash.com/photo-1642421694655-fb43c00a957d",
  "Rolls-Royce_Cullinan Black Badge":
    "https://images.unsplash.com/photo-1599912027611-484b9fc447af",
  "McLaren_750S Spider":
    "https://images.unsplash.com/photo-1508974576580-36a2f92ad3bc",
  "Bugatti_Chiron Super Sport":
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  "Bentley_Bentayga EWB Azure":
    "https://images.unsplash.com/photo-1604946881982-a3321fcf07f0",
  "Ferrari_Purosangue":
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
};

export function getCarImage(brand: string, model: string): string {
  return (
    carImageMap[brand + "_" + model] ||
    "https://images.unsplash.com/photo-1485291571150-772bcfc10da5"
  );
}

export const brands = [
  "ROLLS-ROYCE",
  "BENTLEY",
  "FERRARI",
  "LAMBORGHINI",
  "PORSCHE",
  "ASTON MARTIN",
  "MCLAREN",
  "BUGATTI",
  "MAYBACH",
  "MASERATI",
];

export const brandOptions = [
  "Rolls-Royce",
  "Bentley",
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "Aston Martin",
  "McLaren",
  "Bugatti",
  "Maybach",
  "其他品牌",
];

export const services = [
  { icon: "🔍", title: "私人寻车", desc: "全球范围内为您寻找特定年份、配置及颜色的稀缺座驾，满足最挑剔的收藏家需求。" },
  { icon: "🛡️", title: "认证检测", desc: "300+项专业检测流程，每一台车附带完整历史报告及认证证书，让您安心拥有。" },
  { icon: "🎨", title: "个性定制", desc: "从内饰皮革到外观漆色，与顶级工坊合作，为您打造独一无二的专属座驾。" },
  { icon: "✈️", title: "全球交付", desc: "提供门到门的全球运输服务，封闭式恒温运输，确保座驾毫发无损抵达您手中。" },
  { icon: "🔧", title: "尊享养护", desc: "由品牌认证技师提供原厂级养护服务，使用原厂配件，保持座驾巅峰状态。" },
  { icon: "🏆", title: "投资顾问", desc: "为您分析经典车及限量车型的投资价值，提供专业的收藏策略与市场洞察。" },
];

export const filterCategories = [
  { key: "all", label: "全部车型" },
  { key: "sedan", label: "奢华轿车" },
  { key: "suv", label: "豪华SUV" },
  { key: "sport", label: "超级跑车" },
  { key: "hyper", label: "Hyper Car" },
];

export const heroSlidesData = [
  "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1920&q=80",
  "https://images.unsplash.com/photo-1552561062-532218dd53ad?w=1920&q=80",
  "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=1920&q=80",
];

export const showcaseSlidesData = [
  "https://images.unsplash.com/photo-1584099662811-6744be099a74?w=800&q=80",
  "https://images.unsplash.com/photo-1502014335594-c026800f24ee?w=800&q=80",
  "https://images.unsplash.com/photo-1549064233-945d7063292f?w=800&q=80",
];

export const contactInfo = [
  {
    icon: "📍",
    title: "私密展厅",
    content: "上海市静安区南京西路1788号\nPRESTIGE 旗舰展厅（仅限预约）",
  },
  { icon: "📞", title: "专属热线", content: "+86 21 6288 8888" },
  { icon: "✉️", title: "电子邮箱", content: "concierge@prestige-motors.cn" },
  {
    icon: "🕐",
    title: "营业时间",
    content: "周一至周六 10:00 - 19:00\n周日为预约制专属时段",
  },
];
