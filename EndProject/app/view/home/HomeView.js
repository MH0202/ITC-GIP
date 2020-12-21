/*--- Home view ---*/

'use strict';

Ext.define('CityApp.view.home.HomeView', {
  extend: 'Ext.container.Viewport',

  requires: [
    'CityApp.view.home.HomeController',
    'CityApp.view.tourist.TrouristSpotView',
    'CityApp.view.journalist.TransportView',
    'CityApp.view.citizenscience.CitizenScienceView',
    'CityApp.view.statistics.StatisticsView',
  ],

  controller: 'home-main',

  itemId: 'home_view',
  id: 'home_view',

  padding: 2,
  layout: 'fit',

  items: [
    {
      xtype: 'tabpanel',
      activeTab: 0,
      items: [
        {
          xtype: 'touristspotview',
          title: '&nbsp;&nbsp;Tourist&nbsp;',
        },
        {
          xtype: 'journalistview',
          title: '&nbsp;&nbsp;Journalist&nbsp;',
        },
        {
          xtype: 'citizenscienceview',
          title: '&nbsp;&nbsp;Citizen&nbsp;Scientist&nbsp;&nbsp;',
        },
        {
          xtype: 'statisticsview',
          title: '&nbsp;&nbsp;GI&nbsp;Analyst&nbsp;&nbsp;',
        },
      ],
    },
  ],
});
/*--- ---*/
