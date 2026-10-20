"use client";

import { useEffect } from "react";

export interface RequirementSection {
  title: string;
  points: string[];
}

export type ProjectTab = "doc" | "arch" | "video" | "detail";

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  tags: string[];
  description: string;
  features: string[];
  techStack: string[];
  requirementDoc?: RequirementSection[];
  architectureSvg?: React.ReactNode;
  videoSrc: string | null;
  videoPoster: string | null;
  videoEmbed: string | null;
  videoNote: string | null;
  docUrl: string | null;
  githubUrl: string | null;
  demoUrl: string | null;
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const TABS: { key: ProjectTab; label: string }[] = [
  { key: "doc", label: "需求文档" },
  { key: "arch", label: "项目架构" },
  { key: "video", label: "演示视频" },
  { key: "detail", label: "功能与技术" },
];

export default function ProjectModal({
  project,
  tab,
  onClose,
  onTabChange,
}: {
  project: ProjectDetail | null;
  tab: ProjectTab;
  onClose: () => void;
  onTabChange: (t: ProjectTab) => void;
}) {
  // Esc 关闭 + 打开时锁定页面滚动
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  if (!project) return null;

  // 每个 tab 是否有内容可看
  const available: Record<ProjectTab, boolean> = {
    doc: !!project.requirementDoc?.length,
    arch: !!project.architectureSvg,
    video: !!(project.videoSrc || project.videoEmbed),
    detail: project.features.length > 0 || project.techStack.length > 0,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* 遮罩 */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 主体 */}
      <div className="relative w-full max-w-3xl max-h-[88vh] flex flex-col rounded-xl bg-white shadow-2xl overflow-hidden">
        {/* 头部 */}
        <div className="flex items-start justify-between gap-4 px-6 pt-5 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-[#1a202c]">{project.title}</h3>
              <span className="px-2 py-0.5 text-[10px] rounded bg-amber-50 text-amber-600 border border-amber-200">
                {project.status}
              </span>
            </div>
            <p className="text-gray-500 text-xs">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors text-lg leading-none"
            aria-label="关闭"
          >
            ×
          </button>
        </div>

        {/* Tab 栏 */}
        <div className="flex gap-1 px-6 pt-3 border-b border-gray-100 overflow-x-auto">
          {TABS.map((t) => {
            const enabled = available[t.key];
            return (
              <button
                key={t.key}
                disabled={!enabled}
                onClick={() => enabled && onTabChange(t.key)}
                className={[
                  "px-3.5 py-2 text-xs font-medium rounded-t-md transition-colors whitespace-nowrap",
                  t.key === tab
                    ? "text-[#4a6fa5] border-b-2 border-[#4a6fa5] bg-[#f6f9fc]"
                    : enabled
                      ? "text-gray-500 hover:text-[#4a6fa5]"
                      : "text-gray-300 cursor-not-allowed",
                ].join(" ")}
              >
                {t.label}
                {!enabled && "（待补充）"}
              </button>
            );
          })}
        </div>

        {/* 内容区 */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {tab === "doc" && (
            <div className="space-y-5">
              {project.requirementDoc && project.requirementDoc.length > 0 && (
                <div className="rounded-md border border-[#dde5f0] bg-[#fbfcfe] p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold text-[#4a6fa5] uppercase tracking-wide">
                      需求分析
                    </h4>
                    {project.docUrl && (
                      <a
                        href={`${BASE}${project.docUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] px-2 py-1 rounded border border-[#dde5f0] text-[#4a6fa5] hover:bg-[#eef2f7] transition-colors"
                      >
                        完整需求文档 PDF ↓
                      </a>
                    )}
                  </div>
                  <div className="space-y-3.5">
                    {project.requirementDoc.map((sec) => (
                      <div key={sec.title}>
                        <p className="text-xs font-medium text-[#1a202c] mb-1.5">{sec.title}</p>
                        <ul className="space-y-1">
                          {sec.points.map((p, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600 leading-relaxed">
                              <span className="text-[#4a6fa5] mt-0.5">·</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {tab === "arch" && project.architectureSvg && (
            <div className="rounded-md border border-gray-200 bg-[#f8f9fa] p-4 overflow-x-auto">
              {project.architectureSvg}
            </div>
          )}

          {tab === "video" && (project.videoSrc || project.videoEmbed) && (
            <div>
              {project.videoEmbed ? (
                <div className="relative w-full overflow-hidden rounded-md border border-gray-200" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={project.videoEmbed}
                    className="absolute top-0 left-0 w-full h-full"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  key={project.id}
                  src={`${BASE}${project.videoSrc}`}
                  poster={project.videoPoster ? `${BASE}${project.videoPoster}` : undefined}
                  controls
                  preload="none"
                  playsInline
                  className="w-full rounded-md border border-gray-200"
                />
              )}
              {project.videoNote && (
                <p className="text-[10px] text-gray-400 mt-1.5">{project.videoNote}</p>
              )}
            </div>
          )}

          {tab === "detail" && (
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed text-sm">{project.description}</p>
              {project.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">核心功能</h4>
                  <ul className="grid sm:grid-cols-2 gap-1.5">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <span className="text-[#4a6fa5] mt-0.5">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.techStack.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">技术栈</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] rounded bg-gray-50 text-gray-500 border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {(project.githubUrl || project.demoUrl) && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#4a6fa5] hover:text-[#4a6fa5] transition-colors text-xs"
                    >
                      GitHub 仓库 →
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-md bg-[#4a6fa5] text-white hover:bg-[#3a5a8a] transition-colors text-xs"
                    >
                      在线 Demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
