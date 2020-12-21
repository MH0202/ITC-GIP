/*--- Citizen Science controller ---*/

'use strict';

Ext.define('CityApp.view.citizenscience.CitizenScienceController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.citizenscience-main',

  cstMap: null,

  init: function () {
    CityApp.app.cstCtrl = this;
    this.control({
      citizenscienceview: {
        boxready: 'initializeView',
      },
    });
  },
  /*---*/
  /*- Creates and returns a new ol map object using the given panel -*/
  createMap: function (baseMap, mapPanel) {
    var newMap = new ol.Map();
    newMap.setTarget(Ext.getCmp(mapPanel).body.id);
    console.log(
      'a new empty map object has been created in the "' + mapPanel + '".'
    );

    return newMap;
  },
  /*---*/

  /*- Performs initialization actions after the view has been rendered by the browser -*/
  initializeView: function () {
    this.cstMap = CityApp.app.homeCtrl.createMap(
      'brtachtergrondkaartgrijs',
      'cst_map_panel'
    );
    this.cstMap.getView().setCenter(CityApp.app.cityCoords);
    this.cstMap.getView().setZoom(7);
    
    var cityWMS = new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: "https://gisedu.itc.utwente.nl/cgi-bin/mapserv.exe?map=d:/iishome/student/s2241587/EndProject/app/api/configWMS.map&",
        params: {"LAYERS": "AiREAS", "TILED": true}
      })
    });
    this.cstMap.addLayer(cityWMS);
  },
  /*---*/
});
/*--- ---*/
