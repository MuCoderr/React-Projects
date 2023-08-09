import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const { cartItems, quantity, total } = useSelector(store => store.cart);

  return (
    <>
      {quantity < 1 ? (
        <section>
          <header>
            <h2>Sepetim</h2>
            <h4>Bomboş</h4>
          </header>
        </section>
      ) : (
        <section>
          <header>
            <h2>Sepetim</h2>
          </header>
          <div>
            {cartItems.map(item => {
              return <CourseItem {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button>Temizle</button>
          </footer>
        </section>
      )}
    </>
  );
};

export default CourseList;
