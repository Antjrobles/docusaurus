---
sidebar_position: 1
id: astro
title: Astro
description: Astro information and info
layout: doc
date: DD-MM_YYYY HH:MM:SS +/-TTTT
---


  ![Astro logo](/img/astro.png)


# Astro

### Notes

> # ASTRO

> ## INTRODUCTION, LINKS AND TUTORIALS

- [Astro](https://astro.build/)

- Astro is an **all-in-one** **web framework** for building **fast,** **content-focused** websites.

---

> ## CONFIGURATION

- Change port and host through the CLI:
  
  ```shell
  npm run start -- --port 3013 --host 192.168.0.52
  ```

- Change port and host in the `astro.config.mjs`:

```javascript
export default defineConfig ({
    integrations: [tailwind()],
    server: {
        port: 3013,
        host: "192.168.0.52"
},
});
```

---

> ## INTEGRATIONS

- Tailwind

```shell
npx astro add tailwind
```

---

