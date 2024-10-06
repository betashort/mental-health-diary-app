import React from "react";
import TipsCard from "../component/tips/Card/TipsCard";
import MHDImage from "../asset/image/MHD-image.png";

type TTipsCard = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const tipCardList: TTipsCard[] = [
  {
    title: "強みを見つけるためのフレームワーク",
    image: MHDImage,
    description: "強みを見つけるためのフレームワーク",
    link: "/tips/findout-strongpoint",
  },
];

function TipsPage() {
  return (
    <>
      <div>
        {tipCardList.map((card) => {
          return (
            <TipsCard
              title={card.title}
              image={card.image}
              description={card.description}
              link={card.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default TipsPage;
