// import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import InputFields from "../Components/InputFields";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Loading from "../Components/Loading";
import Footer from "../Dashboard/Footer";
import { apiRequest } from "../Utils/index.js";

function Register() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async function (data) {
    const transformedD = {
      ...data,
      firstName: data.firstName[0].toUpperCase() + data.firstName.slice(1).toLowerCase(),
      lastName: data.lastName[0].toUpperCase() + data.lastName.slice(1).toLowerCase(),
      email: data.email.toLowerCase(),
    };
    setIsSubmitting(true);

    try {
      const res = await apiRequest({
        url: "/auth/register",
        data: transformedD,
        method: "POST",
      });
      console.log(res);
      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        setErrMsg(res);
        console.log(res);
        setTimeout(() => {
          window.location.replace("/login");
        }, 1500);
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className=" h-screen p-5 flex flex-col md:flex-row items-center justify-center bg-bg-primary ">
        <div className="bg-bg-secondary md:rounded-l-xl md:rounded-r-none md:h-full h-44 flex md:flex-col w-full md:w-6/12 items-center  rounded-t-xl justify-center">
          <img src="Logo.png" className="h-24 sm:py-3 pr-8 md:pr-0  sm:h-40 animate-bounce" />
          <div className="flex flex-col items-center gap-1 md:mt-8 sm:gap-3">
            <h1 className="text-text-primary text-xl sm:text-3xl md:text-4xl  font-bold">Migrainer.</h1>
            <p className="text-text-light text-xs md:text-base italic">Your migraine assistant...</p>
          </div>
        </div>
        <div className="w-full md:rounded-l-none md:rounded-r-xl md:border-y-2 md:border-l-none border-bg-secondary rounded-b-xl border-x-2 border-b-2 h-full flex items-center justify-center  p-5">
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
                    register={register("lastName", {
                      required: "Last name required",
                    })}
                    errors={errors.lastName ? errors.lastName.message : ""}
                  />
                </div>

                {/* Avatar selection*/}
                <div className="flex flex-col items-start justify-center my-1 gap-4">
                  <div className="flex items-center">
                    <p>Select an avatar:</p>
                    <label className="avatar-label">
                      <input
                        type="radio"
                        {...register("avatar", { required: "Avatar selection required" })}
                        value="/femaleAvatar_prev_ui.png"
                      />
                      <img src="/femaleAvatar_prev_ui.png" alt="Avatar 1" className="avatar-image" />
                    </label>
                    <label className="avatar-label">
                      <input
                        type="radio"
                        {...register("avatar", { required: "Avatar selection required" })}
                        value="/maleAvatar_prev_ui.png"
                      />
                      <img src="/maleAvatar_prev_ui.png" alt="Avatar 2" className="avatar-image" />
                    </label>
                  </div>
                  {errors?.avatar && (
                    <span className="text-red-400 text-sm md:text-base lg:text-lg">{errors.avatar?.message}</span>
                  )}
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

                  <Link
                    className="ml-auto text-sm md:text-base hover:text-links-hover transition-all text-links cursor-pointer underline"
                    to="/login"
                  >
                    Already have an account?
                  </Link>
                </div>
                {errMsg?.message && <span className="text-links-hover text-sm mx-auto">{errMsg?.message}.</span>}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 w-full pb-3 bg-bg-primary">
        <Footer />
      </div>
      <p className="text-sm w-screen bg-bg-third text-text-secondary text-center p-1">&copy; 2023 Shubham Dhoot</p>
    </div>
  );
}

export default Register;
