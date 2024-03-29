
import express = require('express');
import todoRoutes from './router/todo.router';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
