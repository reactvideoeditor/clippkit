# Clippkit

## Adding a New Component: A Cookbook Guide.

Think of this documentation site like a **Cookbook**, and you want to add a new **Recipe** (your UI component). Here's how the different parts work together and the steps to add your own:

**The Parts of Your Cookbook:**

1.  `apps/docs/__registry__`: Your **Main Recipe Binder**. This is where the detailed, actual recipe cards live.
    - `ui/`: Contains the core instructions (component source code, e.g., `my-button.tsx`).
    - `example/`: Contains specific examples of the finished dish (usage examples, e.g., `my-button-demo.tsx`).
2.  `apps/docs/registry`: The **Cookbook Index**. Quick references, not the full recipes.
    - `registry-components.ts`/`registry-ui.ts`: Lists main dishes (components).
    - `registry-examples.ts`: Lists example variations.
    - Other `registry-*.ts` files: List ingredients (dependencies), styles, etc.
    - `schema.ts`: Defines how the index cards should be written.
3.  `apps/docs/scripts/build-registry.mts`: The **Cookbook Editor**. Reads the Index, finds the Recipes, formats everything, and generates the final data the website needs to display the recipes nicely.
4.  `apps/docs/content/docs/`: The **Published Cookbook Pages**. These use special tags (like `<ComponentPreview />`) that display the recipes prepared by the Editor.

**Steps to Add Your New Recipe (Component):**

1.  **Write the Core Recipe (Component Code):**

    - Create your component's source code file (e.g., `shiny-badge.tsx`).
    - Place it in the binder: `apps/docs/__registry__/default/ui/shiny-badge.tsx`.

2.  **Create an Example Recipe (Example Code):**

    - Create a file showing how to _use_ your component (e.g., `shiny-badge-demo.tsx`).
    - Place it in the binder's example section: `apps/docs/__registry__/default/example/shiny-badge-demo.tsx`.

3.  **Add Index Cards (Registry Configuration):**

    - Go to the index directory: `apps/docs/registry/`.
    - Add an entry for `shiny-badge` in the appropriate list (e.g., `registry-ui.ts` or `registry-components.ts`).
    - Add an entry for `shiny-badge-demo` in `registry-examples.ts`.
    - Make sure any dependencies are listed in `registry-lib.ts`. Check `schema.ts` if you're unsure about the format.

4.  **Design the Cookbook Page (Documentation):**

    - Go to the published pages directory: `apps/docs/content/docs/`.
    - Create a new page for your component, often in a `components` subdirectory: `apps/docs/content/docs/components/shiny-badge.mdx`.
    - Inside this `.mdx` file, use the special display components:
      - `<ComponentPreview name="shiny-badge-demo" />` (Shows the live example)
      - `<ComponentSource name="shiny-badge" />` (Shows the component's source code)
      - _(Make sure the `name` matches the names you used in the registry index files)_.

5.  **Run the Cookbook Editor (Build Script):**

    - Open your terminal, navigate to the correct directory (likely the workspace root or `apps/docs`).
    - Execute the command: `node ./apps/docs/scripts/build-registry.mts` (or check your `package.json` for the exact script command, e.g., `pnpm build:registry`).
    - This prepares your new recipe and makes it available to the website.

6.  **Check the Final Cookbook (View):**
    - Start your documentation site's development server (e.g., `pnpm run dev`).
    - Navigate to your new component's page (e.g., `/docs/components/shiny-badge`).
    - Verify the example looks right and the code is displayed correctly.

**Keeping Your Kitchen Stylish (Theme Consistency):**

Your cookbook has a consistent visual style (theme), like a well-decorated kitchen. New recipes (components) should match this style.

- **Use Standard Tools (Tailwind Utilities):** When writing your component's code (Step 1), primarily use the provided Tailwind utility classes (e.g., `bg-background`, `text-primary`, `border`, `rounded-lg`, `p-4`). These classes automatically use your site's theme colors, fonts, and spacing.
- **Avoid Custom Paint (Hardcoded Styles):** Do _not_ add specific color codes (`#FF0000`, `blue`), pixel values (`margin-top: 13px`), or font names directly in your component's styles if possible. Rely on the theme utilities provided by Tailwind (e.g., `text-destructive`, `mt-4`, `font-sans`).
- **Consult the Palette (Theme Files):** Check your global CSS (often `apps/docs/app/globals.css` or similar) and `tailwind.config.js` to understand the defined CSS variables (`--primary`, `--card-foreground`, etc.) and how Tailwind maps them to utility classes.
- **Extending the Palette (New Theme Colors):** If your component _requires_ a new color or style concept not currently in the theme, you'll need to update the theme itself. This might involve:
  1.  Adding the new color definition (e.g., in `apps/docs/registry/registry-base-colors.ts` if it exists, or directly in your global CSS).
  2.  Potentially updating `tailwind.config.js` to make the new color available as a utility class.
  3.  Re-running the **Cookbook Editor** (build script) to incorporate the theme changes.

By following these steps and principles, you can consistently add new, well-documented, and theme-aligned components to your collection.
