import { useStructure } from "../Context/StructureProvider";

export function Folder(props) {
  const { name = null } = props;

  const {addFile, files} = useStructure();
  const handleAddFile = ()=>{
    addFile(files, name, {type: 'file', name: 'file7.txt'})
  }
  return (
    <>
      <img
        width={20}
        height={20}
        alt={name}
        src={
          'https://www.iconpacks.net/icons/2/free-folder-icon-1484-thumb.png'
        }
      />
      <p>{name}</p>
      <button onClick={handleAddFile}>add file</button>
      <button>add folder</button>
    </>
  );
}
