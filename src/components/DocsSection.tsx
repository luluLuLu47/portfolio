"use client";

import { useState } from "react";

interface DocItem {
  id: string;
  title: string;
  subtitle: string;
  sections: { title: string; points: string[] }[];
}

const DOCS: DocItem[] = [
  {
    id: "req",
    title: "产品分析 · 需求分析",
    subtitle: "LinguaMind —— 问题定义 / 需求拆解 / AI 能力边界 / MVP 取舍",
    sections: [
      {
        title: "问题定义：三类现有方案的能力断层",
        points: [
          "题库型（多邻国、百词斩）：限于预设题库，只能做「被安排」的练习，无法自由表达",
          "词典/资料型（有道、沪江）：单向输入，无交互、无针对个人的反馈",
          "通用 AI 聊天（ChatGPT）：能自由对话但非教学导向，不判断水平、不懂纠错时机",
          "核心矛盾：「自由输出」与「教学式反馈」是互斥项",
        ],
      },
      {
        title: "AI 能力边界（三次关键取舍）",
        points: [
          "RAG → Prompt 注入：MVP 知识仅几十条静态规则，上 RAG 属过度设计",
          "纠错时机 LLM 自主判断 → 规则兜底：保证行为可预期",
          "发音评估主动降级承诺：非声学评测，界面标「参考」而非权威评分",
        ],
      },
      {
        title: "MVP 取舍记录",
        points: [
          "页面 9 → 5：聚焦核心链路",
          "语言砍掉日语：先验证英/韩双链路可迁移性",
          "模型混合调度：月成本从数百元降至 ¥1-2 量级",
        ],
      },
    ],
  },
  {
    id: "competitor",
    title: "竞品分析",
    subtitle: "Speak / Duolingo Max / ELSA / Cake / 流利说 / ChatGPT 语音",
    sections: [
      {
        title: "竞争格局结论",
        points: [
          "巨头强在语音链路成熟度与留存激励，我们全面正面对抗不现实",
          "唯一领先维度：结构化沉淀（错误画像、学习报告）—— 资源应压在这一列",
          "差异化定位：不做「更好的题库」，做「有教学策略的语言私教」",
        ],
      },
      {
        title: "被碾压风险评估",
        points: [
          "通用大模型持续进化会吞噬基础对话功能 → 壁垒必须建在教学策略与个人数据沉淀上",
          "语音评测短期内无法与专业方案对抗 → 主动降级承诺，不硬碰",
        ],
      },
    ],
  },
  {
    id: "brd",
    title: "商业需求文档（BRD）",
    subtitle: "单位经济测算 / 五阶段 Go/No-Go / 数值三级标注",
    sections: [
      {
        title: "单位经济",
        points: [
          "重度使用端月成本约 ¥3.83（模型调用估算），毛利率 85% 以上",
          "所有数字按【实】可核实 /【算】可推导 /【假】纯假设 三级标注，不编造商业数据",
        ],
      },
      {
        title: "Go/No-Go 决策点",
        points: [
          "按功能验证 → 留存验证 → 付费验证 → 规模化 → 商业化五阶段推进",
          "每阶段设可量化阈值（如次周留存 ≥ 35%），未达即停，不追加投入",
        ],
      },
    ],
  },
  {
    id: "prd",
    title: "产品需求文档（PRD）",
    subtitle: "8 大模块功能规格 / 双 Agent 技术规格 / 数据字典 / 技术债清单",
    sections: [
      {
        title: "文档特点",
        points: [
          "基于代码库静态扫描写实现基线，如实标注「已实现 / 部分实现 / 未实现」",
          "含已知技术债清单 TD-01~07（如双 Agent 实际为串行、批改失败时的降级显示）",
          "SSE 协议、数据字典、埋点方案到接口级细节",
        ],
      },
      {
        title: "为什么把技术债写进 PRD",
        points: [
          "能主动写出「批改失败时会谎报满分」这类问题，比一份完美 PRD 更可信",
          "每个技术债都有修复方向与触发条件，是迭代计划而非缺陷隐瞒",
        ],
      },
    ],
  },
];

export default function DocsSection() {
  const [active, setActive] = useState<DocItem | null>(null);

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-xl font-bold mb-1.5 text-[#1a202c]">原型设计与文档写作</h2>
        <p className="text-gray-500 mb-6 text-sm">
          需求分析之后、开发之前的产品工作证据 —— 点击文档查看核心内容
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 原型 —— 素材就绪后接入 */}
          <div className="rounded-lg border border-gray-200 bg-[#f8f9fa] p-4 flex flex-col">
            <h3 className="text-sm font-semibold text-[#1a202c]">高保真原型</h3>
            <p className="text-xs text-gray-400 mt-1.5 mb-4 flex-1">
              LinguaMind 六个核心页面的高保真原型（原型图整理中）
            </p>
            <span className="text-xs px-2.5 py-1 rounded border border-gray-200 text-gray-300 text-center cursor-default">
              查看原型（待补充）
            </span>
          </div>

          {DOCS.map((doc) => (
            <div
              key={doc.id}
              className="rounded-lg border border-gray-200 bg-[#f8f9fa] p-4 flex flex-col"
            >
              <h3 className="text-sm font-semibold text-[#1a202c]">{doc.title}</h3>
              <p className="text-xs text-gray-400 mt-1.5 mb-4 flex-1">{doc.subtitle}</p>
              <button
                onClick={() => setActive(doc)}
                className="text-xs px-2.5 py-1 rounded border border-[#c9d7e8] text-[#4a6fa5] hover:bg-[#eef2f7] transition-colors"
              >
                查看 ↓
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 文档弹窗 */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-white rounded-xl max-w-xl w-full max-h-[80vh] overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#1a202c]">{active.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{active.subtitle}</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="text-gray-400 hover:text-gray-600 text-xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              {active.sections.map((sec) => (
                <div key={sec.title}>
                  <p className="text-sm font-medium text-[#1a202c] mb-1.5">{sec.title}</p>
                  <ul className="space-y-1.5">
                    {sec.points.map((p, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-1.5 text-xs text-gray-600 leading-relaxed"
                      >
                        <span className="text-[#4a6fa5] mt-0.5">·</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-300 mt-5">
              完整版文档（含全部细节）面试时可现场展示
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
