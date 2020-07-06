# GIT

## 기본 문법

```shell

git init
# 리포지토리 초기화.

git remote add upstream repositories url
# 주소의 저장소를 원격 저장소로 설정

git status
# 리포지토리의 상태 표시.

git add 파일명
# 스테이지 영역(커밋 전 임시 영역)에 파일 추가. add와 commit 사이의 공간.

git reset
# 스테이지 영역에 add된 파일 취소.

git commit -m "commit message"
# 스테이지 영역에 있는 add된 파일들을 해당 커밋 메시지로 커밋.

git push upstream master
# 커밋된 파일들을 push

```
