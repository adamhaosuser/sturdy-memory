import express from "express";

const app = express();
app.use(express.json());

app.post("/tickets", (req, res) => {
  const { id, subject } = req.body;
  console.log(`New Ticket: ID=${id}, Subject="${subject}"`);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
