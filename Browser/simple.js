document.getElementById('changeColorBtn').addEventListener('click', () => {
    const title = document.getElementById('title');
    title.style.color = title.style.color === 'blue' ? '#333' : 'blue';
});
