import { Router } from "express";
import Dataset from "../data/Dataset";
import fs from "fs";

const router = Router();

router.get("/", (req, res) => {
    const i = Number(req.query.i);
    const page = req.query.returnPage;
    const stage = req.query.returnStage;

    wrapper((data) => {
        data.data.splice(i, 1);
        return data;
    });

    res.redirect(`/?stage=${stage}&page=${page}`);
});

function wrapper(fun: (data: Dataset) => Dataset) {
    var data: Dataset = JSON.parse(
        fs.readFileSync("./public/data.json", "utf8")
    ) as Dataset;

    data = fun(data);

    fs.writeFileSync("./public/data.json", JSON.stringify(data));
}

export default router;
