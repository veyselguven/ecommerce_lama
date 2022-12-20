import React from "react";
import Card from "../Card/Card";
import "./List.scss";

function List() {
  const data = [
    {
      id: 1,
      img: "https://images.wsj.net/im-682585?width=860&size=1.5005861664712778",
      img2: "https://live.worldbank.org/sites/default/files/styles/medium/public/experts/ekrem_imamoglu_0.jpg?itok=XZFGl09C",
      title: "TITLEEEE1",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.wsj.net/im-682585?width=860&size=1.5005861664712778",
      img2: "https://live.worldbank.org/sites/default/files/styles/medium/public/experts/ekrem_imamoglu_0.jpg?itok=XZFGl09C",
      title: "TITLEEEE 2",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.wsj.net/im-682585?width=860&size=1.5005861664712778",
      img2: "https://live.worldbank.org/sites/default/files/styles/medium/public/experts/ekrem_imamoglu_0.jpg?itok=XZFGl09C",
      title: "TITLEEEE 3",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.wsj.net/im-682585?width=860&size=1.5005861664712778",
      img2: "https://live.worldbank.org/sites/default/files/styles/medium/public/experts/ekrem_imamoglu_0.jpg?itok=XZFGl09C",
      title: "TITLEEEE 4",
      isNew: false,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="list">
      {data.map((item) => {
        return <Card item={item} key={item.id} />;
      })}
    </div>
  );
}

export default List;
