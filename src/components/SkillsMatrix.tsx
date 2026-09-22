export default function SkillsMatrix() {
  const categories = [
    {
      title: "产品能力",
      skills: [
        { name: "需求分析与拆解", level: "精通", highlighted: true },
        { name: "PRD / 需求文档撰写", level: "精通", highlighted: true },
        { name: "用户场景与流程设计", level: "熟悉" },
        { name: "数据指标与效果评估", level: "熟悉" },
        { name: "竞品调研与方案取舍", level: "了解" },
      ],
    },
    {
      title: "AI 应用设计",
      skills: [
        { name: "Agent 场景设计与编排", level: "精通", highlighted: true },
        { name: "Prompt Engineering", level: "精通", highlighted: true },
        { name: "RAG 应用设计", level: "精通", highlighted: true },
        { name: "模型能力边界判断", level: "熟悉" },
        { name: "LangChain / MCP", level: "熟悉" },
      ],
    },
    {
      title: "工程与协作",
      skills: [
        { name: "原型与交互实现", level: "熟悉" },
        { name: "Python / SQL", level: "熟悉" },
        { name: "Next.js / React", level: "熟悉" },
        { name: "跨职能协作沟通", level: "熟悉" },
        { name: "Git / Docker", level: "了解" },
      ],
    },
  ];

  return (
    <section id="skills" className="border-b border-gray-200 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-2 text-[#1a202c]">技能矩阵</h2>
        <p className="text-gray-500 mb-10 text-sm">能力按 AI 产品助理岗位需求分组</p>

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
