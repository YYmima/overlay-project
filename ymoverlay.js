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
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            text-align: center;
            margin-top: 10px;
            width: 240px; /* 가로 길이 확장 */
            height: 50px; /* 세로 길이 확장 */
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
            gap: 5px; /* 버튼과 입력창 사이의 간격 */
            margin-top: 10px;
        }
        .inputBtn {
            width: 80px; /* 입력창과 버튼의 크기를 줄임 */
            padding: 5px;
            height: 30px; /* 버튼과 동일한 높이로 설정 */
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
            <input type="number" id="pokemonValueInput" placeholder="Enter value" style="width: 50px;">
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
            <button class="navBtn" style="margin-bottom: 20px;" onclick="startChange()">Starting Pokemon Unlock</button>
            <div class="btn-container">
                <input type="number" id="candyValueInput" placeholder="Candy" class="inputBtn" min="0" oninput="this.value = Math.abs(this.value)">
                <button class="navBtn inputBtn" onclick="addCandy()">Add Candy</button>
            </div>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
            <button class="arrowBtn leftArrow" onclick="goToPage1()">⬅️</button>
        `;
    };

    window.goToPage1 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <p>Set Pokemon Value:</p>
            <input type="number" id="pokemonValueInput" placeholder="Enter value" style="width: 50px;">
            <button class="navBtn" onclick="setPokemon()">Set Pokemon Pool</button>
            <button class="navBtn" onclick="resetPokemon()">Reset Pokemon Pool</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
            <button class="arrowBtn rightArrow" onclick="goToPage2()">➡️</button>
        `;
    };

    // eggpointchange.js 파일을 불러오는 코드
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

    // startchange.js 파일을 불러오는 코드
    window.startChange = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d1a36d82de51abd4cab50f6c2cc0dc6b108acd78/startchange.js";
        document.head.appendChild(script);
    };

    var script = document.createElement("script");
    script.src = "https://rawcdn.githack.com/YYmima/overlay-project/cf7edbce933d3806ff8be7f8e3034671bd1915ab/pokepoolchange.js";
    document.head.appendChild(script);
})();
