"use client";

import { useState } from "react";

interface Placeholder {
  title: string;
  items: string[];
}

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  status: string;
  description: string;
  features: string[];
  techStack: string[];
  videoSrc: string | null;
  videoNote: string | null;
  videoEmbed: string | null;
  requirementDoc?: RequirementSection[];
  docUrl: string | null;
  githubUrl: string | null;
  demoUrl: string | null;
  placeholder?: Placeholder;
  architectureSvg?: React.ReactNode;
}

interface RequirementSection {
  title: string;
  points: string[];
}

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectCard({
  id,
  title,
  subtitle,
  tags,
  status,
  description,
  features,
  techStack,
  videoSrc,
  videoNote,
  videoEmbed,
  requirementDoc,
  docUrl,
  githubUrl,
  demoUrl,
  placeholder,
  architectureSvg,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={id} className="mb-6 rounded-lg border border-gray-200 bg-white overflow-hidden scroll-mt-20">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-4 mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-[#1a202c]">{title}</h3>
              <span className="px-2 py-0.5 text-[10px] rounded bg-amber-50 text-amber-600 border border-amber-200">
                {status}
              </span>
            </div>
            <p className="text-gray-500 text-xs">{subtitle}</p>
          </div>
          <span className="text-gray-400 text-sm mt-1">
            {expanded ? "−" : "+"}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] rounded bg-[#eef2f7] text-[#4a6fa5] border border-[#dde5f0]"
            >
              {tag}
            </span>
          ))}
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-5 pb-5 border-t border-gray-100 pt-4">
          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm mb-5">{description}</p>

          {/* Requirement Analysis */}
          {requirementDoc && requirementDoc.length > 0 && (
            <div className="mb-5 rounded-md border border-[#dde5f0] bg-[#fbfcfe] p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-semibold text-[#4a6fa5] uppercase tracking-wide">
                  需求分析
                </h4>
                {docUrl && (
                  <a
                    href={`${BASE}${docUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] px-2 py-1 rounded border border-[#dde5f0] text-[#4a6fa5] hover:bg-[#eef2f7] transition-colors"
                  >
                    完整需求文档 PDF ↓
                  </a>
                )}
              </div>
              <div className="space-y-3.5">
                {requirementDoc.map((sec) => (
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

          {/* Architecture Diagram */}
          {architectureSvg && (
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">系统架构</h4>
              <div className="rounded-md border border-gray-200 bg-[#f8f9fa] p-4 overflow-x-auto">
                {architectureSvg}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">核心功能</h4>
            <ul className="grid md:grid-cols-2 gap-1.5">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-gray-600">
                  <span className="text-[#4a6fa5] mt-0.5">▸</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-5">
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">技术栈</h4>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[10px] rounded bg-gray-50 text-gray-500 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Video: 本地 mp4 或 B站/YouTube 嵌入 */}
          {(videoSrc || videoEmbed) && (
            <div className="mb-5">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">演示视频</h4>
              {videoEmbed ? (
                <div className="relative w-full overflow-hidden rounded-md border border-gray-200" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={videoEmbed}
                    className="absolute top-0 left-0 w-full h-full"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <video
                  src={`${BASE}${videoSrc}`}
                  controls
                  preload="metadata"
                  className="w-full rounded-md border border-gray-200"
                />
              )}
              {videoNote && (
                <p className="text-[10px] text-gray-400 mt-1.5">⚠️ {videoNote}</p>
              )}
            </div>
          )}

          {/* Placeholder for missing assets */}
          {placeholder && (
            <div className="mb-5 rounded-md bg-amber-50 border border-amber-200 p-3">
              <h4 className="text-xs font-semibold text-amber-700 mb-1.5">
                {placeholder.title}
              </h4>
              <ul className="space-y-0.5">
                {placeholder.items.map((item, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-start gap-1.5">
                    <span className="text-amber-400/60">○</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-2">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-[#4a6fa5] hover:text-[#4a6fa5] transition-colors text-xs"
              >
                GitHub 仓库 →
              </a>
            ) : (
              <span className="px-3 py-1.5 rounded-md border border-gray-200 text-gray-400 text-xs bg-gray-50">
                GitHub 链接（待补充）
              </span>
            )}
            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-[#4a6fa5] text-white hover:bg-[#3a5a8a] transition-colors text-xs"
              >
                在线 Demo →
              </a>
            ) : (
              <span className="px-3 py-1.5 rounded-md border border-gray-200 text-gray-400 text-xs bg-gray-50">
                在线 Demo（待补充）
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
