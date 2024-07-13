
> # ASTRO
---

## INTRODUCTION, LINKS AND TUTORIALS
[Astro](https://astro.build/)


## INSTALLATION
```js
npm create astro@latest
```

## CONFIGURATION
- Change port and host through the CLI:
```js
npm run start -- --port 3013 --host 192.168.0.52
```
- Change port and host in the astro.config.mjs:
```js
export default defineConfig ({
    integrations: [tailwind()],
    server: {
        port: 3013,
        host: "192.168.0.52"
},
});
```

## INTEGRATIONS
- Tailwind
```js
npx astro add tailwind
```

