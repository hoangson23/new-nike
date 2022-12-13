//rfc
import React from "react";
import MainContainer from "../../Components/MainContainer";

export default function Home() {
  const titleTrending = "Trending";
  const titleMoreNike = "More Nike";
  const titleDontMiss = "Don't Miss";
  const carouselImg = [
    "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/80fd8e85-5db5-4231-bbe7-f17dc933b797/nike-just-do-it.jpg",
    "https://static.nike.com/a/images/f_auto/dpr_1.0/w_1229,c_limit/e04d1808-9792-46ba-bcbd-3b2302a40b31/nike-by-you-custom-shoes.jpg",
  ];
  const dataDowloadApp = [
    {
      title: "Nike FC Prevents",
      events: "The footballverse",
      desc:"Deep in the Swees Alps, agroup of scientsts cracked the code. A push of button launches the ultimate battle between legendary Nike [player, both pass and present. Watch the film, then explore the world of Nike FC in the Nike APP",
      dowloadButton: "Dowload the Nike App",
      shopButton: "Shop",
    }
  ];
  const dataTrending = [
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/beba11dc-27f3-4fac-97cc-560674ebfe6f/nike-just-do-it.png",
      localLink: "Must- Have Kicks ",
      title: "unwrap style",
      firstDesc: "This season, give a gift that never go out of style,",
      secondDesc:
        " From Air Force 1s and Jordons to Dunks and more, we have classic sneakers they need to make a statement with every step.",
      buttonTrending: "Shop",
    },
  ];
  const dataDontMiss = [
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/fe04f025-3e0f-4d21-b267-6c063a63d1f4/nike-just-do-it.png",
      title: "Add A Little Sparkle To Your Look",
      titleButton: "Shop",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/b3be382f-2ea8-469a-b1c3-7bad9ed053db/nike-just-do-it.png",
      title: "Varsity Vibes",
      titleButton: "Shop",
    },
  ];
  const dataMoreNike = [
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/cb91797a-6054-4201-8bee-c08700c83e47/nike-just-do-it.png",
      titleButton: "Men's",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/b47f5049-1b86-4642-b50c-310ce59b5940/nike-just-do-it.png",
      titleButton: "Women's",
    },
    {
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/44c84aa3-702f-49fd-80e0-a74258b9b0b6/nike-just-do-it.png",
      titleButton: "Kid's",
    },
  ];

  const merchMenu = [
    {
      id: 1,
      heading: "Icons",
      title1: "Air Force 1",
      title2: "Huarache",
      title3: "Air Max 90",
      title4: "Air Max 95",
      title5: "Air Max 97",
      title6: "Air Max 270",
      title7: "Air Max 720",
      title8: "All Air Max",
      title9: "Vapormax",
    },
    {
      id: 2,
      heading: "Shoes",
      title1: "All Shoes",
      title2: "Custom Shoes",
      title3: "Jordan Shoes",
      title4: "Running Shoes",
      title5: "Basketball Shoes",
      title6: "Football Shoes",
      title7: "Gym & Training Shoes",
      title8: "Lifestyle Shoes",
    },
    {
      id: 3,
      heading: "Clothing",
      title1: "All Clothing",
      title2: "Modest Wear",
      title3: "Hoodies & Pullovers",
      title4: "Shirts & Tops",
      title5: "Jackets",
      title6: "Compression & Nike Pro",
      title7: "Trousers & Leggings",
      title8: "Shorts",
    },
    {
      id: 4,
      heading: "Kid's",
      title1: "Infant & Toddler Shoes",
      title2: "Kids' Shoes",
      title3: "Kids' Jordan Shoes",
      title4: "Kids' Basketball Shoes",
      title5: "Kids' Running Shoes",
      title6: "Kids' Clothing",
      title7: "Kids' Backpacks",
      title8: "Kids' Socks",
    },
  ];
  return (
    <div>
      <MainContainer
        carouselImg={carouselImg}
        dataDowloadApp = {dataDowloadApp}
        titleTrending={titleTrending}
        dataTrending={dataTrending}
        titleMoreNike={titleMoreNike}
        dataMoreNike={dataMoreNike}
        titleDontMiss={titleDontMiss}
        dataDontMiss={dataDontMiss}
        merchMenu={merchMenu}
      />
    </div>
  );
}
