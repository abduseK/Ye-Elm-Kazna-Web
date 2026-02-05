import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(request: Request) {
  try {
    const { category, question } = await request.json();

    if (!category || !question) {
      return NextResponse.json(
        { error: "Both fields are required" },
        { status: 400 },
      );
    }

    const { data, error } = await supabase
      .from("fatwa-questions")
      .insert([{ category, question }]);

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Question saved successfully!",
      data,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
