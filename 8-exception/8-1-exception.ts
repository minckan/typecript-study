// Java : Exception
// Javascript : Error

// const array = new Array(1000000000000000)

// Error(Exception) Handling -> try -> catch -> finally
function readFile(fileName: string): string {
    if (fileName === 'not exist!') {
        throw new Error(`file not exist! ${fileName}`)
    }

    return 'file contents'
}

function closeFile(fileName:string) {
    
}

const fileName = 'file'
const fileName2 = 'not exist!'
try {
    console.log(readFile(fileName));
    console.log(readFile(fileName2));
} catch (error) {
    console.log('catched!');
} finally {
    closeFile(fileName)
    closeFile(fileName2)
    console.log('finally');
    
}

