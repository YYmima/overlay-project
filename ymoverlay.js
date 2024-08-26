(function() {
    var overlayStyle = `
        #myOverlay {
            position: fixed;
            top: 10px;
            left: 10px;
            width: 40px;
            height: 150px;
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
            padding: 4px 8px;
            border: none;
            cursor: pointer;
            margin-top: 8px;
            font-size: 12px;
            border-radius: 4px;
        }
        #expandBtn {
            width: 100%;
            background-color: #007bff;
            color: white;
            padding: 4px 0;
            text-align: center;
            cursor: pointer;
            font-size: 12px;
            border-radius: 4px;
        }
        .navBtn {
            background-color: green;
            color: white;
            padding: 4px 8px;
            border: none;
            cursor: pointer;
            text-align: center;
            margin-top: 8px;
            width: 120px;
            height: 30px;
            font-size: 12px;
            border-radius: 4px;
        }
        .inputBtn {
            width: 120px;
            padding: 4px;
            height: 25px;
            text-align: center;
            font-size: 12px;
            margin-bottom: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .labelText {
            font-size: 12px;
            margin-bottom: 4px;
            color: #333;
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
            <button class="navBtn" onclick="goToPage1()">Set Pokemon Pool</button>
            <button class="navBtn" onclick="goToPage2()">Customize All Pokemon</button>
            <button class="navBtn" onclick="goToPage3()">Customize Pokemon</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
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
            overlay.style.width = '40%';
            overlay.style.height = '70%';
            overlayContent.style.display = 'flex';
            this.textContent = 'Close';
        } else {
            overlay.style.width = '40px';
            overlay.style.height = '150px';
            overlayContent.style.display = 'none';
            this.textContent = 'Open';
        }
    };

    window.goToPage1 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <span class="labelText">Set Pokemon Pool Value</span>
            <input type="number" id="pokemonValueInput" placeholder="Enter value" class="inputBtn" min="0" oninput="this.value = Math.abs(this.value)">
            <button class="navBtn" onclick="setPokemon()">Set Pokemon Pool</button>
            <button class="navBtn" onclick="resetPokemon()">Reset Pokemon Pool</button>
            <button class="navBtn" onclick="goToMainPage()">Main Page</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
        `;
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
            <button class="navBtn" onclick="goToMainPage()">Main Page</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
        `;
    };

    window.goToPage3 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <p>Customize Pokemon</p>
            <input type="number" id="pokemonIndicesInput" placeholder="Enter Pokemon IDs" class="inputBtn" min="1">
            <input type="number" id="candyValueInput" placeholder="Candy" class="inputBtn" min="0" oninput="this.value = Math.abs(this.value)">
            <button class="navBtn" onclick="validateAndCustomize()">Apply</button>
            <button class="navBtn" onclick="customizeEggMoves()">Customize Egg Moves</button>
            <button class="navBtn" onclick="customizeCandyPoints()">Customize Candy Points</button>
            <button class="navBtn" onclick="customizeUnlockAbility()">Customize Ability</button>
            <button class="navBtn" onclick="customizeUnlockNature()">Customize Nature</button>
            <button class="navBtn" onclick="customizeUnlockShiny1()">Customize Shiny 1</button>
            <button class="navBtn" onclick="customizeUnlockShiny2()">Customize Shiny 2</button>
            <button class="navBtn" onclick="customizeUnlockShiny3()">Customize Shiny 3</button>
            <button class="navBtn" onclick="goToMainPage()">Main Page</button>
            <button class="closeBtn" onclick="closeOverlay()">Close</button>
        `;
    };

    window.validateAndCustomize = function() {
        const indicesInput = document.getElementById('pokemonIndicesInput').value;
        const candyValue = document.getElementById('candyValueInput').value;

        if (indicesInput === '' || candyValue === '') {
            alert("Please enter both Pokemon IDs and candy amount.");
            return;
        }

        const indices = indicesInput.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

        if (indices.length === 0) {
            alert("Please enter valid Pokemon IDs.");
            return;
        }

        const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
        const parent = canvasPool.parent;
        const game = parent.game;
        const scene = game.scene.scenes[0];

        if (!scene) {
            alert("Game scene not found.");
            return;
        }

        scene.gameData = scene.gameData || {};
        scene.gameData.dexData = scene.gameData.dexData || {};
        scene.gameData.starterData = scene.gameData.starterData || {};

        let validIndices = [];
        let invalidIndices = [];

        indices.forEach(index => {
            if (scene.gameData.dexData[index]) {
                validIndices.push(index);
            } else {
                invalidIndices.push(index);
            }
        });

        if (invalidIndices.length > 0) {
            alert("The following Pokemon IDs are invalid: " + invalidIndices.join(', '));
        }

        if (validIndices.length > 0) {
            validIndices.forEach(index => {
                scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
                scene.gameData.starterData[index].candyCount = parseInt(candyValue);
            });
            alert("Selected Pokemon have been updated.");
        }
    };

    // 외부 스크립트 로드 및 관련 함수 호출
    window.customizeEggMoves = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customEggMoves(indices);
        };
    };

    window.customizeCandyPoints = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customEggPointChange(indices, 10, 5);
        };
    };

    window.customizeUnlockAbility = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customUnlockAbility(indices);
        };
    };

    window.customizeUnlockNature = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customUnlockAllNature(indices);
        };
    };

    window.customizeUnlockShiny1 = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customUnlock1Shiny(indices);
        };
    };

    window.customizeUnlockShiny2 = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customUnlock2Shiny(indices);
        };
    };

    window.customizeUnlockShiny3 = function() {
        const indices = document.getElementById('pokemonIndicesInput').value.split(',').map(Number);
        var script = document.createElement("script");
        script.src = "https://rawcdn.githack.com/YYmima/overlay-project/d82f8377c05b675b004437d30d8b1949c9a8199c/customizePokemon.js";
        document.head.appendChild(script);

        script.onload = function() {
            customUnlock3Shiny(indices);
        };
    };

    goToMainPage(); 
})();
