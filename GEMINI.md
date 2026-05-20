# GEMINI.md

이 파일은 **마이 링크 (My Link)** 프로젝트의 개발 가이드이자 컨텍스트 정보를 담고 있습니다. 모든 개발 작업은 본 문서의 지침을 최우선으로 따릅니다.

## 1. 프로젝트 개요 (Project Overview)

- **프로젝트 명**: 마이 링크 (My Link)
- **목적**: 여러 개의 링크를 하나의 URL로 통합 관리하고 공유하는 미니멀 프로필 플랫폼.
- **핵심 가치**: 복잡한 기능을 덜어낸 본질(링크 모음)에 집중하는 간결함.
- **주요 기능**:
  - Google 소셜 로그인 (Firebase Auth)
  - Gmail ID 기반 자동 URL 슬러그 생성 및 인라인 편집 프로필 관리.
  - 링크 CRUD (인라인 편집 방식, 정렬/토글 기능 제외).
  - 외부 링크의 파비콘(Favicon) 자동 추출 및 표시.

## 2. 기술 스택 (Tech Stack)

### Frontend & UI
- **Framework**: Next.js 16 (React 19, Turbopack)
- **Styling**: Tailwind CSS 4 + `class-variance-authority` (CVA)
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Theming**: `next-themes` (Dark/Light 모드 지원)

### Backend & Infrastructure (예정)
- **Auth**: Firebase Authentication (Google Login 전용)
- **Database**: Firebase Firestore (User 및 Link 서브 컬렉션 구조)

## 3. 주요 명령어 (Building & Running)

- `npm run dev`: Turbopack을 이용한 개발 서버 실행.
- `npm run build`: 프로덕션 빌드 생성.
- `npm run start`: 빌드된 애플리케이션 실행.
- `npm run lint`: ESLint를 이용한 코드 린팅.
- `npm run format`: Prettier를 이용한 코드 포맷팅.
- `npm run typecheck`: TypeScript 타입 체크.

## 4. 개발 규칙 및 컨벤션 (Development Conventions)

### 파일 참조 컨벤션
- 프로젝트 내의 파일을 언급하거나 참조할 때는 항상 파일 이름 앞에 `@`를 붙입니다. (예: `@package.json`, `@docs/PRD.md`)

### 아키텍처 및 디자인 가이드
- **PRD 우선**: `@docs/PRD.md`에 명시된 기능 범위와 핵심 기조를 엄격히 준수합니다.
- **미니멀리즘**: 불필요한 UI 요소(모달, 드래그앤드롭 등)를 배제하고 **인라인 편집(Inline Editing)** 방식을 고수합니다.
- **컴포넌트**: `shadcn/ui` 컴포넌트를 기반으로 하며, 필요시 `components/ui` 폴더에 추가하여 사용합니다.
- **경로 별칭**: 모든 임포트는 `@/` 별칭(Alias)을 사용하여 절대 경로로 관리합니다.

### 코드 스타일
- **타입 안정성**: 모든 컴포넌트와 유틸리티 함수에는 엄격한 TypeScript 타입을 적용합니다.
- **유틸리티**: 반복되는 클래스 병합 작업은 `lib/utils.ts`의 `cn` 함수를 사용합니다.
- **일관성**: Prettier와 ESLint 설정에 따라 일관된 포맷팅을 유지합니다.

### 데이터 구조 (Firestore)
- `/users/{uid}`: 사용자 기본 정보 (displayName, bio 등).
- `/users/{uid}/links/{linkId}`: 사용자가 등록한 개별 링크 정보 (title, url, clickCount 등).

## 5. 참고 문서
- `docs/PRD.md`: 상세 제품 요구사항.
- `docs/UserScenario.md`: 사용자 시나리오 및 흐름.
- `docs/Wireframe.md`: UI 레이아웃 및 디자인 구조.
