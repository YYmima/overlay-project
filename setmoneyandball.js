// setmoneyandball.js

(function () {
    // money 값을 설정하는 함수
    function setMoney(scene, amount) {
        if (scene && scene.money !== undefined) {
            scene.money = amount;
            scene.updateMoneyText(); // UI 업데이트
            console.log(`Money set to ${amount}`);
        } else {
            console.log("Scene or money property not found.");
        }
    }

    // pokeballCounts 값을 설정하는 함수들
    function setPokeball1(scene, count) {
        if (scene && scene.pokeballCounts) {
            scene.pokeballCounts[0] = count;
            console.log(`Pokeball count at index 0 set to ${count}`);
        } else {
            console.log("Scene or pokeballCounts property not found.");
        }
    }

    function setPokeball2(scene, count) {
        if (scene && scene.pokeballCounts) {
            scene.pokeballCounts[1] = count;
            console.log(`Pokeball count at index 1 set to ${count}`);
        } else {
            console.log("Scene or pokeballCounts property not found.");
        }
    }

    function setPokeball3(scene, count) {
        if (scene && scene.pokeballCounts) {
            scene.pokeballCounts[2] = count;
            console.log(`Pokeball count at index 2 set to ${count}`);
        } else {
            console.log("Scene or pokeballCounts property not found.");
        }
    }

    function setPokeball4(scene, count) {
        if (scene && scene.pokeballCounts) {
            scene.pokeballCounts[3] = count;
            console.log(`Pokeball count at index 3 set to ${count}`);
        } else {
            console.log("Scene or pokeballCounts property not found.");
        }
    }

    function setPokeball5(scene, count) {
        if (scene && scene.pokeballCounts) {
            scene.pokeballCounts[4] = count;
            console.log(`Pokeball count at index 4 set to ${count}`);
        } else {
            console.log("Scene or pokeballCounts property not found.");
        }
    }

    // Scene 객체 가져오기
    const scene = Phaser.Display.Canvas.CanvasPool.pool[0]?.parent?.game.scene.scenes[0];

    // 전역 객체로 함수 노출
    window.setMoney = function(amount) {
        setMoney(scene, amount);
    };

    window.setPokeball1 = function(count) {
        setPokeball1(scene, count);
    };

    window.setPokeball2 = function(count) {
        setPokeball2(scene, count);
    };

    window.setPokeball3 = function(count) {
        setPokeball3(scene, count);
    };

    window.setPokeball4 = function(count) {
        setPokeball4(scene, count);
    };

    window.setPokeball5 = function(count) {
        setPokeball5(scene, count);
    };
})();
