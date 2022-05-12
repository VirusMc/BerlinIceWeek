import { Router } from "express";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/");
    },
    filename: function (req, file, cb) {
        cb(null, "data.json");
    },
});

router.post("/", (req, res) => {
    const upload = multer({ storage: storage }).single("database");
    upload(req, res, (err: any) => {
        console.log(err);
    });
    res.redirect("/?stage=2");
});

export default router;
