import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

function Cart() {
  const data = [
    {
      id: 1,
      img: "https://images.wsj.net/im-682585?width=860&size=1.5005861664712778",
      img2: "https://live.worldbank.org/sites/default/files/styles/medium/public/experts/ekrem_imamoglu_0.jpg?itok=XZFGl09C",
      title: "TITLEEEE1",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.wsj.net/im-682585?width=860&size=1.5005861664712778",
      img2: "https://live.worldbank.org/sites/default/files/styles/medium/public/experts/ekrem_imamoglu_0.jpg?itok=XZFGl09C",
      title: "TITLEEEE 2",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Product in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1* {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
      </div>
      <button> Proceed to checkout</button>
      <span className="reset">Reset CART</span>
    </div>
  );
}

export default Cart;
