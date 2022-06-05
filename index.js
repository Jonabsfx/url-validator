import fs from 'fs'
import chalk from 'chalk'


function extraiLinks(text) 
{
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;
    while((temp = regex.exec(text)) !== null) {
      arrayResults.push({ [temp[1]]: temp[2] })
    }
    return arrayResults;
}

function catchError(error)
{
    throw new Error(chalk.red(error.code, 'Não há arquivo no caminho'));
}

async function getFile(pathFile)
{
    const enconding = 'utf-8';

    try {
        const text = await fs.promises.readFile(pathFile, enconding)
        console.log(extraiLinks(text));
      } catch(error) {
        catchError(error);
      }
}

export default getFile;