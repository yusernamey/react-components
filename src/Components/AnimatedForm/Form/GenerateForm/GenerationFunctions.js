import { ErrorMessage } from "../FormInputs/FormErorrMessage";
import { procedures, avaibleTimes } from "../FormInputs";
import { AnimateOneByOne } from "../FormAnimation";

export const input = (inp, register) => (
  <AnimateOneByOne key={inp.id}>
    <input ref={register(inp.requirements)} {...inp} key={inp.id} />
  </AnimateOneByOne>
);

export const submit = (inp) => (
  <AnimateOneByOne key={inp.id}>
    <input {...inp} />
  </AnimateOneByOne>
);

export const error = (inp, errors) => (
  <ErrorMessage {...inp} error={eval(inp.error)} key={inp.id} />
);

export const label = (inp) => (
  <AnimateOneByOne key={inp.id}>
    <label key={inp.id}>{inp.text}</label>
  </AnimateOneByOne>
);

export const customInput1 = (inp, register) => (
  <AnimateOneByOne key={inp.id}>
    <input ref={register(inp.requirements)} {...inp} key={inp.id} />
  </AnimateOneByOne>
);

export const select1 = (inp, register) => (
  <AnimateOneByOne key={inp.id}>
    <select {...inp} key={inp.id} ref={register(inp.requirements)}>
      <option defaultValue hidden value="">
        Pasirinkite...
      </option>
      {procedures.map((procedure) => (
        <option key={procedure} value={procedure}>
          {procedure}
        </option>
      ))}
    </select>
  </AnimateOneByOne>
);
export const select2 = (inp, register) => (
  <AnimateOneByOne key={inp.id}>
    <select {...inp} key={inp.id} ref={register(inp.requirements)}>
      <option defaultValue hidden value="">
        Pasirinkite laika....
      </option>
      {avaibleTimes.map((time) => (
        <option key={time} value={time}>
          {time}
        </option>
      ))}
    </select>
  </AnimateOneByOne>
);
