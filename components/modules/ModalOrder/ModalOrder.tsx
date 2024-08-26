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
    }
  };

  return (
    <div>
      {!isSuccess ? (
        <div
          className="text-white w-full flex md:flex-row flex-col md:p-[5rem] 
        p-4 justify-between md:gap-8 gap-4"
        >
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
                        style={{ fontSize: "16px" }}
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
                        style={{ fontSize: "16px" }}
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
                        style={{ fontSize: "16px" }}
                        errorMessage="Обязательное поле"
                        isInvalid={!!meta.touched && !!meta.error}
                        {...input}
                        {...meta}
                      >
                        {optionsDate.map((item) => (
                          <SelectItem
                            style={{ fontSize: "16px" }}
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
                <div className="mt-4 md:mb-4 mb-14 flex">
                  <ButtonSubmit />
                </div>
              </form>
            )}
          />
        </div>
      ) : (
        <div className="text-white p-10 flex items-center flex-col gap-5 mt-20 mb-20">
          <svg
            width="100"
            height="101"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 0.854492C63.2608 0.854492 75.9785 6.08497 85.3553 15.3953C94.7322 24.7056 100 37.3331 100 50.4999C100 63.6667 94.7322 76.2942 85.3553 85.6045C75.9785 94.9148 63.2608 100.145 50 100.145C36.7392 100.145 24.0215 94.9148 14.6447 85.6045C5.26784 76.2942 0 63.6667 0 50.4999C0 37.3331 5.26784 24.7056 14.6447 15.3953C24.0215 6.08497 36.7392 0.854492 50 0.854492ZM43.7714 60.2942L32.6643 49.2587C32.2661 48.8634 31.7934 48.5498 31.2731 48.3358C30.7529 48.1218 30.1953 48.0117 29.6321 48.0117C29.069 48.0117 28.5114 48.1218 27.9912 48.3358C27.4709 48.5498 26.9982 48.8634 26.6 49.2587C25.7958 50.0572 25.344 51.1402 25.344 52.2694C25.344 53.3986 25.7958 54.4815 26.6 55.28L40.7429 69.3226C41.1399 69.7199 41.6123 70.0353 42.1327 70.2506C42.6531 70.4658 43.2112 70.5766 43.775 70.5766C44.3387 70.5766 44.8969 70.4658 45.4173 70.2506C45.9377 70.0353 46.4101 69.7199 46.8071 69.3226L76.0929 40.2375C76.4964 39.8437 76.8174 39.3746 77.0374 38.8571C77.2573 38.3396 77.3719 37.7839 77.3746 37.2222C77.3772 36.6605 77.2678 36.1038 77.0527 35.5843C76.8376 35.0647 76.521 34.5926 76.1212 34.1952C75.7214 33.7978 75.2463 33.4829 74.7233 33.2687C74.2003 33.0544 73.6398 32.9452 73.074 32.9471C72.5083 32.9491 71.9486 33.0622 71.4271 33.28C70.9056 33.4978 70.4327 33.816 70.0357 34.2162L43.7714 60.2942Z"
              fill="#B0EC4F"
            />
          </svg>
          <Typography variant="h4" className="text-center">
            Вы успешно записались на экскурсию!
          </Typography>
          <Typography variant="h5" className="text-center opacity-[0.5]">
            Скоро мы свяжемся с вами
          </Typography>
        </div>
      )}
    </div>
  );
};
