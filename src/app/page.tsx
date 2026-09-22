import Hero from "@/components/Hero";
import SkillsMatrix from "@/components/SkillsMatrix";
import ProjectCard from "@/components/ProjectCard";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] text-[#2d3748]">
      <Hero />

      {/* Skills Matrix */}
      <SkillsMatrix />

      {/* Projects */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-2 text-[#1a202c]">项目作品</h2>
        <p className="text-gray-500 mb-10 text-sm">点击展开查看项目详情</p>

        {/* Project 1: LinguaMind */}
        <ProjectCard
          id="linguamind"
          title="LinguaMind 语言学习智能体"
          subtitle="AI驱动的多语言学习平台"
          tags={["Next.js", "React", "TypeScript", "AI Agent", "TTS"]}
          status="开发中"
          description="LinguaMind 是一个基于 AI 的多语言学习平台，支持英语和韩语学习。核心功能包括 AI 对话练习、每日挑战、单词学习、发音训练和学习进度分析。采用多 Agent 架构，通过对话式交互帮助用户在真实场景中掌握语言。"
          features={[
            "AI 对话练习：双 Agent 架构，一个负责对话生成，一个负责纠错评估",
            "每日挑战：场景化句子卡片 + 发音评分反馈",
            "单词学习：拼写/识别双模式，间隔重复记忆",
            "发音练习：音标点击发音 + 录音对比评分",
            "学习报告：进度图表、热力图、弱点分析",
            "多语言切换：英语(蓝色主题) ↔ 韩语(紫色主题) 联动",
          ]}
          techStack={["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Web Speech API", "SQLite"]}
          videoSrc="/videos/linguamind-demo.mp4"
          videoNote="概念演示动画（基于项目UI用Remotion渲染）"
          githubUrl={null}
          demoUrl={null}
          architectureSvg={linguamindArchitecture}
        />

        {/* Project 2: LV */}
        <ProjectCard
          id="lv-agent"
          title="LV 奢侈品销售培训智能体平台"
          subtitle="企业级多Agent销售培训系统"
          tags={["Multi-Agent", "RAG", "MCP", "LangChain", "SSE"]}
          status="已推送GitHub"
          description="为 LV 奢侈品销售团队设计的 AI 培训平台，采用多 Agent 架构模拟真实客户场景，帮助销售人员练习话术、产品知识和客户应对技巧。集成 RAG 检索增强生成，确保产品知识准确性。"
          features={[
            "多 Agent 架构：CLI + LLM + tools + skills + MCP + 记忆 + 垂直 Agent",
            "RAG 检索：向量检索 + FTS5全文检索 + RRF混合排序",
            "MCP 扩展：支持自定义工具和技能接入",
            "前端 SSE 流式输出：实时展示 AI 回复过程",
            "培训场景模拟：客户画像 + 销售对话 + 实时评分",
          ]}
          techStack={["Python", "LangChain", "ReAct Agent", "RAG (Vector+FTS5+RRF)", "SQLite", "Docker", "Nginx"]}
          videoSrc={null}
          videoNote={null}
          githubUrl={null}
          demoUrl={null}
          architectureSvg={lvArchitecture}
          placeholder={{
            title: "待补充素材",
            items: [
              "GitHub 仓库链接（已有：luluLuLu47/lv-sales-training-agent）",
              "项目运行录屏视频（真实运行+声音）",
              "功能截图 3-4 张",
            ],
          }}
        />

        {/* Project 3: Sichuan Dialect */}
        <ProjectCard
          id="dialect"
          title="基于知识图谱的四川方言文本对话系统"
          subtitle="NLP + 知识图谱的方言理解与对话"
          tags={["NLP", "知识图谱", "对话系统", "方言处理"]}
          status="开发中"
          description="面向四川方言的自然语言理解与对话系统，通过构建方言知识图谱，实现方言词汇识别、语义理解和对话生成。探索方言保护与数字化传承的技术路径。"
          features={[
            "方言知识图谱构建：词汇关系、语义网络",
            "方言文本识别与标准化转换",
            "基于知识图谱的对话生成",
            "方言-普通话双向翻译",
          ]}
          techStack={["Python", "NLP", "知识图谱", "对话系统"]}
          videoSrc={null}
          videoNote={null}
          githubUrl={null}
          demoUrl={null}
          architectureSvg={dialectArchitecture}
          placeholder={{
            title: "待补充素材",
            items: [
              "GitHub 仓库链接",
              "功能截图",
              "演示视频",
            ],
          }}
        />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
