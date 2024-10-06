import React from "react";
import { Link } from "react-router-dom";

function TipsCard(props: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <>
      <div className="TipsCard w-[400px] h-[800px] m-4">
        <div className="TipsCardTitle">{props.title}</div>
        <div className="TipsCardImage">
          <Link to={props.link}>
            <img className="" src={props.image} alt={props.title} />
          </Link>
        </div>
        <div className="TipsCardDescription">{props.description}</div>
      </div>
    </>
  );
}

export default TipsCard;
