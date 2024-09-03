import { Box } from "@/app/components/Box";
import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";
import { UploadField } from "@/app/components/UploadField";

export default function AddTecher() {
  return (
    <div>
      <Box Heading="Credential">
        <div className="grid grid-cols-2 justify-items-center gap-y-5 my-5">
          <InputField
            label={"Full Name"}
            placeholder={""}
            className="w-3/4"
            type={"text"}
          ></InputField>
          <InputField
            label={"Phone Number"}
            placeholder={""}
            className="w-3/4"
            type={"text"}
          ></InputField>
          <InputField
            label={"Email"}
            placeholder={""}
            className="w-3/4"
            type={"email"}
          ></InputField>
          <InputField
            label={"Password"}
            placeholder={""}
            className="w-3/4 gap-"
            type={"password"}
          ></InputField>
        </div>
      </Box>
      <Box Heading="Upload Files">
        <div className="grid grid-cols-2 justify-items-center mt-5">
          <div className="flex flex-col w-[70%]">
            <UploadField></UploadField>
            <h2 className="text-lg mt-5 text-center">Government certified</h2>
          </div>
          <div className="flex flex-col w-[70%]">
            <UploadField></UploadField>
            <h2 className="text-lg mt-5 text-center">
              Highest qualification certificate
            </h2>
          </div>
        </div>
      </Box>
      <Box Heading="Subject">
        <div className="grid grid-cols-2 justify-items-center gap-y-5 my-5">
          <InputField
            label={"Full Name"}
            placeholder={""}
            className="w-3/4"
            type={"text"}
          ></InputField>
          <InputField
            label={"Phone Number"}
            placeholder={""}
            className="w-3/4"
            type={"text"}
          ></InputField>
        </div>
        <PrimaryButton Name={"+ ADD"} className=""></PrimaryButton>
      </Box>
      <PrimaryButton
        Name={"ADD TEACHER"}
        className="w-[calc(100%-40px)] mx-auto"
      ></PrimaryButton>
    </div>
  );
}
