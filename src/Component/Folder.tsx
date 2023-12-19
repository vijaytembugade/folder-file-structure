import { useReducer, useState } from "react";
import { useStructure } from "../Context/StructureProvider";
import { addFile } from "../helpers/addFile";
import { Input } from "./Input";

export enum Actions {
  SET_FILE_NAME,
  SET_INPUT_OPEN,
  SET_INPUT_CLOSE,
}

const reducerFun = (state, action) => {
  switch (action.type) {
    case Actions.SET_FILE_NAME: {
      return {
        ...state,
        [action?.name]: { ...state[action?.name], value: action.value },
      };
    }
    case Actions.SET_INPUT_OPEN: {
      return {
        ...state,
        [action?.name]: {
          ...state[action?.name],
          showInput: true,
          iType: action.iType,
        },
      };
    }
    case Actions.SET_INPUT_CLOSE: {
      return {
        ...state,
        [action?.name]: {
          ...state[action?.name],
          showInput: false,
          iType: action.iType,
        },
      };
    }
    default:
      return state;
  }
};

export function Folder(props) {
  const [state, dispatch] = useReducer(reducerFun, {});

  const { name = null } = props;

  const { files, setFiles } = useStructure();

  const handleAddFile = () => {
    const data = addFile(files, name, {
      type: "file",
      name: state[name]?.value + ".txt",
    });
    setFiles([...data]);
    dispatch({
      type: Actions.SET_FILE_NAME,
      value: "",
      name: name,
    });
    dispatch({
      type: Actions.SET_INPUT_CLOSE,
      name: name,
    });
  };

  const handleAddFolder = () => {
    const data = addFile(files, name, {
      type: "folder",
      name: state[name]?.value ,
      structure: [],
    });
    setFiles([...data]);
    dispatch({
      type: Actions.SET_FILE_NAME,
      value: "",
      name: name,
    });
    dispatch({
      type: Actions.SET_INPUT_CLOSE,
      name: name,
    });
  };

  return (
    <>
      <img
        width={20}
        height={20}
        alt={name}
        src={
          "https://www.iconpacks.net/icons/2/free-folder-icon-1484-thumb.png"
        }
      />
      <p>{name}</p>
      <img
        title="Add File"
        style={{ cursor: "pointer" }}
        width={20}
        height={20}
        onClick={() =>
          dispatch({ type: Actions.SET_INPUT_OPEN, name: name, iType: "file" })
        }
        src="https://cdn4.iconfinder.com/data/icons/glyph-1-ui-part-4-of-4/100/pack07-05-512.png"
        alt="add file"
      ></img>
      {state[name]?.iType === "file" && (
        <Input
          name={name}
          adderFun={handleAddFile}
          dispatch={dispatch}
          state={state}
        />
      )}

      <img
        title="Add Folder"
        style={{ cursor: "pointer" }}
        width={20}
        height={20}
        onClick={() =>
          dispatch({
            type: Actions.SET_INPUT_OPEN,
            name: name,
            iType: "folder",
          })
        }
        src="https://cdn3.iconfinder.com/data/icons/flat-artistic-common-1/32/folder-add-512.png"
        alt="add folder"
      ></img>
      {state[name]?.iType === "folder" && (
        <Input
          name={name}
          adderFun={handleAddFolder}
          dispatch={dispatch}
          state={state}
        />
      )}
    </>
  );
}
