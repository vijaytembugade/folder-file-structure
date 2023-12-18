export function File(props) {
  const { name = null } = props;
  return (
    <>
      <img
        width={20}
        height={20}
        alt={name}
        src={
          'https://static.vecteezy.com/system/resources/previews/000/581/925/original/file-icon-vector-illustration.jpg'
        }
      />
      <p>{name}</p>
    </>
  );
}
