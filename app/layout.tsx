import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PRESTIGE MOTORS | 极致豪华汽车",
  description:
    "PRESTIGE MOTORS 汇聚全球顶级豪华品牌，为每一位独具品味的您，甄选独一无二的座驾杰作。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
