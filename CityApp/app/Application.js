/**
 * The main application class. An instance of this class is created by the init.js  script
 * when it calls Ext.app.application(). This is the ideal place to handle application launch
 * and initialization details.
 */

'use strict';

Ext.define('CityApp.Application', {
  extend: 'Ext.app.Application',
  appFolder: 'app',

  requires: ['CityApp.store.Districts', 'CityApp.store.Colors'],

  stores: ['Districts', 'Colors'],

  homeCtrl: null,
  stsCtrl: null,
  txpCtrl: null,

  cityName: 'Delft',
  cityCoords: [
    84241,
    446597,
  ] /* Coordinates of a central point in Delft EPSG:28992 */,

  launch: function () {},
});
/*--- ---*/
