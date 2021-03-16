import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FormAnimation } from "./FormAnimation";
import "./form.css";
import { GenerateForm } from "./GenerateForm/GenerateForm";
import { AnimatePresence } from "framer-motion";

export const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const [show, setShow] = useState(true);
  const onSubmit = (data) => {
    setShow(false);
    return;
  };
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => (document.body.style.backgroundColor = "white");
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <form className="cancel" onSubmit={handleSubmit(onSubmit)}>
        <h1>Registruokis</h1>
        <FormAnimation show={show}>
          <GenerateForm register={register} errors={errors} />
        </FormAnimation>
      </form>
    </AnimatePresence>
  );
};
