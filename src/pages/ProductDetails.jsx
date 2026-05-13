import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Minus,
  Plus,
  ShoppingBag,
  Star,
  StarHalf,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { useCart } from "../context/CartContext";
// import imgesKenya from "../assets/images/Kenya/kenya.jpeg";
const imgesKenya = (name) =>
  new URL(`../assets/images/Kenya/${name}`, import.meta.url).href;
const suMatr = (name) =>
  new URL(`../assets/images/SumatraReserve/${name}`, import.meta.url).href;
// const coldBrew = (item) =>
//   new URL(`../assets/images/ClodBrew/${item}`, import.meta.url).href;

const allProducts = [
  {
    id: 1,
    name: "Velvet Espresso",
    price: "$14.50",
    tag: "Dark Roast",
    description:
      "Rich notes of dark chocolate and dried fruit. Perfect for espresso lovers.",
    longDescription:
      "Our Velvet Espresso is crafted from 100% Arabica beans grown at high altitudes in the mountains of Colombia. The beans are slow-roasted to perfection, developing complex notes of dark chocolate, dried fig, and a hint of molasses. This roast produces an exceptionally rich crema and a smooth, lingering finish that will satisfy even the most discerning espresso connoisseur.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    ],
    rating: 4.8,
    reviewCount: 247,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Colombia" },
      { label: "Roast Level", value: "Dark Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1800-2200m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Dark Chocolate, Dried Fig, Molasses" },
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        date: "2 days ago",
        title: "Best espresso I've ever made at home",
        content:
          "The crema is incredible and the flavor is so rich without being bitter. I've tried many espresso beans and this is by far my favorite.",
      },
      {
        id: 2,
        author: "James T.",
        rating: 4,
        date: "1 week ago",
        title: "Great for morning lattes",
        content:
          "Perfect balance for my morning lattes. Has enough body to stand up to milk but still retains nice flavor notes.",
      },
      {
        id: 3,
        author: "Emily R.",
        rating: 5,
        date: "2 weeks ago",
        title: "Velvet indeed!",
        content:
          "The name says it all - absolutely velvety smooth. I'm hooked!",
      },
    ],
  },
  {
    id: 2,
    name: "Midnight Roast",
    price: "$16.00",
    tag: "Ex. Dark",
    description:
      "Smoky and intense with a smooth finish. Our boldest blend yet.",
    longDescription:
      "Midnight Roast is our darkest and most intense blend, created for those who love a powerful coffee experience. We carefully select beans from Sumatra and Guatemala, roasting them until they develop deep, smoky notes while still maintaining a surprisingly smooth finish. This is not for the faint of heart - it's for coffee lovers who crave intensity.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    ],
    rating: 4.6,
    reviewCount: 189,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Sumatra & Guatemala" },
      { label: "Roast Level", value: "Extra Dark" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Altitude", value: "1500-2000m" },
      { label: "Processing", value: "Semi-Washed" },
      { label: "Flavor Notes", value: "Dark Smoke, Molasses, Burnt Sugar" },
    ],
    reviews: [
      {
        id: 1,
        author: "Michael R.",
        rating: 5,
        date: "3 days ago",
        title: "Finally, a dark roast that's not burnt!",
        content:
          "I love dark roasts but so many taste burnt. This has amazing smoky notes without that unpleasant acrid taste.",
      },
      {
        id: 2,
        author: "David K.",
        rating: 5,
        date: "1 week ago",
        title: "Perfect for cold brew",
        content:
          "Makes an incredible cold brew. Intense flavor that doesn't get watered down.",
      },
    ],
  },
  {
    id: 3,
    name: "Morning Bliss",
    price: "$15.00",
    tag: "Light Roast",
    description:
      "Bright citrus notes with a floral aroma. The perfect wake-up call.",
    longDescription:
      "Morning Bliss is our tribute to the perfect morning cup. This light roast features beans from Ethiopia and Kenya, known for their bright, vibrant flavors. We roast just enough to develop the natural sweetness while preserving the delicate floral and citrus notes that make this coffee truly special. It's clean, crisp, and absolutely delightful - the perfect way to start your day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    ],
    rating: 4.9,
    reviewCount: 312,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Ethiopia & Kenya" },
      { label: "Roast Level", value: "Light Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1900-2300m" },
      { label: "Processing", value: "Natural & Washed" },
      { label: "Flavor Notes", value: "Citrus, Floral, Bergamot" },
    ],
    reviews: [
      {
        id: 1,
        author: "Jessica L.",
        rating: 5,
        date: "1 day ago",
        title: "My new favorite light roast",
        content:
          "So bright and flavorful without being sour. The citrus notes are amazing!",
      },
      {
        id: 2,
        author: "Robert P.",
        rating: 5,
        date: "4 days ago",
        title: "Perfect pour-over coffee",
        content:
          "Absolutely shines in a V60. Clean, complex, and absolutely delicious.",
      },
    ],
  },
  {
    id: 4,
    name: "Caramel Drizzle",
    price: "$18.00",
    tag: "Med. Roast",
    description:
      "Smooth caramel and vanilla flavors. Naturally sweet and comforting.",
    longDescription:
      "Caramel Drizzle is our most popular medium roast, and for good reason. We've created a blend that's naturally sweet and incredibly smooth, with notes of caramel, vanilla, and just a hint of milk chocolate. The beans are from Brazil and Guatemala, roasted to perfection to bring out their inherent sweetness. Whether you drink it black or with a splash of milk, it's pure comfort in every sip.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    ],
    rating: 4.7,
    reviewCount: 456,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Brazil & Guatemala" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1200-1800m" },
      { label: "Processing", value: "Pulped Natural" },
      { label: "Flavor Notes", value: "Caramel, Vanilla, Milk Chocolate" },
    ],
    reviews: [
      {
        id: 1,
        author: "Jennifer K.",
        rating: 5,
        date: "5 days ago",
        title: "My whole family loves this",
        content:
          "It's sweet enough that I don't need to add sugar. Perfect every morning!",
      },
      {
        id: 2,
        author: "Thomas B.",
        rating: 5,
        date: "1 week ago",
        title: "Best medium roast I've tried",
        content:
          "Smooth, flavorful, and never bitter. This is our go-to coffee now.",
      },
    ],
  },
  {
    id: 5,
    name: "Cold Brew Blend",
    price: "$15.50",
    tag: "Blend",
    description:
      "Coarsely ground for slow steeping. Low acidity, high caffeine kick.",
    longDescription:
      "Our Cold Brew Blend is specially formulated for the cold brew method. We select beans that naturally have low acidity and excellent sweetness, then grind them to a perfect coarse consistency for slow steeping. The result is an incredibly smooth, rich cold brew that's naturally sweet with notes of dark chocolate and nuts, and none of the bitterness or acidity you sometimes get with hot-brewed coffee served cold.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
      // coldBrew("ColdBBlend.jpg"),
      // coldBrew("ColdBlend.jpg"),
      // coldBrew("ColdBrew.jpg"),
      // coldBrew("ColdBrewBlend.jpg"),
    ],
    rating: 4.5,
    reviewCount: 178,
    sizes: ["1lb", "5lb"],
    grindOptions: ["Coarse (Cold Brew)"],
    specifications: [
      { label: "Origin", value: "Guatemala & Sumatra" },
      { label: "Roast Level", value: "Medium-Dark" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Altitude", value: "1400-1900m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Dark Chocolate, Nuts, Molasses" },
    ],
    reviews: [
      {
        id: 1,
        author: "Chris M.",
        rating: 5,
        date: "2 days ago",
        title: "Perfect cold brew every time",
        content:
          "No bitterness, super smooth. I make a big batch every Sunday.",
      },
      {
        id: 2,
        author: "Nina S.",
        rating: 5,
        date: "1 week ago",
        title: "Saves me so much money",
        content:
          "Better than the coffee shop cold brew and a fraction of the price!",
      },
    ],
  },
  {
    id: 6,
    name: "Decaf Delight",
    price: "$14.00",
    tag: "Med. Roast",
    description:
      "All the flavor, none of the jitters. Swiss water process decaffeination.",
    longDescription:
      "Decaf Delight proves that decaf doesn't have to be boring. We use the Swiss Water Process - a chemical-free method that removes 99.9% of the caffeine while preserving all the wonderful flavor notes. This medium roast features beans from Mexico and Peru, with notes of milk chocolate, toasted nuts, and a hint of caramel. Now you can enjoy great coffee any time of day or night!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    ],
    rating: 4.4,
    reviewCount: 134,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Mexico & Peru" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Decaf Method", value: "Swiss Water Process" },
      { label: "Caffeine", value: "99.9% Removed" },
      { label: "Flavor Notes", value: "Milk Chocolate, Toasted Nuts, Caramel" },
    ],
    reviews: [
      {
        id: 1,
        author: "Rebecca L.",
        rating: 5,
        date: "4 days ago",
        title: "Best decaf I've ever had",
        content:
          "Tastes just like regular coffee! I can have my evening cup without the jitters.",
      },
      {
        id: 2,
        author: "Andrew H.",
        rating: 4,
        date: "2 weeks ago",
        title: "Great for evening",
        content: "Smooth and flavorful. Perfect after dinner.",
      },
    ],
  },
  {
    id: 101,
    name: "Velvet Espresso",
    price: "$14.50",
    tag: "Best Seller",
    description: "Dark Roast • Chocolate & Fruit",
    longDescription:
      "Our Velvet Espresso is crafted from 100% Arabica beans grown at high altitudes in the mountains of Colombia. The beans are slow-roasted to perfection, developing complex notes of dark chocolate, dried fig, and a hint of molasses. This roast produces an exceptionally rich crema and a smooth, lingering finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    ],
    rating: 4.8,
    reviewCount: 247,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Colombia" },
      { label: "Roast Level", value: "Dark Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1800-2200m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Dark Chocolate, Dried Fig, Molasses" },
    ],
    reviews: [
      {
        id: 1,
        author: "Sarah M.",
        rating: 5,
        date: "2 days ago",
        title: "Best espresso I've ever made at home",
        content:
          "The crema is incredible and the flavor is so rich without being bitter.",
      },
    ],
  },
  {
    id: 102,
    name: "Midnight Roast",
    price: "$16.00",
    tag: "Whole Bean",
    description: "Ex. Dark • Smoky & Bold",
    longDescription:
      "Midnight Roast is our darkest and most intense blend, created for those who love a powerful coffee experience. We carefully select beans from Sumatra and Guatemala, roasting them until they develop deep, smoky notes while still maintaining a surprisingly smooth finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    ],
    rating: 4.6,
    reviewCount: 189,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Sumatra & Guatemala" },
      { label: "Roast Level", value: "Extra Dark" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Altitude", value: "1500-2000m" },
      { label: "Processing", value: "Semi-Washed" },
      { label: "Flavor Notes", value: "Dark Smoke, Molasses, Burnt Sugar" },
    ],
    reviews: [
      {
        id: 1,
        author: "Michael R.",
        rating: 5,
        date: "3 days ago",
        title: "Finally, a dark roast that's not burnt!",
        content:
          "I love dark roasts but so many taste burnt. This has amazing smoky notes without that unpleasant acrid taste.",
      },
    ],
  },
  {
    id: 103,
    name: "Morning Bliss",
    price: "$15.00",
    tag: "Whole Bean",
    description: "Light Roast • Citrus & Floral",
    longDescription:
      "Morning Bliss is our tribute to the perfect morning cup. This light roast features beans from Ethiopia and Kenya, known for their bright, vibrant flavors.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    ],
    rating: 4.9,
    reviewCount: 312,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Ethiopia & Kenya" },
      { label: "Roast Level", value: "Light Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1900-2300m" },
      { label: "Processing", value: "Natural & Washed" },
      { label: "Flavor Notes", value: "Citrus, Floral, Bergamot" },
    ],
    reviews: [
      {
        id: 1,
        author: "Jessica L.",
        rating: 5,
        date: "1 day ago",
        title: "My new favorite light roast",
        content:
          "So bright and flavorful without being sour. The citrus notes are amazing!",
      },
    ],
  },
  {
    id: 104,
    name: "Caramel Drizzle",
    price: "$18.00",
    tag: "New",
    description: "Med Roast • Sweet Vanilla",
    longDescription:
      "Caramel Drizzle is our most popular medium roast, and for good reason. We've created a blend that's naturally sweet and incredibly smooth, with notes of caramel, vanilla, and just a hint of milk chocolate.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    ],
    rating: 4.7,
    reviewCount: 456,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Brazil & Guatemala" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1200-1800m" },
      { label: "Processing", value: "Pulped Natural" },
      { label: "Flavor Notes", value: "Caramel, Vanilla, Milk Chocolate" },
    ],
    reviews: [
      {
        id: 1,
        author: "Jennifer K.",
        rating: 5,
        date: "5 days ago",
        title: "My whole family loves this",
        content:
          "It's sweet enough that I don't need to add sugar. Perfect every morning!",
      },
    ],
  },
  {
    id: 105,
    name: "Cold Brew Blend",
    price: "$15.50",
    tag: "Cold Brew",
    description: "Coarse Grind • Low Acid",
    longDescription:
      "Our Cold Brew Blend is specially formulated for the cold brew method. We select beans that naturally have low acidity and excellent sweetness, then grind them to a perfect coarse consistency for slow steeping.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    ],
    rating: 4.5,
    reviewCount: 178,
    sizes: ["1lb", "5lb"],
    grindOptions: ["Coarse (Cold Brew)"],
    specifications: [
      { label: "Origin", value: "Guatemala & Sumatra" },
      { label: "Roast Level", value: "Medium-Dark" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Altitude", value: "1400-1900m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Dark Chocolate, Nuts, Molasses" },
    ],
    reviews: [
      {
        id: 1,
        author: "Chris M.",
        rating: 5,
        date: "2 days ago",
        title: "Perfect cold brew every time",
        content:
          "No bitterness, super smooth. I make a big batch every Sunday.",
      },
    ],
  },
  {
    id: 106,
    name: "Decaf Delight",
    price: "$14.00",
    tag: "Whole Bean",
    description: "Swiss Water • Full Flavor",
    longDescription:
      "Decaf Delight proves that decaf doesn't have to be boring. We use the Swiss Water Process - a chemical-free method that removes 99.9% of the caffeine while preserving all the wonderful flavor notes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    ],
    rating: 4.4,
    reviewCount: 134,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Mexico & Peru" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Decaf Method", value: "Swiss Water Process" },
      { label: "Caffeine", value: "99.9% Removed" },
      { label: "Flavor Notes", value: "Milk Chocolate, Toasted Nuts, Caramel" },
    ],
    reviews: [
      {
        id: 1,
        author: "Rebecca L.",
        rating: 5,
        date: "4 days ago",
        title: "Best decaf I've ever had",
        content:
          "Tastes just like regular coffee! I can have my evening cup without the jitters.",
      },
    ],
  },
  {
    id: 107,
    name: "Sumatra Reserve",
    price: "$19.50",
    tag: "Single Origin",
    description: "Single Origin • Earthy & Spicy",
    longDescription:
      "Sumatra Reserve is a premium single-origin coffee from the lush highlands of Indonesia. Known for its unique earthy and spicy profile, this coffee delivers a bold and complex cup with notes of dark chocolate, cinnamon, and a hint of molasses.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
      suMatr("Sumatra.jpg"),
      suMatr("SumatraReserve.jpg"),
    ],
    rating: 4.7,
    reviewCount: 156,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Sumatra, Indonesia" },
      { label: "Roast Level", value: "Medium-Dark" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1200-1600m" },
      { label: "Processing", value: "Wet-Hulled" },
      { label: "Flavor Notes", value: "Earthy, Spicy, Dark Chocolate" },
    ],
    reviews: [
      {
        id: 1,
        author: "Kevin L.",
        rating: 5,
        date: "5 days ago",
        title: "Incredible flavor profile",
        content:
          "The earthy and spicy notes are amazing. A truly unique coffee experience!",
      },
      {
        id: 2,
        author: "Maria S.",
        rating: 4,
        date: "1 week ago",
        title: "Bold and complex",
        content: "Great for French press. Lots of depth and complexity.",
      },
    ],
  },
  {
    id: 108,
    name: "Ethiopian Yirgacheffe",
    price: "$21.00",
    tag: "Single Origin",
    description: "Single Origin • Berry & Wine",
    longDescription:
      "Ethiopian Yirgacheffe is one of the world's most iconic single-origin coffees, renowned for its bright, wine-like acidity and complex berry notes. This coffee offers a delicate floral aroma with hints of jasmine and bergamot.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    ],
    rating: 4.9,
    reviewCount: 289,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Yirgacheffe, Ethiopia" },
      { label: "Roast Level", value: "Light Roast" },
      { label: "Bean Type", value: "100% Arabica (Heirloom)" },
      { label: "Altitude", value: "1900-2200m" },
      { label: "Processing", value: "Natural" },
      { label: "Flavor Notes", value: "Blueberry, Wine, Jasmine" },
    ],
    reviews: [
      {
        id: 1,
        author: "David W.",
        rating: 5,
        date: "3 days ago",
        title: "Coffee perfection",
        content:
          "The berry notes are incredible! This is what specialty coffee is all about.",
      },
      {
        id: 2,
        author: "Sophie M.",
        rating: 5,
        date: "1 week ago",
        title: "My new favorite",
        content: "So bright and complex. Worth every penny!",
      },
    ],
  },
  {
    id: 109,
    name: "French Roast",
    price: "$15.00",
    tag: "Whole Bean",
    description: "Dark Roast • Intense & Smoky",
    longDescription:
      "French Roast is a classic dark roast with intense smoky notes and a bold, full-bodied profile. Perfect for those who love a strong coffee with deep, rich flavors.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    ],
    rating: 4.6,
    reviewCount: 198,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Central America" },
      { label: "Roast Level", value: "French Roast (Dark)" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Altitude", value: "1400-1800m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Smoky, Dark Chocolate, Molasses" },
    ],
    reviews: [
      {
        id: 1,
        author: "Robert T.",
        rating: 5,
        date: "4 days ago",
        title: "Classic French Roast",
        content: "Bold and smoky, exactly what I was looking for!",
      },
    ],
  },
  {
    id: 110,
    name: "Hazelnut Cream",
    price: "$16.50",
    tag: "Limited",
    description: "Flavored • Nutty & Smooth",
    longDescription:
      "Hazelnut Cream is a delicious flavored coffee with natural hazelnut and vanilla notes. Smooth, creamy, and incredibly satisfying - perfect for a special treat.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    ],
    rating: 4.5,
    reviewCount: 145,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Central America" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Flavor", value: "Natural Hazelnut & Vanilla" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Hazelnut, Vanilla, Creamy" },
    ],
    reviews: [
      {
        id: 1,
        author: "Lisa K.",
        rating: 5,
        date: "6 days ago",
        title: "Absolutely delicious!",
        content:
          "The hazelnut flavor is perfect - not too strong, not too weak.",
      },
    ],
  },
  {
    id: 111,
    name: "Nitro Can 4-Pack",
    price: "$22.00",
    tag: "Cold Brew",
    description: "Ready to Drink • Creamy Texture",
    longDescription:
      "Our Nitro Can 4-Pack offers ready-to-drink cold brew infused with nitrogen for an incredibly creamy, velvety texture. No preparation needed - just chill and enjoy!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    ],
    rating: 4.8,
    reviewCount: 167,
    sizes: ["4-Pack"],
    grindOptions: ["Ready to Drink"],
    specifications: [
      { label: "Type", value: "Nitro Cold Brew" },
      { label: "Packaging", value: "4 x 12oz Cans" },
      { label: "Caffeine", value: "High" },
      { label: "Serving", value: "Chilled" },
      { label: "Shelf Life", value: "6 Months" },
      { label: "Flavor Notes", value: "Smooth, Chocolatey, Creamy" },
    ],
    reviews: [
      {
        id: 1,
        author: "Mike R.",
        rating: 5,
        date: "2 days ago",
        title: "Perfect for on-the-go",
        content:
          "Super convenient and tastes amazing! The nitro texture is incredible.",
      },
    ],
  },
  {
    id: 112,
    name: "Breakfast Blend",
    price: "$14.00",
    tag: "Whole Bean",
    description: "Light Roast • Mild & Balanced",
    longDescription:
      "Breakfast Blend is a smooth, balanced light roast perfect for starting your day. With mild acidity and notes of caramel and citrus, it's an approachable and delightful cup every morning.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    ],
    rating: 4.6,
    reviewCount: 223,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Latin America" },
      { label: "Roast Level", value: "Light Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1200-1700m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Caramel, Citrus, Mild" },
    ],
    reviews: [
      {
        id: 1,
        author: "Amy L.",
        rating: 5,
        date: "5 days ago",
        title: "Perfect morning coffee",
        content:
          "Smooth and balanced. Not too strong, not too weak - just right!",
      },
    ],
  },
  {
    id: 113,
    name: "Colombia Supremo",
    price: "$18.50",
    tag: "Single Origin",
    description: "Med-Dark • Caramel & Nutty",
    longDescription:
      "Colombia Supremo is a premium single-origin coffee from the renowned coffee-growing regions of Colombia. With a medium-dark roast, it offers rich caramel and nutty notes with a smooth, balanced finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    ],
    rating: 4.8,
    reviewCount: 256,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Colombia" },
      { label: "Roast Level", value: "Medium-Dark" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1700-2100m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Caramel, Nuts, Chocolate" },
    ],
    reviews: [
      {
        id: 1,
        author: "Peter M.",
        rating: 5,
        date: "3 days ago",
        title: "Classic Colombian",
        content:
          "Everything you want in a Colombian coffee - rich, smooth, and flavorful!",
      },
    ],
  },
  {
    id: 114,
    name: "Espresso Royale",
    price: "$16.50",
    tag: "Espresso",
    description: "Dark Roast • Thick Crema",
    longDescription:
      "Espresso Royale is a premium espresso blend designed for the perfect shot. With a thick, golden crema and rich, chocolatey notes, it's ideal for both straight espresso and milk-based drinks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    ],
    rating: 4.7,
    reviewCount: 189,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "South America & Asia" },
      { label: "Roast Level", value: "Dark Roast" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Altitude", value: "1300-1800m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Dark Chocolate, Caramel, Thick Crema" },
    ],
    reviews: [
      {
        id: 1,
        author: "Alex T.",
        rating: 5,
        date: "4 days ago",
        title: "Best espresso blend",
        content: "The crema is incredible! Perfect for lattes and cappuccinos.",
      },
    ],
  },
  {
    id: 115,
    name: "Ceramic Mug",
    price: "$25.00",
    tag: "Merchandise",
    description: "Handcrafted • 12oz Capacity",
    longDescription:
      "Our handcrafted ceramic mug is the perfect companion for your daily coffee ritual. With a comfortable handle and elegant design, it's both functional and beautiful.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    ],
    rating: 4.9,
    reviewCount: 345,
    sizes: ["One Size"],
    grindOptions: ["Not Applicable"],
    specifications: [
      { label: "Material", value: "Ceramic" },
      { label: "Capacity", value: "12oz (355ml)" },
      { label: "Care", value: "Dishwasher & Microwave Safe" },
      { label: "Origin", value: "Handcrafted" },
      { label: "Finish", value: "Matte Glaze" },
      { label: "Color", value: "Charcoal & Cream" },
    ],
    reviews: [
      {
        id: 1,
        author: "Emma S.",
        rating: 5,
        date: "2 days ago",
        title: "Beautiful mug!",
        content: "Perfect size, great quality, and looks amazing on my desk!",
      },
    ],
  },
  {
    id: 116,
    name: "Brewer's Kit",
    price: "$85.00",
    tag: "Merchandise",
    description: "Pour-over Set • Filters Included",
    longDescription:
      "The Brewer's Kit includes everything you need to make the perfect pour-over coffee: a ceramic dripper, kettle, filters, and a bag of our signature blend.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    ],
    rating: 4.8,
    reviewCount: 123,
    sizes: ["Complete Kit"],
    grindOptions: ["Not Applicable"],
    specifications: [
      { label: "Includes", value: "Dripper, Kettle, Filters, Coffee" },
      { label: "Dripper", value: "Ceramic V60 Style" },
      { label: "Kettle", value: "Stainless Steel Gooseneck" },
      { label: "Filters", value: "100 Count" },
      { label: "Coffee", value: "12oz Signature Blend" },
      { label: "Gift Ready", value: "Yes" },
    ],
    reviews: [
      {
        id: 1,
        author: "Mark D.",
        rating: 5,
        date: "1 week ago",
        title: "Perfect gift!",
        content: "Got this for my coffee-obsessed friend and they loved it!",
      },
    ],
  },
  {
    id: 117,
    name: "Guatemala Antigua",
    price: "$19.00",
    tag: "Single Origin",
    description: "Complex • Cocoa & Spices",
    longDescription:
      "Guatemala Antigua is a renowned single-origin coffee from the volcanic soils of Antigua. With complex notes of cocoa, spices, and a hint of citrus, it's a truly exceptional cup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    ],
    rating: 4.9,
    reviewCount: 234,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Antigua, Guatemala" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1500-2000m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Cocoa, Cinnamon, Citrus" },
    ],
    reviews: [
      {
        id: 1,
        author: "Samantha K.",
        rating: 5,
        date: "3 days ago",
        title: "Exceptional coffee",
        content: "The complexity is amazing! So many layers of flavor.",
      },
    ],
  },
  {
    id: 118,
    name: "Vanilla Cold Brew",
    price: "$5.50",
    tag: "Cold Brew",
    description: "Ready to Drink • Sweet Cream",
    longDescription:
      "Vanilla Cold Brew is a ready-to-drink cold brew with natural vanilla flavor and sweet cream. Smooth, refreshing, and perfect for hot days!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    ],
    rating: 4.6,
    reviewCount: 89,
    sizes: ["12oz Bottle"],
    grindOptions: ["Ready to Drink"],
    specifications: [
      { label: "Type", value: "Ready-to-Drink Cold Brew" },
      { label: "Size", value: "12oz (355ml)" },
      { label: "Flavor", value: "Vanilla & Sweet Cream" },
      { label: "Caffeine", value: "Medium" },
      { label: "Serving", value: "Chilled" },
      { label: "Flavor Notes", value: "Vanilla, Creamy, Smooth" },
    ],
    reviews: [
      {
        id: 1,
        author: "Nicole M.",
        rating: 5,
        date: "5 days ago",
        title: "So refreshing!",
        content: "Perfect for hot summer days. Not too sweet, just right!",
      },
    ],
  },
  {
    id: 119,
    name: "Kenya AA",
    price: "$22.50",
    tag: "Single Origin",
    description: "Bright • Wine-like Acidity",
    longDescription:
      "Kenya AA is a premium single-origin coffee known for its bright, wine-like acidity and complex berry notes. With notes of blackcurrant, citrus, and a hint of wine, it's a truly exceptional cup.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
      imgesKenya("kenya.jpeg"),
      imgesKenya("kenyaas.jpg"),
      imgesKenya("kkk.jpg"),
    ],
    rating: 4.9,
    reviewCount: 198,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Kenya" },
      { label: "Roast Level", value: "Light Roast" },
      { label: "Bean Type", value: "100% Arabica (SL28, SL34)" },
      { label: "Altitude", value: "1700-2100m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Blackcurrant, Citrus, Wine" },
    ],
    reviews: [
      {
        id: 1,
        author: "Daniel R.",
        rating: 5,
        date: "4 days ago",
        title: "Incredible brightness!",
        content:
          "The wine-like acidity is amazing. A truly unique and special coffee.",
      },
    ],
  },
  {
    id: 120,
    name: "House Blend",
    price: "$13.50",
    tag: "Whole Bean",
    description: "Medium Roast • Daily Drinker",
    longDescription:
      "House Blend is our go-to daily coffee - a balanced medium roast with notes of chocolate, caramel, and nuts. Perfect for every day, any time of day.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfo4Boo_xDksyNASY4GEhupCJbEZIKH2vmr2wMs8OccL6aGLLTAGrOckOYB_uJ7ST1sB9dg91JE-VoWejYtSITAzhMeVycNU1UhCs0-TnlB41mskLYV0I_OYHGLuOkxS5BK5-xWIuZvmXucIIqg0BIOiAxUxCzP4zScWH38zFJvAxvkQB3sO_3vGt5xYRjG7TF2yMpjomDWCKTSM_80SzlDAfb-KZKd2YjCGC4XVWbdsIdkjI89qGL5QdKMl9oq-6VTQDmkYnT1w",
    ],
    rating: 4.7,
    reviewCount: 412,
    sizes: ["12oz", "1lb", "5lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Latin America Blend" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1200-1800m" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Chocolate, Caramel, Nuts" },
    ],
    reviews: [
      {
        id: 1,
        author: "Laura T.",
        rating: 5,
        date: "6 days ago",
        title: "Our daily coffee",
        content:
          "We drink this every morning. Consistent, delicious, and affordable!",
      },
    ],
  },
  {
    id: 121,
    name: "Tote Bag",
    price: "$18.00",
    tag: "Merchandise",
    description: "Canvas • Eco-Friendly",
    longDescription:
      "Our eco-friendly canvas tote bag is perfect for carrying your coffee, groceries, or daily essentials. Durable, stylish, and better for the planet!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClLtl1DqJzW0MDUiIv81hJMVS6k-9D05cvFH-dc1FbLu8FnQfbyCU5XRzkhji7jDcUOLXigD3XL-oxsOhgiyKuJh7GPLW2-tKl-Lk8oPQAO2xtmDW03Xhp7omVLcoJPQklpCt_MEZuyyZAR4ejB4AZHy3myClci0a80JJkBYOh9zSOqmY6Hc21OwaFzyuAXlt0QyVnmxho-ex-enok0pBw2mDy5TjEgQ-98VgY08TEmMIZbGsBMDONJ2itwQPCEqbfAHkOrc7moA",
    ],
    rating: 4.8,
    reviewCount: 267,
    sizes: ["One Size"],
    grindOptions: ["Not Applicable"],
    specifications: [
      { label: "Material", value: "100% Cotton Canvas" },
      { label: "Size", value: '18" x 15" x 6"' },
      { label: "Care", value: "Machine Washable" },
      { label: "Eco-Friendly", value: "Yes" },
      { label: "Capacity", value: "25 lbs" },
      { label: "Color", value: "Natural Canvas" },
    ],
    reviews: [
      {
        id: 1,
        author: "Rachel M.",
        rating: 5,
        date: "3 days ago",
        title: "Great tote!",
        content: "Perfect size, sturdy, and looks great. Use it every day!",
      },
    ],
  },
  {
    id: 122,
    name: "Costa Rica Tarrazu",
    price: "$19.50",
    tag: "Single Origin",
    description: "Honey Process • Sweet Clean",
    longDescription:
      "Costa Rica Tarrazu is a premium single-origin coffee from the renowned Tarrazú region. Using the honey process, it offers a sweet, clean cup with notes of honey, citrus, and caramel.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBot5I4ylepuotqQcas9nznlth5h4wYn7QqlfH2HW1VFTqE0VSCqrNkB7UfUO7BtUA-kOufLfMmRmLfKIKcaqZNppGfajNcd3yOIoT29LBtcyFU4RlwdJ-PSabnxuuL8w1YYyc337VlkamcX60ACh4--kMPNhLswifK5xVWTF6NxZV4WXAfoFJceheSKGXlpiwMqCV91FrJRVuoGHqNXXw8nbo9TYbggjFQ1vpo5J5K9PXvMXCLuIopMN1X2exvsHVdsYIpc1PHJA",
    ],
    rating: 4.8,
    reviewCount: 178,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
    specifications: [
      { label: "Origin", value: "Tarrazú, Costa Rica" },
      { label: "Roast Level", value: "Medium Roast" },
      { label: "Bean Type", value: "100% Arabica" },
      { label: "Altitude", value: "1600-2000m" },
      { label: "Processing", value: "Honey Process" },
      { label: "Flavor Notes", value: "Honey, Citrus, Caramel" },
    ],
    reviews: [
      {
        id: 1,
        author: "Tom S.",
        rating: 5,
        date: "5 days ago",
        title: "Honey process perfection",
        content: "The sweetness is incredible! Honey process at its best.",
      },
    ],
  },
  {
    id: 123,
    name: "Winter Blend",
    price: "$17.00",
    tag: "Seasonal",
    description: "Seasonal • Spices & Dark Choc",
    longDescription:
      "Winter Blend is our seasonal specialty - a warm, comforting blend with notes of cinnamon, nutmeg, and dark chocolate. Perfect for cozy winter days!",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC0jLYSIoKdyOOBxhEIEXBHXgx4l4Y2eHGgIZUUVfBA--1ZZk9fsNCM-EL_lScejQcJ823DzYFXN9egW8vrpIU35t5487lW16KY5hozK0RIfLvk7HziZl2vLS7STsm3kXeZjEyGthxbo4szfWbtY2yybLxfy3O7j8ixL8zipTfjzjJsnx3GAWsuKuN0L9xhp5q3MozgMta3A1agEmfB0f1hIMYonAa9432a43-TOoS3lUsgkkQKz-Ietnhtcopw5x4hoYC2m_IxrA",
    ],
    rating: 4.9,
    reviewCount: 245,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "Latin America & Indonesia" },
      { label: "Roast Level", value: "Medium-Dark" },
      { label: "Bean Type", value: "Arabica Blend" },
      { label: "Seasonal", value: "Limited Edition" },
      { label: "Processing", value: "Washed & Semi-Washed" },
      { label: "Flavor Notes", value: "Cinnamon, Nutmeg, Dark Chocolate" },
    ],
    reviews: [
      {
        id: 1,
        author: "Katie L.",
        rating: 5,
        date: "2 days ago",
        title: "Perfect winter coffee!",
        content: "The spice notes are perfect! Feels like a warm hug in a cup.",
      },
    ],
  },
  {
    id: 124,
    name: "Espresso Intenso",
    price: "$15.00",
    tag: "Espresso",
    description: "Robusta Blend • High Caffeine",
    longDescription:
      "Espresso Intenso is a bold espresso blend with a touch of Robusta for extra caffeine and crema. Rich, intense, and perfect for those who love a strong espresso.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDxTMGMoo9VZa51NIK1FuUvpz082q0gFtvHXG34bJJmhzvaIgfQV9DiD50sQ4VgRzx7DTscSHEv4DNuF_YkiojDi2kZIXE34oBy0oAPpvpzZn8NJkyBVXyG3iBWW-HE3cnVLFSWAVmZS0pd5ppoHEgv9dO5nMZqPiQi8_UfT_H8bOaN4lUr8k2Wx6QtpoQKCvJaff4Ry98ltSSHCbG2pkQW_5phicPP6aoF0bDpjjSKPaK1kUkadoFwrM361T1vQh99isqdbJHyZg",
    ],
    rating: 4.6,
    reviewCount: 156,
    sizes: ["12oz", "1lb"],
    grindOptions: ["Whole Bean", "Fine", "Espresso"],
    specifications: [
      { label: "Origin", value: "South America & Africa" },
      { label: "Roast Level", value: "Dark Roast" },
      { label: "Bean Type", value: "Arabica & Robusta Blend" },
      { label: "Caffeine", value: "High" },
      { label: "Processing", value: "Washed" },
      { label: "Flavor Notes", value: "Dark Chocolate, Intense, Bold" },
    ],
    reviews: [
      {
        id: 1,
        author: "Steve R.",
        rating: 5,
        date: "4 days ago",
        title: "Strong and delicious",
        content:
          "Perfect for my morning double espresso. Strong but not bitter!",
      },
    ],
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedGrind, setSelectedGrind] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isLoading, setIsLoading] = useState(true);
  const [zoomImage, setZoomImage] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      let found = allProducts.find((p) => p.id === parseInt(id));

      if (!found) {
        found = {
          id: parseInt(id),
          name: "Premium Coffee",
          price: "$15.00",
          tag: "Premium",
          description: "Our premium, ethically sourced coffee.",
          longDescription:
            "Ethically sourced and carefully roasted to perfection.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
          images: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD4angOzNKdL8Hl308BSyzhp3z4bQmA5H9D0zggARymfmWWENr3m7eBFKYmO3y2-9GWnLxo2vPC6weD9bNEIxuxSk1nbxbxBmFZ8pCjHHeNAk6Xer13F5I2REV0sr7_Kg9PMEKmqkkK0DjEJIUJoKB_sgCB6Z6iFgQKf2aJMf-ARm6P-7oZpFob_s3-GvEqdSl_2a8_2Or3Ax182KPoUUNiz3AnSvnRTP8Kog-XPHRTNDn4awJSwe84VlMUJluKuUtgO4ynZlgRjA",
          ],
          rating: 4.7,
          reviewCount: 100,
          sizes: ["12oz", "1lb"],
          grindOptions: ["Whole Bean", "Coarse", "Medium", "Fine"],
          specifications: [
            { label: "Origin", value: "Unknown" },
            { label: "Roast Level", value: "Medium" },
            { label: "Bean Type", value: "100% Arabica" },
          ],
          reviews: [
            {
              id: 1,
              author: "Happy Customer",
              rating: 5,
              date: "1 week ago",
              title: "Great coffee!",
              content: "Really enjoyed this coffee. Highly recommend!",
            },
          ],
        };
      }

      setProduct(found);
      if (found) {
        setSelectedSize(location.state?.selectedSize || found.sizes[0]);
        setSelectedGrind(
          location.state?.selectedGrind || found.grindOptions[0],
        );
        setQuantity(location.state?.quantity || 1);
      }
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [id, location.state]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text-main dark:text-text-light mb-4">
            Product not found
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize,
      selectedGrind,
      quantity,
    });
    navigate("/cart");
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.images.length) % product.images.length,
    );
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          size={16}
          className="fill-primary text-primary"
        />,
      );
    }
    if (hasHalf) {
      stars.push(
        <StarHalf key="half" size={16} className="fill-primary text-primary" />,
      );
    }
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={16} className="text-text-muted" />,
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300 pt-20">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft size={18} />
          <span>Back to Shop</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="relative aspect-square bg-accent-light dark:bg-accent-dark/30 rounded-3xl overflow-hidden group">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-full object-contain p-8"
              />
              <button
                onClick={() => setZoomImage(product.images[currentImageIndex])}
                className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-background-dark/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-background-dark transition-colors"
              >
                <ZoomIn
                  size={20}
                  className="text-text-main dark:text-text-light"
                />
              </button>
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-background-dark/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-background-dark transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft
                      size={20}
                      className="text-text-main dark:text-text-light"
                    />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-background-dark/90 rounded-full shadow-lg hover:bg-white dark:hover:bg-background-dark transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight
                      size={20}
                      className="text-text-main dark:text-text-light"
                    />
                  </button>
                </>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      currentImageIndex === index
                        ? "border-primary"
                        : "border-border-light dark:border-white/10 hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase mb-3">
              {product.tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-main dark:text-text-light font-display mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-text-muted text-sm">
                ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-primary font-display mb-6">
              {product.price}
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-text-main dark:text-text-light mb-3">
                  Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        selectedSize === size
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-white dark:bg-surface-dark border border-border-light dark:border-white/10 text-text-main dark:text-text-light hover:border-primary/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-text-main dark:text-text-light mb-3">
                  Grind
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.grindOptions.map((grind) => (
                    <button
                      key={grind}
                      onClick={() => setSelectedGrind(grind)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        selectedGrind === grind
                          ? "bg-primary text-white shadow-lg shadow-primary/25"
                          : "bg-white dark:bg-surface-dark border border-border-light dark:border-white/10 text-text-main dark:text-text-light hover:border-primary/50"
                      }`}
                    >
                      {grind}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-text-main dark:text-text-light mb-3">
                  Quantity
                </label>
                <div className="inline-flex items-center border border-border-light dark:border-white/10 rounded-xl bg-background-light dark:bg-background-dark">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-text-main dark:text-text-light hover:text-primary transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-bold text-text-main dark:text-text-light">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-text-main dark:text-text-light hover:text-primary transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border-light dark:border-white/10">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-bold text-text-main dark:text-text-light">
                  Free Shipping
                </p>
                <p className="text-xs text-text-muted">Orders over $50</p>
              </div>
              <div className="text-center">
                <ShieldCheck size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-bold text-text-main dark:text-text-light">
                  Quality Guarantee
                </p>
                <p className="text-xs text-text-muted">Fresh roasted</p>
              </div>
              <div className="text-center">
                <RotateCcw size={24} className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-bold text-text-main dark:text-text-light">
                  Easy Returns
                </p>
                <p className="text-xs text-text-muted">30 day policy</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mb-16">
          <div className="flex gap-6 border-b border-border-light dark:border-white/10 mb-8">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold transition-colors capitalize ${
                  activeTab === tab
                    ? "text-primary border-b-2 border-primary"
                    : "text-text-muted hover:text-text-main dark:hover:text-text-light"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "description" && (
                <div className="max-w-3xl">
                  <p className="text-text-muted text-lg leading-relaxed mb-6">
                    {product.longDescription}
                  </p>
                  <h3 className="text-xl font-bold text-text-main dark:text-text-light mb-4 font-display">
                    Brewing Tips
                  </h3>
                  <ul className="space-y-3 text-text-muted">
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Use 1:16 coffee to water ratio for optimal extraction
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Grind fresh just before brewing for maximum flavor
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>
                        Store in an airtight container away from light and heat
                      </span>
                    </li>
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="max-w-2xl">
                  <div className="space-y-4">
                    {product.specifications.length > 0 ? (
                      product.specifications.map((spec, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-3 border-b border-border-light dark:border-white/10"
                        >
                          <span className="text-text-muted font-medium">
                            {spec.label}
                          </span>
                          <span className="text-text-main dark:text-text-light font-bold">
                            {spec.value}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-text-muted">
                        No specifications available
                      </p>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="max-w-3xl space-y-6">
                  <div className="flex items-center gap-6 p-6 bg-accent-light dark:bg-accent-dark/30 rounded-2xl mb-8">
                    <div className="text-center">
                      <p className="text-5xl font-bold text-primary font-display">
                        {product.rating}
                      </p>
                      <div className="flex items-center justify-center my-2">
                        {renderStars(product.rating)}
                      </div>
                      <p className="text-sm text-text-muted">
                        {product.reviewCount} reviews
                      </p>
                    </div>
                  </div>
                  {product.reviews.length > 0 ? (
                    product.reviews.map((review) => (
                      <div
                        key={review.id}
                        className="p-6 bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-white/10"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="font-bold text-text-main dark:text-text-light">
                              {review.author}
                            </p>
                            <p className="text-xs text-text-muted">
                              {review.date}
                            </p>
                          </div>
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                        <h4 className="font-bold text-text-main dark:text-text-light mb-2">
                          {review.title}
                        </h4>
                        <p className="text-text-muted">{review.content}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-text-muted">No reviews yet</p>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-text-main dark:text-text-light font-display mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="group bg-white dark:bg-surface-dark rounded-2xl border border-border-light dark:border-white/10 overflow-hidden hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square bg-accent-light dark:bg-accent-dark/30 p-6 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1 block">
                    {item.tag}
                  </span>
                  <h3 className="text-lg font-bold text-text-main dark:text-text-light mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-primary">
                      {item.price}
                    </p>
                    <div className="flex items-center gap-1 text-text-muted">
                      {renderStars(item.rating)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {zoomImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
            onClick={() => setZoomImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-4xl max-h-[90vh] p-4"
            >
              <img
                src={zoomImage}
                alt="Zoomed product"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDetails;
