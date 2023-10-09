document.addEventListener("DOMContentLoaded", function(){
    const downloadButton = document.getElementById('download-cv-button-1')
    downloadButton.addEventListener("click", function(){
        downloadButton.href ="/images/my-cv.pdf"
        downloadButton.download = "my-cv.pdf"
    })
})