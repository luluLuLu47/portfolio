import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李彩霞 | AI 产品助理作品集",
  description: "AI 产品助理作品集 - 需求定义、场景拆解、Agent 与 RAG 应用设计",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
