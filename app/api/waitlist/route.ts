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
      },
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Notion API error:", message, error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
