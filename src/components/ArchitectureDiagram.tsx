export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="border-b border-gray-200 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2 text-[#1a202c]">技术架构</h2>
        <p className="text-gray-500 mb-10 text-sm">核心项目的技术架构概览</p>

        <div className="rounded-lg border border-gray-200 bg-[#f8f9fa] p-6">
          <h3 className="text-sm font-semibold text-[#1a202c] mb-6">LV 销售培训 Agent — 多 Agent 架构</h3>

          {/* SVG Architecture */}
          <div className="overflow-x-auto">
            <svg viewBox="0 0 900 400" className="w-full min-w-[600px]" xmlns="http://www.w3.org/2000/svg">
              {/* Background */}
              <rect width="900" height="400" fill="none" />

              {/* Layer labels */}
              <text x="20" y="30" fill="#9ca3af" fontSize="12" fontFamily="monospace">用户层</text>
              <text x="20" y="110" fill="#9ca3af" fontSize="12" fontFamily="monospace">Agent层</text>
              <text x="20" y="220" fill="#9ca3af" fontSize="12" fontFamily="monospace">能力层</text>
              <text x="20" y="330" fill="#9ca3af" fontSize="12" fontFamily="monospace">数据层</text>

              {/* Divider lines */}
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
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-4">
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-3 h-3 rounded bg-[#eef2f7] border border-[#4a6fa5]"></span>
              用户接口
            </span>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-3 h-3 rounded bg-[#f0f4fa] border border-[#6b8fc4]"></span>
              Agent 组件
            </span>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-3 h-3 rounded bg-[#eef2f7] border border-[#4a6fa5]"></span>
              能力模块
            </span>
            <span className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-3 h-3 rounded bg-[#f0f9f4] border border-[#5ba788]"></span>
              数据层
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
