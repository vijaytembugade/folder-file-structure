
import { File } from './File';
import { Folder } from './Folder';

const styles = { display: 'flex', alignItems: 'center', gap: 3 };

export function Structure({ files }) {
  return (
    <>
      {files?.map((item) => {
        return (
          <div key={item.name}>
            {item.type === 'folder' ? (
              <>
                <div style={styles}>
                  <Folder name={item.name} />
                </div>
                <div style={{paddingLeft: '32px',borderLeft: '1px solid black'}}>
                  <Structure files={item.structure} />
                </div>
              </>
            ) : (
              <div style={styles}>
                <File name={item?.name} />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
