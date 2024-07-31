"use client";
import { useState } from "react";
import "./style.css";
import { eachDayOfInterval, endOfMonth, format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import ButtonSubmit from "@/components/elements/Button/ButtonSubmit";

export const ModalOrder = () => {
  const [count, setCount] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const onChangeCount = (count: number) => {
    setCount(count);
  };

  const optionsDate = eachDayOfInterval({
    start: new Date(new Date().getFullYear(), 3, 22),
    end: endOfMonth(new Date(new Date().getFullYear(), 9, 1)),
  })
    .filter((item) => item.getDay() === 6)
    .filter((item) => item > new Date());

  const onSubmit = async (formData: any) => {
    try {
      const formValue = {
        fio: formData.get("fio"),
        tel: formData.get("tel"),
        date: formData.get("date"),
        count,
      };
      await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify(formValue),
      });
      setIsSuccess(true);
    } catch (error) {
      alert("Не удалось отправить заявку");
    } finally {
    }
  };

  return (
    <div>
      {!isSuccess ? (
        <div className="modal_order">
          <div className="modal_order_info">
            <div className="modal_order_info_title">
              Записаться на экскурсию
            </div>
            <div className="modal_order_info_desc">
              Проект для тех, кто приехал в Рязань ненадолго, но хочет
              познакомиться с городом поближе. Самая удобная и интересная
              прогулка с экскурсоводом, полезные подарки и скидки, которые
              обязательно пригодятся во время путешествия. <br />
              <br />
              Каждую субботу с конца апреля по конец октября мы встречаем гостей
              города около «АМАКС Конгресс-отель» (Первомайский просп., 54).
              Время старта 12.00.
            </div>
          </div>
          <form action={onSubmit}>
            <div className="modal_order_form">
              <div className="form_input">
                <input
                  placeholder="ФИО"
                  type="text"
                  name="fio"
                  inputMode="text"
                  required
                />
              </div>
              <div className="form_input">
                <input
                  placeholder="Телефон"
                  type="tel"
                  name="tel"
                  required
                  maxLength={11}
                />
              </div>
              <select name="date" className="form_input" required>
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
              <span className="mb-1 block">Колличество людей</span>
              <div className="count_people">
                <>
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <button
                      type="button"
                      className={`options__label ${
                        count === item && "checked"
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
                <ButtonSubmit label="Записаться на экскурсию" isBlackHover />
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="modal_order_info_title">
          Заявка успешно отправлена. Скоро мы свяжемся с вами
        </div>
      )}
    </div>
  );
};
