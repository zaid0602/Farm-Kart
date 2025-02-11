import p1_img from "./barley.png";
import p2_img from "./bengalGram.png";
import p3_img from "./castor.png";
import p4_img from "./garlic.png";
import p5_img from "./goldendurumwheat.png";
import p6_img from "./groundnut.png";
import p7_img from "./kabulichana.png";
import p8_img from "./kidneyBeans.png";
import p9_img from "./lobiya.png";
import p10_img from "./maize.png";
import p11_img from "./masoordal.png";
import p12_img from "./matar.png";
import p13_img from "./millet.png";
import p14_img from "./moongdal.png";
import p15_img from "./mustard.png";
import p16_img from "./oats.png";
import p17_img from "./onion.png";
import p18_img from "./olive.png";
import p19_img from "./potato.png";
import p20_img from "./ragi.png";
import p21_img from "./rapeseed.png";
import p22_img from "./rice.png";
import p23_img from "./rye.png";
import p24_img from "./safflowerSeed.png";
import p25_img from "./soybean.png";
import p26_img from "./sunflower.png";
import p27_img from "./tomato.png";
import p28_img from "./toordal.png";
import p29_img from "./uraddal.png";
import p30_img from "./wheat.png";
import p31_img from "./ginger.png";
import p32_img from "./flaxseed.png";
import p33_img from "./chilli.png";
import p34_img from "./bottleguard.png";
import p35_img from "./carrot.png";
import p36_img from "./raddish.png";

let all_product = [
  {
    id: 1,
    name: "Barley",
    category: "Grains",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
  },
  {
    id: 2,
    name: "Bengal Gram",
    category: "Pulses",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 3,
    name: "Castor seed",
    category: "Grains",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
  },
  {
    id: 4,
    name: "Garlic",
    category: "Veggies",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
  },
  {
    id: 5,
    name: "Golden Durum Wheat",
    category: "Grains",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 6,
    name: "Groundnut",
    category: "Grains",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 7,
    name: "ChickPea",
    category: "Pulses",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 8,
    name: "Kidney Beans",
    category: "Pulses",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 9,
    name: "Lobiya Dal",
    category: "Pulses",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 10,
    name: "Maize",
    category: "Grains",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 11,
    name: "Masoor Dal",
    category: "Pulses",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 12,
    name: "Matar",
    category: "Pulses",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 13,
    name: "Millet",
    category: "Grains",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 14,
    name: "Moong Dal",
    category: "Pulses",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 15,
    name: "Mustard",
    category: "Grains",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 16,
    name: "Oats",
    category: "Grains",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 17,
    name: "Onion",
    category: "Veggies",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 18,
    name: "Olive",
    category: "Grains",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 19,
    name: "Potato",
    category: "Veggies",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 20,
    name: "Ragi",
    category: "Grains",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 21,
    name: "RapeSeed",
    category: "Grains",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 22,
    name: "Rice",
    category: "Grains",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 23,
    name: "Rye",
    category: "Grains",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 24,
    name: "Safflower seed",
    category: "Grains",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 25,
    name: "SoyBean",
    category: "Pulses",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 26,
    name: "Sunflower Seed",
    category: "Grains",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 27,
    name: "Tomato",
    category: "Veggies",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 28,
    name: "Toor Dal",
    category: "Pulses",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 29,
    name: "Urad Dal",
    category: "Pulses",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 30,
    name: "Wheat",
    category: "Grains",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 31,
    name: "Ginger",
    category: "Veggies",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 32,
    name: "FlaxSeed",
    category: "Grains",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 33,
    name: "Chilli",
    category: "Veggies",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 34,
    name: "Bottle Guard",
    category: "Veggies",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 35,
    name: "Carrot",
    category: "Veggies",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 36,
    name: "Raddish",
    category: "Veggies",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
  },
];

export default all_product;
