function unlock1shiny() {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0]; // 첫 번째 씬을 가져옵니다.

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 1; i <= 1025; i++) {
        scene.gameData.starterData[i] = scene.gameData.starterData[i] || {};
        scene.gameData.dexData[i] = scene.gameData.dexData[i] || {};

        // caughtAttr이 0n이 아닌 포켓몬을 대상으로
        if (scene.gameData.dexData[i].caughtAttr !== 0n) {
            // caughtAttr을 151n으로 설정, 변경 시 seenAttr을 동일하게 변경, candyCount를 10 추가, hatchedCount를 1 추가
            if (scene.gameData.dexData[i].caughtAttr !== 151n) {
                scene.gameData.dexData[i].caughtAttr = 151n;
                scene.gameData.dexData[i].seenAttr = 151n;
                scene.gameData.starterData[i].candyCount = (scene.gameData.starterData[i].candyCount || 0) + 10;
                scene.gameData.dexData[i].hatchedCount = (scene.gameData.dexData[i].hatchedCount || 0) + 1;
            }
        }
    }
}

function unlock2shiny() {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0]; // 첫 번째 씬을 가져옵니다.

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 1; i <= 1025; i++) {
        scene.gameData.starterData[i] = scene.gameData.starterData[i] || {};
        scene.gameData.dexData[i] = scene.gameData.dexData[i] || {};

        // caughtAttr이 0n이 아닌 포켓몬을 대상으로
        if (scene.gameData.dexData[i].caughtAttr !== 0n) {
            // caughtAttr을 183n으로 설정, 변경 시 seenAttr을 동일하게 변경, candyCount를 20 추가, hatchedCount를 1 추가
            if (scene.gameData.dexData[i].caughtAttr !== 183n) {
                scene.gameData.dexData[i].caughtAttr = 183n;
                scene.gameData.dexData[i].seenAttr = 183n;
                scene.gameData.starterData[i].candyCount = (scene.gameData.starterData[i].candyCount || 0) + 20;
                scene.gameData.dexData[i].hatchedCount = (scene.gameData.dexData[i].hatchedCount || 0) + 1;
            }
        }
    }
}

function unlock3shiny() {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0]; // 첫 번째 씬을 가져옵니다.

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 1; i <= 1025; i++) {
        scene.gameData.starterData[i] = scene.gameData.starterData[i] || {};
        scene.gameData.dexData[i] = scene.gameData.dexData[i] || {};

        // caughtAttr이 0n이 아닌 포켓몬을 대상으로
        if (scene.gameData.dexData[i].caughtAttr !== 0n) {
            // caughtAttr을 215n으로 설정, 변경 시 seenAttr을 동일하게 변경, candyCount를 40 추가, hatchedCount를 1 추가
            if (scene.gameData.dexData[i].caughtAttr !== 215n) {
                scene.gameData.dexData[i].caughtAttr = 215n;
                scene.gameData.dexData[i].seenAttr = 215n;
                scene.gameData.starterData[i].candyCount = (scene.gameData.starterData[i].candyCount || 0) + 40;
                scene.gameData.dexData[i].hatchedCount = (scene.gameData.dexData[i].hatchedCount || 0) + 1;
            }
        }
    }
}
