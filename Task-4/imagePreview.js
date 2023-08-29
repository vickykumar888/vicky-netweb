
function imagePreview(event) {
    const inputImage = event.target;
    const outputImage = document.getElementById('outputImage');    
    if (inputImage.files ) {
        const reader = new FileReader();    
        reader.onload = function(e) {
            outputImage.src = e.target.result;
        };    
        reader.readAsDataURL(inputImage.files[0]);
    }
}