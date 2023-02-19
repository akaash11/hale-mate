import { DataT } from "../../types";
import IMAGE01 from "../images-explore/01.jpg";
import IMAGE02 from "../images-explore/02.jpg";
import IMAGE03 from "../images-explore/03.jpg";
import IMAGE04 from "../images-explore/04.jpg";
import IMAGE05 from "../images-explore/05.jpg";
import IMAGE06 from "../images-explore/06.jpg";
import IMAGE07 from "../images-explore/07.jpg";
import IMAGE08 from "../images-explore/08.jpg";
import IMAGE09 from "../images-explore/09.jpg";
import IMAGE10 from "../images-explore/10.jpg";

const data: DataT[] = [
  {
    id: 1,
	isDummy : true,
    name: "layer cake with sugar",
    isOnline: false,
    match: "78",
    description:
      "fruit juice mixture will give the cake a lovely, fresh, fruity flavor and it is not rich like an icing",
    message:
      "I love this food, yummy!!",
    image: IMAGE01,
  },
  {
    id: 2,
	isDummy : true,
    name: "Blueberry Granita ",
    match: "93",
    description:
      "Made with fresh blueberries and sparking wine",
    isOnline: false,
    message: "Tacos is my weakness",
    image: IMAGE02,
  },
  {
    id: 3,
	isDummy : true,
    name: "Spaghetti Carbonara",
    match: "65",
    description:
      " Italian pasta dish from Rome made with eggs, hard cheese, cured pork and black pepper. The dish arrived at its modern form",
    isOnline: false,
    message:
      "My favorite recipe is in here",
    image: IMAGE03,
  },
  {
    id: 4,
	  isDummy : true,
    name: "chicken and dumplings",
    match: "88",
    description:
      "Chicken and Dumplings. Oh, how I love thee. Thou comest together so quickly with such humble ingredients, and thrilleth my soul",
    isOnline: true,
    message: "Yummy !!!",
    image: IMAGE04,
  },
  {
    id: 5,
	  isDummy : true,
    name: "pancakes",
    match: "70",
    description:
      "Simple, soft, fluffy pancakes, an essential that everyone should know. You’ve been good all week. Go on. You deserve freshly made homemade pancakes for breakfast tomorrow!",
    isOnline: true,
    message: "chessy.",
    image: IMAGE05,
  },
  {
    id: 6,
	isDummy : true,
    name: "Chicken buffalo wings",
    match: "90",
    description:
      "Unbreaded chicken wing section that is generally deep-fried and then coated or dipped in a sauce consisting of a vinegar-based cayenne pepper hot sauc",
    isOnline: true,
    message:
      "this way you please everyone",
    image: IMAGE06,
  },
  {
    id: 7,
	isDummy : true,
    name: "Pavlova",
    match: "67",
    description:
      "It is made of egg whites, sugar, corn starch, lemon juice, and vanilla extract. Once baked, a crisp exterior forms around the soft centers",
    isOnline: true,
    message:
      "Quiche Quiche!!",
    image: IMAGE07,
  },
  {
    id: 8,
	isDummy : true,
    name: "Mandarin orange tea",
    match: "85",
    description:
      "A light and fresh green tea blended with mandarin orange essence. Mandarin Green tea is grown in the Anhui Province of China",
    age: "27",
    location: "Irvine, CA",
    info1: 'Straight, Single, 5"10',
    info2: "Tea Totaller, Loves Photography & Travel",
    info3: "Beaches, Mountain, Cafe, Movies",
    info4: "Last seen: 23h ago",
    isOnline: true,
    message:
      "spicy as i like it",
    image: IMAGE08,
  },
  {
    id: 10,
	isDummy : true,
    name: "chicken & sea food",
    match: "74",
    description:
      "chicken mixed with sea food healthy receipe with high protein",
    isOnline: true,
    message:
      ".",
    image: IMAGE10,
  },
  {
    id: 9,
	isDummy : true,
    name: "Oatmeal cookies",
    match: "30",
    description:
      "soft and chewy, perfectly spiced, dotted with juicy raisins and crunchy walnuts and always sure to satisfy those cookie cravings",
    isOnline: false,
    message:
      "sugar sugar yummy",
    image: IMAGE09,
  },
];

export default data;
