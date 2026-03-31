import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-100 overflow-hidden font-sans selection:bg-purple-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] -left-1/4 w-[150%] h-[50vh] bg-gradient-to-r from-violet-600/20 via-fuchsia-600/10 to-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] -right-1/4 w-[150%] h-[60vh] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-violet-600/20 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <main className="relative z-10 flex w-full max-w-3xl mx-auto flex-col px-6 py-20 sm:p-20 gap-16 min-h-screen justify-center">
        {/* Profile Header */}
        <section className="flex flex-col items-start gap-6">
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-transform duration-500 hover:scale-105 group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative z-10 bg-gradient-to-br from-indigo-400 to-fuchsia-400 bg-clip-text text-4xl font-extrabold text-transparent">
              YS
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              윤창식
            </h1>
            <p className="text-xl sm:text-2xl font-medium bg-gradient-to-r from-indigo-300 via-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              Front-end Engineer & AI Agent Pipeline Architect
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section>
          <div className="relative rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-xl p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:border-zinc-700/50 hover:bg-zinc-900/60 flex flex-col gap-4">
            <svg 
              className="absolute text-zinc-800/50 h-32 w-32 -top-4 -right-4 -z-10 rotate-12" 
              fill="currentColor" viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.714-4.675-10.389-10.389-10.389h-3.628v3.628h3.628c3.713 0 6.761 3.048 6.761 6.761v7.391h3.628zm10 0v-7.391c0-5.714-4.675-10.389-10.389-10.389h-3.628v3.628h3.628c3.713 0 6.761 3.048 6.761 6.761v7.391h3.628z" />
            </svg>
            <p className="text-lg leading-relaxed text-zinc-300 relative z-10">
              AI 에이전트를 개발 워크플로우에 통합하여 생산성을 극대화하는 <strong className="font-semibold text-white bg-indigo-500/20 px-1.5 py-0.5 rounded border border-indigo-500/30">AI-Native 개발 방식</strong>을 지향합니다. 
              기술적 깊이와 교육적 역량을 바탕으로 지속 가능한 소프트웨어 아키텍처를 설계합니다.
            </p>
          </div>
        </section>

        {/* Key Expertise (Cards) */}
        <section className="w-full space-y-6">
          <div className="flex items-center gap-4">
             <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center border border-zinc-700/50">
               <svg className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
               </svg>
             </div>
             <h2 className="text-2xl font-bold tracking-tight">Expertise</h2>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            
            {/* Tech Stack Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold flex items-center gap-2 text-zinc-100">
                   Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Next.js', 'React', 'TailwindCSS', 'FSD', 'Turborepo'].map(tech => (
                    <span key={tech} className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm transition-colors group-hover:border-indigo-500/40 group-hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* AI-Native Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <h3 className="mb-4 text-xl font-semibold flex items-center gap-2 text-zinc-100">
                   AI-Native
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Claude Code', 'MCP', 'AI Agent Workflow', 'LLM Integration'].map(tech => (
                    <span key={tech} className="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1.5 text-xs font-medium text-zinc-300 shadow-sm transition-colors group-hover:border-fuchsia-500/40 group-hover:text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Highlights */}
        <section className="w-full space-y-8">
          <div className="flex items-center gap-4">
             <div className="h-10 w-10 shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center border border-zinc-700/50">
               <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
             </div>
             <h2 className="text-2xl font-bold tracking-tight">Experience</h2>
          </div>
          
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {/* Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-black bg-indigo-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-5 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-md shadow-xl transition-all hover:-translate-y-1 hover:border-zinc-700/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-indigo-400 tracking-wider uppercase">주임 연구원</span>
                  <time className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-2 py-1 rounded-full border border-zinc-800">24.05 - 26.01</time>
                </div>
                <h4 className="font-bold text-lg text-white mb-2">한국 기술 마켓</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">Turborepo 기반 모노레포 구축 및 FSD 아키텍처 최적화, 대규모 데이터 처리 화면 설계</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-black bg-purple-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-5 rounded-3xl border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-md shadow-xl transition-all hover:-translate-y-1 hover:border-zinc-700/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-purple-400 tracking-wider uppercase">리액트 튜터</span>
                  <time className="text-xs font-semibold text-zinc-500 bg-zinc-900 px-2 py-1 rounded-full border border-zinc-800">23.12 - 25.05</time>
                </div>
                <h4 className="font-bold text-lg text-white mb-2">팀스파르타 (내배캠)</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">라이브 강의 및 AI 과제 리뷰 자동화 시스템 구축, 수강생 밀착 멘토링</p>
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <footer className="mt-8 flex flex-col items-center justify-center gap-6 border-t border-zinc-800/40 pt-10 text-sm font-medium">
          <div className="flex gap-4 sm:gap-6">
            <a href="https://caesiumy.dev" target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all p-2 px-4 rounded-xl hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              Blog
            </a>
            <a href="https://github.com/caesiumy" target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all p-2 px-4 rounded-xl hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/chang-sik-yoon" target="_blank" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all p-2 px-4 rounded-xl hover:bg-zinc-800/50 border border-transparent hover:border-zinc-700/50">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>
          <p className="text-zinc-600">© {new Date().getFullYear()} 윤창식. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
