import { readFileSync,writeFileSync } from 'fs';

const basePath='/kelly/';

function modifyForLocal(basePath="./"){
    const regex = new RegExp('"'+basePath, "g");
    const htmlToBeUpdated = readFileSync( './dist/index.html', {encoding:'utf8', flag:'r'});

    const result = htmlToBeUpdated.replace(/type="module" crossorigin/g, 'defer="defer"')
                                .replace(regex,`"./`);
    
    writeFileSync('./dist/index.html',result);
}

modifyForLocal(basePath);