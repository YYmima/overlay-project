(function() {
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

    // 원래 값을 저장할 변수
    let originalPokemonValues = {};

    // setPokemon 함수 정의
    window.setPokemon = function() {
        try {
            let firstPoolObject = Phaser.Display.Canvas.CanvasPool.pool[0];
            let newValue = parseInt(document.getElementById('pokemonValueInput').value);

            if (firstPoolObject && firstPoolObject.parent && firstPoolObject.parent.game &&
                firstPoolObject.parent.game.scene && firstPoolObject.parent.game.scene.scenes &&
                firstPoolObject.parent.game.scene.scenes[0] && firstPoolObject.parent.game.scene.scenes[0].arena) {

                let arena = firstPoolObject.parent.game.scene.scenes[0].arena;
                let pokemonPool = arena.pokemonPool;

                if (pokemonPool) {
                    Object.keys(pokemonPool).forEach(key => {
                        let pokemonArray = pokemonPool[key];
                        if (Array.isArray(pokemonArray)) {
                            pokemonArray.forEach((value, index) => {
                                if (!originalPokemonValues[key]) {
                                    originalPokemonValues[key] = [...pokemonArray]; // 원래 값을 저장
                                }
                                pokemonArray[index] = newValue;  // 입력된 값으로 변경
                            });
                        }
                    });
                    console.log("모든 Pokemon 값이 " + newValue + "로 설정되었습니다.");
                } else {
                    console.log("pokemonPool 객체가 존재하지 않습니다.");
                }
            } else {
                console.log("경로 중 일부가 존재하지 않습니다.");
            }
        } catch (error) {
            console.error("setPokemon 함수에서 오류 발생:", error);
        }
    };

    // resetPokemon 함수 정의
    window.resetPokemon = function() {
        try {
            let firstPoolObject = Phaser.Display.Canvas.CanvasPool.pool[0];

            if (firstPoolObject && firstPoolObject.parent && firstPoolObject.parent.game &&
                firstPoolObject.parent.game.scene && firstPoolObject.parent.game.scene.scenes &&
                firstPoolObject.parent.game.scene.scenes[0] && firstPoolObject.parent.game.scene.scenes[0].arena) {

                let arena = firstPoolObject.parent.game.scene.scenes[0].arena;
                let pokemonPool = arena.pokemonPool;

                if (pokemonPool) {
                    Object.keys(pokemonPool).forEach(key => {
                        let pokemonArray = pokemonPool[key];
                        if (Array.isArray(pokemonArray) && originalPokemonValues[key]) {
                            pokemonArray.forEach((_, index) => {
                                pokemonArray[index] = originalPokemonValues[key][index];  // 원래 값으로 복구
                            });
                        }
                    });
                    console.log("모든 Pokemon 값이 원래 값으로 복구되었습니다.");
                } else {
                    console.log("pokemonPool 객체가 존재하지 않습니다.");
                }
            } else {
                console.log("경로 중 일부가 존재하지 않습니다.");
            }
        } catch (error) {
            console.error("resetPokemon 함수에서 오류 발생:", error);
        }
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
