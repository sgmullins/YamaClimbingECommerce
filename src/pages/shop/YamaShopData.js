const HexStickerPrice = (3.1).toFixed(2);
const priceWithDecimals = (num) => num.toFixed(2);

//TODO:Will probably need to convert items from array into an object to render individual item pages later
const YAMA_SHOP_DATA = {
  maps: {
    id: 1,
    title: 'Maps',
    routeName: 'maps',
    items: [
      {
        id: 101,
        name: 'Hueco Tanks Illustrated Map',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/cab032/2196469359/il_794xN.2196469359_clmw.jpg',
        price: priceWithDecimals(20.0),
      },
      {
        id: 102,
        name: 'Ten Sleep Illustrated Map',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/822e9c/1173989598/il_794xN.1173989598_kn61.jpg',
        price: priceWithDecimals(20.0),
      },
    ],
  },
  climbhike: {
    id: 2,
    title: 'Climb and Hike',
    routeName: 'climbHike',
    items: [
      {
        id: 1,
        name: 'Rock Town',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/8b8d15/2302800837/il_794xN.2302800837_drs9.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 2,
        name: 'Rocky Mountain NP',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/cd72d7/2229245041/il_794xN.2229245041_d650.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 3,
        name: 'Smith Rock',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/936480/2206065561/il_794xN.2206065561_5zqo.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 4,
        name: "Angel's Landing",
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/7a1e05/1990280779/il_794xN.1990280779_c2wl.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 5,
        name: 'Potrero Chico',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/13bb3f/1936361465/il_794xN.1936361465_ito8.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 6,
        name: 'Red Rocks',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/a67d9d/1492685718/il_794xN.1492685718_6qu8.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 7,
        name: 'Yosemite',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/f7f13c/1531079109/il_794xN.1531079109_e6r0.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 8,
        name: 'Red River Gorge',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/442961/1738348279/il_794xN.1738348279_rgsz.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 9,
        name: 'Joshua Tree',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/724a34/1445976654/il_794xN.1445976654_gyrs.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 10,
        name: 'Bishop',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/d0c031/1481235363/il_794xN.1481235363_hfh6.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 11,
        name: 'Indian Creek',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/edc17d/1867823818/il_794xN.1867823818_488m.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 12,
        name: 'Zion National Park',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/f61f11/1990319629/il_794xN.1990319629_48s1.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 13,
        name: 'Moab',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/636bae/1990315727/il_794xN.1990315727_mlvz.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 14,
        name: 'Arches National Park',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/09247c/1942759660/il_794xN.1942759660_lakr.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 15,
        name: "Joe's Valley",
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/f0a126/2144939413/il_794xN.2144939413_cdn0.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 16,
        name: 'Ten Sleep',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/c2c50e/1568739786/il_794xN.1568739786_gko3.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 17,
        name: 'Tramway',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/009ea9/2144948089/il_794xN.2144948089_o8eh.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 18,
        name: 'Hueco',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/c4edfd/1481185841/il_794xN.1481185841_qkk5.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 19,
        name: 'Rifle Mountain Park',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/f71f80/2097375036/il_794xN.2097375036_apsq.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 21,
        name: 'Fontainebleau',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/37a043/1860710046/il_794xN.1860710046_r74f.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 22,
        name: 'Magic Wood',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/fcdbe2/2144955383/il_794xN.2144955383_i2qc.jpg',
        price: `${HexStickerPrice}`,
      },
      {
        id: 23,
        name: 'Climber',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/fb68d5/1373515606/il_794xN.1373515606_tibo.jpg',
        price: priceWithDecimals(5.0),
      },
      {
        id: 24,
        name: 'No.1 Belayer Tan Color',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/f00c79/1420220353/il_794xN.1420220353_k1j0.jpg',
        price: priceWithDecimals(5.0),
      },
      {
        id: 25,
        name: 'No.1 Belayer Pink Color',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/366258/1431235065/il_794xN.1431235065_b18l.jpg',
        price: priceWithDecimals(5.0),
      },
      {
        id: 26,
        name: 'Hueco Tanks Sticker Sheet',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/305883/1174011984/il_794xN.1174011984_9hc8.jpg',
        price: priceWithDecimals(5.0),
      },
      {
        id: 27,
        name: 'Bishop Sticker Sheet',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/2077a7/1248667737/il_794xN.1248667737_me1c.jpg',
        price: priceWithDecimals(5.0),
      },
    ],
  },
  vanlife: {
    id: 3,
    title: 'Van Life',
    routeName: 'vanlife',
    items: [
      {
        id: 201,
        name: 'Van Life Sticker',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/82de78/1860708792/il_794xN.1860708792_jwhz.jpg',
        price: priceWithDecimals(5.0),
      },
      {
        id: 202,
        name: 'Home Sweet Van Sticker',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/5c62ae/1328979458/il_794xN.1328979458_og3f.jpg',
        price: priceWithDecimals(5.0),
      },
      {
        id: 203,
        name: 'Home Sweet Van Red Sticker',
        imageUrl:
          'https://i.etsystatic.com/5626895/r/il/212464/1328977840/il_794xN.1328977840_rans.jpg',
        price: priceWithDecimals(5.0),
      },
    ],
  },
};

export default YAMA_SHOP_DATA;
