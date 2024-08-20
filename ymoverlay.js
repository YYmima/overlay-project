(function() {
    // pokepoolchange.js 파일을 동적으로 불러오기
    var controlScript = document.createElement("script");
    controlScript.src = "https://raw.githack.com/your-username/overlay-project/main/pokepoolchange.js"; // 실제 Githack URL
    controlScript.type = "text/javascript";
    controlScript.onload = function() {
        // pokepoolchange.js 로드 후 실행할 코드

        // 오버레이 스타일을 정의
        var overlayStyle = `
            #myOverlay {
                position: fixed;
                top: 10px;
                left: 10px;
                width: 150px; /* 기본 버튼 크기 */
                height: 40px; /* 기본 버튼 크기 */
                background-color: rgba(255, 255, 255, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 10px;
                box-sizing: border-box;
                z-index: 1000;
                border: 2px solid #000;
                cursor: pointer;
                overflow: hidden;
                transition: width 0.3s, height 0.3s;
            }
            #myOverlayContent {
                font-size: 14px; /* 글씨 크기 조정 */
                color: black;
                display: none; /* 처음에는 보이지 않음 */
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .setPokemonBtn, .closeBtn, .resetPokemonBtn {
                background-color: green;
                color: white;
                padding: 5px 10px;
                border: none;
                cursor: pointer;
                margin-top: 10px;
            }
            .closeBtn {
                background-color: red;
            }
            .resetPokemonBtn {
                background-color: blue;
            }
            #expandBtn {
                width: 100%;
                background-color: #007bff;
                color: white;
                padding: 5px 0;
                text-align: center;
                cursor: pointer;
            }
        `;

        // 스타일을 페이지에 추가
        var styleElement = document.createElement('style');
        styleElement.type = 'text/css';
        styleElement.appendChild(document.createTextNode(overlayStyle));
        document.head.appendChild(styleElement);

        // 오버레이를 정의
        var overlay = document.createElement('div');
        overlay.id = 'myOverlay';
        overlay.innerHTML = `
            <div id="myOverlayContent">
                <h2>Overlay Control</h2>
                <p>Set Pokemon Value:</p>
                <input type="number" id="pokemonValueInput" value="4" style="width: 50px;">
                <button class="setPokemonBtn" onclick="setPokemon()">Set Pokemon</button>
                <button class="resetPokemonBtn" onclick="resetPokemon()">Reset Pokemon</button>
                <button class="closeBtn" onclick="closeOverlay()">Close</button>
            </div>
            <div id="expandBtn">Open</div>
        `;

        // 오버레이를 페이지에 추가
        document.body.appendChild(overlay);

        // 오버레이를 드래그할 수 있도록 설정
        overlay.onmousedown = function(event) {
            let shiftX = event.clientX - overlay.getBoundingClientRect().left;
            let shiftY = event.clientY - overlay.getBoundingClientRect().top;

            function moveAt(pageX, pageY) {
                overlay.style.left = pageX - shiftX + 'px';
                overlay.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            document.addEventListener('mousemove', onMouseMove);

            overlay.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                overlay.onmouseup = null;
            };
        };

        overlay.ondragstart = function() {
            return false;
        };

        // Expand 버튼 클릭 시 오버레이 확장
        document.getElementById('expandBtn').onclick = function() {
            var overlay = document.getElementById('myOverlay');
            var overlayContent = document.getElementById('myOverlayContent');
            if (overlayContent.style.display === 'none') {
                overlay.style.width = '50%';
                overlay.style.height = '50%';
                overlayContent.style.display = 'flex';
            } else {
                overlay.style.width = '150px';
                overlay.style.height = '40px';
                overlayContent.style.display = 'none';
            }
        };
    };

    document.head.appendChild(controlScript);
})();
