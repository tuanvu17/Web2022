var btnSuccess = document.querySelector('.control .success');
var btnWarning = document.querySelector('.control .warning');
var btnError = document.querySelector('.control .error');


btnSuccess.addEventListener('click', function () {
    createToast('success', 4000);
})
btnWarning.addEventListener('click', function () {
    createToast('warning');
})

btnError.addEventListener('click', function () {
    createToast('error');
})
function createToast(status, timeout) {
    let templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
    <span class="message">This is a messgae Success</span>
    <span class="countdown"></span>`;
    switch (status) {
        case 'success':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a messgae Success</span>
            <span class="countdown"></span>`;
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a messgae Success</span>
            <span class="countdown"></span>`;
            break; 
        case 'error':
            templateInner = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a messgae Success</span>
            <span class="countdown"></span>`;
            break;
        default:
            break;
    }
    // <div class="toast warning">
    // <i class="fa-solid fa-triangle-exclamation"></i>
    // <span class="message">This is a messgae Success</span>
    // <span class="countdown"></span>
    //         </div>

    //         <div class="toast error">
                // <i class="fa-solid fa-circle-exclamation"></i>

                // <span class="message">This is a messgae Success</span>
                // <span class="countdown"></span>
    //         </div>

    //         <div class="toast success">
                // <i class="fa-solid fa-circle-check"></i>
                // <span class="message">This is a messgae Success</span>
                // <span class="countdown"></span>
    //         </div>

    var toast = document.createElement('div');
    toast.classList.add('toast');
    toast.classList.add(status);
    toast.innerHTML = templateInner

    var toastList = document.getElementById('toasts');
    toastList.appendChild(toast);

    timeout = timeout || 2000
    setTimeout(() => {
        toast.style.animation = 'slide_hide 2s ease forwards';
    }, timeout);
    setTimeout(() => {
        toast.remove();
    }, timeout + 2000);
}