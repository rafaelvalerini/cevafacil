angular.module('starter.services', [])

.factory('Profiles', function() {
  var profiles = [{
    id: 1,
    name: 'Antarctica',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 5,
        name: 'Lata 550ml',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/Antarcticalogo.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/Antarcticalogo.png'
      },
    ]
  },
  {
    id: 2,
    name: 'Antarctica Subzero',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/AntarcticaSubzero.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/AntarcticaSubzero.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/AntarcticaSubzero.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/AntarcticaSubzero.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/AntarcticaSubzero.png'
      },
    ]
  },
  {
    id: 3,
    name: 'Antarctica Original',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/original.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/original.png'
      }
    ]
  },
  {
    id: 4,
    name: 'Bohemia',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/bohemia.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/bohemia.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/bohemia.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/bohemia.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/bohemia.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/bohemia.png'
      },
    ]
  },
  {
    id: 5,
    name: 'Brahma',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/brahma.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/brahma.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/brahma.png'
      },
      {
        id: 9,
        name: 'Long Neck Zero',
        logo: 'img/view/brahma.png'
      },
      {
        id: 10,
        name: 'Long Neck Liber',
        logo: 'img/view/brahma.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/brahma.png'
      },
      {
        id: 5,
        name: 'Lata 550ml',
        logo: 'img/view/brahma.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/brahma.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/brahma.png'
      },
       {
        id: 11,
        name: 'Lata 350ml Zero',
        logo: 'img/view/brahma.png'
      },
       {
        id: 12,
        name: 'Lata 350ml Liber',
        logo: 'img/view/brahma.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/brahma.png'
      }
    ]
  },
  {
    id: 6,
    name: 'Brahma Extra',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/brahmaextra.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/brahmaextra.png'
      },
      {
        id: 13,
        name: 'Long Neck Lager',
        logo: 'img/view/brahmaextra.png'
      },
      {
        id: 14,
        name: 'Long Neck Red Lager',
        logo: 'img/view/brahmaextra.png'
      },
      {
        id: 15,
        name: 'Long Neck Weiss',
        logo: 'img/view/brahmaextra.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/brahmaextra.png'
      }
    ]
  },
  {
    id: 7,
    name: 'Brahma Malzbier',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/brahmamalzbier.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/brahmamalzbier.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/brahmamalzbier.png'
      }
    ]
  },
  {
    id: 8,
    name: 'Caracu',
    sizes: [
     
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/caracu.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/caracu.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/caracu.png'
      }
    ]
  },{
    id: 9,
    name: 'Skol',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/skol.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/skol.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/skol.png'
      },
      {
        id: 16,
        name: 'Big Neck',
        logo: 'img/view/skol.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/skol.png'
      },
      {
        id: 5,
        name: 'Lata 550ml',
        logo: 'img/view/skol.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/skol.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/skol.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/skol.png'
      },
      {
        id: 17,
        name: 'Chopp 5 litros',
        logo: 'img/view/skol.png'
      }
    ]
  },
  {
    id: 10,
    name: 'Skol 360',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/skol360.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/skol360.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/skol360.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/skol360.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/skol360.png'
      }
    ]
  },
  {
    id: 11,
    name: 'Skol Beats',
    sizes: [
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 17,
        name: 'Long Neck Extreme (Escura)',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 18,
        name: 'Long Neck Senses (Azul)',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 19,
        name: 'Long Neck Spirit (Verde)',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 20,
        name: 'Lata 269ml Extreme (Escura)',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 21,
        name: 'Lata 269ml Senses (Azul)',
        logo: 'img/view/skolbeats.png'
      },
      {
        id: 22,
        name: 'Lata 269ml Spirit (Verde)',
        logo: 'img/view/skolbeats.png'
      }
    ]
  },
  {
    id: 12,
    name: 'Skol Ultra',
    sizes: [
      {
        id: 23,
        name: 'Long Neck 275ml',
        logo: 'img/view/skolultra.png'
      },
      {
        id: 24,
        name: 'Lata 310ml',
        logo: 'img/view/skolultra.png'
      }
    ]
  },
  {
    id: 13,
    name: 'Budweiser',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/budweiser.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/budweiser.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/budweiser.png'
      },
      {
        id: 25,
        name: 'Alumínio 473ml',
        logo: 'img/view/budweiser.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/budweiser.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/budweiser.png'
      }
    ]
  },
  {
    id: 14,
    name: 'Stella Artois',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/stella.png'
      },
      {
        id: 23,
        name: 'Long Neck 275ml',
        logo: 'img/view/stella.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/stella.png'
      }
    ]
  },
  {
  id: 15,
    name: 'Heineken',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/heineken.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/heineken.png'
      },
      {
        id: 25,
        name: 'Shot 250 ml',
        logo: 'img/view/heineken.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/heineken.png'
      },
      {
        id: 26,
        name: 'Barril 5 Litros',
        logo: 'img/view/heineken.png'
      }
    ]
  },
  {
  id: 16,
    name: 'Corona',
    sizes: [
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/corona.png'
      }
    ]
  },
  {
  id: 17,
    name: 'Bavaria',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/bavaria.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/bavaria.png'
      },
      {
        id: 28,
        name: 'Long Neck sem álcool',
        logo: 'img/view/bavaria.png'
      },
      {
        id: 25,
        name: 'Shot 250 ml',
        logo: 'img/view/bavaria.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/bavaria.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/bavaria.png'
      },
      {
        id: 29,
        name: 'Lata 350ml sem álcool',
        logo: 'img/view/bavaria.png'
      }
    ]
  },
{
  id: 18,
    name: 'Crystal',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/crystal.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/crystal.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/crystal.png'
      },
      {
        id: 25,
        name: 'Shot 250 ml',
        logo: 'img/view/crystal.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/crystal.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/crystal.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/crystal.png'
      }
    ]
  },
  {
  id: 19,
    name: 'Devassa',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/devassa.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/devassa.png'
      },
      {
        id: 29,
        name: 'Long Neck Lager',
        logo: 'img/view/devassa.png'
      },
      {
        id: 30,
        name: 'Long Neck Pale Ale',
        logo: 'img/view/devassa.png'
      },
      {
        id: 31,
        name: 'Long Neck Dark Ale',
        logo: 'img/view/devassa.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/devassa.png'
      },
       {
        id: 32,
        name: 'Garrafa 275ml',
        logo: 'img/view/devassa.png'
      },
      {
        id: 6,
        name: 'Lata 473ml',
        logo: 'img/view/devassa.png'
      },
      {
        id: 7,
        name: 'Lata 350ml',
        logo: 'img/view/devassa.png'
      },
      {
        id: 8,
        name: 'Lata 269ml',
        logo: 'img/view/devassa.png'
      }
    ]
  },
  {
  id: 20,
    name: 'Germania',
    sizes: [
      {
        id: 1,
        name: 'Garrafa Aluminio 330 ml',
        logo: 'img/view/germania.png'
      },
      {
        id: 2,
        name: 'Chopp 5 Litros',
        logo: 'img/view/germania.png'
      },
      {
        id: 29,
        name: 'Lata 710 ml',
        logo: 'img/view/germania.png'
      },
      {
        id: 29,
        name: 'Lata 710 ml Black',
        logo: 'img/view/germania.png'
      },
      {
        id: 30,
        name: 'Lata 355 ml',
        logo: 'img/view/germania.png'
      },
      {
        id: 31,
        name: 'Lata 356 ml Black',
        logo: 'img/view/germania.png'
      }
    ]
  },
  {
  id: 21,
    name: 'Itaipava',
    sizes: [
      {
        id: 1,
        name: 'Garrafa 1 Litro',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 3,
        name: 'Garrafa 600 ml Premium',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 4,
        name: 'Garrafa 600 ml Malzbier',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 5,
        name: 'Longneck 355 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 6,
        name: 'Longneck 355 ml Premium',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 7,
        name: 'Longneck 355 ml Zero',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 8,
        name: 'Longneck 355 ml Malzbier',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 9,
        name: 'Longneck 350 ml Fest',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 10,
        name: 'Garrafa 300 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 11,
        name: 'Garrafa 250 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 12,
        name: 'Garrafa 250 ml Light',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 13,
        name: 'Lata 550 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 14,
        name: 'Lata 473 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 15,
        name: 'Lata 350 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 16,
        name: 'Lata 350 ml Premium',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 17,
        name: 'Lata 350 ml Light',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 18,
        name: 'Lata 350 ml Zero',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 19,
        name: 'Lata 350 ml Malzbier',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 20,
        name: 'Lata 269 ml',
        logo: 'img/view/itaipava.png'
      },
      {
        id: 21,
        name: 'Lata 269 ml Zero',
        logo: 'img/view/itaipava.png'
      }
    ]
  }, 
  {
  id: 22,
    name: 'Kaiser',
    sizes: [
      {
        id: 1,
        name: 'Garrafa 1 Litro',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 3,
        name: 'Long Neck Summer Draft',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 4,
        name: 'Shot 250 ml',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 5,
        name: 'Shot 250 ml Radler Limão',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 6,
        name: 'Shot 250 ml Radler Tangerina',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 7,
        name: 'Chopp 5 Litros',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 8,
        name: 'Lata 473 m',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 9,
        name: 'Lata 350 ml',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 10,
        name: 'Lata 350 ml Radler Limão',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 11,
        name: 'Lata 350 ml Summer',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 12,
        name: 'Lata 269 ml',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 13,
        name: 'Lata 269 ml Radler Limão',
        logo: 'img/view/kaiser.png'
      },
      {
        id: 14,
        name: 'Lata 269 ml Summer',
        logo: 'img/view/kaiser.png'
      }
    ]
  },

{
  id: 23,
    name: 'Miller',
    sizes: [
      {
        id: 1,
        name: 'Longneck 355 ml',
        logo: 'img/view/miller.png'
      },
      {
        id: 2,
        name: 'Lata 350ml',
        logo: 'img/view/miller.png'
      },
      {
        id: 3,
        name: 'Lata 269ml',
        logo: 'img/view/miller.png'
      }
    ]
  },
  {
  id: 24,
    name: 'Schin',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/schin.png'
      },
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/schin.png'
      },
      {
        id: 3,
        name: 'Long Neck',
        logo: 'img/view/schin.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/schin.png'
      },
      {
        id: 5,
        name: 'Lata 473ml',
        logo: 'img/view/schin.png'
      },
      {
        id: 6,
        name: 'Lata 350ml',
        logo: 'img/view/schin.png'
      },
      {
        id: 7,
        name: 'Lata 269ml',
        logo: 'img/view/schin.png'
      }
    ]
  },
  {
    id: 25,
    name: 'SerraMalte',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600ml',
        logo: 'img/view/serramalte.png'
      },
      {
        id: 4,
        name: 'Garrafa 300ml',
        logo: 'img/view/serramalte.png'
      }
    ]
  }, 
  {
    id: 26,
    name: 'Sol',
    sizes: [
      {
        id: 1,
        name: 'Long Neck 355 ml',
        logo: 'img/view/sol.png'
      },
      {
        id: 2,
        name: 'Long Neck 355 ml Mexicana',
        logo: 'img/view/sol.png'
      },
      {
        id: 3,
        name: 'Shot 250ml',
        logo: 'img/view/sol.png'
      },
      {
        id: 4,
        name: 'Lata 350ml',
        logo: 'img/view/sol.png'
      }
    ]
  },
  {
    id: 27,
    name: 'Xingu',
    sizes: [
      {
        id: 1,
        name: 'Longneck 355 ml Original Black (Sweet Stout)',
        logo: 'img/view/xingu.png'
      },
      {
        id: 2,
        name: 'Longneck 355 ml Premium Gold (American Lager)',
        logo: 'img/view/xingu.png'
      },
      {
        id: 3,
        name: 'Longneck 355 ml Unique Red (Red Lager)',
        logo: 'img/view/xingu.png'
      },
      {
        id: 4,
        name: 'Lata 350 ml Original Black (Sweet Stout)',
        logo: 'img/view/xingu.png'
      }
    ]
  }, 
  {
  id: 28,
    name: 'Schin No Grau',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/schinnograu.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/schinnograu.png'
      },
      {
        id: 3,
        name: 'Lata 473 ml',
        logo: 'img/view/schinnograu.png'
      },
      {
        id: 4,
        name: 'Lata 350 ml',
        logo: 'img/view/schinnograu.png'
      },
      {
        id: 5,
        name: 'Lata 269 ml',
        logo: 'img/view/schinnograu.png'
      }
    ]
  },
  {
  id: 29,
    name: 'Glacial',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/glacial.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/glacial.png'
      },
      {
        id: 2,
        name: 'Garrafa 300 ml',
        logo: 'img/view/glacial.png'
      },
      {
        id: 3,
        name: 'Lata 473 ml',
        logo: 'img/view/glacial.png'
      },
      {
        id: 4,
        name: 'Lata 350 ml',
        logo: 'img/view/glacial.png'
      }
    ]
  },
  {
    id: 30,
    name: 'Cintra',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/cintra.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/cintra.png'
      },
      {
        id: 3,
        name: 'Lata 473 ml',
        logo: 'img/view/cintra.png'
      },
      {
        id: 4,
        name: 'Lata 350 ml',
        logo: 'img/view/cintra.png'
      }
    ]
  },
  {
  id: 31,
    name: 'Petra',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/petra.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/petra.png'
      },
      {
        id: 3,
        name: 'Garrafa 500 ml Aurum',
        logo: 'img/view/petra.png'
      },
      {
        id: 4,
        name: 'Garrafa 500 ml Weiss Bier ',
        logo: 'img/view/petra.png'
      },
      {
        id: 5,
        name: 'Garrafa 500 ml Shuwarzbier ',
        logo: 'img/view/petra.png'
      },
      {
        id: 6,
        name: 'Garrafa 500 ml Bock',
        logo: 'img/view/petra.png'
      },
      {
        id: 7,
        name: 'Garrafa 500 ml Stark Bier',
        logo: 'img/view/petra.png'
      },
      {
        id: 8,
        name: 'Long Neck 355 ml',
        logo: 'img/view/petra.png'
      },
      {
        id: 9,
        name: 'Long Neck 355 ml Escura Premium',
        logo: 'img/view/petra.png'
      },
      {
        id: 10,
        name: 'Chopp 5 litros Aurum',
        logo: 'img/view/petra.png'
      },
      {
        id: 11,
        name: 'Chopp 5 litros Weiss Bier',
        logo: 'img/view/petra.png'
      },
      {
        id: 12,
        name: 'Chopp 5 litros Shuwarzbier ',
        logo: 'img/view/petra.png'
      },
      {
        id: 13,
        name: 'Lata 350ml',
        logo: 'img/view/petra.png'
      },
      {
        id: 14,
        name: 'Lata 269ml',
        logo: 'img/view/petra.png'
      }
    ]
  },
  {
    id: 32,
    name: 'Proibida',
    sizes: [
      {
        id: 1,
        name: 'Litrão',
        logo: 'img/view/proibida.png'
      },
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/proibida.png'
      },
      {
        id: 3,
        name: 'Garrafa 600 ml Puro Malte',
        logo: 'img/view/proibida.png'
      },
      {
        id: 4,
        name: 'Long Neck 355 ml',
        logo: 'img/view/proibida.png'
      },
      {
        id: 4,
        name: 'Garrafa 330 Puro Malte',
        logo: 'img/view/proibida.png'
      },
      {
        id: 4,
        name: 'Garrafa 300 ml',
        logo: 'img/view/proibida.png'
      },
      {
        id: 4,
        name: 'Lata 473 ml',
        logo: 'img/view/proibida.png'
      },
      {
        id: 4,
        name: 'Lata 355 ml Puro Malte',
        logo: 'img/view/proibida.png'
      },
      {
        id: 4,
        name: 'Lata 69',
        logo: 'img/view/proibida.png'
      }
    ]
  },

{
  id: 33,
    name: 'Amstel',
    sizes: [
      {
        id: 2,
        name: 'Garrafa 600 ml',
        logo: 'img/view/amstel.png'
      },
      {
        id: 4,
        name: 'Long Neck 330 ml',
        logo: 'img/view/amstel.png'
      },
      {
        id: 4,
        name: 'Lata 350 ml',
        logo: 'img/view/amstel.png'
      }
    ]
  },
  {
    id: 34,
    name: 'Birra Moretti',
    sizes: [
      {
        id: 1,
        name: 'Longneck 330 ml',
        logo: 'img/view/birramoretti.png'
      }
    ]
  },
  {
    id: 35,
    name: 'Desperados',
    sizes: [
      {
        id: 1,
        name: 'Longneck 330 ml',
        logo: 'img/view/desperados.png'
      }
    ]
  },
  {
    id: 36,
    name: 'Dos Esquis XX',
    sizes: [
      {
        id: 1,
        name: 'Longneck 355 ml',
        logo: 'img/view/dosesquisXX.png'
      }
    ]
  },
  {
    id: 37,
    name: 'Quilmes',
    sizes: [
      {
        id: 1,
        name: 'Garrafa 970 ml',
        logo: 'img/view/quilmes.png'
      }
    ]
  }
  ];

  return {
    all: function() {
      return profiles;
    },
    remove: function(id) {
      profiles.splice(profiles.indexOf(id), 1);
    },
    get: function(profileId) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === parseInt(profileId)) {
          return profiles[i];
        }
      }
      return null;
    }
  };
})

.factory('Results', function() {
    var results = [
      {
        id: 1,
        name: 'Supermercado Tonim',
        value: 'R$ 1,80',
        img: 'img/view/Antarcticalogo.png',
        distance: '2.5km',
        description: 'Supermercado com bom atendimento e ótimos valores. Venha conferir!',
        businessHours: [
          'seg à sex: 08:00 as 18:00','domingo: 10:00 as 16:00' 
        ],
        lat: -20.5342072,
        lng: -47.4311989,
        cards: ['visa', 'master', 'amex'],
        address: 'Av. Champagnat, 2222 - Jardim Veneza,Franca - SP,14403-050'
      },
      {
        id: 2,
        name: 'Posto Travessia',
        value: 'R$ 1,49',
        img: 'img/view/Antarcticalogo.png',
        distance: '4.5km',
        description: 'Supermercado com bom atendimento e ótimos valores. Venha conferir!',
        businessHours: [
          'seg à sex: 08:00 as 18:00','domingo: 10:00 as 16:00' 
        ],
        lat: -20.5688818,
        lng: -47.3959492,
        cards: ['visa', 'master', 'amex'],
        address: 'Av. Reinaldo Chioca, 2000 - Jardim Alvorada,Franca - SP,14403-085'
      },
      {
        id: 3,
        name: 'Posto Select',
        value: 'R$ 1,50',
        img: 'img/view/Antarcticalogo.png',
        distance: '5.5km',
        description: 'Supermercado com bom atendimento e ótimos valores. Venha conferir!',
        businessHours: [
          'seg à sex: 08:00 as 18:00','domingo: 10:00 as 16:00' 
        ],
        lat: -20.5677732,
        lng: -47.4108705,
        cards: ['visa', 'master', 'amex'],
        address: 'Av. Dr. Ismael Alonso Y Alonso, 203 - Jardim Veneza,Franca - SP,14400-770'
      }
    ];

    return {
      all: function() {
        return results;
      },
      remove: function(id) {
        results.splice(results.indexOf(id), 1);
      },
      get: function(profileId) {
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === parseInt(profileId)) {
            return results[i];
          }
        }
        return null;
      },
      select: function(id, size, company) {
        for (var i = 0; i < results.length; i++) {
          if (results[i].id === parseInt(id)) {
            return results[i];
          }
        }
        return null;
      },
      find: function(id, size){
        return results;
      }
    };
})

.factory('Beer', function() {
    var beers = [
    {
      order: 1,
      types: [
        {
          id: 1,
          img: 'img/btns/Antartica.png',
        },
        {
          id: 2,
          img: 'img/btns/subzero.png',
        },
        {
          id: 3,
          img: 'img/btns/Original.png',
        },
        {
          id: 4,
          img: 'img/btns/Bohemia.png',
        }
      ]
    },
    {
      order: 2,
      types: [
        {
          id: 9,
          img: 'img/btns/Skol.png',
        },
        {
          id: 10,
          img: 'img/btns/Skol360.png',
        },
        {
          id: 11,
          img: 'img/btns/SkolBeats.png',
        },
        {
          id: 12,
          img: 'img/btns/SkolUltra.png',
        }
      ]
    },
    {
      order: 3,
      types: [
        {
          id: 5,
          img: 'img/btns/Brahma.png',
        },
        {
          id: 6,
          img: 'img/btns/brahmaextra.png',
        },
        {
          id: 7,
          img: 'img/btns/brahmamalzebier.png',
        },
        {
          id: 8,
          img: 'img/btns/caracu.png',
        }
      ]
    },
    {
      order: 4,
      types: [
        {
          id: 13,
          img: 'img/btns/Bud.png',
        },
        {
          id: 14,
          img: 'img/btns/Stella.png',
        },
        {
          id: 15,
          img: 'img/btns/Heineken.png',
        },
        {
          id: 16,
          img: 'img/btns/corona100.png',
        }
      ]
    },
    {
      order: 5,
      types: [
        {
          id: 18,
          img: 'img/btns/Crystal.png',
        },
        {
          id: 19,
          img: 'img/btns/Devassa.png',
        },
        {
          id: 21,
          img: 'img/btns/Itaipava.png',
        },
        {
          id: 24,
          img: 'img/btns/Schin.png',
        }
      ]
    },
    {
      order: 6,
      types: [
        {
          id: 23,
          img: 'img/btns/Miller.png',
        },
        {
          id: 25,
          img: 'img/btns/serramalte.png',
        },
        {
          id: 26,
          img: 'img/btns/Sol.png',
        },
        {
          id: 17,
          img: 'img/btns/Bavaria.png',
        }
      ]
    },
    {
      order: 7,
      types: [
        {
          id: 20,
          img: 'img/btns/Germania.png',
        },
        {
          id: 22,
          img: 'img/btns/Kaiser.png',
        },
        {
          id: 33,
          img: 'img/btns/Amstel.png',
        },
        {
          id: 34,
          img: 'img/btns/BirraMoretti.png',
        }
      ]
    },
    {
      order: 8,
      types: [
        {
          id: 35,
          img: 'img/btns/Desperados.png',
        },
        {
          id: 36,
          img: 'img/btns/DosEsquisXX.png',
        },
        {
          id: 29,
          img: 'img/btns/Glacial.png',
        },
        {
          id: 31,
          img: 'img/btns/Petra.png',
        }
      ]
    },
    {
      order: 9,
      types: [
        {
          id: 32,
          img: 'img/btns/Proibida.png',
        },
        {
          id: 37,
          img: 'img/btns/Quilmes.png',
        },
        {
          id: 28,
          img: 'img/btns/Schinnograu.png',
        },
        {
          id: 27,
          img: 'img/btns/Xingu.png',
        }
      ]
    }
    ];

    return {
      all: function() {
        return beers;
      }
    };
})

.factory('Meet', function() {
    var meets = [
      {
        id: 1,
        name: 'Bovina',
        types: [
          {
            id: 1,
            name: 'Acem',
            logo: 'img/view/ox/acem.png'
          },
          {
            id: 2,
            name: 'Alcatra',
            logo: 'img/view/ox/alcatra.png'
          },
          {
            id: 3,
            name: 'Alcatra - Miolo',
            logo: 'img/view/ox/alcatra_miolo.png'
          },
          {
            id: 4,
            name: 'Bisteca',
            logo: 'img/view/ox/bisteca.png'
          },
          {
            id: 5,
            name: 'Carne Seca',
            logo: 'img/view/ox/carneseca.png'
          },
          {
            id: 6,
            name: 'Contra Filé',
            logo: 'img/view/ox/contrafile.png'
          },
          {
            id: 7,
            name: 'Costela Inteira',
            logo: 'img/view/ox/costelainteira.png'
          },
          {
            id: 9,
            name: 'Cosatela Ponta de Agulha',
            logo: 'img/view/ox/costelapontadeagulha.png'
          },
          {
            id: 10,
            name: 'Costela Ripa',
            logo: 'img/view/ox/costelaripa.png'
          },
          {
            id: 11,
            name: 'Coxão Duro',
            logo: 'img/view/ox/coxaoduro.png'
          },
          {
            id: 12,
            name: 'Coxão Mole',
            logo: 'img/view/ox/coxaomole.png'
          },
          {
            id: 13,
            name: 'Coxão Mole - Capa',
            logo: 'img/view/ox/coxaomole_capa.png'
          },
          {
            id: 14,
            name: 'Cupim',
            logo: 'img/view/ox/cupim.png'
          },
          {
            id: 15,
            name: 'Fígado',
            logo: 'img/view/ox/figado.png'
          },
          {
            id: 16,
            name: 'Filé Mignon',
            logo: 'img/view/ox/filemignon.png'
          },
          {
            id: 17,
            name: 'Fraldinha',
            logo: 'img/view/ox/fraldinha.png'
          },
          {
            id: 18,
            name: 'Lagarto',
            logo: 'img/view/ox/lagarto.png'
          },
          {
            id: 19,
            name: 'Língua',
            logo: 'img/view/ox/lingua.png'
          },
          {
            id: 20,
            name: 'Maminha',
            logo: 'img/view/ox/maminha.png'
          },
          {
            id: 21,
            name: 'Músculo Dianteiro',
            logo: 'img/view/ox/musculodianteiro.png'
          },
          {
            id: 22,
            name: 'Músculo Traseiro',
            logo: 'img/view/ox/musculotraseiro.png'
          },
          {
            id: 23,
            name: 'Ossobuco',
            logo: 'img/view/ox/ossobuco.png'
          },
          {
            id: 24,
            name: 'Paleta',
            logo: 'img/view/ox/paleta.png'
          },
          {
            id: 25,
            name: 'Paleta Miolo',
            logo: 'img/view/ox/paleta_miolo.png'
          },
          {
            id: 26,
            name: 'Patinho',
            logo: 'img/view/ox/patinho.png'
          },
          {
            id: 27,
            name: 'Peito',
            logo: 'img/view/ox/peito.png'
          },
          {
            id: 28,
            name: 'Peixinho',
            logo: 'img/view/ox/peixinho.png'
          },
          {
            id: 29,
            name: 'Pescoço',
            logo: 'img/view/ox/pescoco.png'
          },
          {
            id: 30,
            name: 'Picanha',
            logo: 'img/view/ox/picanha.png'
          },
          {
            id: 31,
            name: 'Ponta de Peito',
            logo: 'img/view/ox/pontadepeito.png'
          },
          {
            id: 32,
            name: 'Rabada',
            logo: 'img/view/ox/rabada.png'
          },
          {
            id: 33,
            name: 'Rabo',
            logo: 'img/view/ox/rabo.png'
          }
        ]
      },
      {
        id: 2,
        name: 'Frango',
        types: [
          {
            id: 1,
            name: 'Asa',
            logo: 'img/view/chicken/asa.png'
          },
          {
            id: 2,
            name: 'Coração',
            logo: 'img/view/chicken/coracao.png'
          },
          {
            id: 3,
            name: 'Coxa',
            logo: 'img/view/chicken/coxa.png'
          },
          {
            id: 4,
            name: 'Coxa e Sobrecoxa',
            logo: 'img/view/chicken/coxasobrecoxa.png'
          },
          {
            id: 16,
            name: 'Coxinha da Asa (Drumet)',
            logo: 'img/view/chicken/coxasobrecoxa.png'
          },
          {
            id: 5,
            name: 'Dorso',
            logo: 'img/view/chicken/dorso.png'
          },
          {
            id: 6,
            name: 'Fígado',
            logo: 'img/view/chicken/figado.png'
          },
          {
            id: 7,
            name: 'Filé',
            logo: 'img/view/chicken/file.png'
          },
          {
            id: 8,
            name: 'Filézinho',
            logo: 'img/view/chicken/filezinho.png'
          },
          {
            id: 9,
            name: 'Frango inteiro',
            logo: 'img/view/chicken/frangointeiro.png'
          },
          {
            id: 16,
            name: 'Meio da Asa (Tulipa)',
            logo: 'img/view/chicken/tulipameiodaasa.png'
          },
          {
            id: 10,
            name: 'Moela',
            logo: 'img/view/chicken/moela.png'
          },
          {
            id: 11,
            name: 'Pé',
            logo: 'img/view/chicken/pe.png'
          },
          {
            id: 12,
            name: 'Peito',
            logo: 'img/view/chicken/peito.png'
          },
          {
            id: 17,
            name: 'Peito com Osso',
            logo: 'img/view/chicken/peito.png'
          },
          {
            id: 13,
            name: 'Pescoço',
            logo: 'img/view/chicken/pescoco.png'
          },
          {
            id: 14,
            name: 'Sobrecoxa',
            logo: 'img/view/chicken/sobrecoxa.png'
          },
          {
            id: 15,
            name: 'Sobrecoxa Desossada',
            logo: 'img/view/chicken/sobrecoxadesossada.png'
          }
        ]
      },
      {
        id: 3,
        name: 'Suína',
        types: [
          {
            id: 2,
            name: 'Bisteca',
            logo: 'img/view/meet/bisteca.png'
          },
          {
            id: 3,
            name: 'Capa do Lombo',
            logo: 'img/view/meet/copa_lombo.png'
          },
          {
            id: 4,
            name: 'Costela',
            logo: 'img/view/meet/costela.png'
          },
          {
            id: 5,
            name: 'Coxão Duro',
            logo: 'img/view/meet/coxao_duro.png'
          },
          {
            id: 6,
            name: 'Filé Mignon',
            logo: 'img/view/meet/file_mignon.png'
          },
          {
            id: 8,
            name: 'Fraldinha',
            logo: 'img/view/meet/fraldinha.png'
          },
          {
            id: 9,
            name: 'Joelho',
            logo: 'img/view/meet/joelho.png'
          },
          {
            id: 10,
            name: 'Lombo',
            logo: 'img/view/meet/lombo.png'
          },
          {
            id: 11,
            name: 'Maminha',
            logo: 'img/view/meet/maminha.png'
          },
          {
            id: 7,
            name: 'Máscara',
            logo: 'img/view/meet/focinho.png'
          },
          {
            id: 13,
            name: 'Paleta',
            logo: 'img/view/meet/paleta.png'
          },
          {
            id: 14,
            name: 'Panceta',
            logo: 'img/view/meet/panceta.png'
          },
          {
            id: 15,
            name: 'Papada',
            logo: 'img/view/meet/papada.png'
          },
          {
            id: 16,
            name: 'Pé',
            logo: 'img/view/meet/pe.png'
          },
          {
            id: 17,
            name: 'Pernil',
            logo: 'img/view/meet/pernil.png'
          },
          {
            id: 18,
            name: 'Picanha',
            logo: 'img/view/meet/picanha.png'
          },
          {
            id: 19,
            name: 'Rabo',
            logo: 'img/view/meet/rabo.png'
          },
          {
            id: 20,
            name: 'Suã',
            logo: 'img/view/meet/sua.png'
          },
          {
            id: 21,
            name: 'Toucinho',
            logo: 'img/view/meet/toucinho.png'
          },
          {
            id: 22,
            name: 'Toucinho p/ Torresmo',
            logo: 'img/view/meet/toucinho.png'
          }
        ]
      }
    ];

    return {
      all: function() {
        return beers;
      },
      get: function(profileId) {
        for (var i = 0; i < meets.length; i++) {
          if (meets[i].id === parseInt(profileId)) {
            return meets[i];
          }
        }
        return null;
      }
    };
});
