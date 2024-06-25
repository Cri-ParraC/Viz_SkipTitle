//=============================================================================
// Viz_SkipTitle.js [MZ] (v1.0.1)
//=============================================================================

/*:
 * @target MZ
 * @plugindesc [MZ] (v1.0.1) Salta la pantalla de título e inicia una nueva partida.
 * @author Vizcacha
 * @version 1.0.1
 * @url https://github.com/Cri-ParraC/Viz_SkipTitle
 * @help Viz_SkipTitle.js [MZ] (v1.0.1)
 * ----------------------------------------------------------------------------
 * Plugin sencillo para RPG Maker MZ que salta la pantalla de título e inicia
 * una nueva partida. Ideal para pruebas rápidas.
 * 
 * Se puede lograr lo mismo activando una opción desde el editor de RPG Maker,
 * en "Juego" => "Omitir pantalla de título".
 */

(() => {
  "use strict";
  console.info("Viz_SkipTitle.js [MZ] (v1.0.1) activado");

  Scene_Boot.prototype.startNormalGame = function () {
    this.checkPlayerLocation();
    DataManager.setupNewGame();
    SceneManager.goto(Scene_Map);
  };
})();