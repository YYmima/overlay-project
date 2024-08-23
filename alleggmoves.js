function changeAllMoves() {
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
            // eggMoves가 15가 아닌 경우만 처리
            if (scene.gameData.starterData[i].eggMoves !== 15) {
                scene.gameData.starterData[i].eggMoves = 15;
                scene.gameData.dexData[i].hatchedCount = (scene.gameData.dexData[i].hatchedCount || 0) + 4;
            }
        }
    }

    const targetIndices = [
        2019, 2020, 2026, 2027, 2028, 2037, 2038, 2050, 2051, 2052, 2053,
        2074, 2075, 2076, 2088, 2089, 2103, 2105, 2670, 4052, 4077,
        4078, 4079, 4080, 4083, 4110, 4122, 4144, 4145, 4146, 4199,
        4222, 4263, 4264, 4554, 4555, 4562, 4618, 6058, 6059, 6100,
        6101, 6157, 6211, 6215, 6503, 6549, 6570, 6571, 6628, 6705,
        6706, 6713, 6724, 8128, 8194, 8901
    ];

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];

        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // caughtAttr이 0n이 아닌 포켓몬을 대상으로
        if (scene.gameData.dexData[index].caughtAttr !== 0n) {
            // eggMoves가 15가 아닌 경우만 처리
            if (scene.gameData.starterData[index].eggMoves !== 15) {
                scene.gameData.starterData[index].eggMoves = 15;
                scene.gameData.dexData[index].hatchedCount = (scene.gameData.dexData[index].hatchedCount || 0) + 4;
            }
        }
    }
}
