import { fail, redirect } from "@sveltejs/kit";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { schema } from "../schema";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  redirect(308, "/");
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(schema));

    if (!form.valid) {
      console.error(form.errors);
      return fail(400, {
        searchForm: form
      });
    }

    redirect(303, `/stats/${form.data.query}`);
  }
};
