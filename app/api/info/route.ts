export async function GET() {
    return Response.json({
        application: "Hotel API",
        technology: "Next.js",
        author: "Pravotorova",
        status: "Работает!"
    });
}