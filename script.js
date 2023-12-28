let username=document.getElementById('username')
let cname=document.getElementById('cname')
let locationname=document.getElementById('locationname')
let imgfile=document.getElementById('imageInput')
let displayimg=document.getElementById('disimg')


imgfile.addEventListener('change',()=>{
    displayimg.src=URL.createObjectURL(imgfile.files[0])
})


var selectedImageDataUrl; // Variable to store the selected image data URL

    function displaySelectedImage() {
        // Get the input element
        var inputElement = document.getElementById("imageInput");

        // Check if a file is selected
        if (inputElement.files.length > 0) {
            // Get the selected file
            var selectedFile = inputElement.files[0];

            // Create a FileReader to read the selected file
            var reader = new FileReader();

            // Set up the FileReader onload event
            reader.onload = function (e) {
                // Get the image element
                var imageElement = document.getElementById("displayedImage");

                // Set the image source
                imageElement.src = e.target.result;

                // Store the selected image data URL
                selectedImageDataUrl = e.target.result;

                // Display the image
                imageElement.style.display = "block";
            };

            // Read the selected file as a data URL
            reader.readAsDataURL(selectedFile);
        } else {
            alert("Please select an image file.");
        }
        document.getElementById('lname').innerHTML=locationname.value
        document.getElementById('clname').innerHTML=cname.value
        document.getElementById('name').innerHTML=username.value
    }





    