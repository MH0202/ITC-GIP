/*--- Tourist Spot View ---*/

'use strict';

Ext.define('CityApp.view.citizenscience.CitizenScienceView', {
  extend: 'Ext.panel.Panel',
  xtype: 'citizenscienceview',

  requires: ['CityApp.view.citizenscience.CitizenScienceController'],

  itemId: 'citizenscience_view',
  id: 'citizenscience_view',

  controller: 'citizenscience-main',

  layout: 'fit',
  border: false,
  bodyPadding: 2,

  items: [
    {
      xtype: 'panel',
      layout: 'fit',
      id: 'cst_map_panel',
    },
  ],
});
/*--- ---*/
