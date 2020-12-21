/*--- Trourist Spot controller ---*/

'use strict';

Ext.define('CityApp.view.tourist.TrouristSpotController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.trouristspot-main',

  tstMap: null,
  geocoder: null,

  init: function () {
    CityApp.app.tstCtrl = this;
    this.control({
      touristspotview: {
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
    this.tstMap = CityApp.app.homeCtrl.createMap(
      'brtachtergrondkaartgrijs',
      'tst_map_panel'
    );
    var raster = new ol.layer.Tile({
      source: new ol.source.OSM(),
    });
    
    this.tstMap.addLayer(raster);
    this.tstMap.getView().setCenter(CityApp.app.cityCoords);
    this.tstMap.getView().setZoom(7);

    //Instantiate with some options and add the Control
    var geocoder = new Geocoder('nominatim', {
      provider: 'osm', //change it here
      lang: 'en-US',
      placeholder: 'Search for ...',
      targetType: 'text-input',
      limit: 5,
      keepOpen: true,
    });
    this.tstMap.addControl(geocoder);

    // I don't want/need Geocoder layer to be visible
    geocoder.getLayer().setVisible(false);

    //Listen when an address is chosen
    geocoder.on('addresschosen', function (evt) {
      var feature = evt.feature;
      var coord = evt.coordinate;

      // application specific
      this.tstMap.addMarker(feature, coord);
    });
  },
});
