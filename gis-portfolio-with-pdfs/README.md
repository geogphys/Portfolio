# GIS Portfolio — Henry Reissig, GISP

A responsive portfolio site made with plain HTML, CSS, and JavaScript. No build tools or paid hosting required.

## Preview on your computer

Open `index.html` in Chrome or Edge. For live reload, open the folder in VS Code and use the Live Server extension (optional).

## Publish with GitHub Pages

1. Sign in to https://github.com and create a **public** repository named `gis-portfolio` (or `YOUR-USERNAME.github.io` for a root website).
2. Upload `index.html`, `styles.css`, `projects.js`, `script.js` to the repository root. Include any future `images/` folder.
3. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Select `main` and `/ (root)`, then **Save**.
4. Your site will appear at `https://YOUR-USERNAME.github.io/gis-portfolio/` (or `https://YOUR-USERNAME.github.io/` for the root repo). It may take a few minutes.
5. After edits, commit the changed files to `main`; Pages republishes automatically.

## Add a new project

Open `projects.js`. Copy an existing `{ ... }` entry inside the `projects` array, add a comma between entries, and update:

```js
{
  title: "My New GIS Project",
  category: "Web GIS",
  subtitle: "City / region or brief context",
  description: "The question, data, method, and outcome.",
  tags: ["ArcGIS Pro", "Python"],
  url: "https://example.com/my-real-project",
  image: "images/my-project.png",
  symbol: "◎",
  status: "Project overview"
}
```

Create an `images` folder and add your screenshot there. Leave `image: ""` to use the abstract graphic. Leave `url: ""` until a real project link is available. Category filters update automatically.

## Edit the rest of the site

- `index.html`: biography, education, skills, email, and LinkedIn.
- `styles.css`: design, fonts, colors, layout.
- `projects.js`: projects and their metadata.
- `script.js`: project cards and filtering (usually no changes needed).

## Optional résumé download

Place a public-safe PDF named `resume.pdf` in the root and add a link in `index.html` like `<a href="resume.pdf" download>Download résumé</a>`. Review contact information and private details before publishing.

## Before publishing

Replace illustrative project descriptions with verified results and real links where available. Add screenshots you own or have permission to publish. Test links and check the layout on a phone.

## Archived PDF portfolio

Eleven PDFs from the uploaded ZIP are in `pdfs/`, with first-page thumbnails in `images/`. Each is listed in `projects.js` with a View PDF and Download PDF link. To add another PDF: copy it into `pdfs/`, optionally create an image in `images/`, and add an entry in `projects.js`. Keep all files when uploading to GitHub Pages.
