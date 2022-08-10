import ipaImg from '../assets/img/IPA.JPG'
import pilsnerImg from '../assets/img/pilsner.JPG'
import hazyDoubleIpaImg from '../assets/img/HazyDoubleIPA.JPG'
import stoutImg from '../assets/img/Stout.JPG'

export const BEERS = [
    {
        id: 0,
        name: "IPA",
        image: ipaImg,
        IBUs: 100,
        price: 7,
        featured: true,
        description: "An explosion of tropical fruit aromas are balanced by a clean malt backbone in this emminently drinkable West Coast IPA."
    },
    {
        id: 1,
        name:"Pilsner",
        image: pilsnerImg,
        IBUs: 40,
        price: 6,
        featured: false,
        description: "Crisp and clean yet full of flavor."
    },
    {
        id: 2,
        name:"Hazy Double IPA",
        image: hazyDoubleIpaImg,
        IBUs: 120,
        price: 8,
        featured: false,
        description: "Dry hopping lends intense tropical aromas to this juicy DIPA."
    },
    {
        id: 3,
        name:"Stout",
        image: stoutImg,
        IBUs: 30,
        price: 8,
        featured: false,
        description: "Roasted malts give this stout notes of coffee and chocolate."
    }
];