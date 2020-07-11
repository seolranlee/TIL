# CSS BOX MODEL

웹 개발에서 CSS 박스 모델은 HTML 요소가 브라우저 엔진에서 모델링하고 그 HTML 요소의 치수 CSS 속성에서 방법을 유도하는 방법을 말한다. 그것은 HTML 웹 페이지의 구성에 대한 기본적인 개념이다.

모든 HTML 요소는 Box 형태의 영역을 가지고 있다. 이 Box는 콘텐트(Content), 패딩(Padding), 테두리(Border), 마진(Margin)로 구성된다. 브라우저는 박스 모델의 크기(dimension)와 프로퍼티(색, 배경, 모양 등), 위치를 근거로 하여 렌더링을 실행한다.<br><br><br>
![박스모델](https://poiemaweb.com/img/box-model.png)

## 박스모델의 구성요소

- **Content** 요소의 텍스트나 이미지 등의 실제 내용이 위치하는 영역이다. width, height 프로퍼티를 갖는다.
- **Padding** 테두리(Border) 안쪽에 위치하는 요소의 내부 여백 영역이다. padding 프로퍼티 값은 패딩 영역의 두께를 의미하며 기본색은 투명(transparent)이다. 요소에 적용된 배경의 컬러, 이미지는 패딩 영역까지 적용된다.
- **Border** 테두리 영역으로 border 프로퍼티 값은 테두리의 두께를 의미한다.
- **Margin** 테두리(Border) 바깥에 위치하는 요소의 외부 여백 영역이다. margin 프로퍼티 값은 마진 영역의 두께를 의미한다. 기본적으로 투명(transparent)하며 배경색을 지정할 수 없다.

## box-sizing 프로퍼티

`box-sizing` 프로퍼티는 width, height 프로퍼티의 대상 영역을 변경할 수 있다.
box-sizing 프로퍼티의 기본값은 content-box이다. 이는 width, height 프로퍼티의 대상 영역이 content 영역을 의미한다. box-sizing 프로퍼티의 값을 border-box로 지정하면 마진을 제외한 박스 모델 전체를 width, height 프로퍼티의 대상 영역으로 지정할 수 있어서 CSS Layout을 직관적으로 사용할 수 있게 한다.<br><br><br>

![box-sizing-property](https://t1.daumcdn.net/cfile/tistory/22670E3A58AA946F10)

## Reference

- [CSS3 Box Model(poiemaweb)](https://poiemaweb.com/css3-box-model)
