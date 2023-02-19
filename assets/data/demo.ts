import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpg";
import IMAGE_02 from "../images/02.jpg";
import IMAGE_03 from "../images/03.jpg";
import IMAGE_04 from "../images/04.jpg";
import IMAGE_05 from "../images/05.jpg";
import IMAGE_06 from "../images/06.jpg";
import IMAGE_07 from "../images/07.jpg";
import IMAGE_08 from "../images/08.jpg";
import IMAGE_09 from "../images/09.jpg";
import IMAGE_10 from "../images/10.jpg";

const data: DataT[] = [
  {
    id: 1,
	  isDummy : true,
    name: "Honey bake chicken",
    isOnline: true,
    match: "78",
    description:
      "Pour over chicken parts and bake at 350 till golden brown, basting occasionally. Love this with fall squash and rice or potatoes to slop up the drippings.",
    message:
      "I love this food, yummy!!",
    image: IMAGE_01,
  },
  {
    id: 2,
	isDummy : true,
    name: "Home made tacos",
    match: "93",
    description:
      "Thanks to my tortilla press, my own seasoning mix, and a family who likes fewer toppings rather than more, this is a cheap, fast meal for us almost every week",
    isOnline: true,
    message: "Tacos is my weakness",
    image: IMAGE_02,
  },
  {
    id: 3,
	isDummy : true,
    name: "Chicken fajitas",
    match: "65",
    description:
      "A variation on taco night, but a different set of spices, because I like variety. (Find both taco and fajita spice mix recipes in my books!) I use beef or chicken, chopped peppers, onions, and tomatoes",
    isOnline: true,
    message:
      "My favorite recipe is in here",
    image: IMAGE_03,
  },
  {
    id: 4,
	isDummy : true,
    name: "fried chicken and dumplings",
    match: "45",
    description:
      "fried Chicken and Dumplings. Oh, how I love thee. Thou comest together so quickly with such humble ingredients, and thrilleth my soul",
    isOnline: false,
    message: "Yummy !!!",
    image: IMAGE_04,
  },
  {
    id: 5,
	isDummy : true,
    name: "pepperoni pizza",
    match: "70",
    description:
      "spicy salami, usually made with a mixture of beef, pork, and spices",
    isOnline: true,
    message: "chessy.",
    image: IMAGE_05,
  },
  {
    id: 6,
	isDummy : true,
    name: "Stuffed Shells and Peppers",
    match: "90",
    description:
      "Mix ricotta cheese with garlic, Parmesan, basil, oregano, mozzarella, and an egg. Spoon into stuffing shells or quartered bell peppers",
    isOnline: true,
    message:
      "this way you please everyone",
    image: IMAGE_06,
  },
  {
    id: 7,
	isDummy : true,
    name: "Quiche",
    match: "67",
    description:
      "Full-time Traveller. Globe Trotter. Occasional Photographer. Part time Singer/Dancer.",
    isOnline: true,
    message:
      "Quiche Quiche!!",
    image: IMAGE_07,
  },
  {
    id: 8,
	isDummy : true,
    name: "enchilladas",
    match: "85",
    description:
      "Flavored Nation explains, the enchiladas you'll find in Arizona have a red sauce and aren't overly spicy",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "spicy as i like it",
    image: IMAGE_08,
  },
  {
    id: 9,
	isDummy : true,
    name: "fried catfish",
    match: "74",
    description:
      "While Arkansas' freshwater bodies are brimming with the state's staple, authorities set a daily creel limit on many catfish species to ensure the streams and lakes maintain their abundance",
    isOnline: true,
    message:
      ".",
    image: IMAGE_09,
  },
  {
    id: 10,
	isDummy : true,
    name: "key lime pie cheese",
    match: "30",
    description:
      "yey lime pie features a tangy yet sweet mixture of aromatic key limes, eggs, and condensed milk",
    isOnline: false,
    message:
      "sugar sugar yummy",
    image: IMAGE_10,
  },
];

export default data;
