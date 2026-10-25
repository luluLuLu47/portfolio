const RESUME_URL = ""; // 简历 PDF 就绪后填 "/resume.pdf"

export default function Hero() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* 顶栏：标题 + 联系方式 */}
        <div className="flex items-start justify-between gap-6">
          <h1 className="text-2xl font-bold text-[#1a202c]">李彩霞作品集</h1>

          <div className="flex flex-col items-end gap-1.5 text-xs text-gray-500">
            <p>
              <span className="text-gray-400 mr-1.5">邮箱</span>
              <a href="mailto:2191147639@qq.com" className="text-[#4a6fa5] hover:underline">
                2191147639@qq.com
              </a>
            </p>
            <p>
              <span className="text-gray-400 mr-1.5">电话</span>
              <span>19181776212</span>
            </p>
            {RESUME_URL ? (
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 px-3 py-1 rounded border border-[#c9d7e8] text-[#4a6fa5] hover:bg-[#f6f9fc] transition-colors"
              >
                更多简历 ↓
              </a>
            ) : (
              <span className="mt-1 px-3 py-1 rounded border border-gray-200 text-gray-300 cursor-default">
                更多简历（待补充）
              </span>
            )}
          </div>
        </div>

        {/* 个人技能关键词总结 */}
        <div className="mt-6 rounded-lg border border-gray-200 bg-[#f8f9fa] px-5 py-4">
          <h2 className="text-sm font-semibold text-[#1a202c] mb-2.5">个人技能关键词总结</h2>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {[
              "需求分析",
              "PRD 撰写",
              "用户场景设计",
              "Agent 编排",
              "Prompt 设计",
              "RAG 应用",
              "效果评估",
              "模型能力边界判断",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 text-xs rounded-md bg-white text-[#4a6fa5] border border-[#dde5f0]"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            软件工程本科（GPA 3.72，专业前 10%）。围绕 AI 产品助理岗位，独立完成 3 个 AI
            项目的需求定义、原型设计、开发落地与文档撰写 ——
            擅长把模糊的想法拆成可执行的需求清单，并清楚知道 AI 能做什么、做不了什么。
          </p>
        </div>
      </div>
    </header>
  );
}
