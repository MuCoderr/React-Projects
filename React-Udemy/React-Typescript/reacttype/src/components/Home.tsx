import React from "react";
import { DateComing } from "./propstypes";

function Home(props: DateComing) {
  return (
    <div>
      {props.name} eğitimine hoşgeldiniz. Kurs sayısı : {props.courseNumber}
      {props.isBest ? (
        <p>En İyi React Eğitimi bu eğitim</p>
      ) : (
        <p>En İyi React Eğitimi bu eğitim değil ileride bu eğitim</p>
      )}
    </div>
  );
}

export default Home;
