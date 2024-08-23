(function() {
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
            position: relative;
        }
        .closeBtn {
            background-color: red;
            color: white;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
        }
        #expandBtn {
            width: 100%;
            background-color: #007bff;
            color: white;
            padding: 5px 0;
            text-align: center;
            cursor: pointer;
        }
        .navBtn {
            background-color: green;
            color: white;
            padding: 7.5px 15px; /* 기존 크기의 3/4 */
            border: none;
            cursor: pointer;
            text-align: center;
            margin-top: 7.5px; /* 기존 간격의 3/4 */
            width: 180px; /* 가로 길이의 3/4 */
            height: 37.5px; /* 세로 길이의 3/4 */
        }
        .arrowBtn {
            background-color: #555;
            color: white;
            padding: 5px 10px;
            border: none;
            cursor: pointer;
            position: absolute;
            top: 10px;
        }
        .leftArrow {
            left: 10px;
        }
        .rightArrow {
            right: 10px;
        }
        .btn-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3.75px; /* 버튼과 입력창 사이의 간격을 3/4로 조정 */
            margin-top: 7.5px; /* 기존 간격의 3/4 */
        }
        .inputBtn {
            width: 60px; /* 입력창 너비를 3/4로 조정 */
            padding: 3.75px; /* 기존 패딩의 3/4 */
            height: 22.5px; /* 높이를 3/4로 조정 */
            text-align: center;
        }
    `;

    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(overlayStyle));
    document.head.appendChild(styleElement);

    var overlay = document.createElement('div');
    overlay.id = 'myOverlay';
    overlay.innerHTML = `
        <div id="myOverlayContent">
            <p>Set Pokemon Value:</p>
            <input type="number" id="pokemonValueInput" placeholder="Enter value" style="width: 37.5px;"> <!-- 기존 너비의 3/4 -->
            <button class="navBtn" onclick="setPokemon()">Set Pokemon Pool</button>
            <button class="navBtn" onclick="resetPokemon()">Reset Pokemon Pool</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
            <button class="arrowBtn rightArrow" onclick="goToPage2()">➡️</button>
        </div>
        <div id="expandBtn">Open</div>
    `;

    document.body.appendChild(overlay);

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

    window.closeOverlay = function() {
        document.getElementById('myOverlay').remove();
    };

    document.getElementById('expandBtn').onclick = function() {
        var overlay = document.getElementById('myOverlay');
        var overlayContent = document.getElementById('myOverlayContent');
        if (overlayContent.style.display === 'none') {
            overlay.style.width = '50%';
            overlay.style.height = '50%';
            overlayContent.style.display = 'flex';
            this.textContent = 'Close'; // 닫힐 때 'Close'로 텍스트 변경
        } else {
            overlay.style.width = '150px';
            overlay.style.height = '40px';
            overlayContent.style.display = 'none';
            this.textContent = 'Open'; // 열릴 때 'Open'으로 텍스트 변경
        }
    };

    window.goToPage2 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <button class="navBtn" style="margin-bottom: 15px;" onclick="startChange()">Starting Pokemon Unlock</button>
            <div class="btn-container">
                <input type="number" id="candyValueInput" placeholder="Candy" class="inputBtn" min="0" oninput="this.value = Math.abs(this.value)">
                <button class="navBtn inputBtn" onclick="addCandy()">Add Candy</button>
            </div>
            <button class="navBtn" style="margin-top: 15px;" onclick="loadChangeAllMoves()">Change All Moves</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
            <button class="arrowBtn leftArrow" onclick="goToPage1()">⬅️</button>
        `;
    };

    window.goToPage1 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <p>Set Pokemon Value:</p>
            <input type="number" id="pokemonValueInput" placeholder="Enter value" style="width: 37.5px;"> <!-- 기존 너비의 3/4 -->
            <button class="navBtn" onclick="setPokemon()">Set Pokemon Pool</button>
            <button class="navBtn" onclick="resetPokemon()">Reset Pokemon Pool</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
            <button class="arrowBtn rightArrow" onclick="goToPage2()">➡️</button>
        `;
    };

    window.loadChangeAllMoves = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d538e8fb8c7bed88ad8ea0313dd7f63424172647/alleggmoves.js";
        document.head.appendChild(script);

        // 스크립트가 로드된 후 changeAllMoves 함수 호출
        script.onload = function() {
            changeAllMoves();
        };
    };

    // 기존 기능의 외부 스크립트 로드
    var pokepoolchangeScript = document.createElement("script");
    pokepoolchangeScript.src = "https://rawcdn.githack.com/YYmima/overlay-project/cf7edbce933d3806ff8be7f8e3034671bd1915ab/pokepoolchange.js";
    document.head.appendChild(pokepoolchangeScript);

    window.setPokemon = function() {
        // setPokemon 함수 내용
    };

    window.resetPokemon = function() {
        // resetPokemon 함수 내용
    };

    window.addCandy = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/4b8d1ed1dc2fe87d4b429a203f2e8ca472a95d4c/eggpointchange.js";
        document.head.appendChild(script);

        // 캔디 값을 추가하는 기능 실행
        var candyValue = parseInt(document.getElementById('candyValueInput').value);
        if (!isNaN(candyValue)) {
            updateeggData(candyValue, Math.floor(candyValue / 2));
        } else {
            console.log("유효한 캔디 값을 입력하세요.");
        }
    };

    window.startChange = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d1a36d82de51abd4cab50f6c2cc0dc6b108acd78/startchange.js";
        document.head.appendChild(script);
    };
})();
