import { legacy_createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

/**
 * reducer나 modifier는 처음부터 data를 바꿔준다.
 * return하는 값이 application에 있는 data이다.
 *
 * 1. data의 store를 만들고(create하고)
 * 2. data의 countModifier에 message를 store에 젼송하면 된다.
 * 3. meeage를 send하는 방법은 dispatch를 사용하면 된다.
 * 4. message는 action에 넣으면 되고, 우리는 action을 체크해 보면 된다.
 */

const ADD = "ADD";
const MINUS = "MINUS";

/**
 * action : redux에서 function을 부를때 쓰는 두번째 파라미터
 * - countModifier과 소통 하는 방법
 */
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

/**
 * legacy_createStore에는
 * dispatch, subscribe, getState등이 4개의 함수가 있다.
 * getState : stoore의 현재 값을 알게 해준다.
 * subscribe : store안에 있는 변화들을 알 수 있게 해준다.
 */
const countStore = legacy_createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

/**
 * countStore.dispatch()을 입력해서 action을 보낼 수 있다.
 * - 메시지는 object로 넣어줘야 된다.
 * - 무조건 type이여야 된다.
 */
const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
