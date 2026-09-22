import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "李彩霞 | AI应用开发作品集",
  description: "AI应用开发工程师作品集 - 多Agent架构、RAG检索、语言学习智能体",
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
