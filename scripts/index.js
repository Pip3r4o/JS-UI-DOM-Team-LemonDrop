var Conjurer = Conjurer || {};

require(['game', 'mainMenu', 'boot', 'preload', 'constants', 'uiUpdater'],
function (Game, MainMenu, Boot, Preload, CONSTNTS, uiUpdater) {
	var game = new Phaser.Game(1024, 512, Phaser.AUTO, '');

	game.state.add('Boot', Boot.Boot);
	game.state.add('Preload', Preload.Preload);
	game.state.add('MainMenu', MainMenu.MainMenu);
	game.state.add('Game', Game.Game);

	game.state.start('Boot');

	return game;
});