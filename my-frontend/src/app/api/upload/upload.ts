import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function upload(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const form = new formidable.IncomingForm();
    form.uploadDir = "./";
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: err.toString() });
        }

        const oldPath = files.file.path;
        const newPath = path.join(
            process.cwd(),
            "public",
            "uploads",
            files.file.name
        );

        fs.rename(oldPath, newPath, function (err) {
            if (err) throw err;
            res.status(200).json({ message: "File uploaded successfully" });
        });
    });
}
