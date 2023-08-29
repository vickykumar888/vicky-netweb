const outputDiv = document.getElementById('outputDiv');
const inputImage = document.getElementById('inputImage');
function convertImageToBase64() {
    if (inputImage.files) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const base64Image = e.target.result;
            outputDiv.innerHTML = `Base64 Representation: <pre>${base64Image}</pre>`;
        }
        reader.readAsDataURL(inputImage.files[0]);
    } else {
        outputDiv.innerHTML = "Please select an image.";
    }
}

