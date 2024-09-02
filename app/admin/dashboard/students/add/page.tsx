import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";

export default function AddStudent() {
  return (
    <div className="flex flex-col h-full  justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full sm:max-w-[900px] mt-16">
        <InputField
          label={"First Name"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px] "
        ></InputField>
        <InputField
          label={"Last Name"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
        <InputField
          label={"Email"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
        <InputField
          label={"Password"}
          placeholder={""}
          type={"Password"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
        <InputField
          label={"Phone Number"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
        <InputField
          label={"Curriculum"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
        <InputField
          label={"Grade"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
        <InputField
          label={"Subject"}
          placeholder={""}
          type={"text"}
          className="w-[95%] m-auto sm:w-[400px]"
        ></InputField>
      </div>
      <InputField
        label={"Choose Country"}
        placeholder={""}
        type={"text"}
        className="w-full sm:max-w-[860px] mt-5"
      ></InputField>
      <PrimaryButton
        Name={"ADD STUDENT"}
        className="w-full sm:max-w-[860px] mt-5"
      ></PrimaryButton>
    </div>
  );
}
