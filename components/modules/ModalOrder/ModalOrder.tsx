"use client";
import { useState } from "react";
import "./style.css";
import { eachDayOfInterval, endOfMonth, format, parse } from "date-fns";
import Button from "@/components/elements/Button/Button";
import { ru } from "date-fns/locale";

export const ModalOrder = () => {
  const [formValue, setFormValue] = useState({
    fio: "",
    phone: "",
    date: "",
    count: 0,
  });

  const onChangeFio = (fio: string) => {
    setFormValue((prev) => ({ ...prev, fio }));
  };
  const onChangePhone = (phone: string) => {
    if (phone.length > 11) {
      return;
    }
    setFormValue((prev) => ({ ...prev, phone }));
  };
  const onChangeDate = (date: string) => {
    setFormValue((prev) => ({ ...prev, date }));
  };

  const onChangeCount = (count: number) => {
    setFormValue((prev) => ({ ...prev, count }));
  };

  const optionsDate = eachDayOfInterval({
    start: new Date(new Date().getFullYear(), 3, 22),
    end: endOfMonth(new Date(new Date().getFullYear(), 9, 1)),
  })
    .filter((item) => item.getDay() === 6)
    .filter((item) => item > new Date());

  return (
    <div className="modal_order">
      <div className="modal_order_info">
        <div className="modal_order_info_title">Записаться на экскурсию</div>
        <div className="modal_order_info_desc">
          Проект для тех, кто приехал в Рязань ненадолго, но хочет познакомиться
          с городом поближе. Самая удобная и интересная прогулка с
          экскурсоводом, полезные подарки и скидки, которые обязательно
          пригодятся во время путешествия. <br />
          <br />
          Каждую субботу с конца апреля по конец октября мы встречаем гостей
          города около «АМАКС Конгресс-отель» (Первомайский просп., 54). Время
          старта 12.00.
        </div>
      </div>
      <div className="modal_order_form">
        <div className="form_input">
          <input
            placeholder="ФИО"
            type="text"
            inputMode="text"
            value={formValue.fio}
            onChange={(e) => onChangeFio(e.target.value)}
          />
        </div>
        <div className="form_input">
          <input
            placeholder="Телефон"
            type="text"
            inputMode="text"
            value={formValue.phone}
            onChange={(e) => onChangePhone(e.target.value)}
          />
        </div>
        <select
          name="date"
          id="date"
          className="form_input"
          value={formValue.date}
          onChange={(e) => onChangeDate(e.target.value)}
        >
          <option value="" disabled selected>
            Дата
          </option>
          {optionsDate.map((item, index) => (
            <option
              value={format(item, "MM.dd.yyy")}
              key={index}
              disabled={new Date() > item}
            >
              {format(item, "d MMMM yyyy", { locale: ru })}
            </option>
          ))}
        </select>
        <span>Колличество людей</span>
        <div className="count_people">
          <>
            {[1, 2, 3, 4, 5].map((item, index) => (
              <button
                className={`options__label ${
                  formValue.count === item && "checked"
                }`}
                key={index}
                onClick={() => onChangeCount(item)}
              >
                <div className="options__text">
                  {item != 5 ? item : item + "+"}
                </div>
              </button>
            ))}
          </>
        </div>
        <div className="button_block">
          <Button
            label="Записаться на экскурсию"
            isBlackHover
            onClick={() => alert(JSON.stringify(formValue))}
          />
        </div>
      </div>
    </div>
  );
};
