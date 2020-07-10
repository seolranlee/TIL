# 자바스크립트의 자료형(데이터 타입)

변수는 값의 위치(주소)를 기억하는 저장소이다. 값의 위치란 값이 위치하고 있는 메모리 상의 주소(address)를 의미한다. 즉, 변수란 값이 위치하고 있는 메모리 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 명명한 식별자(identifier)이다.

메모리에 값을 저장하기 위해서는 먼저 메모리 공간을 확보해야 할 메모리의 크기(byte)를 알아야한다. 이는 값의 종류에 따라 확보해야 할 메모리의 크기가 다르기 때문이다. 이때 값의 종류, 즉 데이터의 종류를 데이터 타입(Data Type)이라 한다.

![변수 선언과 할당의 구조](https://poiemaweb.com/img/memory_address.png)

<center>변수 선언과 할당의 구조</center>

자바스크립트는 동적 타입(Dynamic/Weak Type) 언어이다. 변수의 타입 지정(Type annotation)없이 값이 할당되는 과정에서 자동으로 변수의 타입이 결정(타입 추론, Type Inference)된다. 즉, 변수는 고정된 타입이 없다. 따라서 같은 변수에 여러 타입의 값을 자유롭게 할당할 수 있다.

## 자바스크립트 자료형의 종류(ECMAScript 표준(ECMAScript 2015 (6th Edition), 이하 ES6) 기준)

- **원시 타입 (primitive data type)**<br>
  원시 타입의 값은 변경 불가능한 값(immutable value)이며 pass-by-value(값에 의한 전달) 이다.

  - boolean
  - null
  - undefined
  - number
  - string
  - symbol (ES6에서 추가)

- **객체 타입 (object/reference type)**<br>
  자바스크립트는 객체(object) 기반의 스크립트 언어로서 자바스크립트를 이루고 있는 거의 “모든 것”이 객체이다. 원시 타입(Primitives)을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체이다. 또한 객체는 pass-by-reference(참조에 의한 전달) 방식으로 전달된다.

  - object

> Array는 Object형이다. 우리가 Array를 선언하고 사용할 때는 `[1,2,3,4]` 와 같은 형태로 쓰지만, 이를 컴퓨터에서 처리하는 과정에서 실질적으로는 `{"0": 1, "1":2, "2":3, "3": 4}`와 같은 유사 배열 객체로 처리한다. 이런 과정에서 컴퓨터는 배열의 경우에도 Array라는 타입을 새로 재정의해줄 필요 없이 Object의 범위 내에서 처리할 수 있게 된다.

## Reference

- [데이터 타입과 변수(poiemaweb)](https://poiemaweb.com/js-data-type-variable)
