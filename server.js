import express from "express";

const app = express();
app.use(express.json());

app.post("/tickets", (req, res) => {
  const { id, assignee_id } = req.body;
  console.log(`New Ticket: ID=${id}, Assignee ID="${assignee_id}"`);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
