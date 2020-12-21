/*--- Transport View ---*/

'use strict';

Ext.define('CityApp.view.journalist.TransportView', {
  extend: 'Ext.panel.Panel',
  xtype: 'journalistview',

  requires: ['CityApp.view.journalist.TransportController'],

  itemId: 'transport_view',
  id: 'transport_view',

  controller: 'transport-main',

  layout: 'fit',
  border: false,
  bodyPadding: 2,

  items: [
    {
      xtype: 'panel',
      layout: 'fit',
      id: 'txp_map_panel',
    },
  ],
});
/*--- ---*/
