import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { apiRequest } from "../Utils";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import { setEpisode } from "../Redux/episodeSice";

const severityOptions = [
  { label: "Mild", value: "Mild" },
  { label: "Moderate", value: "Moderate" },
  { label: "Severe", value: "Severe" },
];

const symptonmsList = [
  { label: "headache", value: "headache" },
  { label: "nausea", value: "nausea" },
  { label: "auras", value: "auras" },
  { label: "stiff-neck", value: "stiff-neck" },
  { label: "yawning", value: "yawning" },
  { label: "moodiness", value: "moodiness" },
  { label: "light-senstitivity", value: "light-senstitivity" },
  { label: "smell-sensitivity", value: "smell-sensitivity" },
  { label: "eye-strain", value: "eye-strain" },
];
const activityList = [
  { label: "Stress", value: "stress" },
  { label: "Sleep", value: "sleep" },
  { label: "light", value: "light" },
  { label: "smell", value: "smell" },
  { label: "dehydration", value: "dehydration" },
  { label: "weather", value: "weather" },
  { label: "exhaustion", value: "exhaustion" },
  { label: "alcohol", value: "alcohol" },
  { label: "caffeine", value: "caffeine" },
  { label: "diet", value: "diet" },
];

function EpisodeForm() {
  const user = useSelector(state => state.user.user);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm({ mode: "onChange" });

  const defaultValues = {
    symptoms: null,
    activities: null,
    severity: "",
    duration: "",
  };
  const onSubmit = async data => {
    setIsSubmitting(true);
    setErrMsg("");
    if (!data) return;
    const episodesObj = {
      date: data.date,
      severity: data.severity,
      duration: data.duration,
      symptoms: data.symptoms,
      activities: data.activities,
    };

    try {
      const res = await apiRequest({
        url: "/episodes/create-episode",
        data: episodesObj,
        method: "POST",
        token: user?.token,
      });
      if (res?.status === "failed") {
        setErrMsg(res);
      } else {
        dispatch(setEpisode(res.episode));
        setErrMsg("");
        reset(defaultValues);
        setTimeout(() => {
          window.location.replace("/");
        }, 100);
        setIsSubmitting(false);
      }
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-bg-fourth">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-bg-third w-[90%] sm:w-[80%] flex flex-col p-10 rounded-lg h-[90%] justify-center gap-4 md:w-[60%]"
      >
        {/* Date */}
        <section className="flex flex-col sm:flex-row ">
          <label className=" lg:text-lg sm:min-w-[35%]">When did it occur ?</label>
          <Controller
            name="date"
            control={control}
            errors={errors}
            render={({ field }) => (
              <DatePicker
                className="text-text-third text-input-text w-full p-2 rounded"
                placeholderText="Click to select a date"
                isClearable
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()}
                todayButton="Today"
                selected={field.value}
                onChange={date => field.onChange(date)}
                required
              />
            )}
          />
        </section>

        {/* Severity */}
        <section className="flex flex-col sm:flex-row">
          <label className=" lg:text-lg sm:min-w-[35%]">Severity</label>
          <Controller
            name="severity"
            control={control}
            render={({ field }) => (
              <Select
                className="text-text-third text-input-text sm:w-full"
                isClearable={true}
                options={severityOptions}
                defaultValue=""
                required
                value={field.value !== "" ? severityOptions.find(option => option.value === field.value) : ""}
                onChange={option => field.onChange(option ? option.value : "")}
                placeholder="Severity.."
              />
            )}
          />
        </section>

        {/* duration */}
        <section className="flex flex-col sm:flex-row">
          <label className="lg:text-lg sm:min-w-[35%]">Duration (hours)</label>

          <Controller
            name="duration"
            control={control}
            render={() => (
              <div className="flex flex-col text-text-third text-input-text sm:w-full">
                <input
                  className="text-text-third text-input-text p-2 rounded"
                  type="number"
                  placeholder="duration"
                  defaultValue=""
                  {...register("duration", {
                    required: "duration required",
                    maxLength: {
                      value: 2,
                      message: "Max length 2",
                    },
                  })}
                />
                {errors?.duration && (
                  <span className="text-red-400 text-sm md:text-base lg:text-lg">{errors.duration?.message}</span>
                )}
              </div>
            )}
          />
        </section>

        {/* symptoms */}
        <section className="flex flex-col sm:flex-row">
          <label className="lg:text-lg sm:min-w-[35%]">Symptoms</label>
          <Controller
            name="symptoms"
            control={control}
            render={({ field }) => (
              <Select
                className="text-text-third text-input-text sm:w-full "
                closeMenuOnSelect={false}
                isMulti
                defaultValue={null}
                options={symptonmsList}
                value={
                  Array.isArray(field.value) ? symptonmsList.filter(option => field.value.includes(option.value)) : null
                }
                onChange={selectedOptions => {
                  const selectedValues = selectedOptions.map(option => option.value);
                  field.onChange(selectedValues);
                }}
                placeholder="Symptoms..."
                required
              />
            )}
          />
        </section>

        {/* triggers/activities */}
        <section className="flex flex-col sm:flex-row">
          <label className="lg:text-lg sm:min-w-[35%]">Trigger activities</label>
          <Controller
            name="activities"
            control={control}
            render={({ field }) => (
              <Select
                name="activities"
                className="text-text-third text-input-text sm:w-full"
                closeMenuOnSelect={false}
                isMulti
                defaultValue=""
                options={activityList}
                value={
                  Array.isArray(field.value) ? activityList.filter(option => field.value.includes(option.value)) : null
                }
                onChange={selectedOptions => {
                  const selectedValues = selectedOptions.map(option => option.value);
                  field.onChange(selectedValues);
                }}
                required
                placeholder="Activities..."
              />
            )}
          />
        </section>

        <div className="flex flex-row gap-4 justify-center mt-5">
          {isSubmitting ? (
            <div className="w-[5rem] ">
              <Loading />
            </div>
          ) : (
            <input className="button-style" type="submit" />
          )}
          <Link to={"/"} className="button-dark">
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EpisodeForm;
