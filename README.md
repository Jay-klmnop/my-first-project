# my-first-project

2025 June 22nd
# 🎮 Pixel-Themed Reward To-Do List

![Project Demo GIF](my-first-project/gif/project-demo-ver1.gif)
*A simple but delightful pixel-art themed to-do list app designed to make completing tasks more fun. Built with vanilla HTML, CSS, and JavaScript.*

**➡️ Live Demo: [Click Here to See it in Action!](https://jay-klmnop.github.io/my-first-project/)**

---

## 💡 프로젝트 컨셉 (Concept)

이 프로젝트는 단순한 할 일 목록을 넘어, 사용자가 작업을 완료할 때마다 시각적인 보상을 받는 '게이미피케이션(Gamification)' 경험을 제공하기 위해 만들어졌습니다. 모든 그래픽 에셋(캐릭터, 아이템, UI 요소)은 Piskel을 사용하여 직접 제작한 픽셀 아트입니다. 목표는 프론트엔드 개발의 기본기를 다지면서, 저만의 독창적인 미학과 스토리를 담은 결과물을 만드는 것이었습니다.

---

## ✨ 주요 기능 (Features)

- **할 일 관리:** 할 일을 추가하고, 클릭 한 번으로 완료 상태를 토글할 수 있습니다.
- **동적 카운터:** 전체 할 일의 수와 완료된 할 일의 수가 실시간으로 업데이트됩니다.
- **완료 항목 필터링:** 'Hide Completed'와 'Show Completed' 버튼으로 완료된 항목을 숨기거나 다시 볼 수 있습니다.
- **보상 시스템:** 특정 개수의 할 일을 완료할 때마다, 캐릭터 룸에 새로운 아이템이 보상으로 주어집니다.
- **픽셀 아트 테마:** 모든 UI 요소(컨테이너, 버튼, 입력창)는 `border-image` 속성을 활용하여 일관된 픽셀 아트 테마로 스타일링되었습니다.
- **커스텀 웹 폰트:** `Press Start 2P`를 적용하여 레트로 게임 감성을 극대화했습니다.

---

## 🛠 사용한 기술 (Tech Stack)

- **Frontend:** `HTML5`, `CSS3`, `JavaScript (ES6+)`
- **Graphics:** `Piskel` for all pixel art assets
- **Deployment:** `GitHub Pages`
- **Version Control:** `Git` & `GitHub`

---

## 🧠 배운 점 & 도전 과제 (Key Learnings & Challenges)

이 프로젝트를 진행하면서 여러 기술적 난관에 부딪혔고, 이를 해결하며 많은 것을 배웠습니다.

- **CSS `border-image` 마스터하기:**
  - **문제:** `border-image`가 특정 상황(e.g., `:hover`)에서 뭉개지거나, `border-style: solid;` 없이는 렌더링되지 않는 문제를 겪었습니다.
  - **해결:** 단축 속성 대신 `border-image-source` 같은 개별 속성을 사용하여 문제를 해결했고, CSS 렌더링의 기본 원리를 더 깊이 이해하게 되었습니다.

- **Flexbox 레이아웃 디버깅:**
  - **문제:** 띄어쓰기 없는 긴 텍스트가 컨테이너 밖으로 튀어나가는 현상을 마주했습니다.
  - **해결:** Flex 아이템에 `min-width: 0;`를 적용하여 이 문제를 해결했습니다. 이 과정에서 Flexbox의 콘텐츠 크기 계산 방식을 체득할 수 있었습니다.

- **JavaScript 상태 관리의 중요성:**
  - **문제:** '완료' 상태를 여러 곳에서 제각각 관리하다 보니, 카운터 업데이트나 숨김 기능에서 버그가 발생했습니다.
  - **해결:** 상태 판단의 기준을 `<li>` 태그의 `.completed` 클래스 하나로 통일하는 **'단일 진실 공급원(Single Source of Truth)'** 원칙을 적용하여 로직을 재구성하고 버그를 잡았습니다.

- **Git 충돌 해결:**
  - **문제:** 로컬 저장소와 GitHub 원격 저장소의 '역사'가 달라 `push`가 거부되었습니다.
  - **해결:** `git pull --allow-unrelated-histories`를 통해 두 역사를 병합하고, 이 과정에서 Merge Conflict의 개념과 해결 과정을 직접 경험했습니다.

---

## 🚀 앞으로 개선할 점 (Future Improvements)

-   **데이터 영속성:** `localStorage`를 사용하여, 브라우저를 껐다 켜도 할 일 목록이 사라지지 않도록 개선.
-   **더 많은 보상:** 더 다양한 종류의 보상 아이템과 캐릭터 커스터마이징 기능 추가.
-   **애니메이션 및 효과음:** 사용자 상호작용에 간단한 애니메이션과 사운드 이펙트를 추가하여 경험을 더욱 풍부하게 만들기.