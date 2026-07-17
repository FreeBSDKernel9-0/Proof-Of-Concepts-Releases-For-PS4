// Made by Shadowdev-Vita
// Copyright July 2026
// All code is open source, you may modify how you wish

(function() {
    const txt = "AI responses may include mistakes. Learn more";
    let i = 0;

    function go() {
        if (i >= 1000000) return;

        const box = document.activeElement;
        if (!box || box === document.body) {
            setTimeout(go, 200);
            return;
        }

        i++;

        if (box.isContentEditable) {
            box.innerText = txt;
        } else {
            const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value")?.set 
                         || Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
            if (setter) {
                setter.call(box, txt);
            } else {
                box.value = txt;
            }
        }

        box.dispatchEvent(new Event('input', { bubbles: true }));
        box.dispatchEvent(new Event('change', { bubbles: true }));

        box.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true
        }));
        box.dispatchEvent(new KeyboardEvent('keypress', {
            key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true
        }));
        box.dispatchEvent(new KeyboardEvent('keyup', {
            key: 'Enter', keyCode: 13, code: 'Enter', which: 13, bubbles: true, cancelable: true
        }));

        setTimeout(go, 200);
    }

    go();
})();
