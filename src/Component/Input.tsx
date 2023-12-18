import { Actions } from "./Folder";

export function Input(props) {
  const { name, dispatch, adderFun, state } = props;

  return (
    <>
      {state && state[name]?.showInput && (
        <form onSubmit={adderFun} style={{display:"flex", alignItems:'center', marginTop: '12px'}}>
          <input
            value={state && state[name] && state[name].value}
            onChange={(e) =>
              dispatch({
                type: Actions.SET_FILE_NAME,
                value: e.target.value,
                name: name,
              })
            }
          />

          <button type="submit">
            <img
              src="https://cdn1.iconfinder.com/data/icons/interface-elements/32/accept-circle-512.png"
              width={16}
              height={16}
            />
          </button>

          <button
            onClick={() =>
              dispatch({ type: Actions.SET_INPUT_CLOSE, name: name })
            }
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color-round/3/44-256.png"
              width={16}
              height={16}
            />
          </button>
        </form>
      )}
    </>
  );
}
