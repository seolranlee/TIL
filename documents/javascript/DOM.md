# DOM

## 일반적으로 global이 의미하는 두가지

1. window
   - 웹페이지를 **어떤 공간**에 그릴 지에 대한 정보. 전역 객체.
   - 띄워져 있는 창 자체. 웹의 설정 정보, 환경 정보, 최상의 객체(viewport)를 가져온다.
   - 뷰포트라고 이해해도 무방.
2. document(window.document)
   - **뭘 그릴지**에 대한 정보. 웹 브라우저에서 HTMLDocument 객체로 사용된다.
   - window 전역 객체의 자식 개체.
   - window와 document를 통합하지 않은 이유: dom은 언제든지 바뀔 수 있기 때문.

## DOM, CSSOM이 트리구조가 된 이유

1. 탐색 속도가 선형적인 구조보다 평균적으로 높아짐. (선형적인 구조일 경우 최악의 상황에서 모든 요소들을 조회해야 하므로.)
2. 논문/문서를 추상화 시킨게 트리 자료 구조. (현실에서 쓰고 있는 법칙을 컴퓨터로 풀어낸 것이 자료구조.)

## document 요소에 접근하기

```javascript
document.getElementById();
document.getElementsByClassName();
document.getElementsByName();
document.getElementsByTagName();
document.getElementsByTagNameNS();
```

```javascript
document.querySelector();
document.querySelectorAll();
```

- querySelector로 요소에 접근하는 것이 성능상 더 좋다.
  - query: 요청하다.
  - DOM에서 해당하는 엘리먼트를 규약에 맞게 찾아준다. 정규적인 엘리먼트가 아니면 패스한다. (ex. `<blar></blar>`와 같은 태그를 만나면 탐색하지 않는다.)
    - 여기서 querySelector가 나오게 된 의의를 유추할 수 있다. semnatic웹을 준수하라. 좀 더 엄격히 웹을 만들어라. 라는 의미로.
