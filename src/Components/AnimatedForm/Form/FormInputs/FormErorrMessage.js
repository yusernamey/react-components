export const ErrorMessage = ({ error, inputName, minLenghtValue }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Butina ivesti {inputName}</p>;
      case "minLength":
        return (
          <p>
            Jusu {inputName} turi sudaryti maziausiai {minLenghtValue} simboliai
          </p>
        );
      case "maxLength":
        return (
          <p>
            Jusu {inputName} turi sudaryti daugiausia {minLenghtValue} simboliai
          </p>
        );
      case "pattern":
        return (
          <p>
            Telefonu numeris turi prasideti +370 ir turi buti sudarytas tik is
            skaiciu
          </p>
        );

      default:
        return null;
    }
  }

  return null;
};
