<script lang="ts">
  import { page } from "$app/state";
  import HeaderInfo from "$lib/components/header/Info.svelte";
  import Settings from "$lib/components/header/Settings.svelte";
  import { Avatar, Button } from "bits-ui";
  import { Control, Field, FieldErrors } from "formsnap";
  import Search from "lucide-svelte/icons/search";
  import { superForm } from "sveltekit-superforms";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { schema } from "../../../routes/schema";

  const form = superForm(page.data.searchForm, {
    validators: zodClient(schema)
  });

  const { form: formData, enhance, errors, tainted } = form;
</script>

<header class="fixed bottom-0 left-0 z-30 h-12 w-full overflow-clip bg-header px-2.5 pl-[max(0.625rem,env(safe-area-inset-left))] pr-[max(0.625rem,env(safe-area-inset-right))] pt-[env(safe-area-inset-top,0)] leading-[3rem] @container sm:top-0">
  <div class="flex h-full w-full justify-center @md:justify-between">
    <div class="flex gap-2">
      <Button.Root href="/" class="flex items-center justify-center gap-2 font-bold">
        <Avatar.Root class="size-6 shrink-0 select-none rounded-lg">
          <Avatar.Image src="/img/app-icons/svg.svg" alt="SkyCrypt" class="pointer-events-none h-6 select-none" />
          <Avatar.Fallback class="flex h-full items-center justify-center text-lg font-semibold uppercase text-text/60">SC</Avatar.Fallback>
        </Avatar.Root>
        SkyCrypt
      </Button.Root>
      <HeaderInfo />
    </div>

    {#if page.url.pathname.startsWith("/stats")}
      <div class="mx-auto my-1.5 hidden w-full max-w-lg px-4 @[38rem]:block">
        <form method="POST" action="/search" use:enhance class="relative flex h-full w-full items-center justify-start overflow-clip rounded-[1.125rem] bg-background/20">
          <Field {form} name="query">
            <Control>
              {#snippet children({ props })}
                <input {...props} type="search" required placeholder="Enter username" class="flex-shrink flex-grow bg-transparent px-4 pr-14 font-semibold text-text transition-colors duration-300 placeholder:text-text/80 hover:bg-background/20 focus-visible:bg-background/20 focus-visible:outline-none" bind:value={$formData.query} />
              {/snippet}
            </Control>
            {#if $formData.query.length > 0 && $tainted?.query && $errors.query}
              <FieldErrors class="text-center text-sm font-semibold text-text/80" />
            {/if}
          </Field>
          <Button.Root type="submit" class="absolute right-0 z-10 flex h-full items-center justify-center rounded-[1.125rem] bg-background/15 px-4">
            <Search class="size-6 text-text" />
          </Button.Root>
        </form>
      </div>
    {/if}

    <Settings />
  </div>
</header>
