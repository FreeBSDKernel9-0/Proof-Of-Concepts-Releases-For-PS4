(() => {
    alert("Running exploit...");
    alert("Your search history just got exposed! (:");
    alert("RCE'd by CAT_EXE, lmfao.");

    setTimeout(() => {
        const style = document.createElement('style');
        style.textContent = `
            body {
                margin: 0 !important;
                padding: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                overflow: hidden !important;
            }

            .cat-box {
                position: fixed;
                width: 220px;
                background: #ece9d8;
                border: 2px solid #0054e3;
                box-shadow: 3px 3px 0 rgba(0,0,0,0.3);
                font-family: Tahoma, sans-serif;
                z-index: 99998;
            }

            .title-bar {
                height: 24px;
                background: linear-gradient(to bottom, #0a64ad, #003c9e);
                color: white;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 2px 0 6px;
                font-size: 12px;
                font-weight: bold;
                user-select: none;
            }

            .xp-close {
                width: 21px;
                height: 21px;
                background: #e81123;
                border: 1px solid white;
                color: white;
                font-weight: bold;
                font-size: 14px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .xp-close:hover { background: #ff3b30; }
            .xp-close:active { background: #a80000; }

            .cat-content {
                padding: 5px;
            }

            .cat-box img {
                width: 100%;
                height: 150px;
                object-fit: cover;
                display: block;
                border: 1px solid #7f9db9;
            }

            #red-flash {
                position: fixed;
                inset: 0;
                background: red;
                opacity: 0;
                pointer-events: none;
                z-index: 999997;
            }
        `;
        document.head.appendChild(style);

        const flash = document.createElement('div');
        flash.id = "red-flash";
        document.body.appendChild(flash);

        function triggerFlash() {
            flash.style.opacity = 0.55;
            setTimeout(() => flash.style.opacity = 0, 140);
        }

        function playScream() {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const duration = 0.6;
            const bufferSize = ctx.sampleRate * duration;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.sin(i * 0.02);
            }

            const source = ctx.createBufferSource();
            source.buffer = buffer;

            const gain = ctx.createGain();
            gain.gain.value = 0.35;

            source.connect(gain);
            gain.connect(ctx.destination);

            source.start();
        }

        function spawnCat() {
            const box = document.createElement('div');
            box.className = 'cat-box';

            const x = Math.random() * (window.innerWidth - 240);
            const y = Math.random() * (window.innerHeight - 200);

            box.style.left = x + "px";
            box.style.top = y + "px";

            const titleBar = document.createElement('div');
            titleBar.className = 'title-bar';

            const titleText = document.createElement('div');
            titleText.innerText = "🐈 Cat.exe";

            const closeBtn = document.createElement('div');
            closeBtn.className = 'xp-close';
            closeBtn.innerText = "X";

            closeBtn.onclick = (e) => {
                e.stopPropagation();
                box.remove();
                spawnCat();
            };

            titleBar.appendChild(titleText);
            titleBar.appendChild(closeBtn);

            const content = document.createElement('div');
            content.className = 'cat-content';

            const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const svgCat = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='220' height='150'><rect width='100' height='100' fill='" + encodeURIComponent(randomColor) + "'/><text x='50' y='60' font-size='40' text-anchor='middle'>🐈</text></svg>";

            const img = document.createElement('img');
            img.src = svgCat;

            content.appendChild(img);

            box.appendChild(titleBar);
            box.appendChild(content);

            document.body.appendChild(box);
        }

        function spawnBurst() {
            for (let i = 0; i < 10; i++) {
                setTimeout(spawnCat, i * 50);
            }
        }

        function chaosLoop() {
            const delay = 3000 + Math.random() * 3000;

            setTimeout(() => {
                triggerFlash();
                playScream();
                chaosLoop();
            }, delay);
        }

        function catSpawningLoop() {
            const delay = 4000 + Math.random() * 4000;

            setTimeout(() => {
                spawnBurst();
                catSpawningLoop();
            }, delay);
        }

        spawnBurst();
        chaosLoop();
        catSpawningLoop();

        const layer = document.createElement('div');
        layer.style.position = 'fixed';
        layer.style.top = '0';
        layer.style.left = '0';
        layer.style.width = '100vw';
        layer.style.height = '100vh';
        layer.style.pointerEvents = 'none';
        layer.style.zIndex = '2147483647';
        document.body.appendChild(layer);

        const stick = document.createElement('div');
        stick.style.position = 'absolute';
        stick.style.top = '45%';
        stick.style.left = '-300px';
        stick.style.display = 'flex';
        stick.style.alignItems = 'center';
        stick.style.gap = '12px';

        const svg = `
            <svg width="80" height="120" viewBox="0 0 80 120">
                <circle cx="40" cy="20" r="12" stroke="black" stroke-width="3" fill="white"/>
                <line x1="40" y1="32" x2="40" y2="75" stroke="black" stroke-width="3"/>
                <line x1="40" y1="45" x2="15" y2="60" stroke="black" stroke-width="3"/>
                <line x1="40" y1="45" x2="65" y2="60" stroke="black" stroke-width="3"/>
                <line x1="40" y1="75" x2="20" y2="105" stroke="black" stroke-width="3"/>
                <line x1="40" y1="75" x2="60" y2="105" stroke="black" stroke-width="3"/>
            </svg>
        `;

        const stickSvgWrap = document.createElement('div');
        stickSvgWrap.innerHTML = svg;

        const sign = document.createElement('div');

sign.style.width = '340px';
sign.style.background = '#fff';
sign.style.border = '1px solid #dadce0';
sign.style.borderRadius = '8px';
sign.style.padding = '18px';
sign.style.boxShadow = '0 2px 10px rgba(0,0,0,.15)';
sign.style.fontFamily = 'Arial, sans-serif';
sign.style.color = '#202124';
sign.style.transform = 'scale(1.25)';
sign.style.transformOrigin = 'left center';

sign.innerHTML = `
<div style="display:flex;gap:16px;align-items:flex-start;">

    <div style="
        width:48px;
        height:48px;
        border:3px solid #5f6368;
        border-radius:6px;
        position:relative;
        flex-shrink:0;
    ">
        <div style="
            position:absolute;
            left:8px;
            top:10px;
            color:#5f6368;
            font-size:20px;
            font-weight:bold;
            letter-spacing:2px;
        ">
            ××
        </div>
    </div>

    <div>
        <div style="
            font-size:30px;
            font-weight:400;
            margin-bottom:10px;
        ">
            Aw, Snap!
        </div>

        <div style="
            font-size:14px;
            color:#5f6368;
            line-height:1.5;
            margin-bottom:16px;
        ">
            Something went wrong while displaying this webpage.
        </div>

        <button style="
            background:#1a73e8;
            color:white;
            border:none;
            border-radius:4px;
            padding:8px 18px;
            font-size:14px;
        ">
            Reload
        </button>
    </div>

</div>
`;

stick.appendChild(stickSvgWrap);
stick.appendChild(sign);
layer.appendChild(stick);

        let x = -700;

        function walk() {
            x += 2.5;

            if (x > window.innerWidth + 700) {
                x = -700;
                stick.style.top = (20 + Math.random() * 60) + "%";
            }

            stick.style.transform = `translateX(${x}px)`;
            requestAnimationFrame(walk);
        }

        walk();
    }, 10000);
})();