export default function SkillsMatrix() {
  const categories = [
    {
      title: "AI 应用开发",
      skills: [
        { name: "ReAct / 双Agent推理", level: "精通", highlighted: true },
        { name: "RAG检索 (Vector+FTS5+RRF)", level: "精通", highlighted: true },
        { name: "LangChain", level: "熟悉" },
        { name: "MCP 协议扩展", level: "熟悉" },
        { name: "Prompt Engineering", level: "精通", highlighted: true },
      ],
    },
    {
      title: "全栈开发",
      skills: [
        { name: "Next.js / React", level: "熟悉" },
        { name: "TypeScript", level: "熟悉" },
        { name: "Python", level: "熟悉" },
        { name: "SQLite / MySQL", level: "熟悉" },
        { name: "SSE 流式输出", level: "熟悉" },
      ],
    },
    {
      title: "部署与运维",
      skills: [
        { name: "Git 版本控制", level: "熟悉" },
        { name: "Docker 容器化", level: "熟悉" },
        { name: "Nginx 反向代理", level: "熟悉" },
        { name: "Linux 服务器", level: "了解" },
        { name: "CI/CD 流水线", level: "了解" },
      ],
    },
  ];

  return (
    <section id="skills" className="border-b border-gray-200 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2 text-[#1a202c]">技能矩阵</h2>
        <p className="text-gray-500 mb-10 text-sm">技术能力按岗位适配方向分组</p>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg border border-gray-200 bg-[#f8f9fa] p-5"
            >
              <h3 className="text-sm font-semibold text-[#1a202c] mb-4 pb-3 border-b border-gray-200">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center justify-between text-xs">
                    <span
                      className={
                        skill.highlighted
                          ? "text-[#1a202c] font-medium"
                          : "text-gray-600"
                      }
                    >
                      {skill.highlighted && (
                        <span className="text-[#4a6fa5] mr-1">●</span>
                      )}
                      {skill.name}
                    </span>
                    <span
                      className={
                        skill.level === "精通"
                          ? "px-2 py-0.5 text-[10px] rounded bg-[#4a6fa5]/10 text-[#4a6fa5] border border-[#4a6fa5]/20"
                          : skill.level === "熟悉"
                          ? "px-2 py-0.5 text-[10px] rounded bg-gray-100 text-gray-500 border border-gray-200"
                          : "px-2 py-0.5 text-[10px] rounded bg-gray-50 text-gray-400 border border-gray-100"
                      }
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
