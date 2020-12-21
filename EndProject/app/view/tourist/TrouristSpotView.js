/*--- Tourist Spot View ---*/

'use strict';

Ext.define('CityApp.view.tourist.TrouristSpotView', {
  extend: 'Ext.panel.Panel',
  xtype: 'touristspotview',

  requires: ['CityApp.view.tourist.TrouristSpotController'],

  itemId: 'trouristspot_view',
  id: 'trouristspot_view',

  controller: 'trouristspot-main',

  layout: 'fit',
  border: false,
  bodyPadding: 2,

  items: [
    {
      xtype: 'panel',
      layout: 'fit',
      id: 'tst_map_panel',
    },
  ],
});
/*--- ---*/
