# How to use Git!

It is easy to use! Don't be afraid! 

1. master Branch(default) 초기 환경을 구축해두었습니다. (express, react) 이를 `clone or download` 합니다.
  실행방법
  1. react-backend 폴더에 들어가서
    mac
    ```
    PORT=3001 npm start
    ```
    window
    ```
    set PORT=3001 && node bin/www
    ```
  2. front 폴더에 들어가서
    ```
    npm or yarn start
    ```

2. 그럼 자신만의 폴더가 local에 생겼네요! (축하드립니다)

3. 이제 본격적으로 작업을 시작할 수 있어요! 현재 master에서 위치하겠죠? 그곳에서 자신만의 branch를 새롭게 팝니다
  (branch 이름은 기존에 역할 나눈 page로 가져갑니다.)
  ```
  git checkout -b {branch name}
  ```
  -> "branch를 새로 만들어서 이동한다" 라는 의미입니다.

4. `pull request`를 날려줍니다.
  pull request는 `자신이 작업하고 있는 branch` 에서 `master`로 날려주세요! (경로 주의! 화살표 방향 주의!)
  
5. 열심히 작업해서 한 페이지를 끝냈다구요? 그렇다면 이제 다음 branch로 이동해서 작업해볼까요? 
  여기서 집중! 하셔야 합니다.
  1. 먼저 master branch로 다시 돌아갑니다.
  ```
  git checkout master
  ```
  2. 이곳에서 branch를 새롭게 만듭니다. 
  앗! 명령어가 뭐였죠?
  바로!
  ```
  git checkout -b {branch name}
  ```
  3. 이 branch에서 master에 있는 내용들을 가져옵니다.
    -> 다른 사람들이 master에서 작업한 것들은 내것과 합치는 과정이죠!
  ```
  git pull origin master
  ```
  master branch에 있는 내용들을 가져올거야! 라는 의미있니다.
  4. 그럼 다시 이곳에서 작업을 시작합니다.
  
그리고 위 과정을 계속 반복하시면 됩니다!

### 마지막으로! 몇 가지 주의해야할 것들
개발하시다 보면 패키지(npm, yarn)을 통해 다양한 것들을 다운 받을거에요
ex) styled-components, google-login

이때!! 
첫째 `--save`를 붙이는 것을 잊지 말아주세요
ex)
```
npm install --save react-styled-components
```
```
npm install react-router-doms --save
```
이런 식으로요!

두번째 다운받는 위치는 front안에서 다운 받는 것인지 확인하고 해주세요! front 밖에서 하면 nodemodule이 생겨서 매우 무거워지고 그러더라구요!

더 추가할 내용이 있으면 공지할게요! 
