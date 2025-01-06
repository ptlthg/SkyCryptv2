import { renderItem } from "$lib/server/helper/renderer";
import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ params, cookies, fetch }) => {
  const { id } = params;

  try {
    const [newId, damage] = id.split(":");
    const packs = JSON.parse(cookies.get("disabledPacks") || "[]");
    const attachment = await renderItem(newId, { damage: isNaN(parseInt(damage)) ? 0 : parseInt(damage), packs });

    if (typeof attachment.image === "string" && attachment.image.startsWith("/api/")) {
      const imageResponse = await fetch(attachment.image);
      if (!imageResponse.ok) {
        throw new Error("Failed to fetch image from API");
      }

      const imageBuffer = await imageResponse.arrayBuffer();
      return new Response(imageBuffer, {
        headers: {
          "Content-Type": "image/png"
        }
      });
    }

    return new Response(attachment.image, {
      headers: {
        "Content-Type": "image/png"
      }
    });
  } catch (errorMsg) {
    console.log("ERROR:", errorMsg);
    throw error(500, "Internal server error");
  }
};
