// @ts-check
import lightnetSveltiaAdmin from "@lightnet/sveltia-admin";
import { defineConfig } from "astro/config";
import lightnet from "lightnet";

export default defineConfig({
  /**
   * The base URL of your website. This is used for generating absolute URLs,
   * identifying external links, and ensuring consistent routing behavior.
   *
   * TODO: Replace with your actual site domain (e.g., https://yourdomain.com)
   */
  site: "https://example-template.pages.dev",

  integrations: [
    /**
     * Configuration for the LightNet integration.
     * This defines core settings such as title, logo, languages, and menu.
     */
    lightnet({
      /**
       * Title of the website. It appears in the browser tab and the header bar.
       */
      title: {
        en: "SkateNet",
        de: "SkateNet",
      },

      /**
       * Path to the logo displayed in the site header.
       * Place your logo file in the ./src/assets directory.
       * Supported formats: .svg, .png, .jpg, .webp — optimized automatically for performance.
       *
       * TODO: Update with your site's logo file path, or remove this field if no logo is needed.
       */
      logo: { src: "./src/assets/logo.png" },

      /**
       * Defines the supported languages for the site, covering both
       * site (UI) and content languages.
       *
       * TODO: Customize this list to match your community. For each site language,
       * ensure a corresponding translation file exists in `/src/translations` (e.g., `en.yml`, `de.yml`).
       *
       */
      languages: [
        {
          code: "en", // BCP 47 code for English
          label: {
            en: "English",
            de: "Englisch",
          }, // Display name in the language selector
          isDefaultSiteLanguage: true, // Sets English as the default site language
        },
        {
          code: "de", // BCP 47 code for German
          label: {
            en: "German",
            de: "Deutsch",
          }, // Display name in the language selector
          isSiteLanguage: true, // Enables German as an available site language
        },
      ],

      /**
       * Favicon settings for browser tabs, bookmarks, and shortcuts.
       * You can specify multiple formats (e.g., .ico, .png, .svg) for better compatibility across browsers and devices.
       *
       * TODO: Add your favicon files to the /public directory and update the references below.
       *       Learn more on: https://docs.lightnet.community/build/configuration/set-favicon/
       */
      favicon: [
        { href: "favicon.svg" }, // SVG format (scales well on modern browsers)
      ],

      /**
       * Main navigation menu configuration.
       * Defines the links displayed in the site header menu (accessible via the hamburger icon).
       *
       * TODO: Customize the menu structure and labels to fit your site's navigation needs.
       */
      mainMenu: [
        {
          /**
           * Link to the homepage.
           * For relative paths, the current locale will be automatically prefixed.
           */
          href: "/",
          label: {
            en: "Home",
            de: "Start",
          },
        },
        {
          /**
           * Link to the media/search page.
           */
          href: "/media",
          label: {
            en: "Media",
            de: "Medien",
          },
        },
        {
          /**
           * Link to a custom About page.
           */
          href: "/about",
          label: {
            en: "About",
            de: "Uber uns",
          },
        },
        {
          /**
           * Link to an external website.
           * External links should use absolute URLs and fixed labels (not translatable).
           */
          href: "https://lightnet.community",
          label: {
            en: "LightNet",
            de: "LightNet",
          }, // Static label; same across locales
          requiresLocale: false,
        },
      ],

      /**
       * Configuration for the search page.
       */
      searchPage: {
        /**
         * Filters search results by the current locale when navigating to the search page.
         */
        filterByLocale: true,
      },

      /**
       * Display a "Powered by LightNet" attribution in the footer.
       *
       * You can disable this if preferred, though we appreciate leaving it on
       * to help others discover LightNet.
       */
      credits: true,
    }),

    /**
     * Configuration for LightNet's experimental Sveltia Admin integration.
     * Enables a user-friendly administration user interface for managing content via Git-based workflows.
     *
     * TODO: Connect this to your GitLab or GitHub backend by providing the appropriate backend configuration.
     */
    lightnetSveltiaAdmin({}),
  ],
});
