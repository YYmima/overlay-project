(function () {
    // 4번째 페이지 스타일 정의
    var overlayPageStyle = `
        #page4Content {
            padding: 10px;
            text-align: center;
        }
        .inputField {
            margin-bottom: 10px;
            width: 100px;
            text-align: center;
            font-size: 14px;
        }
        .actionBtn {
            width: 100px;
            padding: 5px;
            margin: 5px;
            cursor: pointer;
            font-size: 14px;
        }
    `;

    // 스타일을 문서에 추가
    var styleElement = document.createElement('style');
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(overlayPageStyle));
    document.head.appendChild(styleElement);

    // 4번째 페이지 UI를 설정하는 함수
    window.showPage4 = function() {
        document.getElementById('myOverlayContent').innerHTML = `
            <h1>Page 4: Set Money and Pokeballs</h1>
            <div id="page4Content">
                <p>Set Money:</p>
                <input type="number" id="moneyInput" class="inputField" placeholder="Amount" min="0">
                <button class="actionBtn" onclick="setMoneyFromInput()">Set Money</button>
                
                <p>Set Pokeball Counts:</p>
                <input type="number" id="pokeball0Input" class="inputField" placeholder="Pokeball 0" min="0">
                <button class="actionBtn" onclick="setPokeball0FromInput()">Set Pokeball 0</button>
                
                <input type="number" id="pokeball1Input" class="inputField" placeholder="Pokeball 1" min="0">
                <button class="actionBtn" onclick="setPokeball1FromInput()">Set Pokeball 1</button>
                
                <input type="number" id="pokeball2Input" class="inputField" placeholder="Pokeball 2" min="0">
                <button class="actionBtn" onclick="setPokeball2FromInput()">Set Pokeball 2</button>
                
                <input type="number" id="pokeball3Input" class="inputField" placeholder="Pokeball 3" min="0">
                <button class="actionBtn" onclick="setPokeball3FromInput()">Set Pokeball 3</button>
                
                <input type="number" id="pokeball4Input" class="inputField" placeholder="Pokeball 4" min="0">
                <button class="actionBtn" onclick="setPokeball4FromInput()">Set Pokeball 4</button>
                
                <button class="actionBtn" onclick="goToMainPage()">Back to Main Page</button>
                <button class="actionBtn" onclick="closeOverlay()">Close</button>
            </div>
        `;
    };

    // 입력 필드 값에서 money를 설정하는 함수
    window.setMoneyFromInput = function() {
        var amount = document.getElementById('moneyInput').value;
        if (amount) {
            setMoney(Number(amount)); // setMoney 함수는 setmoneyandball.js에 정의되어 있다고 가정
        }
    };

    // 입력 필드 값에서 각 Pokeball 수량을 설정하는 함수들
    window.setPokeball0FromInput = function() {
        var count = document.getElementById('pokeball0Input').value;
        if (count) {
            setPokeball1(Number(count)); // 인덱스 0은 setPokeball1로 설정
        }
    };

    window.setPokeball1FromInput = function() {
        var count = document.getElementById('pokeball1Input').value;
        if (count) {
            setPokeball2(Number(count)); // 인덱스 1은 setPokeball2로 설정
        }
    };

    window.setPokeball2FromInput = function() {
        var count = document.getElementById('pokeball2Input').value;
        if (count) {
            setPokeball3(Number(count)); // 인덱스 2는 setPokeball3로 설정
        }
    };

    window.setPokeball3FromInput = function() {
        var count = document.getElementById('pokeball3Input').value;
        if (count) {
            setPokeball4(Number(count)); // 인덱스 3은 setPokeball4로 설정
        }
    };

    window.setPokeball4FromInput = function() {
        var count = document.getElementById('pokeball4Input').value;
        if (count) {
            setPokeball5(Number(count)); // 인덱스 4는 setPokeball5로 설정
        }
    };

    // 메인 페이지로 돌아가는 함수
    window.goToMainPage = function() {
        if (typeof goToMainPage === 'function') {
            goToMainPage();
        }
    };

    // 오버레이 닫기 기능
    window.closeOverlay = function() {
        var overlay = document.getElementById('myOverlay');
        if (overlay) {
            overlay.style.display = 'none';
        }
    };
})();
