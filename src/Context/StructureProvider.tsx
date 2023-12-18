import { createContext, useContext, useState } from "react";
import { files as data } from '../files'
const StructureContext = createContext(null);




const StructureProvider = ({ children }) => {
    const [files, setFiles] = useState<any>(data.structure);

    const addFile = (filesData, name, options) => {
        
        for(let i = 0; i <filesData.length; i++ ){
            if(filesData[i].type === 'folder'){
                if(filesData[i].name === name){
                    filesData[i].structure.push({
                        type: options?.type,
                        name: options?.name
                    })
                }else {
                    return addFile(filesData[i].structure, name, options)
                }
            }
        }
        console.log(filesData, "filedata");
        setFiles(filesData)
    }


    return <StructureContext.Provider value={{ files, setFiles, addFile }}>{children}</StructureContext.Provider>
}

const useStructure = () => {
    const context = useContext(StructureContext);

    if (!context) {
        throw new Error('useStructure must be used in Structure Provider')
    }

    return context;
}

export { StructureProvider, useStructure }