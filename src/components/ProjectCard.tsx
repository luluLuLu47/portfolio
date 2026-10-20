"use client";

import type { ProjectTab } from "./ProjectModal";

export interface ProjectEntry {
  id: string;
  title: string;
  subtitle: string;
  status: string;
  tags: string[];
  hasDoc: boolean;
  hasArch: boolean;
  hasVideo: boolean;
  videoSrc: string | null;
  videoPoster: string | null;
  videoNote: string | null;
}

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: ProjectEntry;
  onOpen: (id: string, tab: ProjectTab) => void;
}) {
  const entries: { tab: ProjectTab; label: string; enabled: boolean }[] = [
    { tab: "doc", label: "需求文档", enabled: project.hasDoc },
    { tab: "arch", label: "项目架构", enabled: project.hasArch },
    { tab: "detail", label: "功能与技术", enabled: true },
  ];

  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 hover:shadow-md hover:border-[#c9d7e8] transition-all">
      {/* 标题区 */}
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1.5">
          <h3 className="text-[15px] font-bold text-[#1a202c] leading-snug">{project.title}</h3>
          <span className="shrink-0 px-2 py-0.5 text-[10px] rounded bg-amber-50 text-amber-600 border border-amber-200">
            {project.status}
          </span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">{project.subtitle}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] rounded bg-[#eef2f7] text-[#4a6fa5] border border-[#dde5f0]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 演示视频 —— 直接内嵌展示，点开即播，无需二次点击 */}
      {project.videoSrc && (
        <div className="mb-4">
          <video
            src={project.videoSrc}
            poster={project.videoPoster ?? undefined}
            controls
            preload="metadata"
            className="w-full rounded-md border border-gray-200"
          />
          {project.videoNote && (
            <p className="text-[10px] text-gray-400 mt-1.5">{project.videoNote}</p>
          )}
        </div>
      )}

      {/* 入口行 —— 点进去查看对应内容 */}
      <div className="mt-auto pt-3 border-t border-gray-100">
        <div className="flex flex-wrap gap-x-4 gap-y-1.5">
          {entries.map((e) => (
            <button
              key={e.tab}
              disabled={!e.enabled}
              onClick={() => e.enabled && onOpen(project.id, e.tab)}
              className={[
                "text-xs transition-colors",
                e.enabled
                  ? "text-[#4a6fa5] hover:text-[#2d4d75] hover:underline underline-offset-2"
                  : "text-gray-300 cursor-not-allowed",
              ].join(" ")}
            >
              {e.label}
              {!e.enabled && "（待补充）"}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
