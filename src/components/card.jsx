import React from "react";
import style from "../style.module.css";

const Card = (props) => {
  const { name, img, birthday, occupation, status, nickname } = props.card;
  return (
    <div className="m-auto" className={style.square}>
      <img
        style={{ width: "400px", height: "500px" }}
        className="mx-auto d-block rounded border"
        src={img}
        alt="Avatar"
      />
      <div className={style.overlay}>
        <div className={style.text}>
          <h3 className="mx-auto">{name}</h3>
          <ul>
            <li>
              <strong>nickname</strong>: {nickname}
            </li>
            <li>
              <strong>birthday</strong>: {birthday}
            </li>
            <li>
              <strong>occupation</strong>: {occupation}
            </li>
            <li>
              <strong>status</strong>: {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
