interface Product {
  id: number;
  name: string;
  old_price: string | number;
  new_price: string | number;
  sale: string | number;
  image: string;
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface Groceries {
  id: number;
  name: string;
  image: string;
  sale: number;
}

import phone from "@/assets/images/phone.png";
import phone2 from "@/assets/images/phone2.png";
import phone3 from "@/assets/images/phone3.png";
import phone4 from "@/assets/images/phone4.png";
import phone5 from "@/assets/images/phone5.png";

import category from "@/assets/images/category.png";
import category2 from "@/assets/images/category2.png";
import category3 from "@/assets/images/category3.png";
import category4 from "@/assets/images/category4.png";
import category5 from "@/assets/images/category5.png";
import category6 from "@/assets/images/category6.png";
import category7 from "@/assets/images/category7.png";

import grocery from "@/assets/images/grocery.png";
import grocery2 from "@/assets/images/grocery2.png";
import grocery3 from "@/assets/images/grocery3.png";
import grocery4 from "@/assets/images/grocery4.png";
import grocery5 from "@/assets/images/grocery5.png";
import grocery6 from "@/assets/images/grocery6.png";

export const groceries: Groceries[] = [
  {
    id: 1,
    name: "Kunlik Mahsulot",
    image: grocery,
    sale: 50,
  },
  {
    id: 2,
    name: "Sabzavotlar",
    image: grocery2,
    sale: 50,
  },
  {
    id: 3,
    name: "Mevalar",
    image: grocery3,
    sale: 50,
  },
  {
    id: 4,
    name: "Qulupnay",
    image: grocery4,
    sale: 50,
  },
  {
    id: 5,
    name: "Mango",
    image: grocery5,
    sale: 50,
  },
  {
    id: 6,
    name: "Olcha",
    image: grocery6,
    sale: 50,
  },
];

export const categories2: Category[] = [
  {
    id: 1,
    name: "Smartfonlar",
    image: category,
  },
  {
    id: 2,
    name: "Kosmetikalar",
    image: category2,
  },

  {
    id: 3,
    name: "Elektir jihozlari",
    image: category3,
  },

  {
    id: 4,
    name: "Mebellar",
    image: category4,
  },

  {
    id: 5,
    name: "Aqilli soatlar",
    image: category5,
  },

  {
    id: 6,
    name: "Gullar",
    image: category6,
  },

  {
    id: 7,
    name: "Bujuteralar",
    image: category7,
  },
];

export const products: Product[] = [
  {
    id: 1,
    name: "Galaxy S22 Ultra",
    old_price: "4 880 000",
    new_price: "4 560 000",
    sale: 20,
    image: phone,
  },
  {
    id: 2,
    name: "Galaxy M13 (4GB | 64 GB )",
    old_price: "3 880 000",
    new_price: "2 560 000",
    sale: 20,
    image: phone2,
  },

  {
    id: 3,
    name: "Galaxy M33 (4GB | 64 GB )",
    old_price: "7 880 000",
    new_price: "6 560 000",
    sale: 20,
    image: phone3,
  },

  {
    id: 4,
    name: "Galaxy M53 (4GB | 64 GB )",
    old_price: "2 880 000",
    new_price: "1 560 000",
    sale: 20,
    image: phone4,
  },

  {
    id: 5,
    name: "Galaxy S22 Ultra",
    old_price: "10 880 000",
    new_price: "9 560 000",
    sale: 20,
    image: phone5,
  },
];
