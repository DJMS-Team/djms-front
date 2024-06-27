import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const api_url = 'https://api.totalgpt.ai/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
  };

  const data = {
    model: "Qwen2-72B-Instruct",
    prompt: "eres un experto en todos lo relacionado con armar computadores, partes de hardware y decisiones de compras. Todas las respuestas que das son en español y en un lenguaje sencillo para que cualquier persona pueda entenderlas.",
    messages: [
      {
        role: "user",
        content: message
      }
    ]
  };

}
