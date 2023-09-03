const mongoos = require("mongoose");

// interface Info {
//   img: string;
//   text: string;
//   title: string;
//   date: Date;
//   status: string;
// }

const infoSchema = new mongoos.Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "educationalLevels",
    enum: [
      "educationalLevels",
      "environment",
      "history",
      "sertficate",
      "expense",
      "introduce",
    ],
  },
});

exports.info=mongoos.model("infos", infoSchema);
