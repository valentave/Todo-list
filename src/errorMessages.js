export function showErrorMessage(input) {
    input.nextElementSibling.style.opacity = '1';
}

export function hideErrorMessage(input) {
    input.nextElementSibling.style.opacity = '0';
}