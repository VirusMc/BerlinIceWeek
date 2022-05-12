import { Router } from "express";
import fs from "fs";
import Dataset from "../data/Dataset";
import Store from "../data/Store";

const router = Router();

var originalLength = 0;
var duelRound = 0;

router.get("/", (req, res) => {
    const stage: number = Number(req.query.stage) || 1;
    const data: Dataset = JSON.parse(
        fs.readFileSync("./public/data.json", "utf8")
    ) as Dataset;

    if (originalLength === 0) {
        originalLength = data.data.length;
    }

    switch (stage) {
        // 1 - Select Data
        case 1:
            res.render("index/select");
            break;
        // 2 - Confirm use of data
        case 2:
            res.render("index/confirm", {
                base: data,
                page: Number(req.query.page) || 1,
            });
            break;
        // 3 - Show page view
        case 3:
            res.render("index/show", {
                base: data,
                page: Number(req.query.page) || 1,
            });
            break;
        // 4 - Show duell page view
        case 4:
            if (duelRound < 2) {
                if (Number(req.query.page) > Math.floor(originalLength / 3)) {
                    data.data = shuffle(data.data);
                    originalLength = data.data.length;
                    duelRound++;

                    res.redirect("/?stage=4&page=1");
                } else {
                    res.render("index/duel", {
                        base: data,
                        page: Number(req.query.page) || 1,
                    });
                }
            } else if (duelRound === 2) {
                res.redirect("/?stage=5");
            } else {
                res.render("index/duel", {
                    base: data,
                    page: Number(req.query.page) || 1,
                });
            }
            break;
        // 5 - Show end result or page view
        case 5:
            res.render("index/end", {
                base: data,
            });
            break;
        default:
            res.redirect("/?stage=1");
            break;
    }
});

function shuffle(a: Array<Store>) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default router;
