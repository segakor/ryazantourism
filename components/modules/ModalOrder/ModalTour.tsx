"use client";
import { useState } from "react";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import ButtonSubmit from "@/components/elements/Button/ButtonSubmit";
import { Select, SelectItem } from "@nextui-org/select";
import { Input } from "@nextui-org/input";
import { Field, Form } from "react-final-form";
import { Typography } from "@/components/elements/Typography/Typography";
import { PersAgreeInfo } from "./components/PersAgreeInfo";
import { SuccessOrder } from "./components/SuccessOrder";

export const ModalTour = ({
  startDate,
  tourName,
}: {
  startDate: string;
  tourName: String;
}) => {
  const [count, setCount] = useState(1);
  const [screen, setScreen] = useState<"main" | "success" | "info">("main");

  const onChangeCount = (count: number) => {
    setCount(count);
  };

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
        tour: tourName,
      };
      const res = await fetch("/api/emails", {
        method: "POST",
        body: JSON.stringify(formValue),
      });
      if (res.ok) {
        setScreen("success");
        return;
      }
      return alert("Не удалось отправить заявку");
    } catch (error) {
      alert("Что-то пошло не так, попробуйте позже");
    }
  };

  const onShowInfoPers = () => {
    setScreen("info");
  };

  const d = parse(startDate, "dd.MM.yyyy", new Date());

  return (
    <div>
      {screen === "main" && (
        <div className="text-white w-full flex md:flex-row flex-col md:p-[5rem] p-4 justify-between md:gap-8 gap-4">
          <div className="flex-1">
            <Typography variant="h3" className="mb-4">
              Заказать тур
            </Typography>
            <Typography variant="h3" className="opacity-[0.5]">
              {tourName}
            </Typography>
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
                        {[d].map((item) => (
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
                <div className="mb-3">
                  <span className="mb-1 block">Количество людей</span>
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
                <Field
                  name="agree"
                  validate={(v) => {
                    if (!v) {
                      return "error";
                    }
                  }}
                  render={({ input, meta }) => (
                    <div className="mb-[0.125rem] min-h-[1.5rem] ps-[1.5rem] flex items-center">
                      <input
                        {...input}
                        {...meta}
                        className={`relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid  outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary ${
                          !!meta.touched && !!meta.error && "border-[#f31260]"
                        }`}
                        type="checkbox"
                        value=""
                        id="checkboxDefault"
                      />
                      <label
                        className={`inline-block ps-[0.15rem] text-sm hover:cursor-pointer ${
                          !!meta.touched && !!meta.error && "!text-[#f31260]"
                        }`}
                      >
                        Даю согласие на обработку персональных данных
                      </label>
                    </div>
                  )}
                />
                <div className="mt-4 md:mb-4 mb-14 flex">
                  <ButtonSubmit />
                </div>
                <div
                  onClick={onShowInfoPers}
                  className="text-sm opacity-50 text-center hover:opacity-100 transition-all cursor-pointer"
                >
                  Условиями обработки персональных данных
                </div>
              </form>
            )}
          />
        </div>
      )}
      {screen === "success" && <SuccessOrder />}
      {screen === "info" && <PersAgreeInfo onBack={() => setScreen("main")} />}
    </div>
  );
};
