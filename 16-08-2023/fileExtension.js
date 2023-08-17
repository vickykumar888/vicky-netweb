function fileExtension(fileName) {
    const file = fileName.split('.').pop();
    return file;
}
const fileName = 'abc.png';
const extension = fileExtension(fileName);
console.log(extension);