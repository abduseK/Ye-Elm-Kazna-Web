import { NextResponse } from "next/server";

import fs from "fs";
import path from "path";

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "questions.json");

export async function POST(request: Request) {
  // Parse the request body
  try {
    const body = await request.json();
    const { category, questions } = body;

    if (!category || !questions) {
      return NextResponse.json(
        { error: "Both fields are required." },
        { status: 400 }
      );
    }

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const fileData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : [];

    fileData.push({
      id: Date.now(),
      category,
      questions,
      createdAt: new Date().toISOString,
    });

    fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

    return NextResponse.json({
      success: true,
      message: "Question added successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        error: "Failed to save the question",
      },
      { status: 500 }
    );
  }
}
