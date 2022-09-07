import { MdFacebook } from "react-icons/md";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

export const departments = [
  {
    id: 1,
    name: "Fresh Meat",
    img: "https://arccwc.co.za/wp-content/uploads/2019/07/product02.png",
  },
  {
    id: 2,
    name: "Vegetables",
    img: "https://www.pngall.com/wp-content/uploads/2016/03/Vegetable-Transparent.png",
  },
  {
    id: 3,
    name: "Chesse",
    img: "https://www.pngall.com/wp-content/uploads/2016/03/Cheese-Download-PNG.png",
  },
  {
    id: 4,
    name: "Fresh Berries",
    img: "https://www.pngmart.com/files/15/Fresh-Berry-Mix-Transparent-PNG.png",
  },
  {
    id: 5,
    name: "Juice & Drinks",
    img: "https://www.pngall.com/wp-content/uploads/2016/04/Juice-Download-PNG.png",
  },
  {
    id: 6,
    name: "Dry Fruits & Gifts",
    img: "https://www.pngall.com/wp-content/uploads/12/Dry-Fruit-PNG.png",
  },
  {
    id: 7,
    name: "Herbs",
    img: "https://www.pngall.com/wp-content/uploads/2018/03/Herb-PNG-File-Download-Free.png",
  },
  {
    id: 8,
    name: "Nuts & Gifts",
    img: "https://www.pngall.com/wp-content/uploads/5/Nuts-PNG-Transparent-HD-Photo.png",
  },
  {
    id: 9,
    name: "Oatmeal",
    img: "https://www.pngall.com/wp-content/uploads/10/Oats-Oatmeal-PNG-Images.png",
  },
  {
    id: 10,
    name: "Spices",
    img: "https://www.pngall.com/wp-content/uploads/2/Saffron-PNG.png",
  },
];

export const featuredList = [
  {
    id: 1,
    name: "Banana",
    price: 1.59,
    img: "https://www.pngall.com/wp-content/uploads/2016/04/Banana-PNG-Picture.png",
    category: "fruit",
  },
  {
    id: 2,
    name: "Tomato",
    price: 2.99,
    img: "https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png",
    category: "vegetable",
  },
  {
    id: 3,
    name: "Grapefruit",
    price: 0.89,
    img: "https://www.pngall.com/wp-content/uploads/12/Grapefruit-Transparent.png",
    category: "fruit",
  },
  {
    id: 4,
    name: "Hazelnut",
    price: 14.99,
    img: "https://www.pngall.com/wp-content/uploads/5/Nuts-PNG-Pic.png",
    category: "nut",
  },
  {
    id: 5,
    name: "Cherry",
    price: 4.99,
    img: "https://www.pngall.com/wp-content/uploads/2016/05/Cherry-PNG-HD.png",
    category: "berry",
  },
  {
    id: 6,
    name: "Apple",
    price: 1.19,
    img: "https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png",
    category: "fruit",
  },
  {
    id: 7,
    name: "Almond",
    price: 9.99,
    img: "https://www.pngall.com/wp-content/uploads/5/Almond-Nuts-PNG-Image.png",
    category: "nut",
  },
  {
    id: 8,
    name: "Leek",
    price: 0.59,
    img: "https://www.pngall.com/wp-content/uploads/12/Leek-No-Background.png",
    category: "vegetable",
  },
];

export const discount = [
  {
    id: 1,
    img: "https://www.pngall.com/wp-content/uploads/2016/06/Healthy-Food.png",
    color: "bg-teal-100",
    title: "Summer Vegetables",
    text: "30% discount for fresh vegetables",
    link: "/shop",
  },
  {
    id: 2,
    img: "https://i.pinimg.com/originals/b9/b5/5c/b9b55caf0103630a60687e195ca4a90e.png",
    color: "bg-amber-100",
    title: "Dried & Drink fruits",
    text: "75% discount for all juice",
    link: "/shop",
  },
];

export const blogArticles = [
  {
    id: 1,
    title: "Our Healing Begins in the Soil?",
    img: "https://post.healthline.com/wp-content/uploads/2020/09/fruit-still-life-732x549-thumbnail.jpg",
    date: "2022 09 05",
    text: "Duis sit amet ligula efficitur, vehicula lorem vitae, dapibus magna. Mauris fringilla sodales neque, non dapibus ex. Sed blandit dui sit amet justo posuere, a tristique ipsum vulputate.",
    link: "/blog",
  },
  {
    id: 2,
    title: "Healthy Food Choices",
    img: "https://post.healthline.com/wp-content/uploads/2020/09/healthy-eating-ingredients-732x549-thumbnail.jpg",
    date: "2022 08 14",
    text: "Cras rhoncus, felis ac aliquam vestibulum, lectus justo viverra arcu, eget placerat turpis lacus at purus. Proin aliquam egestas risus, ut ultrices tortor viverra a. Aenean non elit purus. Praesent vel vestibulum magna. ",
    link: "/blog",
  },
  {
    id: 3,
    title: "Guide to Healthy Eating",
    img: "https://blog.orthoindy.com/wp-content/uploads/2020/08/orthoindy-a-healthy-environment-could-lead-to-a-healthy-lifestyle.jpg",
    date: "2022 08 02",
    text: "Aliquam erat volutpat. Nunc ornare vehicula est. Ut convallis placerat tellus sit amet elementum. Suspendisse eget tempor nulla. Maecenas volutpat facilisis leo, sed eleifend ligula blandit et.",
    link: "/blog",
  },
];

export const socialIcons = [
  { id: 1, icon: <MdFacebook />, link: "https://www.facebook.com" },
  { id: 2, icon: <AiOutlineTwitter />, link: "https://twitter.com" },
  { id: 3, icon: <FaPinterestP />, link: "https://www.pinterest.com" },
  { id: 4, icon: <AiFillLinkedin />, link: "https://www.linkedin.com" },
];

export const links = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Shop", url: "/shop" },
  { id: 3, name: "Blog", url: "/blog" },
  { id: 4, name: "Contacts", url: "/contacts" },
];
