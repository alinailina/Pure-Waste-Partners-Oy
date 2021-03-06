import React from "react";
//import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import Header from "../../components/Header";

const Principles = () => {
  return (
    <div className={styles.principles}>
      <Header title="Наши принципы " />
      <p>
        Цель проекта FABREVIZION &mdash; чтобы наши клиенты, связанные с
        производством и эксплуатацией текстильной продукции, получили
        инновационные экологичные решения по уходу за использованным текстилем и
        остатками текстильного производства.
      </p>
      <p>
        Вместе с партнерами и клиентами мы создаем экономику замкнутого цикла,
        где есть все необходимое, но нет ничего лишнего, при этом человеческая
        деятельность находится в гармоничном взаимодействии с природой, без
        жестокой эксплуатации природных ресурсов и людей.
      </p>
      <p>
        Вместе мы выстраиваем новые бизнес-процессы, направленные на уменьшение
        экологического ущерба и обеспечение процветания для всех при
        положительном экономическом росте.
      </p>
      <p>
        Мы стремимся чтобы новые бизнес-процессы были взаимовыгодными, честными
        и надёжными. Если вы разделяете наши ценности бережного отношения к
        окружающей среде и людям, осознанного развития бизнеса и ответственности
        за свои слова и действия, присоединяйтесь в нашу цепочку взаимодействий,
        ведь только вместе мы сможем спасти Планету!
      </p>
    </div>
  );
};

export default Principles;
