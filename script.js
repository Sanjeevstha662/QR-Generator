document.getElementById('generateBtn').addEventListener('click', function() {
    let qrCode = document.getElementById('qrCode');
    let downloadBtn = document.getElementById('downloadBtn');
    let inputText = document.getElementById('inputText').value;

    if (inputText) {
        // Update QR code image source using the qrserver API
        qrCode.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(inputText)}&size=200x200`;

        // Ensure the QR code and download button are visible
        qrCode.classList.remove('hidden');
        downloadBtn.classList.remove('hidden');

        // Update the download link
        downloadBtn.href = qrCode.src;

        // Display success toast message
        let toast = document.getElementById('toast');
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2000);
    } else {
        alert('Please enter some text!');
    }
});
