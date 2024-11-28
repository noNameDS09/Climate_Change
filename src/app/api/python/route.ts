import { exec } from 'child_process';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Get the prompt from the query parameter
  const url = new URL(request.url);
  const prompt = url.searchParams.get("prompt") || "";

  return new Promise((resolve, reject) => {
    // Pass the prompt to the Python script
    exec(`python src/app/api/python/test.py "${prompt}"`, (error, stdout, stderr) => {
      if (error || stderr) {
        console.error('Error executing Python script:', error || stderr);
        return reject(new NextResponse('Error executing Python script', { status: 500 }));
      }

      // Return the output of the Python script
      resolve(new NextResponse(stdout.trim(), { status: 200 }));
    });
  });
}

