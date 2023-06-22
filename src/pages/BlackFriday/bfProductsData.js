import iPhonePreto from "../../assets/img/Apple-iPhone-14-Pro-128GB-Preto.jpeg";
import iPhoneBranco from "../../assets/img/Apple-iPhone-14-Pro-128GB-Branco.jpeg";
import iPhoneRoxo from "../../assets/img/Apple-iPhone-14-Pro-128GB-Roxo.jpeg";
import iPhoneDourado from "../../assets/img/Apple-iPhone-14-Pro-128GB-Dourado.jpeg";
import SamsungGalaxy from "../../assets/img/samsung-galaxy-s23-preto.avif";
import SamsungGalaxyRoxo from "../../assets/img/samsung-galaxy-s22-5g.webp";
import SamsungGalaxyAzul from "../../assets/img/samsung-galaxy-a04e-azul-64GB.webp";
import SamsungGalaxyPreto from "../../assets/img/smartphone-samsung-galaxy-A14-4G-Preto-128GB.avif";
import MotorolaDourado from "../../assets/img/smartphone-motorola-Edge-30-Fusion-5G-Dourado-256GB.webp";
import MotorolaBranco from "../../assets/img/smartphone-motorola-Moto-E22-Branco-32GB.webp";
import SamsungGalaxyBranco from "../../assets/img/smartphone-samsung-Galaxy-S23-Ultra-5G-Creme-256GB.avif";
import SamsungGalaxyPretoA53 from "../../assets/img/Smartphone-Samsung-Galaxy-A53-128GB-Preto.webp";
import MotorolaPreto from "../../assets/img/Smartphone-Motorola-Edge-30-Ultra-5G-Preto-256GB.webp";
import SamsungGalaxyCobre from "../../assets/img/Smartphone-Samsung-Galaxy-A04e-Cobre-64GB.avif";
import SmartBrand8 from "../../assets/img/smartband8-ultra-fino.jpg";
import Amazfit from "../../assets/img/amazfit-gts-4-mini.jpg";
import AmazfitBipS from "../../assets/img/smartwatch-amazfit-bipS.jpg";
import SmartwatchHero from "../../assets/img/smartwatch-b57-hero.jpg";
import SmartwatchD20 from "../../assets/img/smartwatch-d20-android.jpg";
import SmartwatchBipLite from "../../assets/img/smartwatch-biplite-a1915.jpg";
import FoneT13 from "../../assets/img/fone-t13.webp";
import FoneT1C from "../../assets/img/fone-t1c.webp";
import FoneHT05 from "../../assets/img/fone-ht05.webp";

const allProducts = [
  {
    id: 1,
    name: "iPhone 13 Pro Max, Preto",
    price: 6999,
    img: iPhonePreto,
    blackFriday: true,
    discount: 20,
    rating: 4.5,
    storage: 64,
    color: "Preto",
    order: "procurados"
  },
  {
    id: 2,
    name: "iPhone 11 Pro Max, Dourado",
    price: 4999,
    img: iPhoneDourado,
    discount: 25,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Dourado",
    order: "vendidos"
  },
  {
    id: 3,
    name: "iPhone 13, Roxo",
    price: 6999,
    img: iPhoneRoxo,
    discount: 20,
    blackFriday: true,
    rating: 4,
    storage: 64,
    color: "Roxo",
    order: "procurados"
  },
  {
    id: 4,
    name: "iPhone 14, Dourado",
    price: 4999,
    img: iPhoneDourado,
    discount: 35,
    blackFriday: true,
    rating: 4,
    storage: 256,
    color: "Dourado",
    order: "recentes"
  },
  {
    id: 5,
    name: "iPhone 14, Branco",
    price: 5999,
    img: iPhoneBranco,
    discount: 25,
    blackFriday: true,
    rating: 4,
    storage: 512,
    color: "Branco",
    order: "vendidos"
  },
  {
    id: 6,
    name: "iPhone 14, Preto",
    price: 3999,
    img: iPhonePreto,
    discount: 25,
    blackFriday: true,
    rating: 4,
    storage: 512,
    color: "Preto",
    order: "recentes"
  },
  {
    id: 7,
    name: "iPhone 14 Pro Max, Branco",
    price: 6999,
    img: iPhoneBranco,
    discount: 30,
    blackFriday: true,
    rating: 4,
    storage: 256,
    color: "Branco",
    order: "procurados"
  },
  {
    id: 8,
    name: "iPhone 14 Pro Max, Dourado",
    price: 6999,
    img: iPhoneDourado,
    discount: 35,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Dourado",
    order: "vendidos"
  },
  {
    id: 9,
    name: "iPhone XR Max, Preto",
    price: 5999,
    img: iPhonePreto,
    discount: 25,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Preto",
    order: "recentes"
  },
  {
    id: 10,
    name: "iPhone XR Pro, Roxo",
    price: 2999,
    img: iPhoneRoxo,
    discount: 20,
    blackFriday: true,
    rating: 4,
    storage: 64,
    color: "Roxo",
    order: "vendidos"
  },
  {
    id: 11,
    name: "Samsung Galaxy S23 Ultra 5G, 128GB",
    price: 4999,
    img: SamsungGalaxy,
    discount: 25,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Preto",
    order: "procurados"
  },
  {
    id: 12,
    name: "Motorola Edge 30 Fusion, 256GB",
    price: 3999,
    img: MotorolaDourado,
    discount: 30,
    blackFriday: true,
    rating: 4.5,
    storage: 256,
    color: "Dourado",
    order: "recentes"
  },
  {
    id: 13,
    name: "Motorola Moto E22, 64GB",
    price: 5999,
    img: MotorolaBranco,
    discount: 20,
    blackFriday: true,
    rating: 4,
    storage: 64,
    color: "Branco",
    order: "vendidos"
  },
  {
    id: 15,
    name: "Samsung Galaxy S23 Ultra 5G, 256GB",
    price: 6999,
    img: SamsungGalaxyBranco,
    discount: 15,
    blackFriday: true,
    rating: 4.5,
    storage: 256,
    color: "Branco",
    order: "recentes"
  },
  {
    id: 16,
    name: "Samsung Galaxy A53, 128GB",
    price: 5999,
    img: SamsungGalaxyPretoA53,
    discount: 20,
    blackFriday: true,
    rating: 4.5,
    storage: 128,
    color: "Preto",
    order: "vendidos"
  },
  {
    id: 17,
    name: "Samsung Galaxy S22 Ultra 5G, 128GB",
    price: 5499,
    img: SamsungGalaxyRoxo,
    discount: 25,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Roxo",
    order: "procurados"
  },
  {
    id: 18,
    name: "Motorola Edge 30 Ultra 5G, 256GB",
    price: 1499,
    img: MotorolaPreto,
    discount: 30,
    blackFriday: true,
    rating: 4.5,
    storage: 256,
    color: "Preto",
    order: "recentes"
  },
  {
    id: 19,
    name: "Samsung Galaxy A04E, 64GB",
    price: 2999,
    img: SamsungGalaxyCobre,
    discount: 15,
    blackFriday: true,
    rating: 4,
    storage: 64,
    color: "Dourado",
    order: "vendidos"
  },
  {
    id: 21,
    name: "Samsung Galaxy A14 4G, 64GB",
    price: 2799,
    img: SamsungGalaxyPreto,
    discount: 20,
    blackFriday: true,
    rating: 4.5,
    storage: 64,
    color: "Preto",
    order: "recentes"
  },
  {
    id: 22,
    name: "Samsung Galaxy A04E, 128GB",
    price: 1899,
    img: SamsungGalaxyAzul,
    discount: 20,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Azul",
    order: "vendidos"
  },
  {
    id: 23,
    name: "Smartband 8, ultra fino",
    price: 2999,
    img: SmartBrand8,
    discount: 25,
    blackFriday: true,
    rating: 4,
    color: "Preto",
    order: "procurados"
  },
  {
    id: 25,
    name: "Amazfit GTS 4 mini",
    price: 3999,
    img: Amazfit,
    discount: 20,
    blackFriday: true,
    rating: 4,
    color: "Preto",
    order: "vendidos"
  },
  {
    id: 27,
    name: "Smartwatch Amazfit Bip S",
    price: 6999,
    img: AmazfitBipS,
    discount: 15,
    blackFriday: true,
    rating: 4.5,
    color: "Preto",
    order: "recentes"
  },
  {
    id: 28,
    name: "Smartwatch B5 Hero 7",
    price: 5999,
    img: SmartwatchHero,
    discount: 20,
    blackFriday: true,
    rating: 4.5,
    color: "Rosa",
    order: "vendidos"
  },
  {
    id: 29,
    name: "Smartwatch D20 Android",
    price: 5499,
    img: SmartwatchD20,
    discount: 25,
    blackFriday: true,
    rating: 4,
    color: "Preto",
    order: "procurados"
  },
  {
    id: 31,
    name: "Smartwatch Bip Lite A1915",
    price: 2999,
    img: SmartwatchBipLite,
    discount: 15,
    blackFriday: true,
    rating: 4,
    color: "Azul",
    order: "vendidos"
  },
  {
    id: 32,
    name: "Fone Bluetooth T13 Quantum Sport",
    price: 6999,
    img: FoneT13,
    blackFriday: true,
    discount: 20,
    rating: 4.5,
    color: "Branco",
    order: "procurados"
  },
  {
    id: 33,
    name: "Fone Bluetooth T1C Erasus",
    price: 4999,
    img: FoneT1C,
    discount: 25,
    blackFriday: true,
    rating: 4,
    color: "Preto",
    order: "vendidos"
  },
  {
    id: 35,
    name: "Fone Bluetooth HT05 Quantum",
    price: 6999,
    img: FoneHT05,
    discount: 20,
    blackFriday: true,
    rating: 4,
    color: "Branco",
    order: "procurados"
  }
]

export default allProducts