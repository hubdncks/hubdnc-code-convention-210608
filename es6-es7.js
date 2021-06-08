/* ==============================================================
 * ES6
 * ============================================================*/
// 화살표 함수 사용 가능
const arrowFunction = () => {
  console.log(new Date());
};

// var , let , const 선언 방식 예제
const VLCExample = () => {
  var a = 1;
  var a = 2;

  console.log(a);

  let b = 1;
  //let b = 2;
  b = 3;

  console.log(b);

  const c = 1;
  //const c = 2;
  //c = 3;

  console.log(c);
};

// var , let , const 스코프 예제
const blockScopeExample = () => {
  if (1) {
    var a = 1;
    let b = 2;
    const c = 3;
  }

  console.log(a, b, c);
};

// 템플릿 리터럴 예제
const templateIteralsExample = () => {
  const now = new Date();

  // Bad
  console.log(
    "지금은 " + now.getHours() + "시 " + now.getMinutes() + "분입니다."
  );

  // Good
  console.log(`지금은 ${now.getHours()}시 ${now.getMinutes()}분입니다.`);
};

// map 메소드 예제
const mapExample = () => {
  const array = [1, 2, 3, 4, 5];

  const array2 = array.map((item, index) => {
    console.log(index + " : " + item);
    return item * index;
  });

  console.log(array2);
};

// concat 메소드 예제
const concatExample = () => {
  const array = [1, 2, 3, 4, 5];

  const array2 = array.concat(6);

  console.log(array);
  console.log(array2);
};

// filter 메소드 예제
const filterExample = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(array.filter((item) => item % 2 === 0));

  console.log(array);
};

// redude 메소드 예제
const reduceExample = () => {
  const array = [1, 2, 3, 4, 5];

  console.log(
    array.reduce((acc, current_value, index) => {
      console.log(
        `누산값 : ${acc} , 현재 값 : ${current_value} , 현재 값 위치 : ${index}`
      );
      return acc + current_value;
    }, 0)
  );
};

// 비구조화 할당 예제
const DestructuringAssignmentExample = () => {
  const object = {
    a: 1,
    b: 2,
    c: 3,
  };

  // Bad
  console.log(object.a, object.b, object.c);

  // Good
  const { a, b, c } = object;

  console.log(a, b, c);
};

// 전개 연산자 예제 : 객체
const spreadOperatorExample = () => {
  let config = {
    name: "name",
    age: 20,
    url: "https://www.naver.com",
  };

  console.log(config);

  config = {
    ...config,
    age: 21,
  };

  console.log(config);
};

// 전개 연산자 예제 : 배열
const spreadOperatorExampleByArray = () => {
  let array1 = [1, 2, 3, 4, 5];

  let array2 = array1;
  let array3 = [...array1];

  array1.push(6);

  console.log(array2);
  console.log(array3);
};

// shorthand property names 예제
const shorthandPropertyNamesExample = () => {
  const name = "hubdnc";
  const age = 20;
  const profile = {
    phone: "010-1234-1234",
    address: "서울시 강남구 신사동 559-20",
    language: ["react", "node.js", "typescript"],
  };

  // Bad
  console.log({
    name: name,
    age: age,
    profile: profile,
  });

  // Good
  console.log({
    name,
    age,
    profile,
  });
};

/* ==============================================================
 * ES7
 * ============================================================*/
// 거듭 제곱 표현의 간편화 예제
const powerExample = () => {
  let a = 2;

  // Bad
  let b = 1;
  for (let x = 1; x <= 10; x++) {
    b *= a;
  }
  console.log(b);

  // Good
  a **= 10;
  console.log(a);

  // Good
  const c = 2 ** 10;
  console.log(c);
};
