export default function Hero() {
  return (
    <header className="border-b border-gray-200 bg-white">
      {/* Top bar */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-start justify-between gap-8">
          {/* Left: Name + title */}
          <div>
            <h1 className="text-2xl font-bold text-[#1a202c] mb-1">李彩霞</h1>
            <p className="text-[#4a6fa5] font-medium text-sm mb-3">AI 应用开发工程师</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              软件工程本科 · GPA 3.72（专业前10%）
              <br />
              擅长多 Agent 架构设计与 RAG 检索增强生成
            </p>
          </div>

          {/* Right: Quick tags */}
          <div className="flex flex-wrap gap-2 justify-end max-w-[280px]">
            {["ReAct 多Agent", "RAG检索", "LangChain", "Next.js", "Docker", "Python"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-md bg-[#eef2f7] text-[#4a6fa5] border border-[#dde5f0]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 mt-8 pt-6 border-t border-gray-100 text-sm">
          <a href="#skills" className="text-gray-600 hover:text-[#4a6fa5] transition-colors">
            技能矩阵
          </a>
          <a href="#projects" className="text-gray-600 hover:text-[#4a6fa5] transition-colors">
            项目作品
          </a>
        </nav>
      </div>
    </header>
  );
}
