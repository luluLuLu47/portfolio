import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages 项目站部署在子路径 /portfolio/ 下。
  // 必须声明 basePath，否则产物里的 /_next/... 会指向域名根目录，
  // 导致线上 CSS / JS 全部 404（页面变成无样式的裸 HTML，交互也全部失效）。
  basePath: "/portfolio",
  // 供 <video src> / <a href> 等原生标签拼接子路径使用
  // （basePath 只会自动作用于 next/link、next/image 等 Next 组件，原生标签不会）
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
};

export default nextConfig;
