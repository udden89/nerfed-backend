import mongoose from "mongoose"


var WorkExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  type: {
    type: String
  },
  description: {
    type: String,
  }
})

export default mongoose.model("WorkExperience", WorkExperienceSchema)