// simple.js
const urlInput = document.getElementById('urlInput');
const goBtn = document.getElementById('goBtn');
const status = document.getElementById('status');
const iframe = document.getElementById('browserFrame');

goBtn.addEventListener('click', () => {
    let url = urlInput.value.trim();
    if (!url) {
        alert('Please enter a URL.');
        return;
    }

    // Add https:// if missing
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    status.textContent = `Loading: ${url}`;
    iframe.src = url;

    // Listen for iframe load event to update status
    iframe.onload = () => {
        status.textContent = `Loaded: ${url}`;
    };

    iframe.onerror = () => {
        status.textContent = `Failed to load: ${url}`;
    };
});
