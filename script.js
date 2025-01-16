document.addEventListener('DOMContentLoaded', () => {
    const commandInput = document.querySelector('.command-input');
    const cursor = document.querySelector('.cursor');
    
    // Focus input when clicking anywhere in the terminal
    document.querySelector('.terminal').addEventListener('click', () => {
        commandInput.focus();
    });

    // Handle keyboard input
    commandInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            commandInput.textContent = '';
        }
        
        // Prevent default behavior for special keys
        if (e.key === 'Tab') {
            e.preventDefault();
        }
    });

    // Show/hide cursor based on input focus
    commandInput.addEventListener('focus', () => {
        cursor.style.opacity = '0';
    });

    commandInput.addEventListener('blur', () => {
        cursor.style.opacity = '1';
    });

    // Prevent line breaks and maintain single line input
    commandInput.addEventListener('input', () => {
        commandInput.textContent = commandInput.textContent.replace(/\n/g, '');
    });

    // Handle paste events
    commandInput.addEventListener('paste', (e) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text.replace(/\n/g, ''));
    });

    // Initial focus
    commandInput.focus();
}); 