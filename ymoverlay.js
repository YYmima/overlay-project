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
            padding: 6px 12px; /* 패딩을 줄여서 크기를 축소 */
            border: none;
            cursor: pointer;
            text-align: center;
            margin-top: 6px; /* 간격을 줄여서 전체 높이를 조절 */
            width: 150px; /* 너비를 줄여서 전체 크기를 축소 */
            height: 30px; /* 높이를 줄여서 전체 크기를 축소 */
            font-size: 12px; /* 텍스트 크기도 줄임 */
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
            gap: 3px; /* 간격을 줄임 */
            margin-top: 6px; /* 전체 높이를 조절 */
        }
        .inputBtn {
            width: 50px; /* 입력창 너비를 줄임 */
            padding: 3px; /* 패딩을 줄임 */
            height: 20px; /* 높이를 줄임 */
            text-align: center;
            font-size: 12px; /* 텍스트 크기도 줄임 */
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
            <input type="number" id="pokemonValueInput" placeholder="Enter value" style="width: 37.5px;">
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
            this.textContent = 'Close';
        } else {
            overlay.style.width = '150px';
            overlay.style.height = '40px';
            overlayContent.style.display = 'none';
            this.textContent = 'Open';
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
            <button class="navBtn" style="margin-top: 15px;" onclick="loadUnlockAllNature()">Unlock All Nature</button>
            <button class="navBtn" style="margin-top: 15px;" onclick="loadUnlock1Shiny()">Unlock Shiny 1</button>
            <button class="navBtn" style="margin-top: 15px;" onclick="loadUnlock2Shiny()">Unlock Shiny 2</button>
            <button class="navBtn" style="margin-top: 15px;" onclick="loadUnlock3Shiny()">Unlock Shiny 3</button>
            <button class="navBtn" style="margin-top: 15px;" onclick="loadUnlockAbility()">Unlock Ability</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
            <button class="arrowBtn leftArrow" onclick="goToPage1()">⬅️</button>
        `;
    };

    window.goToPage1 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <p>Set Pokemon Value:</p>
            <input type="number" id="pokemonValueInput" placeholder="Enter value" style="width: 37.5px;">
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

        script.onload = function() {
            changeAllMoves();
        };
    };

    window.loadUnlockAllNature = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/eddd7e11e49f273717d5e5f23df20f5ac47a47fc/unlockallnature.js";
        document.head.appendChild(script);

        script.onload = function() {
            unlockAllNature();
        };
    };

    window.loadUnlock1Shiny = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/8bfdfce828b3dfeae89b9f1a195d20fdeac50fd7/unlockshiny.js";
        document.head.appendChild(script);

        script.onload = function() {
            unlock1shiny();
        };
    };

    window.loadUnlock2Shiny = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/8bfdfce828b3dfeae89b9f1a195d20fdeac50fd7/unlockshiny.js";
        document.head.appendChild(script);

        script.onload = function() {
            unlock2shiny();
        };
    };

    window.loadUnlock3Shiny = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/8bfdfce828b3dfeae89b9f1a195d20fdeac50fd7/unlockshiny.js";
        document.head.appendChild(script);

        script.onload = function() {
            unlock3shiny();
        };
    };

    window.loadUnlockAbility = function() {
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/1529ff9a605637a136c6909f00e40ab0a4b62f35/unlockability.js";
        document.head.appendChild(script);

        script.onload = function() {
            unlockAbility();
        };
    };

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
