import { Box } from "@/app/components/Box";
import { TextField, Button } from "@mui/material";
import { MultiOptionSelect } from "@/app/components/MultiOptionSearch";
import { UploadField } from "@/app/components/UploadField";
import img1 from "@/public/430107972_7608970299142599_2611373766157426786_n.jpg";

export default function EditBlog() {
  const data = {
    title: "Exploring Artificial Intelligence",
    description:
      "An in-depth exploration of AI, its history, applications, and future trends.",
    content:
      "Artificial Intelligence (AI) has been a growing field over the past few decades, evolving from simple rule-based systems to advanced machine learning and deep learning algorithms. This article delves into how AI is transforming industries and what the future holds for this revolutionary technology.",
    image: img1,
    tags: [
      { label: "AI", value: "AI" },
      { label: "Machine Learning", value: "Machine Learning" },
      { label: "Future Technology", value: "Future Technology" },
      { label: "Automation", value: "Automation" },
    ],
  };
  const option = [
    { label: "cat1", value: "cat1" },
    { label: "cat2", value: "cat2" },
    { label: "cat3", value: "cat3" },
    { label: "cat4", value: "cat4" },
    { label: "cat5", value: "cat5" },
  ];

  return (
    <div className="w-full">
      <Box Heading="Edit post" className="p-5 flex flex-col gap-5">
        <TextField
          label="Title"
          placeholder="Blog Heading"
          variant="outlined"
          defaultValue={data.title}
          fullWidth
        />

        <TextField
          label="Description"
          placeholder="Enter the description"
          variant="outlined"
          defaultValue={data.description}
          multiline
          rows={3}
          fullWidth
        />

        <Box Heading="" className="w-full m-auto">
          <TextField
            label="Content"
            placeholder="Write your content here"
            variant="outlined"
            defaultValue={data.content}
            multiline
            rows={10}
            fullWidth
          />
          <h1 className="font-bold text-xl my-5">Cover Image</h1>
          <UploadField />
        </Box>

        <Box
          Heading="Properties"
          SubHeading="Additional attribute and functionality"
        >
          <MultiOptionSelect label="Tags" values={data.tags} option={option} />
        </Box>

        <div className="flex gap-5">
          <Button variant="contained" color="secondary" className="w-32">
            Preview
          </Button>
          <Button variant="contained" color="primary" className="w-32">
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}
