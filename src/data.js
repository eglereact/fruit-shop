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
    category: "fruits",
  },
  {
    id: 2,
    name: "Tomato",
    price: 2.99,
    img: "https://www.pngall.com/wp-content/uploads/2016/04/Tomato-PNG-File.png",
    category: "vegetables",
  },
  {
    id: 3,
    name: "Grapefruit",
    price: 0.89,
    img: "https://www.pngall.com/wp-content/uploads/12/Grapefruit-Transparent.png",
    category: "fruits",
  },
  {
    id: 4,
    name: "Hazelnut",
    price: 14.99,
    img: "https://www.pngall.com/wp-content/uploads/5/Nuts-PNG-Pic.png",
    category: "nuts",
  },
  {
    id: 5,
    name: "Cherry",
    price: 4.99,
    img: "https://www.pngall.com/wp-content/uploads/2016/05/Cherry-PNG-HD.png",
    category: "berries",
  },
  {
    id: 6,
    name: "Apple",
    price: 1.19,
    img: "https://www.pngall.com/wp-content/uploads/11/Apple-PNG-File.png",
    category: "fruits",
  },
  {
    id: 7,
    name: "Almond",
    price: 9.99,
    img: "https://www.pngall.com/wp-content/uploads/5/Almond-Nuts-PNG-Image.png",
    category: "nuts",
  },
  {
    id: 8,
    name: "Leek",
    price: 0.59,
    img: "https://www.pngall.com/wp-content/uploads/12/Leek-No-Background.png",
    category: "vegetables",
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

export const tabs = [
  {
    id: 1,
    name: "Description",
    paragraph1:
      "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Pellentesque in ipsum id orci porta dapibus. \
       Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam \
        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis \
        porttitor volutpat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, \
        convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit \
        amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit\
         neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus.",
    paragraph2:
      "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem ipsum dolor sit amet, \
       consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies \
       ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.\
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula \
        elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum \
        sed sit amet dui. Proin eget tortor risus.",
  },
  {
    id: 2,
    name: "Information",
    paragraph1:
      "Donec ac dui vitae nisl consequat commodo sed eget mi. Vivamus convallis ex dui, eget molestie mi dictum non.\
       Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin tempor\
        accumsan dui, et pulvinar felis semper ac. Nullam non augue a urna aliquam euismod. Maecenas nec sapien \
        a urna ornare vulputate eu vitae felis. Cras bibendum porta lacus, a scelerisque mauris vulputate quis. \
        Duis tincidunt venenatis est ac aliquet.",
    paragraph2:
      "Sed nec ornare odio. Ut at metus imperdiet, rutrum lorem rutrum, mattis lacus. Class aptent taciti sociosqu\
       ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id augue neque. Curabitur imperdiet \
       euismod est ullamcorper rhoncus. Duis eget luctus diam. Donec sit amet risus fermentum, laoreet lacus a, \
       mattis arcu. Aliquam eget imperdiet turpis, ultricies porttitor eros. Aliquam vestibulum congue congue. \
       Cras tempus et sem nec aliquet. Vivamus eleifend maximus luctus.",
  },
  {
    id: 3,
    name: "Reviews (12)",
    paragraph1:
      "Etiam iaculis a ipsum accumsan porta. Praesent ut neque eros. Donec porta vehicula purus, at rhoncus quam \
      varius non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent \
      eleifend blandit orci nec fringilla. Maecenas pharetra, mauris vel auctor ullamcorper, nunc nulla rutrum mi,\
       ut bibendum massa magna rhoncus eros. Vivamus imperdiet tincidunt nibh vel elementum.",
    paragraph2:
      "Duis vestibulum fringilla dictum. Nam in tortor tortor. Pellentesque malesuada erat eget est egestas\
       vestibulum. Duis laoreet mattis nulla vitae iaculis. Donec a dignissim lectus. Sed sodales metus et \
       turpis tempus, euismod mattis dui vulputate. Nulla in ultrices tellus, sit amet posuere ante. Mauris\
        hendrerit vulputate tortor, eget placerat justo posuere at. Nulla facilisi. Proin vulputate ultrices laoreet.",
  },
];
