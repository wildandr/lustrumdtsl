import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(request: NextRequest) {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
        return NextResponse.json({ success: false });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Use the original file name
    const newFileName = file.name;

    const filePath = path.join(
        process.cwd(),
        "public",
        "uploads",
        "fcec",
        newFileName
    );
    await writeFile(filePath, buffer);
    console.log(`open ${filePath} to see the uploaded file`);

    const publicPath = `/uploads/cic/${newFileName}`;

    return NextResponse.json({ success: true, path: publicPath });
}
