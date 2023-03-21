import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import studentsDetailsRoutes from "./routes/studentsDetailsRoutes";

const app = express();

dotenv.config();

app.use(morgan("dev"));
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? "https://atbu-virtual-id-generator.netlify.app" : "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static("src/images"));

app.listen(process.env.PORT, () => {
  console.log("server running on port " + process.env.PORT);
});

// ROUTES
app.use("/reg", studentsDetailsRoutes);

app.use("/", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});
