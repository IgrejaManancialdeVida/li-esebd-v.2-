document.addEventListener("DOMContentLoaded", function() {
    const menuSuperior = document.createElement('div');
    menuSuperior.style.cssText = `
        position: fixed; top: 0; left: 0; right: 0;
        background: #1a0d05; border-bottom: 1px solid #c9a84c;
        display: flex; justify-content: center; gap: 15px;
        padding: 8px; z-index: 9999; font-family: 'Oswald', sans-serif;
        box-shadow: 0 2px 10px rgba(0,0,0,0.5);
    `;

    const volumes = [
        { nome: 'Volume I',   link: 'https://igrejamanancialdevida.github.io/li-esebd/' },
        { nome: 'Volume II',  link: 'https://igrejamanancialdevida.github.io/li-esebd-v.2-/' },
        { nome: 'Volume III', link: 'https://igrejamanancialdevida.github.io/li-esebd-v.3/' }
    ];

    volumes.forEach(vol => {
        const btn = document.createElement('a');
        btn.innerText = vol.nome;
        btn.href = vol.link;

        // Destaca o volume atual
        const isAtual = window.location.href.includes('v.2-') ||
                        window.location.href.includes('li-esebd-v.2');

        btn.style.cssText = `
            color: #c9a84c; text-decoration: none; font-size: 11px;
            letter-spacing: 2px; text-transform: uppercase;
            padding: 5px 12px; border: 1px solid transparent;
            transition: 0.3s; font-weight: 400;
            ${(isAtual && vol.nome === 'Volume II') ? 'border-color: rgba(201,168,76,0.5); background: rgba(201,168,76,0.08);' : ''}
        `;

        btn.onmouseover = () => {
            btn.style.borderColor = '#c9a84c';
            btn.style.background = 'rgba(201, 168, 76, 0.1)';
        };
        btn.onmouseout = () => {
            const ainda = isAtual && vol.nome === 'Volume II';
            btn.style.borderColor = ainda ? 'rgba(201,168,76,0.5)' : 'transparent';
            btn.style.background  = ainda ? 'rgba(201,168,76,0.08)' : 'transparent';
        };

        menuSuperior.appendChild(btn);
    });

    document.body.prepend(menuSuperior);
    document.body.style.paddingTop = '45px';
});
