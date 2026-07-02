# 몽글베이커리

React + TypeScript + Vite로 만든 가상의 베이커리 브랜드 랜딩페이지입니다. (브랜드명, 메뉴, 카피는 모두 창작된 예시 콘텐츠입니다)

## 배포 주소

GitHub Pages를 통해 아래 주소에서 확인할 수 있습니다. (main 브랜치에 병합되면 자동 배포됩니다)

```
https://yyksin.github.io/claude-project/
```

## 로컬 실행

```bash
npm install
npm run dev
```

## 내용 수정하기

브랜드 정보, 메뉴, 후기 등은 [`src/data.ts`](./src/data.ts) 파일에서 수정하면 사이트 전체에 반영됩니다.

## 배포 방법

`.github/workflows/deploy.yml` 워크플로가 `main` 브랜치에 push될 때마다 자동으로 빌드하여 GitHub Pages에 배포합니다.

처음 배포하기 전에 GitHub 저장소 설정에서 한 번만 설정이 필요합니다:

1. 저장소의 **Settings > Pages** 로 이동
2. **Source**를 `GitHub Actions`로 설정

이후에는 `main` 브랜치에 push할 때마다 자동으로 최신 버전이 배포됩니다.

## 빌드

```bash
npm run build
```
