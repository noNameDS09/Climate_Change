// src/app/api/python/route.ts
import { exec } from 'child_process';
import { NextResponse } from 'next/server';

export async function GET() {
  return new Promise((resolve, reject) => {
    // Run the Python script to generate the plot
    exec('python src/scripts/generate_plot.py', (error, stdout, stderr) => {
      if (error || stderr) {
        console.error('Error generating plot:', error || stderr);
        reject(new NextResponse('Error generating plot', { status: 500 }));
      } else {
        console.log('Plot generated successfully:', stdout);
        resolve(new NextResponse('Plot generated successfully', { status: 200 }));
      }
    });
  });
}
