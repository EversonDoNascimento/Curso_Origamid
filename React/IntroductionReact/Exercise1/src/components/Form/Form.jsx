import Button from "../Button/Button";
import Input from "../Input/Input";

const Form = () => {
  return (
    <>
      <div>
        <Input
          label={"Email: "}
          id={"Email"}
          type={"text"}
          placeholder="Type it your email"
        ></Input>

        <Button text={"Enter"}></Button>
      </div>
    </>
  );
};

export default Form;
