const state = {
    number: 0,
    openRes: false,
    watches: [
      {
          "model": "Apple watch",
          "Shape": "Прямоугольные",
          "Body": "Алюминий",
          "Type": "Сенсорный",
          "Maker": "США",
          "pricelist": "25.000-50.000",
          "Price": "26.000",
          "Colour": "Чёрный",
          "guard": "Силикон",
          "photo": "/images/apple.jpg"
      },
      {
          "model": "Samsung watch",
          "Shape": "Круг",
          "Body": "Алюминий",
          "Type": "Сенсорный",
          "Maker": "Вьетнам",
          "pricelist": "10.000-25.000",
          "Price": "14.000",
          "Colour": "Чёрный",
          "guard": "Силикон",
          "photo": "/images/samsung.jpg"
      },
      {
          "model": "Casio mtp-vt01gl-2b",
          "Shape": "Круг",
          "Body": "Сталь",
          "Type": "Механический",
          "Maker": "Япония",
          "pricelist": "до 10000 руб.",
          "Price": "4.190",
          "Colour": "Синий",
          "guard": "Искусственная кожа",
          "photo": "/images/casio.jpg"
      },
      {
          "model": "Swatch night flight again",
          "Shape": "Круг",
          "Body": "Нержавеющая сталь",
          "Type": "Механический",
          "Maker": "Швейцария",
          "pricelist": "10.000-25.000",
          "Price": "22.500",
          "Colour": "Серебро",
          "guard": "Металлический",
          "photo": "/images/swatch.jpg"
      },
      {
          "model": "Emporio Armani AR2447",
          "Shape": "Круг",
          "Body": "Нержавеющая сталь",
          "Type": "Механический",
          "Maker": "Италия",
          "pricelist": "10.000-25.000",
          "Price": "14.500",
          "Colour": "Серебро",
          "guard": "Натуральная кожа",
          "photo": "/images/armani.jpg"
      },
      {
          "model": "Tissot Le Locle Powermatic 80 T006.407.11.053.00",
          "Shape": "Круг",
          "Body": "Нержавеющая сталь",
          "Type": "Cенсорный",
          "Maker": "Швейцария",
          "pricelist": "50.000 и выше",
          "Price": "74.300",
          "Colour": "Серебро",
          "guard": "Металлический",
          "photo": "/images/tissot.jpg"
      },
      {
          "model": "Calvin Klein K9R31CV1",
          "Shape": "Круг",
          "Body": "Нержавеющая сталь",
          "Type": "Механический",
          "Maker": "Швейцария",
          "pricelist": "10.000-25.000",
          "Price": "19.100",
          "Colour": "Чёрный",
          "guard": "Силикон",
          "photo": "/images/klein.jpg"
      },
      {
          "model": "Мужские стальные часы Sokolov артикул: 319.76.00.000.04.01.3",
          "Shape": "Круг",
          "Body": "Сталь",
          "Type": "Кварцевые",
          "pricelist": "до 10000 руб.",
          "Maker": "Япония",
          "Price": "7.800",
          "Colour": "Серебро",
          "guard": "Металлический",
          "photo": "/images/sokolov.jpg"
      },
      {
          "model": "Мужские золотые часы Sokolov Артикул: 209.01.00.000.03.01.3",
          "Shape": "Круг",
          "Body": "Розовое золото",
          "Type": "Кварцевые",
          "Maker": "Швейцария",
          "pricelist": "50.000 и выше",
          "Price": "129.100",
          "Colour": "Розовое золото",
          "guard": "Натуральная кожа",
          "photo": "/images/sokol.jpg"
      },
      {
          "model": "Мужские стальные часы Sokolov Артикул: 501.71.00.000.16.01.3",
          "Shape": "Круг",
          "Body": "Сталь",
          "Type": "Кварцевые",
          "Maker": "Япония",
          "pricelist": "до 10000 руб.",
          "Price": "2.100",
          "Colour": "Серебро",
          "guard": "Металлический",
          "photo": "/images/sklv.jpg"
      }
      ]
} 
function setNum(initialState = state, action){
    switch (action.type){
      case 'SETNUM': 
        return {...initialState, 
          number: action.num
        }
        case 'SELECTTYPE': 
        return {...initialState, 
          watches: initialState.watches.filter((item)=> item.Type === action.choice)
        }
        case 'SELECTPRICE': 
        return {...initialState, 
          watches: initialState.watches.filter((item)=> item.pricelist === action.choice)
        }
        case 'SELECTSHAPE': 
        return {...initialState, 
          watches: initialState.watches.filter((item)=> item.Shape === action.choice)
        }
        case 'SELECTCOLOR': 
        return {...initialState, 
          watches: initialState.watches.filter((item)=> item.Colour === action.choice)
        }
        case 'SELECTMATERIAL': 
        return {...initialState, 
          watches: initialState.watches.filter((item)=> item.guard === action.choice)
        }
      case 'OPENRES': 
        return {...initialState,
          openRes: true
        }
    default:
        return initialState
}}
export default setNum