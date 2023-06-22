import Iphone from "../../assets/img/image-iphone.png"
import SamsungGalaxy from "../../assets/img/samsung-galaxy-s23-preto.avif"
import SamsungGalaxyRoxo from "../../assets/img/samsung-galaxy-s22-5g.webp"
import SamsungGalaxyAzul from "../../assets/img/samsung-galaxy-a04e-azul-64GB.webp"
import SamsungGalaxyPreto from "../../assets/img/smartphone-samsung-galaxy-A14-4G-Preto-128GB.avif"
import MotorolaAzul from "../../assets/img/smartphone-motorola-moto-E22-Azul-64GB.webp"
import MotorolaG52 from "../../assets/img/smartphone-motorola-Moto-G52-Azul-128GB.webp"
import MotorolaDourado from "../../assets/img/smartphone-motorola-Edge-30-Fusion-5G-Dourado-256GB.webp"
import MotorolaBranco from "../../assets/img/smartphone-motorola-Moto-E22-Branco-32GB.webp"
import SamsungGalaxyBranco from "../../assets/img/smartphone-samsung-Galaxy-S23-Ultra-5G-Creme-256GB.avif"
import SamsungGalaxyPretoA53 from "../../assets/img/Smartphone-Samsung-Galaxy-A53-128GB-Preto.webp"
import MotorolaPreto from "../../assets/img/Smartphone-Motorola-Edge-30-Ultra-5G-Preto-256GB.webp"
import SamsungGalaxyCobre from "../../assets/img/Smartphone-Samsung-Galaxy-A04e-Cobre-64GB.avif"

const celulares = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Motorola Moto E22, 64GB",
    price: 2999,
    img: MotorolaAzul,
    discount: 10,
    blackFriday: false,
    rating: 3.5,
    storage: 64,
    color: "Azul",
    order: "procurados"
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    name: "Motorola Moto G52, 128GB",
    price: 4999,
    img: MotorolaG52,
    discount: 30,
    blackFriday: false,
    rating: 3.5,
    storage: 128,
    color: "Azul",
    order: "procurados"
  },
  {
    id: 11,
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
    id: 12,
    name: "Samsung Galaxy A04E, 128GB",
    price: 1899,
    img: SamsungGalaxyAzul,
    discount: 20,
    blackFriday: true,
    rating: 4,
    storage: 128,
    color: "Azul",
    order: "vendidos"
  }
];

export default celulares