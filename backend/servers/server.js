import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "siemanko",
    });
});

app.listen(process.env.PORT || 4003);

export default app;