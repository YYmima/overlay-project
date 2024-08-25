function customEggMoves(targetIndices) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // eggMoves를 15로 설정, hatchedCount를 4 추가
        if (scene.gameData.starterData[index].eggMoves !== 15) {
            scene.gameData.starterData[index].eggMoves = 15;
            scene.gameData.dexData[index].hatchedCount = (scene.gameData.dexData[index].hatchedCount || 0) + 4;
        }
    }
}

function customEggPointChange(targetIndices, candyIncrease, caughtIncrease) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // candyCount와 caughtCount 증가
        scene.gameData.starterData[index].candyCount = (scene.gameData.starterData[index].candyCount || 0) + candyIncrease;
        scene.gameData.dexData[index].caughtCount = (scene.gameData.dexData[index].caughtCount || 0) + caughtIncrease;
        scene.gameData.dexData[index].seenCount = scene.gameData.dexData[index].caughtCount;
    }
}

function customUnlockAbility(targetIndices) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // abilityAttr을 7로 설정, caughtCount를 3 추가, seenAttr을 caughtAttr과 동일하게 설정
        if (scene.gameData.starterData[index].abilityAttr !== 7) {
            scene.gameData.starterData[index].abilityAttr = 7;
            scene.gameData.dexData[index].caughtCount = (scene.gameData.dexData[index].caughtCount || 0) + 3;
            scene.gameData.dexData[index].seenAttr = scene.gameData.dexData[index].caughtAttr;
        }
    }
}

function customUnlockAllNature(targetIndices) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // natureAttr을 67108862로 설정, caughtCount를 25 추가
        if (scene.gameData.dexData[index].natureAttr !== 67108862) {
            scene.gameData.dexData[index].natureAttr = 67108862;
            scene.gameData.dexData[index].caughtCount = (scene.gameData.dexData[index].caughtCount || 0) + 25;
        }
    }
}

function customUnlock1Shiny(targetIndices) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // caughtAttr을 151n으로 설정, seenAttr 동일, candyCount를 10 추가, hatchedCount를 1 추가
        if (scene.gameData.dexData[index].caughtAttr !== 151n) {
            scene.gameData.dexData[index].caughtAttr = 151n;
            scene.gameData.dexData[index].seenAttr = 151n;
            scene.gameData.starterData[index].candyCount = (scene.gameData.starterData[index].candyCount || 0) + 10;
            scene.gameData.dexData[index].hatchedCount = (scene.gameData.dexData[index].hatchedCount || 0) + 1;
        }
    }
}

function customUnlock2Shiny(targetIndices) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // caughtAttr을 183n으로 설정, seenAttr 동일, candyCount를 20 추가, hatchedCount를 1 추가
        if (scene.gameData.dexData[index].caughtAttr !== 183n) {
            scene.gameData.dexData[index].caughtAttr = 183n;
            scene.gameData.dexData[index].seenAttr = 183n;
            scene.gameData.starterData[index].candyCount = (scene.gameData.starterData[index].candyCount || 0) + 20;
            scene.gameData.dexData[index].hatchedCount = (scene.gameData.dexData[index].hatchedCount || 0) + 1;
        }
    }
}

function customUnlock3Shiny(targetIndices) {
    const canvasPool = Phaser.Display.Canvas.CanvasPool.pool[0];
    const parent = canvasPool.parent;
    const game = parent.game;
    const scene = game.scene.scenes[0];

    if (!scene) {
        return;
    }

    scene.gameData = scene.gameData || {};
    scene.gameData.starterData = scene.gameData.starterData || {};
    scene.gameData.dexData = scene.gameData.dexData || {};

    for (let i = 0; i < targetIndices.length; i++) {
        const index = targetIndices[i];
        scene.gameData.starterData[index] = scene.gameData.starterData[index] || {};
        scene.gameData.dexData[index] = scene.gameData.dexData[index] || {};

        // caughtAttr을 215n으로 설정, seenAttr 동일, candyCount를 40 추가, hatchedCount를 1 추가
        if (scene.gameData.dexData[index].caughtAttr !== 215n) {
            scene.gameData.dexData[index].caughtAttr = 215n;
            scene.gameData.dexData[index].seenAttr = 215n;
            scene.gameData.starterData[index].candyCount = (scene.gameData.starterData[index].candyCount || 0) + 40;
            scene.gameData.dexData[index].hatchedCount = (scene.gameData.dexData[index].hatchedCount || 0) + 1;
        }
    }
}
