import { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Expanded mock data with ~32 items to fill 4 pages (8 items per page)
const products = [
  // Page 1 matches original content roughly
  {
    id: 101,
    name: "Velvet Espresso",
    category: "Espresso",
    price: "$14.50",
    description: "Dark Roast • Chocolate & Fruit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    tag: "Best Seller",
    tagColor: "bg-primary/10 text-primary ring-primary/20",
  },
  {
    id: 102,
    name: "Midnight Roast",
    category: "Whole Bean",
    price: "$16.00",
    description: "Ex. Dark • Smoky & Bold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
  },
  {
    id: 103,
    name: "Morning Bliss",
    category: "Whole Bean",
    price: "$15.00",
    description: "Light Roast • Citrus & Floral",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
  },
  {
    id: 104,
    name: "Caramel Drizzle",
    category: "Whole Bean",
    price: "$18.00",
    description: "Med Roast • Sweet Vanilla",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    tag: "New",
    tagColor: "bg-primary/10 text-primary ring-primary/20",
  },
  {
    id: 105,
    name: "Cold Brew Blend",
    category: "Cold Brew",
    price: "$15.50",
    description: "Coarse Grind • Low Acid",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
  },
  {
    id: 106,
    name: "Decaf Delight",
    category: "Whole Bean",
    price: "$14.00",
    description: "Swiss Water • Full Flavor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
  },
  // Page 2 Content
  {
    id: 107,
    name: "Sumatra Reserve",
    category: "Single Origin",
    price: "$19.50",
    description: "Single Origin • Earthy & Spicy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    filter: "hue-rotate(15deg) opacity(0.8)",
  },
  {
    id: 108,
    name: "Ethiopian Yirgacheffe",
    category: "Single Origin",
    price: "$21.00",
    description: "Single Origin • Berry & Wine",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    filter: "hue-rotate(-10deg) opacity(0.9)",
  },
  {
    id: 109,
    name: "French Roast",
    category: "Whole Bean",
    price: "$15.00",
    description: "Dark Roast • Intense & Smoky",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    filter: "brightness(1.1)",
  },
  {
    id: 110,
    name: "Hazelnut Cream",
    category: "Whole Bean",
    price: "$16.50",
    description: "Flavored • Nutty & Smooth",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    tag: "Limited",
    tagColor:
      "bg-[#2a2420] border border-[#423830] text-[#a89f96] ring-white/10",
    filter: "sepia(0.3)",
  },
  {
    id: 111,
    name: "Nitro Can 4-Pack",
    category: "Cold Brew",
    price: "$22.00",
    description: "Ready to Drink • Creamy Texture",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    filter: "contrast(1.1)",
  },
  {
    id: 112,
    name: "Breakfast Blend",
    category: "Whole Bean",
    price: "$14.00",
    description: "Light Roast • Mild & Balanced",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    filter: "brightness(0.9)",
  },
  // Page 3 Content
  {
    id: 113,
    name: "Colombia Supremo",
    category: "Single Origin",
    price: "$18.50",
    description: "Med-Dark • Caramel & Nutty",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    filter: "hue-rotate(30deg)",
  },
  {
    id: 114,
    name: "Espresso Royale",
    category: "Espresso",
    price: "$16.50",
    description: "Dark Roast • Thick Crema",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    filter: "contrast(1.2)",
  },
  {
    id: 115,
    name: "Ceramic Mug",
    category: "Merchandise",
    price: "$25.00",
    description: "Handcrafted • 12oz Capacity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    filter: "grayscale(0.5)",
  },
  {
    id: 116,
    name: "Brewer's Kit",
    category: "Merchandise",
    price: "$85.00",
    description: "Pour-over Set • Filters Included",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    filter: "sepia(0.2)",
  },
  {
    id: 117,
    name: "Guatemala Antigua",
    category: "Single Origin",
    price: "$19.00",
    description: "Complex • Cocoa & Spices",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    filter: "hue-rotate(180deg) opacity(0.8)",
  },
  {
    id: 118,
    name: "Vanilla Cold Brew",
    category: "Cold Brew",
    price: "$5.50",
    description: "Ready to Drink • Sweet Cream",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    filter: "brightness(0.8) contrast(1.2)",
  },
  // Page 4 Content
  {
    id: 119,
    name: "Kenya AA",
    category: "Single Origin",
    price: "$22.50",
    description: "Bright • Wine-like Acidity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    filter: "hue-rotate(-45deg)",
  },
  {
    id: 120,
    name: "House Blend",
    category: "Whole Bean",
    price: "$13.50",
    description: "Medium Roast • Daily Drinker",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    filter: "grayscale(0.8)",
  },
  {
    id: 121,
    name: "Tote Bag",
    category: "Merchandise",
    price: "$18.00",
    description: "Canvas • Eco-Friendly",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    filter: "sepia(0.5)",
  },
  {
    id: 122,
    name: "Costa Rica Tarrazu",
    category: "Single Origin",
    price: "$19.50",
    description: "Honey Process • Sweet Clean",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    filter: "brightness(1.05)",
  },
  {
    id: 123,
    name: "Winter Blend",
    category: "Whole Bean",
    price: "$17.00",
    description: "Seasonal • Spices & Dark Choc",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    tag: "Seasonal",
    tagColor: "bg-blue-500/10 text-blue-500 ring-blue-500/20",
    filter: "hue-rotate(200deg) opacity(0.8)",
  },
  {
    id: 124,
    name: "Espresso Intenso",
    category: "Espresso",
    price: "$15.00",
    description: "Robusta Blend • High Caffeine",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    filter: "contrast(1.3)",
  },
];

const ITEMS_PER_PAGE = 8; // Adjust to fit desired density

const ExploreMenu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter items based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Products" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Get current page items
  const currentItems = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
      {/* Hero Header */}
      <section className="relative bg-background-light dark:bg-background-dark pt-24 pb-8 transition-colors duration-300">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] bg-orange-900/10 rounded-full blur-[80px]"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-primary text-xs font-bold tracking-wider uppercase mb-4 shadow-sm">
            Artisan Selection
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-main dark:text-text-light tracking-tight mb-4 font-display">
            Our Curated Menu
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Explore our premium selection of ethically sourced beans, signature
            blends, and brewing essentials designed for the true connoisseur.
          </p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl border-y border-border-light dark:border-border-dark py-4 shadow-sm dark:shadow-lg transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
              {[
                "All Products",
                "Espresso",
                "Cold Brew",
                "Whole Bean",
                "Single Origin",
                "Merchandise",
              ].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover"
                      : "bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted hover:text-primary hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-72 shrink-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="text-text-muted" size={20} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full rounded-lg border-border-light dark:border-border-dark bg-white dark:bg-surface-dark py-2.5 pl-10 pr-3 text-sm text-text-main dark:text-white placeholder-text-muted focus:border-primary focus:bg-white dark:focus:bg-surface-dark focus:ring-1 focus:ring-primary transition-all shadow-sm dark:shadow-none"
                placeholder="Search for coffee..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background-light dark:bg-background-dark py-12 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10"
            >
              {currentItems.length > 0 ? (
                currentItems.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group flex flex-col gap-3"
                  >
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark group-hover:border-primary/40 transition-colors shadow-sm dark:shadow-none">
                      {product.tag && (
                        <div className="absolute top-3 left-3 z-10">
                          <span
                            className={`inline-flex items-center rounded px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                              product.tagColor ||
                              "bg-primary/10 text-primary ring-primary/20"
                            }`}
                          >
                            {product.tag}
                          </span>
                        </div>
                      )}
                      <div className="h-full w-full flex items-center justify-center bg-accent-light dark:bg-accent-dark/20 p-6">
                        <div
                          className="h-full w-full bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110 mix-blend-multiply dark:mix-blend-normal"
                          style={{
                            backgroundImage: `url('${product.image}')`,
                            filter: product.filter || "none",
                          }}
                        ></div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          addToCart(product);
                        }}
                        className="absolute bottom-4 right-4 flex h-10 w-10 md:translate-y-2 opacity-100 md:opacity-0 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 hover:bg-primary-hover hover:shadow-primary/25 active:scale-95 z-20"
                      >
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold text-text-main dark:text-white group-hover:text-primary transition-colors font-display">
                          {product.name}
                        </h3>
                        <span className="font-bold text-text-main dark:text-white">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-sm text-text-muted">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-1 text-text-muted text-sm font-bold mt-1">
                        View Details
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-text-muted">
                  <p className="text-xl">
                    No products found matching your criteria.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-16">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-muted hover:border-primary hover:text-text-main dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm dark:shadow-none"
              >
                <ChevronLeft size={20} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`flex h-10 w-10 items-center justify-center rounded-lg shadow-sm transition-all ${
                      currentPage === page
                        ? "bg-primary text-white font-bold shadow-primary/20"
                        : "border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-muted hover:border-primary hover:text-text-main dark:hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-muted hover:border-primary hover:text-text-main dark:hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm dark:shadow-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExploreMenu;
