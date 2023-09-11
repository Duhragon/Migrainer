// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputFields from "../Components/InputFields";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import Loading from "../Components/Loading";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async function (data) {};
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  //   useEffect(function () {
  //     emailRef.current.focus();
  //   }, []);

  return (
    <div className=" h-screen flex flex-col md:flex-row items-center justify-center bg-bg-primary ">
      <div className="bg-bg-secondary md:h-full h-44 flex md:flex-col w-full md:w-6/12 items-center justify-center">
        <img src="../../public/Logo.png" className="h-24 pr-8 md:pr-0  sm:h-40 animate-bounce" />
        <div className="flex flex-col items-center gap-1 md:mt-8 sm:gap-3">
          <h1 className="text-text-primary text-xl sm:text-3xl md:text-4xl  font-bold">Migrainer</h1>
          <p className="text-text-light text-xs md:text-base italic">Your migraine assistant...</p>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center  p-5">
        <div className="flex flex-col gap-3 w-full max-w-[26rem]">
          <h2 className=" text-lg md:text-3xl lg:mb-4 font-bold">Create your account</h2>
          <div>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
              {/* first and last name */}
              <div className="sm:flex w-full gap-3">
                <InputFields
                  label="First name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  containerStyle="flex flex-col gap-1 sm:w-6/12"
                  labelStyle="text-sm md:text-base"
                  inputStyle="p-1 px-2 md:text-base w-full text-input-text rounded text-sm w"
                  // ref={emailRef}
                  register={register("firstName", {
                    required: "First name required",
                  })}
                  errors={errors.firstName ? errors.firstName.message : ""}
                />
                <InputFields
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  containerStyle="flex flex-col gap-1 sm:w-6/12"
                  labelStyle="text-sm md:text-base"
                  inputStyle="p-1 px-2 md:text-base w-full text-input-text rounded text-sm"
                  // ref={passwordRef}
                  register={register("lastName", {
                    required: "Last name required",
                  })}
                  errors={errors.lastName ? errors.lastName.message : ""}
                />
              </div>

              {/* EMAIL */}
              <InputFields
                name="email"
                type="email"
                placeholder="user@email.com"
                label="Email address"
                containerStyle="flex flex-col gap-1"
                labelStyle="text-sm md:text-base"
                inputStyle="p-1 px-2 md:text-base text-input-text rounded text-sm"
                ref={emailRef}
                register={register("email", {
                  required: "email required",
                })}
                errors={errors.email ? errors.email.message : ""}
              />

              {/* PASSWORD */}
              <InputFields
                name="password"
                type="password"
                placeholder="password"
                label="Password"
                containerStyle="flex flex-col gap-1 "
                labelStyle="text-sm md:text-base"
                inputStyle="p-1 px-2 md:text-base text-input-text rounded text-sm"
                ref={passwordRef}
                register={register("password", {
                  required: "password required",
                })}
                errors={errors.password ? errors.password.message : ""}
              />
              <InputFields
                name="password"
                type="password"
                placeholder="password"
                label="Confirm Password"
                containerStyle="flex flex-col gap-1 "
                labelStyle="text-sm md:text-base"
                inputStyle="p-1 px-2 md:text-base text-input-text rounded text-sm"
                ref={passwordRef}
                register={register("cPassword", {
                  validate: value => {
                    const { password } = getValues();
                    if (value !== password) {
                      return "Passwords do not match";
                    }
                  },
                })}
                errors={errors.cPassword && errors.cPassword.type === "validate" ? errors.cPassword?.message : ""}
              />

              <div className="flex gap-3 items-center justify-between mt-4">
                {isSubmitting ? <Loading /> : <button className={`button-style`}>Sign Up</button>}
                {/* <div className="flex flex-col gap-2">
                  <Link
                    className="mr-auto text-sm md:text-base hover:text-links-hover transition-all text-links cursor-pointer underline"
                    to="/reset-password"
                  >
                    Forgot password?
                  </Link> */}
                <Link
                  className="ml-auto text-sm md:text-base hover:text-links-hover transition-all text-links cursor-pointer underline"
                  to="/login"
                >
                  Already have an account?
                </Link>
                {/* </div> */}
              </div>
              {errMsg?.message && <span>{errMsg?.message}</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
