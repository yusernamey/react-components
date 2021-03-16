import { Form } from "./Form/Form";

const AnimatedForm = () => {
  return <Form />;
};

export default {
  routeProps: {
    path: "/animatedform",
    component: AnimatedForm,
  },
  name: "AnimatedForm",
};
