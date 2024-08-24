function unlockAbility() {
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
            // abilityAttr을 7로 설정, 변경 시 caughtCount를 3 추가, seenAttr을 caughtAttr과 동일하게 설정
            if (scene.gameData.starterData[i].abilityAttr !== 7) {
                scene.gameData.starterData[i].abilityAttr = 7;
                scene.gameData.dexData[i].caughtCount = (scene.gameData.dexData[i].caughtCount || 0) + 3;
                scene.gameData.dexData[i].seenAttr = scene.gameData.dexData[i].caughtAttr;
            }
        }
    }
}
