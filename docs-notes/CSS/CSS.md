> # CSS

---

## CSS Introduction

- Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

## CSS FRAMEWORKS

- Tailwind CSS
- Bootstrap
- Materialize CSS
- Bulma
- Foundation
- Semantic UI
- Material UI
- Pico

---

## NOTES & TIPS

### GOOGLE FONTS

- Google Fonts is a library of 991 free licensed font families, an interactive web directory for browsing the library, and APIs for conveniently using the fonts via CSS and Android.

1. Libre Baskerville
2. Lora
3. Roboto
4. Cinzel
5. Playfair Display
6. Montserrat
7. Fauna One
8. Raleway
9. Lato

### USE OF GOOGLE FONTS

- To use Google Fonts, you need to add the following code to your HTML file.

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet" />
```

---

## RESET CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## CENTER ELEMENTS

```css
// Flexbox
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Grid
.center {
  display: grid;
  place-items: center;
}
// Absolute
.center {
  position: absolute;
  inset: 0;
  margin: auto;
}
```

---

## USER-SELECT

- The user-select CSS property controls the user's ability to select text. When text selection is disabled, the text of the element cannot be selected by the user.
- f you would like to prevent users from highlighting or selecting text on a web page, the CSS property user-select would be helpful. The property determines whether or not the text of an element can be selected.
- This property is useful if you don’t want users to copy and paste text from your website. It can also be used to prevent users from selecting text in an input field.

```css
/* Keyword values */
user-select: none;
```

---

## PLACE-ITEMS

- The place-items CSS property is a shorthand property that sets both the align-items and justify-items properties in a single declaration. The align-items property sets the align-self property on all direct children as a group. The justify-items property sets the justify-self property on all direct children as a group. CSS property place-items is a great shorthand for the properties align-items and justify-items. It makes it simple to align items in both ways (inline and block) within a layout system like Flexbox or Grid. The property can have two values at the same time. However, if you just use one value, then that value will be utilized as a second value. The property place-items can have many different values, including center, start, finish, stretch, and many more.

```css
/* Keyword values */
place-items: center;
```

---

## PROPERTIES

- Cargar siempre los estilos CSS dentro de la etiqueta <head></head>, asi cargará la página más rápido.
- Para cargar una hoja de estilos se utiliza la etiqueta `<link>`:
  - `<link  href="styles.css" rel="stylesheet" type="text/css">`
- color: para indicar el color de la fuente;
- para seleccionar un id="" - se utiliza `#/nombre_del_id { }`
- para seleccionar una clase class="" - se utiliza el punto `.nombre_de_class { }`
- para seleccionar un elemento - se utiliza el nombre del elemento `nombre_del_elemento { }`
- para seleccionar un atributo - se utiliza el corchete `[]`
- para seleccionar un atributo con un valor específico - se utiliza el corchete `[]` y el signo de igual `=`
  - por ejemplo: `[type="text"] { }`
- para seleccionar un atributo con un valor que comienza con un texto específico - se utiliza el corchete `[]` y el signo de igual `^`
- para seleccionar un atributo con un valor que termina con un texto específico - se utiliza el corchete `[]` y el signo de igual `$`

---

## BOX MODEL
- margin: espacio entre el borde del elemento y el borde del contenedor;
- padding: espacio entre el borde del elemento y el contenido del elemento;
