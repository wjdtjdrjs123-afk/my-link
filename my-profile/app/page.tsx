import React from "react";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-black selection:text-white bg-[var(--background)]">
      {/* Background Dots Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />

      <main className="relative z-10 w-full max-w-6xl mx-auto flex flex-col px-6 py-16 sm:p-16 lg:p-24 gap-16">
        
        {/* Navigation / Header */}
        <header className="flex justify-between items-end border-b-4 border-black pb-6 mb-8 mt-4">
          <div>
            <span className="bg-black text-white px-3 py-1 text-sm font-bold uppercase tracking-widest brutal-shadow-sm inline-block rotate-[-2deg] mb-2">Portfolio</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none mt-2">
              Chang-Sik
            </h1>
          </div>
          <div className="hidden sm:flex gap-3">
             <a href="https://caesiumy.dev" target="_blank" className="bg-yellow-400 brutal-border brutal-shadow px-4 py-2 font-bold text-lg hover:bg-yellow-300">Blog</a>
             <a href="https://github.com/caesiumy" target="_blank" className="bg-white brutal-border brutal-shadow px-4 py-2 font-bold text-lg hover:bg-zinc-100">GitHub</a>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col gap-6">
          <div className="bg-cyan-400 brutal-border brutal-shadow p-8 sm:p-12 lg:p-16 transform -rotate-1 hover:rotate-0 transition-transform flex flex-col gap-4">
             <h2 className="text-4xl sm:text-6xl font-black uppercase leading-[1.1]">
               Front-end Engineer<br/>
               <span className="bg-black text-white px-2 inline-block -rotate-1 mt-2 lg:mt-4">& AI Educator</span>
             </h2>
             <p className="text-xl sm:text-3xl font-bold mt-4 leading-tight">
               AI 에이전트를 개발 워크플로우에 통합하여<br className="hidden sm:block"/>
               생산성을 극대화하는 <span className="underline decoration-4 decoration-pink-500">AI-Native 개발 방식</span>을 지향합니다.
             </p>
          </div>
        </section>

        {/* Intro & Background (2 Column Layout on lg) */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
           {/* Background Story */}
           <div className="bg-pink-400 brutal-border brutal-shadow p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b-2 border-black pb-4">
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <h3 className="text-3xl font-black uppercase">My Background</h3>
              </div>
              <p className="text-lg sm:text-xl font-bold leading-relaxed">
                <span className="bg-white px-1 border-2 border-black inline-block mb-1">비전공자 출신</span>의 한계를 강점으로 승화시켰습니다. 
                영문학 전공의 인문학적 소양에 컴퓨터공학 복수전공으로 논리력을 더했습니다. 
                현재는 지식의 나눔을 실천하는 명확하고 깊이 있는 교육자로도 활동 중입니다.
              </p>
           </div>
           
           {/* Publication */}
           <div className="bg-white brutal-border brutal-shadow p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4 border-b-2 border-black pb-4">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-transparent border-b-black rotate-90"></div>
                <h3 className="text-3xl font-black uppercase">Publication</h3>
              </div>
              <div className="flex flex-col gap-3">
                <div className="bg-yellow-300 border-2 border-black p-4 brutal-shadow-sm">
                  <span className="text-sm font-bold bg-black text-white px-2 py-1 uppercase inline-block mb-2">역자</span>
                  <h4 className="text-xl font-black">자바스크립트 + 리액트 디자인 패턴</h4>
                  <p className="font-bold mt-2">현대적인 프론트엔드 환경에 맞춘 설계와 아키텍처 패턴을 국내에 소개하며 기술 생태계 발전에 기여했습니다.</p>
                </div>
              </div>
           </div>
        </section>

        {/* Core Expertise Grid */}
        <section className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">Expertise</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tech Stack */}
            <div className="bg-[#bbf7d0] brutal-border brutal-shadow p-6 flex flex-col text-center">
              <h3 className="text-2xl font-black uppercase mb-6 bg-white border-2 border-black py-2 brutal-shadow-sm">
                 Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['TypeScript', 'Next.js', 'React', 'TailwindCSS'].map(tech => (
                  <span key={tech} className="bg-black text-white font-bold px-3 py-1 text-sm">{tech}</span>
                ))}
              </div>
              <p className="mt-4 font-bold text-sm text-left px-2">견고한 정적 타입과 최신 렌더링 패턴을 결합하여 빠르고 안정적인 제품을 구축합니다.</p>
            </div>

            {/* Architecture */}
            <div className="bg-[#ddd6fe] brutal-border brutal-shadow p-6 flex flex-col text-center">
              <h3 className="text-2xl font-black uppercase mb-6 bg-white border-2 border-black py-2 brutal-shadow-sm">
                 Architecture
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['FSD', 'Turborepo', 'Monorepo', 'Design System'].map(tech => (
                  <span key={tech} className="bg-white border-2 border-black font-bold px-3 py-1 text-sm">{tech}</span>
                ))}
              </div>
              <p className="mt-4 font-bold text-sm text-left px-2">복잡한 조직과 대규모 도메인에서도 견고하게 유지보수 가능한 아키텍처를 설계합니다.</p>
            </div>

            {/* AI-Native */}
            <div className="bg-[#fecaca] brutal-border brutal-shadow p-6 flex flex-col text-center sm:col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-black uppercase mb-6 bg-white border-2 border-black py-2 brutal-shadow-sm">
                 AI Workflow
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {['Claude Code', 'MCP', 'Multi-Agent', 'LLM Integration'].map(tech => (
                  <span key={tech} className="bg-red-600 text-white font-bold px-3 py-1 text-sm">{tech}</span>
                ))}
              </div>
              <p className="mt-4 font-bold text-sm text-left px-2">AI 에이전트 파이프라인을 설계하고 도구 기반 워크플로우를 전파합니다.</p>
            </div>
          </div>
        </section>

        {/* Experience & Community */}
        <section className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-black uppercase border-b-4 border-black pb-4 inline-block">Experience & Activity</h2>
          
          <div className="flex flex-col gap-6">
            
            {/* Experience Item */}
            <div className="bg-white brutal-border brutal-shadow p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
               <div className="md:w-1/3 flex flex-col">
                  <span className="bg-black text-white font-bold px-2 py-1 text-sm w-max mb-2">24.05 - 26.01</span>
                  <h3 className="text-2xl font-black uppercase">KC-MIC</h3>
                  <span className="text-md font-bold text-zinc-600">주임 연구원 (프론트엔드)</span>
               </div>
               <div className="md:w-2/3">
                  <p className="text-lg font-bold border-l-4 border-black pl-4 py-2 bg-zinc-100 pr-2">
                    AI 연구 조직 내 프론트엔드 엔지니어로서, Turborepo 기반 대규모 모노레포 구축과 FSD 아키텍처 최적화를 주도했습니다. 대용량 데이터 처리 화면 설계 및 사용자 경험을 고도화했습니다.
                  </p>
               </div>
            </div>

            {/* Education Item */}
            <div className="bg-white brutal-border brutal-shadow p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
               <div className="md:w-1/3 flex flex-col">
                  <span className="bg-black text-white font-bold px-2 py-1 text-sm w-max mb-2">23.12 - Present</span>
                  <h3 className="text-2xl font-black uppercase">IT Education</h3>
                  <span className="text-md font-bold text-zinc-600">튜터 / 메인 강사</span>
               </div>
               <div className="md:w-2/3">
                  <p className="text-lg font-bold border-l-4 border-black pl-4 py-2 bg-yellow-100 pr-2">
                    **팀스파르타(내배캠), 프로그래머스, 오즈코딩스쿨** 등 주요 부트캠프에서 프론트엔드 및 Next.js 강의를 주도하고 있습니다. 라이브 강의 진행 및 AI 과제 리뷰 자동화 시스템을 구축하여 학습 효율성을 극대화했습니다. 
                  </p>
               </div>
            </div>

            {/* Community Item */}
            <div className="bg-white brutal-border brutal-shadow p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start">
               <div className="md:w-1/3 flex flex-col">
                  <span className="bg-black text-white font-bold px-2 py-1 text-sm w-max mb-2">Community</span>
                  <h3 className="text-2xl font-black uppercase">Tech Network</h3>
               </div>
               <div className="md:w-2/3">
                  <p className="text-lg font-bold border-l-4 border-black pl-4 py-2 bg-lime-100 pr-2">
                    지식 공유와 개발자 네트워킹에 열정을 가지고 **소문난 주니어 콘퍼런스** 운영진 및 **PyCon 코리아** 자원봉사 등 다수의 커뮤니티 행사에 기여하고 있습니다.
                  </p>
               </div>
            </div>

          </div>
        </section>

        {/* Footer / Mobile Links */}
        <footer className="mt-12 border-t-4 border-black pt-12 flex flex-col sm:flex-row justify-between items-center gap-6">
           <p className="text-xl font-black uppercase order-2 sm:order-1">© {new Date().getFullYear()} Chang-Sik Yoon</p>
           
           <div className="flex flex-wrap gap-4 justify-center order-1 sm:order-2">
             <a href="https://caesiumy.dev" target="_blank" className="bg-yellow-400 brutal-border brutal-shadow px-6 py-3 font-black text-xl hover:-translate-y-1 transition-transform">
               BLOG
             </a>
             <a href="https://github.com/caesiumy" target="_blank" className="bg-white brutal-border brutal-shadow px-6 py-3 font-black text-xl hover:-translate-y-1 transition-transform">
               GITHUB
             </a>
             <a href="https://linkedin.com/in/chang-sik-yoon" target="_blank" className="bg-blue-400 brutal-border brutal-shadow px-6 py-3 font-black text-xl hover:-translate-y-1 transition-transform text-white">
               LINKEDIN
             </a>
           </div>
        </footer>

      </main>
    </div>
  );
}

