(function() {
    // pokepoolchange.js 파일을 동적으로 로드
    var s = document.createElement("script");
    s.src = "https://rawcdn.githack.com/YYmima/overlay-project/cf7edbce933d3806ff8be7f8e3034671bd1915ab/pokepoolchange.js";
    s.type = "text/javascript";
    document.head.appendChild(s);

    // 오버레이 스타일을 정의
    var overlayStyle = `
        #myOverlay {
            position: fixed;
            top: 10px;
            left: 10px;
            width: 150px;
            height: 40px;
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
            font-size: 14px;
            color: black;
            display: none;
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

    // closeOverlay 함수 정의
    window.closeOverlay = function() {
        document.getElementById('myOverlay').remove();
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
})();
