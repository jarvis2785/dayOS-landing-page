import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID!;

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, profession, problem } = await req.json();

    if (!name || !email || !phone || !profession || !problem) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + istOffset);

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        "Full Name": {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        Phone: {
          phone_number: phone,
        },
        Profession: {
          select: { name: profession },
        },
        "Biggest Problem holding them back": {
          rich_text: [{ text: { content: problem } }],
        },
        "Submitted At": {
          date: { start: istDate.toISOString() },
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}
