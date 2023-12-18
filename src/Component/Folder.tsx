import { useStructure } from "../Context/StructureProvider";
import { addFile } from "../helpers/addFile";

export function Folder(props) {
  const { name = null } = props;

  const { files, setFiles } = useStructure();

  const handleAddFile = () => {
    const data = addFile(files, name, { type: 'file', name: (Math.random() * 1000000).toFixed(0) + '.txt' })
    setFiles([...data])
  }

  const handleAddFolder = () => {
    const data = addFile(files, name, { type: 'folder', name: (Math.random() * 1000000).toFixed(0) + '-folder', structure: [] })
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
      <img title="Add File" style={{ cursor: "pointer" }} width={20} height={20} onClick={handleAddFile} src="https://cdn4.iconfinder.com/data/icons/glyph-1-ui-part-4-of-4/100/pack07-05-512.png" alt="add file"></img>
      <img title="Add Folder" style={{ cursor: "pointer" }} width={20} height={20} onClick={handleAddFolder} src="https://cdn3.iconfinder.com/data/icons/flat-artistic-common-1/32/folder-add-512.png" alt="add file"></img>

    </>
  );
}
