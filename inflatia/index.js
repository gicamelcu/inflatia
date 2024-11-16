
function toggleCheckbox() {
    const checkbox = document.getElementById('sactive');
    checkbox.checked = !checkbox.checked;
}
function handleResize() {
    const checkbox = document.getElementById('sactive');
    if (window.innerWidth > 995) {
        checkbox.checked = false; 
    }
}

window.addEventListener('resize', handleResize);