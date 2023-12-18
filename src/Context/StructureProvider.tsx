import { createContext, useContext, useState } from "react";
import { files as data } from '../files'
const StructureContext = createContext(null);




const StructureProvider = ({ children }) => {
    const [files, setFiles] = useState<any>(data.structure);

    console.log(files)
    return <StructureContext.Provider value={{ files, setFiles }}>{children}</StructureContext.Provider>
}

const useStructure = () => {
    const context = useContext(StructureContext);

    if (!context) {
        throw new Error('useStructure must be used in Structure Provider')
    }

    return context;
}

export { StructureProvider, useStructure }