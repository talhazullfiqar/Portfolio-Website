function downloadResume() {
    document.getElementById('downloadButton').addEventListener('click', function() {
        // Show the loading icon and hide the SVG
        document.getElementById('downloadIcon').style.display = 'none';
        document.getElementById('loadingIcon').style.display = 'inline-block';
        
        // Set a 2-second delay before starting the download
        setTimeout(function() {
            var pdfUrl = 'assets/resume/resume.pdf';
            
            // Create a temporary link element
            var link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'Muhammad-Talha-Resume.pdf';
            
            // Append the link to the body
            document.body.appendChild(link);
            
            // Programmatically click the link to trigger the download
            link.click();
            
            // Remove the link from the document
            document.body.removeChild(link);
            
            // Hide the loading icon and show the SVG
            document.getElementById('loadingIcon').style.display = 'none';
            document.getElementById('downloadIcon').style.display = 'inline-block';
        }, 2000); // 2000 milliseconds = 2 seconds
    });
    

}

export default downloadResume;