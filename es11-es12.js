/* ==============================================================
 * ES11
 * ============================================================*/
// optional chaining 예제
const optionalChainingExample = () => {
  const data1 = {
    name: "data-1",
    profile: {
      detail: {
        age: 21,
      },
    },
  };

  const data2 = {
    name: "data-2",
  };

  // Bad
  const returnAge1 = (data) => {
    if (data.profile) {
      if (data.profile.detail) {
        if (data.profile.detail.age) {
          return data.profile.detail.age;
        } else {
          return undefined;
        }
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  };

  console.log(returnAge1(data1));
  console.log(returnAge1(data2));

  // Bad
  const returnAge2 = (data) => {
    return data.profile && data.profile.detail && data.profile.detail.age
      ? data.profile.detail.age
      : undefined;
  };

  console.log(returnAge2(data1));
  console.log(returnAge2(data2));

  // Good
  const returnAge3 = (data) => {
    return data.profile?.detail.age;
  };

  console.log(returnAge3(data1));
  console.log(returnAge3(data2));
};

// 널 병합 연산자 예제
const nullishCoalescingOperatorExample = () => {
  const data1 = 50;
  const data2 = undefined;
  const data3 = null;
  const data4 = 0;
  const data5 = "";

  console.log(`${data1} : ${data1 ?? "default value"}`);
  console.log(`${data2} : ${data2 ?? "default value"}`);
  console.log(`${data3} : ${data3 ?? "default value"}`);
  console.log(`${data4} : ${data4 ?? "default value"}`);
  console.log(`${data5} : ${data5 ?? "default value"}`);

  console.log("");
  console.log("=======================================");
  console.log("OR Operator");
  console.log("=======================================");
  console.log("");

  console.log(`${data1} : ${data1 || "default value"}`);
  console.log(`${data2} : ${data2 || "default value"}`);
  console.log(`${data3} : ${data3 || "default value"}`);
  console.log(`${data4} : ${data4 || "default value"}`);
  console.log(`${data5} : ${data5 || "default value"}`);
};

/* ==============================================================
 * ES12
 * ============================================================*/
// replace All 메소드 예제
const replaceAllExample = () => {
  // Before
  console.log("hubdnc.code.convention.2021-06-08".replace(/\./g, " "));

  // After
  console.log("hubdnc.code.convention.2021-06-08".replaceAll(".", " "));
};

// 숫자 구분 기호 예제
const NumbericSeparatorExample = () => {
  // Before
  console.log(86400000);

  // After
  console.log(86_400_000);
};

// 논리 할당 연산자
const LogicalAssingmentOperatorExample = () => {
  let object1 = {
    prop1: 30,
    prop2: undefined,
    prop3: null,
    prop4: 0,
    prop5: "",
  };

  const func1 = () => {
    for (const key of Object.keys(object1)) {
      object1[key] &&= "default value";
    }

    console.log(object1);
  };

  func1();

  let object2 = {
    prop1: 30,
    prop2: undefined,
    prop3: null,
    prop4: 0,
    prop5: "",
  };

  const func2 = () => {
    for (const key of Object.keys(object2)) {
      object2[key] ||= "default value";
    }

    console.log(object2);
  };

  func2();

  let object3 = {
    prop1: 30,
    prop2: undefined,
    prop3: null,
    prop4: 0,
    prop5: "",
  };

  const func3 = () => {
    for (const key of Object.keys(object3)) {
      object3[key] ??= "default value";
    }

    console.log(object3);
  };

  func3();
};

LogicalAssingmentOperatorExample();
