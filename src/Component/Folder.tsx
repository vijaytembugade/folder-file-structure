export function Folder(props) {
  const { name = null } = props;
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
      <button>add file</button>
      <button>add folder</button>
    </>
  );
}
