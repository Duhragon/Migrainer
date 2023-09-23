// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputFields from "../Components/InputFields";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Loading from "../Components/Loading";
import { apiRequest } from "../Utils";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async function (data) {
    setIsSubmitting(true);
    try {
      const res = await apiRequest({
        url: "/users/request-passwordreset",
        data: data,
        method: "POST",
      });
      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        setErrMsg(res);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" h-screen flex flex-col md:flex-row items-center justify-center bg-bg-primary ">
      <div className="bg-bg-secondary md:h-full h-44 flex md:flex-col w-full md:w-6/12 items-center justify-center">
        <img src="Logo.png" className="h-24 pr-8 md:pr-0  sm:h-40 animate-bounce" />
        <div className="flex flex-col items-center gap-1 md:mt-8 sm:gap-3">
          <h1 className="text-text-primary text-xl sm:text-3xl md:text-4xl  font-bold">Migrainer.</h1>
          <p className="text-text-light text-xs md:text-base italic">Your migraine assistant...</p>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center  p-5">
        <div className="flex flex-col gap-3 w-full max-w-[26rem]">
          <h2 className=" text-lg md:text-3xl lg:mb-4 font-bold">Enter your registered email address</h2>
          <div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
              {/* EMAIL */}
              <InputFields
                name="email"
                type="email"
                placeholder="user@email.com"
                label="Email address"
                containerStyle="flex flex-col gap-1"
                labelStyle="text-sm md:text-base"
                inputStyle="p-1 px-2 md:text-base text-input-text rounded text-sm"
                register={register("email", {
                  required: "email required",
                })}
                errors={errors.email ? errors.email.message : ""}
              />

              <div className="flex gap-3 items-center justify-between mt-4">
                {isSubmitting ? <Loading /> : <button className={`button-style`}>Submit</button>}

                <Link
                  className="ml-auto text-sm md:text-base hover:text-links-hover transition-all text-links cursor-pointer underline"
                  to="/login"
                >
                  Go to login page?
                </Link>
              </div>
              {errMsg?.message && <span className="text-links-hover text-sm mx-auto">{errMsg?.message}.</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
