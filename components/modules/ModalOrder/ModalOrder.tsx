"use client";
import { useState } from "react";
import { eachDayOfInterval, endOfMonth, format } from "date-fns";
import { ru } from "date-fns/locale";
import ButtonSubmit from "@/components/elements/Button/ButtonSubmit";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { Field, Form } from "react-final-form";
import { Typography } from "@/components/elements/Typography/Typography";

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

  const onSubmit = async (formData: {
    fio: string;
    tel: string;
    date: string;
  }) => {
    try {
      const formValue = {
        fio: formData.fio,
        tel: formData.tel,
        date: formData.date,
        count,
      };
      await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify(formValue),
      });
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      alert("Не удалось отправить заявку");
    } finally {
    }
  };

  return (
    <div>
      {!isSuccess ? (
        <div className="bg-[#806fdf] text-white w-full flex md:flex-row flex-col md:p-[5rem] p-4 justify-between gap-8 rounded-[1.5rem]">
          <div>
            <Typography variant="h3" className="mb-4">
              Записаться на экскурсию
            </Typography>
            <div className="text-[1rem] opacity-[0.5]">
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
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field
                  name="fio"
                  validate={(v) => {
                    if (!v) {
                      return "error";
                    }
                  }}
                  render={({ input, meta }) => (
                    <div>
                      <span className="mb-1 block">ФИО</span>
                      {/* @ts-ignore */}
                      <Input
                        isRequired
                        type="text"
                        label="ФИО"
                        className="max-w"
                        isInvalid={!!meta.touched && !!meta.error}
                        errorMessage="Обязательное поле"
                        {...input}
                        {...meta}
                      />
                    </div>
                  )}
                />
                <Field
                  name="tel"
                  validate={(v) => {
                    if (!v) {
                      return "error";
                    }
                  }}
                  render={({ input, meta }) => (
                    <div>
                      <span className="mb-1 block">Номер телефона</span>
                      {/* @ts-ignore */}
                      <Input
                        isRequired
                        type="number"
                        label="Телефон"
                        className="max-w"
                        isInvalid={!!meta.touched && !!meta.error}
                        errorMessage="Обязательное поле"
                        {...input}
                        {...meta}
                      />
                    </div>
                  )}
                />
                <Field
                  name="date"
                  validate={(v) => {
                    if (!v) {
                      return "error";
                    }
                  }}
                  render={({ input, meta }) => (
                    <div>
                      <span className="mb-1 block">Дата</span>
                      {/* @ts-ignore */}
                      <Select
                        label="Выбирете дату"
                        className="max-w"
                        errorMessage="Обязательное поле"
                        isInvalid={!!meta.touched && !!meta.error}
                        {...input}
                        {...meta}
                      >
                        {optionsDate.map((item) => (
                          <SelectItem
                            key={format(item, "d MMMM yyyy", { locale: ru })}
                          >
                            {format(item, "d MMMM yyyy", { locale: ru })}
                          </SelectItem>
                        ))}
                      </Select>
                    </div>
                  )}
                />
                <div>
                  <span className="mb-1 block">Колличество людей</span>
                  <div className="flex gap-2 justify-between">
                    <>
                      {[1, 2, 3, 4, 5].map((item, index) => (
                        <button
                          type="button"
                          className={`cursor-pointer rounded-xl transition-all p-3 bg-[#998ce4] ${
                            count === item && "!bg-white"
                          }`}
                          key={index}
                          onClick={() => onChangeCount(item)}
                        >
                          <div
                            className={`min-w-[1.875rem] font-medium text-center text-white ${
                              count === item && "!text-black"
                            }`}
                          >
                            {item != 5 ? item : item + "+"}
                          </div>
                        </button>
                      ))}
                    </>
                  </div>
                </div>
                <div className="mt-4 mb-4 flex">
                  <ButtonSubmit />
                </div>
              </form>
            )}
          />
        </div>
      ) : (
        <div className="modal_order_info_title">
          Заявка успешно отправлена. Скоро мы свяжемся с вами
        </div>
      )}
    </div>
  );
};
