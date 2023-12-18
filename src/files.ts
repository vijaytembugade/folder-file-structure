
export const files = {
    structure: [
      {
        type: 'folder',
        name: 'folder1',
        structure: [
          {
            type: 'file',
            name: 'file1.txt',
          },
          {
            type: 'folder',
            name: 'folder2',
            structure: [
              {
                type: 'file',
                name: 'file2.txt',
              },
              {
                type: 'file',
                name: 'file6.txt',
              },
              {
                type: 'folder',
                name: 'folder3',
                structure: [
                  {
                    type: 'file',
                    name: 'file5.txt',
                  },
                ],
              },
            ],
          },
          {
            type: 'file',
            name: 'file3.txt',
          },
        ],
      },
      {
        type: 'file',
        name: 'file4.txt',
      },
    ],
  };