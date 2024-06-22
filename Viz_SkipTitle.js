//=============================================================================
// Viz_SkipTitle.js [MZ] (v1.0.0)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.0.0) Salta la pantalla de título e inicia una nueva partida.
 * @author Vizcacha
 * @version 1.0.0
 * @url https://github.com/Cri-ParraC/
 * @help Viz_SkipTitle.js [MZ] (v1.0.0)
 * 
 * Plugin sencillo para RPG Maker MZ que se salta la pantalla de título e inicia
 * una nueva partida. Ideal para pruebas rápidas.
 */

(() => {
  "use strict";
  console.info("Viz_SkipTitle.js [MZ] (v1.0.0) activado");

  Scene_Boot.prototype.startNormalGame = function () {
    this.checkPlayerLocation();
    DataManager.setupNewGame();
    SceneManager.goto(Scene_Map);
  };
})();