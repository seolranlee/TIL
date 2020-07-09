# HOF(고차함수: Higher order function)

고차 함수(高次函數, higher-order function)는 수학과 컴퓨터 과학에서 적어도 다음 중 하나를 수행하는 함수이다.

- 하나 이상의 함수를 인수로 취한다. (예: 절차적 매개변수)
- 함수를 결과로 반환한다.

고차 함수는 외부 상태 변경이나 가변(mutable) 데이터를 피하고 불변성(Immutability)을 지향하는 함수형 프로그래밍에 기반을 두고 있다. 함수형 프로그래밍은 순수 함수(Pure function)와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 **변수의 사용을 억제**하여 **상태 변경을 피하려는** 프로그래밍 패러다임이다.

조건문이나 반복문은 로직의 흐름을 이해하기 어렵게 하여 가독성을 해치고, 변수의 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있기 때문이다.

## 고차함수의 종류

- sort
- forEach
- filter
- map
- every/some
  - 모두/하나라도 조건에 맞으면 참을 반환
- find/findIndex
- flat
  - 배열을 normalize하게
- reduce

  ```javascript
  const array = [1, 2, 3, 4];

  array
    .filter(i => {
      return i > 2;
    })
    .map(i => {
      return i * 2;
    }); // [6, 8]

  array.reduce((acc, iter) => {
    if (iter > 2) acc.push(iter * 2);
    return acc;
  }, []); // [6, 8]
  ```

  - reduce함수를 쓰면 filter함수와 map함수를 거쳐야 할 수 있는 일을 한번에 해준다.

## Reference

- [배열 고차 함수(poiemaweb)](https://poiemaweb.com/js-array-higher-order-function)
