import { Router } from "express";
import Dataset from "../data/Dataset";
import fs from "fs";

const router = Router();

router.get("/", (req, res) => {
    const data: Dataset = JSON.parse(
        fs.readFileSync("./public/data.json", "utf8")
    ) as Dataset;

    res.render("downloadable", {
        base: data,
    });
});

export default router;
