import React from "react";

const InputFields = React.forwardRef(function InputFields(
  { label, labelStyle, inputStyle, containerStyle, type, placeholder, register, name, errors },
  ref
) {
  return (
    <>
      <div className={containerStyle}>
        <div className="flex">
          <label className={`${labelStyle} mr-auto`}>{label}</label>
        </div>
        <input
          type={type}
          name={name}
          className={inputStyle}
          ref={ref}
          placeholder={placeholder}
          {...register}
          aria-invalid={errors ? true : false}
        />
        {errors && <span className="text-red-400 text-sm md:text-base lg:text-lg">{errors}</span>}
      </div>
    </>
  );
});

InputFields.displayName = "InputFields";
export default InputFields;
