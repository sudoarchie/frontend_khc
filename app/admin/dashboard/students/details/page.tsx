import { InputField } from "@/app/components/Inputfield";
import { PrimaryButton } from "@/app/components/PrimaryButton";

export default function StudentData() {
  const teacherList = ["shivam", "krishna", "adi"];
  return (
    <div className="w-full">
      <div className="flex ">
        <div className=" border-2 border-borderColor w-1/2 rounded-lg p-5 m-5">
          <h1 className="text-xl font-bold">Profile Details</h1>
          <div className="flex flex-col">
            <InputField
              label={"Student Name"}
              placeholder={""}
              type={"text"}
              className="w-full mt-2"
            ></InputField>
            <InputField
              label={"Email Address"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <InputField
              label={"Country"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <InputField
              label={"Grade"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <InputField
              label={"Curriculum"}
              placeholder={""}
              type={"text"}
              className="w-full mt-5"
            ></InputField>
            <PrimaryButton Name={"Save"} className="mt-5"></PrimaryButton>
          </div>
        </div>
        <div className=" border-2 border-borderColor w-1/2 rounded-lg p-5 m-5">
          <h1 className="text-xl font-bold">Preffered Timing By Student</h1>
          <div className="relative flex flex-col w-full  overflow-scroll text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <table className="w-full text-left table-auto min-w-max overflow-hidden">
              <thead>
                <tr>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Date Choosen
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Time Choosen
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      27/07/2024
                    </p>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      13:00(GMT)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className=" border-2 border-borderColor rounded-lg p-5 m-5">
        <h1 className="text-xl font-bold">Assign a Teacher</h1>
        <div></div>
      </div>
    </div>
  );
}
