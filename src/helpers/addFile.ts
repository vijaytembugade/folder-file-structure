
export const addFile = (filesData, name, options) => {
    for(let i = 0; i <filesData.length; i++ ){
        if(filesData[i].type === 'file'){
            continue;
        }
        if(filesData[i].type === 'folder'){
            if(filesData[i].name === name){
                if(options.type === 'file'){
                    filesData[i].structure.push({
                        type: options?.type,
                        name: options?.name
                    })
                }
                
                if(options.type === 'folder'){
                    filesData[i].structure.push({
                        type: options?.type,
                        name: options?.name,
                        structure: options?.structure,
                    })
                }
                
            }else {
                addFile(filesData[i].structure, name, options)
            }
        }
    }
    return filesData;
}

