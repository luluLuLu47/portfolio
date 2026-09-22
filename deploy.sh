#!/usr/bin/env bash
# 作品集一键部署脚本
# 用法：bash deploy.sh
# 说明：构建静态产物 -> 推送到 gh-pages 分支 -> GitHub Pages 自动更新
#       线上链接固定不变：https://lulululu47.github.io/portfolio/

set -e

REPO_DIR="/d/project/portfolio"
REMOTE="https://github.com/luluLuLu47/portfolio.git"
TMP_DIR="/tmp/pfpages"

echo ">>> 1/4 构建静态站点"
cd "$REPO_DIR"
npm run build

echo ">>> 2/4 准备 gh-pages 内容"
rm -rf "$TMP_DIR"
mkdir -p "$TMP_DIR"
cp -r "$REPO_DIR/out/." "$TMP_DIR/"
touch "$TMP_DIR/.nojekyll"   # 关键：不加会让 Pages 跳过 _next 目录导致样式全丢

echo ">>> 3/4 提交 gh-pages"
cd "$TMP_DIR"
git init -b gh-pages -q
git add -A
git -c user.name="luluLuLu47" -c user.email="liamlx@outlook.com" \
    commit -q -m "deploy: 更新作品集站点 $(date '+%Y-%m-%d %H:%M')"
git remote add origin "$REMOTE" 2>/dev/null || git remote set-url origin "$REMOTE"
git push origin gh-pages --force

echo ">>> 4/4 完成"
echo "线上地址：https://lulululu47.github.io/portfolio/"
echo "GitHub Pages 需要约 30-60 秒生效"
