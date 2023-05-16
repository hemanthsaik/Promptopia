import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creater: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is Required"],
  },
  tag: {
    type: String,
    required: [true, "tag is Required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
