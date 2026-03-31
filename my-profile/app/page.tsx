import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="flex w-full max-w-2xl flex-col items-center gap-12 text-center">
        {/* Profile Header */}
        <section className="flex flex-col items-center gap-4">
          <div className="h-24 w-24 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
            {/* Placeholder for Profile Image */}
            <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-zinc-400">
              YS
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">윤창식</h1>
            <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
              Front-end Engineer & AI Agent Pipeline Architect
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="space-y-4">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            AI 에이전트를 개발 워크플로우에 통합하여 생산성을 극대화하는 AI-Native 개발 방식을 지향합니다. 
            기술적 깊이와 교육적 역량을 바탕으로 지속 가능한 소프트웨어 아키텍처를 설계합니다.
          </p>
        </section>

        {/* Key Expertise */}
        <section className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 p-6 text-left dark:border-zinc-800">
            <h3 className="mb-2 font-semibold">Tech Stack</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              TypeScript, Next.js, React, TailwindCSS, FSD, Turborepo
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-200 p-6 text-left dark:border-zinc-800">
            <h3 className="mb-2 font-semibold">AI-Native</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Claude Code, MCP, AI Agent Workflow, LLM Integration
            </p>
          </div>
        </section>

        {/* Experience Highlights */}
        <section className="w-full space-y-6 text-left">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="space-y-6">
            <div className="relative border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
              <div className="mb-1 text-sm font-medium text-zinc-500">2024.05 - 2026.01</div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">한국 기술 마켓</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Turborepo 기반 모노레포 구축 및 FSD 아키텍처 최적화</p>
            </div>
            <div className="relative border-l-2 border-zinc-200 pl-6 dark:border-zinc-800">
              <div className="mb-1 text-sm font-medium text-zinc-500">2023.12 - 2025.05</div>
              <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">팀스파르타 (내배캠 리액트 튜터)</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">라이브 강의 및 AI 과제 리뷰 자동화 시스템 구축</p>
            </div>
          </div>
        </section>

        {/* Links */}
        <footer className="flex flex-wrap justify-center gap-6 pt-8 text-sm font-medium">
          <a href="https://caesiumy.dev" target="_blank" className="hover:text-zinc-600 dark:hover:text-zinc-300">Blog</a>
          <a href="https://github.com/caesiumy" target="_blank" className="hover:text-zinc-600 dark:hover:text-zinc-300">GitHub</a>
          <a href="https://linkedin.com/in/chang-sik-yoon" target="_blank" className="hover:text-zinc-600 dark:hover:text-zinc-300">LinkedIn</a>
        </footer>
      </main>
    </div>
  );
}
