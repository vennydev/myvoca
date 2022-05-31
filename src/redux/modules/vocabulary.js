// action type
const LOAD = "voca/LOAD";

// initial state
const initialState = [
    {word: "apple", desc: "사과라는 뜻", example: "apple은 마시써"},
    {word: "ski", desc: "스키안타봄?", example: "ski is 사실 재미없써"},
    {word: "hello", desc: "인사할 떄 쓴다", example: "헬로우?"},
]

// action creator
export const loadVoca = (voca) => {
    return {type : LOAD, voca}
}

// reducer
export default function reducer(state = initialState, action = {}){
    switch (action.type) {
        case "voca/LOAD":
            return state;
    
        default:
            return state;
    }
}
