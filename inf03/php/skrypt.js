function copyToClipboard(button) {
    const codeContainer = button.nextElementSibling;
    const textToCopy = codeContainer.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        button.textContent = 'Skopiowano!';
        setTimeout(() => {
            button.textContent = 'Kopiuj';
        }, 2000);
    }).catch(err => {
        console.error('Błąd kopiowania', err);
    });
}