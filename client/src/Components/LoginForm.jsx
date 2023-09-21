// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputFields from "./InputFields";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "./Loading";
import { apiRequest } from "../Utils";
import { login } from "../Redux/userSlice.js";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async function (data) {
    const transformedD = {
      ...data,
      email: data.email.toLowerCase(),
    };
    setIsSubmitting(true);
    try {
      const res = await apiRequest({
        url: "/auth/login",
        data: transformedD,
        method: "POST",
      });

      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        setErrMsg("");

        const newData = { token: res?.token, ...res?.user };
        dispatch(login(newData));
        window.location.replace("/");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-col gap-3 w-full max-w-[24rem]">
        <h2 className="text-2xl lg:text-5xl lg:mb-10 font-bold">Sign In</h2>
        <div>
          <form className="flex flex-col  lg:mt-2" onSubmit={handleSubmit(onSubmit)}>
            <InputFields
              name="email"
              type="email"
              placeholder="user@email.com"
              label="Email address"
              labelStyle="lg:text-lg"
              containerStyle="flex flex-col gap-1"
              inputStyle="p-1 px-2 md:text-base text-input-text mt-1 rounded text-sm lg:mb-3"
              ref={emailRef}
              register={register("email", {
                required: "email required",
              })}
              errors={errors.email ? errors.email.message : ""}
            />
            <InputFields
              name="password"
              type="password"
              placeholder="password"
              label="Password"
              labelStyle="lg:text-lg"
              containerStyle="flex flex-col gap-1"
              inputStyle="p-1 px-2 md:text-base text-input-text mt-1 rounded text-sm lg:mb-3"
              ref={passwordRef}
              register={register("password", {
                required: "password required",
              })}
              errors={errors.password ? errors.password.message : ""}
            />

            <div className="flex gap-3 items-center justify-between mt-1 lg:mt-4">
              {isSubmitting ? <Loading /> : <button className={`button-style`}>Log in</button>}
              <div className="flex flex-col gap-1">
                <Link
                  className="mr-auto text-sm lg:text-base hover:text-links-hover transition-all text-links cursor-pointer underline"
                  to="/reset-password"
                >
                  Forgot password?
                </Link>
                <Link
                  className="ml-auto text-sm lg:text-base hover:text-links-hover transition-all text-links cursor-pointer underline"
                  to="/signup"
                >
                  Create account
                </Link>
              </div>
            </div>
            {errMsg?.message && <span>{errMsg?.message}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
