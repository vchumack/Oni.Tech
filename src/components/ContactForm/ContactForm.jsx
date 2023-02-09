import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import style from "../ContactForm/ContactForm.module.scss";

export const ContactForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    // setIsLoading(true);

    try {
      // console.log(data);
      // await axios.post(
      //   "https://sheet.best/api/sheets/8e3a48aa-d794-45df-b76c-96f5c9cb843e",
      //   data
      // );
      // await axios.post(
      //   "https://api.telegram.org/bot5826218439:AAFcxuVEYJ9gOaOjEYy7qLre1vkGDseB15o/sendMessage",
      //   {
      //     chat_id: "-1001762357803",
      //     parse_mode: "html",
      //     text: JSON.stringify(data),
      //   }
      // );
      console.log(data);
      setIsSubmit(true);
      reset();
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
      // setIsLoading(false);
    }
  };

  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.fieldBox}>
        <input
          className={style.input}
          type="text"
          name="name"
          id="name"
          placeholder=" "
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "Enter at least 3 characters",
            },
          })}
        />
        <label htmlFor="name" className={style.label}>
          Your name
        </label>
        <div className={style.error}>
          {errors?.name && (
            <p>
              {errors?.name?.message || "Oops, something went wrong, try again"}
            </p>
          )}
        </div>
      </div>
      <div className={style.fieldBox}>
        <input
          className={style.input}
          type="text"
          name="method"
          id="method"
          placeholder=" "
          {...register("method", {
            required: "This field is required",
            minLength: {
              value: 2,
              message: "Enter at least 2 characters",
            },
          })}
        />
        <label htmlFor="method" className={style.label}>
          Method of Communication
        </label>
        <div className={style.error}>
          {errors?.method && (
            <p>
              {errors?.method?.message ||
                "Oops, something went wrong, try again"}
            </p>
          )}
        </div>
      </div>
      <div className={style.fieldBox}>
        <textarea
          className={style.input}
          type="text"
          name="describe"
          id="describe"
          placeholder=" "
          {...register("describe")}
        />
        <label
          htmlFor="describe"
          className={`${style.labelComment} ${style.label}`}
        >
          Describe Idea
        </label>
        <div className={style.error}>
          {errors?.describe && (
            <p>
              {errors?.describe?.message ||
                "Oops, something went wrong, try again"}
            </p>
          )}
        </div>
      </div>
      <div className={style.submitBox}>
        <button
          id="submit"
          type="submit"
          disabled={!isValid}
          className={style.submit}
        >
          Contact us
        </button>
      </div>
      {isSubmit && (
        <p>
          Thank you for your application. We will get back to you as soon as
          possible.
        </p>
      )}
    </form>
  );
};
