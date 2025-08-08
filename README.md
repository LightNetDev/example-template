# 🛹 Example Template

A beginner-friendly LightNet starter for developers, using a fictional skateboard ministry as a demo site. Learn how LightNet works, explore best practices,
and build your own media library from this example.

🔗 **Live Preview**: [https://example-template.pages.dev](https://example-template.pages.dev)

## 🚀 Getting Started

To create a **local copy**, run the following from your terminal:

```sh
npm create astro@latest -- --template LightNetDev/example-template
```

**💡 Tip:** Look for the `TODO` comments in the code — they’ll walk you through the first steps of setting things up and making it your own.

## 📦 Project Commands

All commands are run from the root of the project, from a terminal:

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `npm install`     | Install all project dependencies                       |
| `npm run dev`     | Start the local development server at `localhost:4321` |
| `npm run build`   | Build the production site to the `./dist/` folder      |
| `npm run preview` | Preview the production build locally                   |

## 🖥️ Administration UI

This template comes with a preconfigured admin interface to manage your content easily.

To run it locally:

1. In one terminal tab, start the site with:

   ```bash
   npm run dev
   ```

2. In a second terminal tab (from the project root), start the admin server:

   ```bash
   npx decap-server
   ```

Then open your browser and go to [localhost:4321/admin](http://localhost:4321/admin) to access the admin UI.

> Note: When you "publish" content here, it's only saved to your local disk.

## 👀 Want to learn more?

Take a look at the [LightNet developer docs](https://docs.lightnet.community).

## 📄 License

This template is shared under the [MIT-0 License](LICENSE) — you're welcome to reuse it, tweak it, or even remove the license. Make it yours!
