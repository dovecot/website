document.addEventListener("DOMContentLoaded", function () {
    // Apply the animation class to all tabpanels
    const tabpanels = document.querySelectorAll('div[role="tabpanel"]');
    tabpanels.forEach(panel => {
	    panel.style.maxHeight = '0px';
    });

    // Find toggle links
    const toggleLinks = document.querySelectorAll('a[data-toggle="collapse"]');
    toggleLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSelector = this.getAttribute('data-target');
            if (!targetSelector) return;

            const targetPanel = document.querySelector(targetSelector);
            if (targetPanel && targetPanel.matches('[role="tabpanel"]')) {
                // Toggle the panel visibility
                const isCollapsed = targetPanel.style.maxHeight === '0px' || targetPanel.style.maxHeight === '';

                if (isCollapsed) {
                    targetPanel.style.maxHeight = targetPanel.scrollHeight + 'px';
                } else {
                    targetPanel.style.maxHeight = '0px';
                }

                // Toggle the icon inside the <a>
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.remove('i-heroicons-chevron-down-solid', 'i-heroicons-chevron-right-solid');
                    icon.classList.add(
                        isCollapsed ? 'i-heroicons-chevron-down-solid' : 'i-heroicons-chevron-right-solid'
                   );
                }
            }
        });
    });

    document.querySelectorAll('code').forEach(codeBlock => {
        const pre = codeBlock.parentElement;
        if (!pre || pre.tagName.toLowerCase() !== 'pre') return;

        pre.classList.add('relative'); // UnoCSS: make <pre> relatively positioned

        // Create button
        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('copy-button');

        const icon = document.createElement('i');
        icon.className = 'i-heroicons-clipboard-document-solid';
        button.appendChild(icon);

        pre.parentElement.appendChild(button); // Append to <div> before <pre>

        // Copy logic
        button.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const icon = this.querySelector('i');
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
              if (icon) {
                icon.classList.remove('i-heroicons-clipboard-document-solid', 'i-heroicons-clipboard-document-check-solid');
                icon.classList.add('i-heroicons-clipboard-document-check-solid');
                setTimeout(() => {
                  icon.classList.remove('i-heroicons-clipboard-document-check-solid');
                  icon.classList.add('i-heroicons-clipboard-document-solid');
                }, 2000);
              }
            }).catch(err => {
                console.error('Clipboard copy failed:', err);
            });
        });
    });
});
