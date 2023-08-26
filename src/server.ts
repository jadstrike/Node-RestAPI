import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signin } from "./handlers/users";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.shhhh_secret = "doggy";
//   res.status(401);
//   res.send("Nope");
// next();
// });
// app.get("/", (req, res) => {
//   console.log("hello from issackhant");
//   res.status(200);
//   res.json({ message: "hello" });
// });

app.get("/", (req, res) => {
  console.log("hello from issackhant");
  res.status(200);
  res.json({ message: "hello" });
});

app.use("/api", protect, router);
app.post("/user", createNewUser);
app.post("/signin", signin);

export default app;
