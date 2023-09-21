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

{
  /* <div className="flex flex-col gap-2">
  <label className="text-sm md:text-base">Email</label>
  <input className="p-1 px-2 md:text-base rounded text-sm" placeholder="user@email.com" />
</div> */
}
