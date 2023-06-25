window.onload = function () {
    const imgPreviewer = new ImgPreviewer('#app', {
        scrollbar: true
    });
}
function stopSpinner(image) {
    // Dừng hoặc loại bỏ spinner
    const spinner = image.parentElement.querySelector('.spinner');
    spinner.remove();
}