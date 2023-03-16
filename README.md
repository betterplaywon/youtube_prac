

# Youtube

### Youtube의 open API를 활용한 Youtube 서비스 개발

<br/>

- 프로젝트 참여 인원:

`Front-End: 1명`

<br/>

- 사용 기술 스택:

`React, React-Query, Next.js, TypeScript, Tailwind, Axios, GitHub`

<br/>

- 프로젝트 진행 기간:

`23.03.10 - 23.03.15 (6일)`

<br/>

## 배포 주소

https://youtube-prac-i95aq7gbs-betterplaywon.vercel.app/

<br/>

## 💻 설치 방법

    yarn install
    yarn dev

<br/>

## 📂 파일 구조
```bash
📦public
 ┣ 📂videosData
 ┃ ┣ 📜channel.json
 ┃ ┣ 📜popular.json
 ┃ ┣ 📜related.json
 ┃ ┗ 📜search.json
 ┣ 📜favicon.ico
 ┣ 📜next.svg
 ┣ 📜thirteen.svg
 ┗ 📜vercel.svg
📦src
 ┣ 📂api
 ┃ ┣ 📜mockYoutubeApiClient.ts
 ┃ ┣ 📜youtubeApi.ts
 ┃ ┗ 📜youtubeApiClient.ts
 ┣ 📂components
 ┃ ┣ 📜ChannelInfo.tsx
 ┃ ┣ 📜RelatedVideos.tsx
 ┃ ┣ 📜SearchHeader.tsx
 ┃ ┗ 📜VideoCard.tsx
 ┣ 📂context
 ┃ ┗ 📜YoutubeAPIContext.tsx
 ┣ 📂pages
 ┃ ┣ 📂error
 ┃ ┃ ┗ 📜NotFound.tsx
 ┃ ┣ 📂video
 ┃ ┃ ┣ 📂watch
 ┃ ┃ ┃ ┗ 📜[videoId].tsx
 ┃ ┃ ┣ 📜[keyword].tsx
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┗ 📜index.tsx
 ┗ 📂styles
 ┃ ┗ 📜globals.css
📦util
 ┗ 📜date.tsx
📦.eslint.json
📦.gitignore
📦.prettierrc
📦next.config.js
📦package.json
📦postcss.config.js
📦README.md
📦tailwind.config.js
📦tsconfig.json
 ```

## 기능

### 1. 기본페이지

- 랜딩 페이지는 실시간 유명 영상이 나오도록, 검색어 입력시 키워드와 연관된 영상이 나오도록 구현

- 영상 클릭 시 고유 id를 통해 해당 영상 시청이 가능한 페이지로 라우팅
        
        <br/>
        
### 2. watch 페이지

- iframe을 사용한 선택한 영상 시청이 가능한 페이지. 해당 영상 id를 사용해 관련 영상이 우측 화면에 보여지도록 구현
