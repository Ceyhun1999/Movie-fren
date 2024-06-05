import React from "react";

function Faq() {
    return (
        <section>
            <div className="container">
                <div style={{ color: "#fff", fontSize: "20px" }}>
                    <dl>
                        <dt>
                            <b>1. Как я могу купить билеты?</b>
                        </dt>
                        <dd>
                            Вы можете приобрести билеты онлайн на нашем сайте или через мобильное приложение. Также
                            можно купить билеты в кассе кинотеатра.
                        </dd>
                        <br />
                        <dt>
                            <b>2. Можно ли вернуть или обменять билеты?</b>
                        </dt>
                        <dd>
                            Да, вы можете вернуть или обменять билеты не позднее, чем за час до начала сеанса. Возврат
                            осуществляется в кассе кинотеатра или через службу поддержки на сайте.
                        </dd>
                        <br />
                        <dt>
                            <b>3. Какие фильмы сейчас идут в кинотеатре?</b>
                        </dt>
                        <dd>
                            Расписание текущих и предстоящих фильмов можно найти на нашем сайте в разделе "Расписание".
                        </dd>
                        <br />
                        <dt>
                            <b>4. Есть ли скидки для студентов, пенсионеров или детей?</b>
                        </dt>
                        <dd>
                            Да, мы предлагаем скидки для студентов, пенсионеров и детей. Пожалуйста, предъявите
                            соответствующее удостоверение при покупке билетов.
                        </dd>
                        <br />
                        <dt>
                            <b>5. Как я могу узнать, какие фильмы идут в формате 3D или IMAX?</b>
                        </dt>
                        <dd>
                            Информация о форматах фильмов указана на странице расписания. Вы также можете найти эту
                            информацию на странице с описанием каждого фильма.
                        </dd>
                        <br />
                        <dt>
                            <b>6. Можно ли забронировать места заранее?</b>
                        </dt>
                        <dd>
                            Да, вы можете забронировать места заранее онлайн или через мобильное приложение. При
                            бронировании взимается дополнительная плата.
                        </dd>
                        <br />
                        <dt>
                            <b>7. Какие у вас правила по поводу еды и напитков?</b>
                        </dt>
                        <dd>
                            Мы разрешаем приносить еду и напитки, купленные в нашем кинотеатре. Внешняя еда и напитки
                            запрещены.
                        </dd>
                        <br />
                    </dl>
                </div>
            </div>
        </section>
    );
}

export default Faq;
