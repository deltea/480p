import { json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ request }) => {
  const blob = await request.blob();

  console.log(blob.size, blob.type);

  return json({});
}
