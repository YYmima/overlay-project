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
