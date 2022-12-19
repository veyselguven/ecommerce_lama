import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
function FeaturedProducts({ type }) {
  const data = [
    {
      id: 1,
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.penguinrandomhouse.com%2Fauthor%2F22627&imgrefurl=https%3A%2F%2Fwww.penguinrandomhouse.com%2Fauthors%2F22627%2Fbarack-obama%2F&tbnid=9NkV1doYIWYbcM&vet=12ahUKEwjuosqD5Yb8AhUYBkQIHZMXCoIQMyhWegUIARC5AQ..i&docid=96wQeoVJq9bISM&w=333&h=450&q=random%20pic&ved=2ahUKEwjuosqD5Yb8AhUYBkQIHZMXCoIQMyhWegUIARC5AQ",
      img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fpenguin-random-house-ceo-resigns-weeks-after-simon-schuster-deal-was-blocked-11670591385&psig=AOvVaw1MRB2BSBe62p1PPRyvp3UA&ust=1671577352139000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjLuYTlhvwCFQAAAAAdAAAAABAT",
      title: "TITLEEEE1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.penguinrandomhouse.com%2Fauthor%2F22627&imgrefurl=https%3A%2F%2Fwww.penguinrandomhouse.com%2Fauthors%2F22627%2Fbarack-obama%2F&tbnid=9NkV1doYIWYbcM&vet=12ahUKEwjuosqD5Yb8AhUYBkQIHZMXCoIQMyhWegUIARC5AQ..i&docid=96wQeoVJq9bISM&w=333&h=450&q=random%20pic&ved=2ahUKEwjuosqD5Yb8AhUYBkQIHZMXCoIQMyhWegUIARC5AQ",
      img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fpenguin-random-house-ceo-resigns-weeks-after-simon-schuster-deal-was-blocked-11670591385&psig=AOvVaw1MRB2BSBe62p1PPRyvp3UA&ust=1671577352139000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjLuYTlhvwCFQAAAAAdAAAAABAT",
      title: "TITLEEEE 2",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages1.penguinrandomhouse.com%2Fauthor%2F22627&imgrefurl=https%3A%2F%2Fwww.penguinrandomhouse.com%2Fauthors%2F22627%2Fbarack-obama%2F&tbnid=9NkV1doYIWYbcM&vet=12ahUKEwjuosqD5Yb8AhUYBkQIHZMXCoIQMyhWegUIARC5AQ..i&docid=96wQeoVJq9bISM&w=333&h=450&q=random%20pic&ved=2ahUKEwjuosqD5Yb8AhUYBkQIHZMXCoIQMyhWegUIARC5AQ",
      img2: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fpenguin-random-house-ceo-resigns-weeks-after-simon-schuster-deal-was-blocked-11670591385&psig=AOvVaw1MRB2BSBe62p1PPRyvp3UA&ust=1671577352139000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPjLuYTlhvwCFQAAAAAdAAAAABAT",
      title: "TITLEEEE 3",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default FeaturedProducts;
