"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import SkillsMatrix from "@/components/SkillsMatrix";
import ProjectCard, { type ProjectEntry } from "@/components/ProjectCard";
import ProjectModal, { type ProjectDetail, type ProjectTab } from "@/components/ProjectModal";
import Footer from "@/components/Footer";

// LV Agent 架构图
const lvArchitecture = (
  <svg viewBox="0 0 900 400" className="w-full min-w-[600px]" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="400" fill="none" />
    <text x="20" y="30" fill="#9ca3af" fontSize="12" fontFamily="monospace">用户层</text>
    <text x="20" y="110" fill="#9ca3af" fontSize="12" fontFamily="monospace">Agent层</text>
    <text x="20" y="220" fill="#9ca3af" fontSize="12" fontFamily="monospace">能力层</text>
    <text x="20" y="330" fill="#9ca3af" fontSize="12" fontFamily="monospace">数据层</text>
    <line x1="0" y1="50" x2="900" y2="50" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="150" x2="900" y2="150" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="260" x2="900" y2="260" stroke="#e5e7eb" strokeWidth="1" />
    {/* User Layer */}
    <rect x="350" y="55" width="200" height="40" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="450" y="80" fill="#4a6fa5" fontSize="14" textAnchor="middle" fontFamily="monospace">CLI / Web UI</text>
    {/* Agent Layer */}
    <rect x="200" y="115" width="140" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="270" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">ReAct Agent</text>
    <rect x="380" y="115" width="140" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="450" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">垂直 Agent</text>
    <rect x="560" y="115" width="140" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="630" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">记忆管理</text>
    {/* Capability Layer */}
    <rect x="120" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="180" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">Tools</text>
    <rect x="260" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="320" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">Skills</text>
    <rect x="400" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="460" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">MCP</text>
    <rect x="540" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="600" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">LLM</text>
    <rect x="680" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="740" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">RAG检索</text>
    {/* Data Layer */}
    <rect x="200" y="280" width="160" height="35" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1" />
    <text x="280" y="303" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">向量数据库</text>
    <rect x="400" y="280" width="160" height="35" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1" />
    <text x="480" y="303" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">FTS5 全文索引</text>
    <rect x="600" y="280" width="160" height="35" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1" />
    <text x="680" y="303" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">RRF 混合排序</text>
    {/* Connection lines */}
    <line x1="450" y1="95" x2="270" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="450" y1="95" x2="450" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="450" y1="95" x2="630" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="270" y1="155" x2="180" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="270" y1="155" x2="320" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="450" y1="155" x2="460" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="630" y1="155" x2="600" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="630" y1="155" x2="740" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="740" y1="200" x2="280" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="740" y1="200" x2="480" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="740" y1="200" x2="680" y2="280" stroke="#d1d5db" strokeWidth="1" />
  </svg>
);

// LinguaMind 架构图
const linguamindArchitecture = (
  <svg viewBox="0 0 900 380" className="w-full min-w-[600px]" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="380" fill="none" />
    {/* Layer labels */}
    <text x="20" y="30" fill="#9ca3af" fontSize="12" fontFamily="monospace">前端展示</text>
    <text x="20" y="110" fill="#9ca3af" fontSize="12" fontFamily="monospace">核心逻辑</text>
    <text x="20" y="220" fill="#9ca3af" fontSize="12" fontFamily="monospace">AI能力</text>
    <text x="20" y="330" fill="#9ca3af" fontSize="12" fontFamily="monospace">数据层</text>
    <line x1="0" y1="50" x2="900" y2="50" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="150" x2="900" y2="150" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="260" x2="900" y2="260" stroke="#e5e7eb" strokeWidth="1" />
    {/* Frontend */}
    <rect x="120" y="55" width="130" height="38" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="185" y="79" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">首页仪表盘</text>
    <rect x="270" y="55" width="130" height="38" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="335" y="79" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">对话练习</text>
    <rect x="420" y="55" width="130" height="38" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="485" y="79" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">每日挑战</text>
    <rect x="570" y="55" width="130" height="38" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="635" y="79" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">单词学习</text>
    <rect x="720" y="55" width="130" height="38" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="785" y="79" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">发音/报告</text>
    {/* Core Logic */}
    <rect x="200" y="115" width="150" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="275" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">对话Agent</text>
    <rect x="380" y="115" width="150" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="455" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">纠错评估Agent</text>
    <rect x="560" y="115" width="150" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="635" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">进度分析引擎</text>
    {/* AI Capability */}
    <rect x="180" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="240" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">LLM API</text>
    <rect x="320" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="380" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">TTS语音合成</text>
    <rect x="460" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="520" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">语音识别</text>
    <rect x="600" y="165" width="120" height="35" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1" />
    <text x="660" y="188" fill="#4a6fa5" fontSize="11" textAnchor="middle" fontFamily="monospace">发音评分</text>
    {/* Data Layer */}
    <rect x="200" y="280" width="160" height="35" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1" />
    <text x="280" y="303" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">词汇库 SQLite</text>
    <rect x="400" y="280" width="160" height="35" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1" />
    <text x="480" y="303" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">学习记录</text>
    <rect x="600" y="280" width="160" height="35" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1" />
    <text x="680" y="303" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">进度数据</text>
    {/* Connections */}
    <line x1="185" y1="93" x2="275" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="335" y1="93" x2="275" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="335" y1="93" x2="455" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="485" y1="93" x2="455" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="635" y1="93" x2="635" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="785" y1="93" x2="635" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="275" y1="155" x2="240" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="275" y1="155" x2="380" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="455" y1="155" x2="520" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="635" y1="155" x2="660" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="240" y1="200" x2="280" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="635" y1="155" x2="480" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="635" y1="155" x2="680" y2="280" stroke="#d1d5db" strokeWidth="1" />
  </svg>
);

// 四川方言系统架构图
const dialectArchitecture = (
  <svg viewBox="0 0 900 360" className="w-full min-w-[600px]" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="360" fill="none" />
    {/* Layer labels */}
    <text x="20" y="30" fill="#9ca3af" fontSize="12" fontFamily="monospace">输入层</text>
    <text x="20" y="110" fill="#9ca3af" fontSize="12" fontFamily="monospace">处理层</text>
    <text x="20" y="220" fill="#9ca3af" fontSize="12" fontFamily="monospace">知识层</text>
    <text x="20" y="310" fill="#9ca3af" fontSize="12" fontFamily="monospace">输出层</text>
    <line x1="0" y1="50" x2="900" y2="50" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="150" x2="900" y2="150" stroke="#e5e7eb" strokeWidth="1" />
    <line x1="0" y1="260" x2="900" y2="260" stroke="#e5e7eb" strokeWidth="1" />
    {/* Input */}
    <rect x="350" y="55" width="200" height="40" rx="6" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="450" y="80" fill="#4a6fa5" fontSize="13" textAnchor="middle" fontFamily="monospace">四川方言文本输入</text>
    {/* Processing */}
    <rect x="150" y="115" width="160" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="230" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">方言识别/标准化</text>
    <rect x="350" y="115" width="160" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="430" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">语义理解 NLP</text>
    <rect x="550" y="115" width="160" height="40" rx="6" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="630" y="140" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">对话生成</text>
    {/* Knowledge Graph */}
    <rect x="120" y="165" width="140" height="35" rx="6" fill="#fdf4e3" stroke="#c4a04a" strokeWidth="1" />
    <text x="190" y="188" fill="#8a7028" fontSize="11" textAnchor="middle" fontFamily="monospace">方言词汇节点</text>
    <rect x="280" y="165" width="140" height="35" rx="6" fill="#fdf4e3" stroke="#c4a04a" strokeWidth="1" />
    <text x="350" y="188" fill="#8a7028" fontSize="11" textAnchor="middle" fontFamily="monospace">语义关系边</text>
    <rect x="440" y="165" width="140" height="35" rx="6" fill="#fdf4e3" stroke="#c4a04a" strokeWidth="1" />
    <text x="510" y="188" fill="#8a7028" fontSize="11" textAnchor="middle" fontFamily="monospace">方言-普通话映射</text>
    <rect x="600" y="165" width="140" height="35" rx="6" fill="#fdf4e3" stroke="#c4a04a" strokeWidth="1" />
    <text x="670" y="188" fill="#8a7028" fontSize="11" textAnchor="middle" fontFamily="monospace">文化语境标注</text>
    {/* Output */}
    <rect x="250" y="280" width="180" height="40" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1.5" />
    <text x="340" y="305" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">方言对话回复</text>
    <rect x="470" y="280" width="180" height="40" rx="6" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1.5" />
    <text x="560" y="305" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">普通话翻译</text>
    {/* Connections */}
    <line x1="450" y1="95" x2="230" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="450" y1="95" x2="430" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="450" y1="95" x2="630" y2="115" stroke="#d1d5db" strokeWidth="1" />
    <line x1="230" y1="155" x2="190" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="230" y1="155" x2="350" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="430" y1="155" x2="510" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="630" y1="155" x2="670" y2="165" stroke="#d1d5db" strokeWidth="1" />
    <line x1="190" y1="200" x2="340" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="510" y1="200" x2="340" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="510" y1="200" x2="560" y2="280" stroke="#d1d5db" strokeWidth="1" />
    <line x1="670" y1="200" x2="560" y2="280" stroke="#d1d5db" strokeWidth="1" />
  </svg>
);

// Gamespec Agent 流水线架构图（依据项目 README 的真实编排）
const gamespecArchitecture = (
  <svg viewBox="0 0 900 400" className="w-full min-w-[600px]" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="400" fill="none" />
    <text x="20" y="30" fill="#9ca3af" fontSize="12" fontFamily="monospace">Agent 流水线（质量门控 + 修复循环）</text>

    {/* 用户创意 */}
    <rect x="30" y="170" width="120" height="60" rx="8" fill="#eef2f7" stroke="#4a6fa5" strokeWidth="1.5" />
    <text x="90" y="195" fill="#4a6fa5" fontSize="12" textAnchor="middle" fontFamily="monospace">用户创意</text>
    <text x="90" y="213" fill="#6b8fc4" fontSize="10" textAnchor="middle" fontFamily="monospace">自然语言</text>

    {/* 设计 Agent */}
    <rect x="190" y="170" width="120" height="60" rx="8" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="250" y="195" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">设计 Agent</text>
    <text x="250" y="213" fill="#6b8fc4" fontSize="10" textAnchor="middle" fontFamily="monospace">玩法 / 关卡</text>

    {/* 代码 Agent（并行上） */}
    <rect x="360" y="100" width="120" height="55" rx="8" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="420" y="123" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">代码 Agent</text>
    <text x="420" y="140" fill="#6b8fc4" fontSize="10" textAnchor="middle" fontFamily="monospace">游戏逻辑</text>

    {/* 美术 Agent（并行下） */}
    <rect x="360" y="245" width="120" height="55" rx="8" fill="#f0f4fa" stroke="#6b8fc4" strokeWidth="1.5" />
    <text x="420" y="268" fill="#3a5a8a" fontSize="12" textAnchor="middle" fontFamily="monospace">美术 Agent</text>
    <text x="420" y="285" fill="#6b8fc4" fontSize="10" textAnchor="middle" fontFamily="monospace">视觉素材</text>

    {/* 审查 Agent（质量门控） */}
    <rect x="530" y="170" width="130" height="60" rx="8" fill="#fdf4e3" stroke="#c4a04a" strokeWidth="1.5" />
    <text x="595" y="195" fill="#8a7028" fontSize="12" textAnchor="middle" fontFamily="monospace">审查 Agent</text>
    <text x="595" y="213" fill="#a08638" fontSize="10" textAnchor="middle" fontFamily="monospace">质量门控</text>

    {/* 整合 Agent */}
    <rect x="710" y="170" width="120" height="60" rx="8" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1.5" />
    <text x="770" y="195" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">整合 Agent</text>

    {/* HTML5 成品 */}
    <rect x="740" y="60" width="150" height="50" rx="8" fill="#f0f9f4" stroke="#5ba788" strokeWidth="1.5" />
    <text x="815" y="82" fill="#3a7a5a" fontSize="12" textAnchor="middle" fontFamily="monospace">HTML5 小游戏</text>
    <text x="815" y="98" fill="#5ba788" fontSize="10" textAnchor="middle" fontFamily="monospace">可运行原型</text>

    {/* 主流程连线 */}
    <line x1="150" y1="200" x2="190" y2="200" stroke="#9db4d0" strokeWidth="1.5" />
    <line x1="310" y1="185" x2="360" y2="135" stroke="#9db4d0" strokeWidth="1.5" />
    <line x1="310" y1="215" x2="360" y2="265" stroke="#9db4d0" strokeWidth="1.5" />
    <line x1="480" y1="135" x2="530" y2="188" stroke="#9db4d0" strokeWidth="1.5" />
    <line x1="480" y1="265" x2="530" y2="212" stroke="#9db4d0" strokeWidth="1.5" />
    <line x1="660" y1="200" x2="710" y2="200" stroke="#5ba788" strokeWidth="1.5" />
    <line x1="770" y1="170" x2="790" y2="110" stroke="#5ba788" strokeWidth="1.5" />

    {/* 修复循环（不通过 → 回到代码/美术） */}
    <path d="M 595 230 L 595 330 L 420 330 L 420 300" fill="none" stroke="#c4a04a" strokeWidth="1.5" strokeDasharray="5,4" />
    <text x="500" y="322" fill="#a08638" fontSize="10" textAnchor="middle" fontFamily="monospace">不通过 → 修复循环（≤ 3 次）</text>

    {/* 通过标注 */}
    <text x="685" y="190" fill="#5ba788" fontSize="10" textAnchor="middle" fontFamily="monospace">通过</text>
  </svg>
);

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<ProjectTab>("doc");

  const projects: ProjectDetail[] = [
    {
      id: "linguamind",
      title: "LinguaMind 语言学习智能体",
      subtitle: "AI 驱动的多语言学习平台",
      status: "开发中",
      tags: ["Next.js", "React", "TypeScript", "AI Agent", "TTS"],
      description:
        "LinguaMind 是一个基于 AI 的多语言学习平台，支持英语和韩语学习。核心功能包括 AI 对话练习、每日挑战、单词学习、发音训练和学习进度分析。采用双 Agent 架构，通过对话式交互帮助用户在真实场景中掌握语言。",
      features: [
        "AI 对话练习：双 Agent 架构，一个负责对话生成，一个负责纠错评估",
        "每日挑战：场景化句子卡片 + 发音评分反馈",
        "单词学习：拼写/识别双模式，间隔重复记忆",
        "发音练习：音标点击发音 + 录音对比评分",
        "学习报告：进度图表、热力图、弱点分析",
        "多语言切换：英语(蓝色主题) ↔ 韩语(紫色主题) 联动",
      ],
      techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Web Speech API", "SQLite"],
      videoSrc: "/videos/linguamind-demo.mp4",
      videoPoster: "/videos/linguamind-poster.jpg",
      videoEmbed: null,
      videoNote: "真实系统运行录屏 · 已加速至 1.5 倍速 · 完整时长 2:02 · 点击画面从头播放",
      docUrl: null,
      githubUrl: null,
      demoUrl: null,
      architectureSvg: linguamindArchitecture,
      requirementDoc: [
        {
          title: "问题定义：三类现有方案的能力断层",
          points: [
            "题库型（多邻国、百词斩）：覆盖词汇与句型记忆，但限于预设题库，用户只能做「被安排」的练习，无法自由表达",
            "词典/资料型（有道、沪江）：解决查询需求，但是单向输入，无交互、无针对个人的反馈，效果完全依赖自律",
            "通用 AI 聊天（ChatGPT）：能自由对话，但不是教学导向 —— 不判断用户水平、不掌握纠错时机、没有教学策略，聊很久也不知道错在哪",
            "核心矛盾：「自由输出」与「教学式反馈」是互斥项 —— 给自由对话的不懂教学，懂教学的不给自由",
          ],
        },
        {
          title: "AI 能力边界判断（三次关键取舍）",
          points: [
            "① RAG → 改用 Prompt 注入：MVP 知识内容是几十到几百条静态语法规则与场景剧本，上 RAG 属于过度设计（引入检索不确定性去解决一个不存在的规模问题）；架构已抽象为接口，数据量达千条时可无痛切换",
            "② 纠错时机 LLM 自主判断 → 规则兜底：LLM 判断不稳定（同一句话可能这次纠、下次不纠），用户对不一致的行为会失去信任；规则保证行为可预期，待积累真实数据后再逐步引入 LLM",
            "③ 发音评估 → 主动降级承诺：基于 ASR 转写文本由 LLM 推断，非声学评测，存在「不准的发音被容错转写成正确」而漏检的风险；界面标注「参考」而非权威评分",
          ],
        },
        {
          title: "纠错时机分级（教学策略设计）",
          points: [
            "重大语法错误（主谓不一致、时态错误）：对话中即时纠正 —— 影响可理解性，不纠正会导致错误固化",
            "轻微语法问题（冠词遗漏、介词不当）：对话节点结束时集中反馈 —— 不影响理解，中途打断不划算",
            "发音不标准：对话结束后展示 —— 发音纠正需要专注语境，不适合边聊边纠",
            "用词不地道：仅记录，在周报中体现 —— 主观性强，即时提示易造成困扰",
          ],
        },
        {
          title: "MVP 取舍记录",
          points: [
            "页面数量 9 → 5：聚焦核心链路，避免每个功能都做到 60 分",
            "语言支持砍掉日语：先验证英语 + 韩语两条链路的框架可迁移性，架构预留扩展位",
            "模型选型用 DeepSeek-V3 + 阿里云免费模型混合调度替代统一 GPT-4o：月成本从预估数百元降至 ¥1-2 量级",
            "登录系统原计划 MVP 不做，后因用户数据安全诉求提前实现",
          ],
        },
      ],
    },
    {
      id: "lv-agent",
      title: "LV 奢侈品销售培训智能体平台",
      subtitle: "企业级多 Agent 销售培训系统",
      status: "已完成",
      tags: ["Multi-Agent", "RAG", "MCP", "LangChain", "SSE"],
      description:
        "为 LV 奢侈品销售团队设计的 AI 培训平台，采用多 Agent 架构模拟真实客户场景，帮助销售人员练习话术、产品知识和客户应对技巧。集成 RAG 检索增强生成，确保产品知识准确性。",
      features: [
        "多 Agent 架构：CLI + LLM + tools + skills + MCP + 记忆 + 垂直 Agent",
        "RAG 检索：向量检索 + FTS5 全文检索 + RRF 混合排序",
        "MCP 扩展：支持自定义工具和技能接入",
        "前端 SSE 流式输出：实时展示 AI 回复过程",
        "培训场景模拟：客户画像 + 销售对话 + 实时评分",
      ],
      techStack: ["Python", "LangChain", "ReAct Agent", "RAG (Vector+FTS5+RRF)", "SQLite", "Docker", "Nginx"],
      videoSrc: null,
      videoPoster: null,
      videoEmbed: null,
      videoNote: null,
      docUrl: null,
      githubUrl: null,
      demoUrl: null,
      architectureSvg: lvArchitecture,
    },
    {
      id: "dialect",
      title: "基于知识图谱的四川方言文本对话系统",
      subtitle: "NLP + 知识图谱的方言理解与对话",
      status: "开发中",
      tags: ["NLP", "知识图谱", "对话系统", "方言处理"],
      description:
        "面向四川方言的自然语言理解与对话系统，通过构建方言知识图谱，实现方言词汇识别、语义理解和对话生成。探索方言保护与数字化传承的技术路径。",
      features: [
        "方言知识图谱构建：词汇关系、语义网络",
        "方言文本识别与标准化转换",
        "基于知识图谱的对话生成",
        "方言-普通话双向翻译",
      ],
      techStack: ["Python", "NLP", "知识图谱", "对话系统"],
      videoSrc: null,
      videoPoster: null,
      videoEmbed: null,
      videoNote: null,
      docUrl: null,
      githubUrl: null,
      demoUrl: null,
      architectureSvg: dialectArchitecture,
    },
    {
      id: "gamespec",
      title: "Gamespec 小游戏生成多智能体系统",
      subtitle: "自然语言创意 → 5 个 Agent 协作 → 可运行 HTML5 小游戏",
      status: "已完成",
      tags: ["LangGraph", "FastAPI", "Multi-Agent", "React"],
      description:
        "用户说想法，系统出游戏：输入自然语言游戏创意，由 5 个专业 Agent 协作生成可运行的 HTML5 小游戏原型。8 周课程项目，前后端完整交付（React + FastAPI + LangGraph + MySQL）。",
      features: [
        "Agent 流水线：设计 →（代码 ∥ 美术）→ 审查 → 整合，LangGraph 编排",
        "质量门控：审查 Agent 不通过自动进入修复循环（≤ 3 次）",
        "游戏模板知识库（templates_kb）约束生成质量",
        "JWT 认证（bcrypt）+ SSE 实时生成进度",
      ],
      techStack: ["React 18", "Vite", "Ant Design 5", "FastAPI", "LangGraph", "MySQL 8", "SQLAlchemy", "DeepSeek"],
      videoSrc: null,
      videoPoster: null,
      videoEmbed: null,
      videoNote: null,
      docUrl: null,
      githubUrl: null,
      demoUrl: null,
      architectureSvg: gamespecArchitecture,
      requirementDoc: [
        {
          title: "核心主张",
          points: [
            "把「做游戏」变成「说想法」：降低创作门槛，用户用自然语言描述创意，即可获得可运行的 HTML5 游戏原型",
            "5 个 Agent 明确分工：设计 Agent 定玩法与关卡，代码 Agent 与美术 Agent 并行生成，整合 Agent 收尾输出成品",
          ],
        },
        {
          title: "为什么审查 Agent 必须独立（质量门控设计）",
          points: [
            "LLM 直接生成代码的核心风险是质量不可控 —— 同样的需求可能产出可玩性天差地别的结果",
            "独立审查 Agent 对生成结果做质量判定，不通过则自动进入修复循环（最多 3 次），把「一次性生成」变成「生成 → 验证 → 修复」的闭环",
            "修复上限设为 3 次：避免无限循环消耗 token，超过上限即判定本组生成失败，由上层调度决定重试策略",
          ],
        },
      ],
    },
  ];

  const entries: ProjectEntry[] = projects.map((p) => ({
    id: p.id,
    title: p.title,
    subtitle: p.subtitle,
    status: p.status,
    tags: p.tags,
    hasDoc: !!p.requirementDoc?.length,
    hasArch: !!p.architectureSvg,
    hasVideo: !!(p.videoSrc || p.videoEmbed),
  }));

  const visible = showAll ? entries : entries.slice(0, 3);
  const active = projects.find((p) => p.id === activeId) ?? null;

  const openProject = (id: string, tab: ProjectTab) => {
    setActiveId(id);
    setActiveTab(tab);
  };

  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#2d3748]">
      <Hero />

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* 项目集 —— 3 列网格 + 查看更多 */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-2 text-[#1a202c]">项目集</h2>
        <p className="text-gray-500 mb-10 text-sm">点击项目下方的入口，查看需求文档、项目架构与演示视频</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((entry) => (
            <ProjectCard key={entry.id} project={entry} onOpen={openProject} />
          ))}
        </div>

        {!showAll && entries.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 rounded-md border border-[#c9d7e8] bg-white text-sm text-[#4a6fa5] hover:bg-[#f6f9fc] transition-colors"
            >
              查看更多项目（还有 {entries.length - 3} 个）↓
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />

      <ProjectModal
        project={active}
        tab={activeTab}
        onClose={() => setActiveId(null)}
        onTabChange={setActiveTab}
      />
    </main>
  );
}
