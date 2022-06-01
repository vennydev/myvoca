// action type
const LOAD = "voca/LOAD";
const CREATE = "voca/CREATE";
const UPDATE = "voca/UPDATE";

// initial state
const initialState = {
  list: [
    {
      id: 0,
      word: "apple",
      desc: "사과라는 뜻",
      example: "apple은 맛있지",
      completed: false,
    },
    {
      id: 1,
      word: "ski",
      desc: "스키안타봄?",
      example: "ski is 사실은 재미없어",
      completed: false,
    },
    {
      id: 2,
      word: "hello",
      desc: "인사할 떄 쓴다",
      example: "헬로우?",
      completed: false,
    },
  ],
};

// action creator
export const loadVoca = (voca) => {
  return { type: LOAD, voca };
};

export const createVoca = (voca) => {
  return { type: CREATE, voca };
};

export const updateVoca = (idx) => {
  return { type: UPDATE, idx };
};

// reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voca/LOAD":
      return state;
    case "voca/CREATE": {
      const new_voca_list = [...state.list, action.voca];
      return { list: new_voca_list };
    }
    case "voca/UPDATE": {
      const new_voca_list = state.list.map((ele, idx) => {
        const bool = state.list[idx].completed;
        if (action.idx === idx) {
          return { ...ele, completed: !bool };
        } else {
          return ele;
        }
      });
      return { list: new_voca_list };
    }
    default:
      return state;
  }
}
