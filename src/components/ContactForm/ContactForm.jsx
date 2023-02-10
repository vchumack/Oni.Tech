import { useForm } from "react-hook-form";
// import axios from "axios";

import style from "../ContactForm/ContactForm.module.scss";

export const ContactForm = () => {
	const {
		register,
		formState: { errors, isValid, isSubmitSuccessful, isSubmitting },
		handleSubmit,
		reset,
	} = useForm({
		mode: "all",
	});

	const onSubmit = (data) => {
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
			reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form className={style.form}>
			<div className={style.fieldBox}>
				<label className={style.label}>
					<input
						{...register("name", {
							required: {
								value: true,
								message: "This field is required",
							},
							minLength: {
								value: 3,
								message:
									"The minimum number of characters in this field is 3",
							},
						})}
						aria-label="Your name"
						className={style.input}
						type="text"
						name="name"
						id="name"
						placeholder="Your name"
					/>
				</label>
				<div className={style.error}>
					{errors?.name && (
						<p>
							{errors?.name?.message ||
								"Oops, something went wrong, try again"}
						</p>
					)}
				</div>
			</div>
			<div className={style.fieldBox}>
				<label className={style.label}>
					<input
						{...register("method", {
							required: {
								value: true,
								message: "This field is required",
							},
							minLength: {
								value: 2,
								message:
									"The minimum number of characters in this field is 2",
							},
						})}
						aria-label="Method of Communication"
						className={style.input}
						type="text"
						name="method"
						id="method"
						placeholder="Method of Communication"
					/>
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
				<label className={`${style.labelComment} ${style.label}`}>
					<textarea
						{...register("describe")}
						aria-label="Describe Idea"
						className={`${style.input} ${style.textarea}`}
						type="text"
						name="describe"
						id="describe"
						placeholder="Describe Idea"
					/>
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
					onClick={handleSubmit(onSubmit)}
					id="submit"
					type="button"
					// disabled={!isValid}
					className={style.submit}
				>
					Contact us
				</button>
			</div>
			{isSubmitSuccessful && (
				<p>
					Thank you for your application. We will get back to you as
					soon as possible.
				</p>
			)}
		</form>
	);
};
