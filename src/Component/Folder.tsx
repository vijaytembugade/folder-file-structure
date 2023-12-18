import { useStructure } from "../Context/StructureProvider";
import { addFile } from "../helpers/addFile";

export function Folder(props) {
  const { name = null } = props;

  const { files, setFiles} = useStructure();

  const handleAddFile = ()=>{
    const data = addFile(files, name, {type: 'file', name: (Math.random()*1000000).toFixed(0) + '.txt'})
    setFiles([...data])
  }

  const handleAddFolder=()=>{
    const data = addFile(files, name, {type: 'folder', name: (Math.random()*1000000).toFixed(0) + '-folder' , structure: [] })
    setFiles([...data])
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
      <button onClick={handleAddFolder}>add folder</button>
    </>
  );
}
