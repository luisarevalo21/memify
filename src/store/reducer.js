const initialState = {
  text: "",
  memedText: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGED":
      let text = "";

      //   text += action.e.target.value;
      return {
        ...state,
        text: action.event
      };

    case "CLICKED":
      let memedText = "";
      const copyText = state.text;
      for (let element = 0; element < copyText.length; element++) {
        if (element % 2 === 0) {
          memedText += copyText[element].toLowerCase();
        } else {
          memedText += copyText[element].toUpperCase();
        }
      }

      return {
        ...state,
        memedText: memedText
      };
  }
  return state;
};

export default reducer;
