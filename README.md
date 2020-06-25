<br />
<p align="center">
  <a href="https://hadron.app" target="_blank">
    <img src="https://hadron.app/0.14.6/images/manifest/icon-96x96.png" alt="Hadron" width="96" height="96">
  </a>
  <h1 align="center"><small><sub>hadron.app</sub></small><br>Design Systems</h1>
  <p align="center">
    <cite>A design system is a collection of reusable components, code snippets, assets, and any other detail <br>that will allow teams  to design consistent user experiences.</cite>
    <br />
    <a href="#contributing"><strong>Learn how to create one »</strong></a>
    <br />
  </p>
</p>

<figure align="center">
   <img src="https://s3.amazonaws.com/hadron.app/hadronapp.png" alt="Hadron">
   <p align="center"><strong>⚠️ this spec is in prerelease. All changes may be breaking until 1.0.</strong></p>
</figure>
<br />

## Table of Contents
- [Introduction](#introduction)
- [Contributing](#contributing)
- [Creating a design system](#creating-a-design-system)
  - [How it works](#how-it-works)
  - [The <i>design-system.json</i> file](#design-system-json)
  - [How to define components](#how-to-define-components)
  - [How to define tokens](#how-to-define-tokens)
 - [How to use them at Hadron](#how-to-use-them-at-hadron)
 - [Specs](#specs)
 - [Contact](#contact)


## Introduction
A design system is comprised of anything that will help teams <strong>efficiently develop consistent interfaces that scale.</strong>
For example:
  - A components library, snippets, templates or starter projects
  - A style guide
  - Design patterns for colors, typography, iconography or animation
  - Assets like icons, images or fonts
  - Rules for branding voice and tone
  - Design usage documentation and guidelines

As you can see, it covers a broad spectrum of concepts.
A specification to describe all that can help us by:

* Letting design tools know how to use components, snippets, assets, or tokens
* Having a centralized source of truth for our design system
* Auto-generating documentation and showcase pages
* Tracking and versioning changes to the design system

<a href="https://hadron.app" alt="Hadron Design Code Tool" target="_blank">Hadron</a> is a design tool where code is the source of truth. It can read design systems described in this way to allow users to design with them.

## Contributing
This repo contains all the information needed to create design systems to be used at <a href="https://hadron.app" alt="Hadron Design Code Tool" target="_blank">Hadron</a>.  You can create your own, publish it to NPM, and add it to your project's `package.json` file without our intervention <a href="#private-packages"><sup>1</sup></a>

It also contains all design systems listed there for public usage.


<p id="ds-dialog" align="center">
	<img src="https://s3.amazonaws.com/hadron.app/design-system-dialog.png?" alt="Hadron">
	<p align="center">
		<small><sup>Design systems dialog at hadron.app<br>All <abbr>DS</abbr> from this repo will be displayed there</sup></small>
	</p>
</p>
<br>

If you want to list your design system too for the public, fork this repo, add it, and then open a pull request.
You can get inspiration from existing ones. But remember, this is a prerelease, and the specs might change.

## Creating a Design System

A design system it's just a folder with a <a href="#design-system-json">**`design-system.json`**</a> file <i>plus</i> any asset, dependency, or code that it requires. This file have the goal of describing what's available and how to use it.

### How it works

Your design system will be a dependency of any project using it. Therefore, if it has any external dependencies, you should put them on the `package.json` file.


Take the Bulma design system in this repo for example. It has a `package.json` with the "bulma" dependency:
```json
{
  "name": "@hadronapp/bulma-ds",
  "version": "0.1.0",
  "dependencies": {
    "bulma": "^0.8.2"
  }
}
```
And it only has snippets. But you could build your entire design system without external dependencies, of course. Or have your components together with your <i>design system definitions</i>, which will make it easier to maintain.


<h3 id="design-system-json">The <i>design-system.json</i> file</h3>

This is the entry point for describing your design system. Place it at the root of your project.

Full example:
```json
{
  "name": "@hadronapp/bulma-ds",
  "displayName": "Bulma",
  "homepage": "https://bulma.io",
  "description": "Bulma is a free, open source CSS framework based on Flexbox.",
  "dependencies": [
    "node_modules/bulma/css/bulma.min.css"
  ],
  "components": [
    "./components/*.ds.js"
  ],
  "tokens": [
    "./tokens/*.json"
  ]
}
```

- name *{ String }* - Unique name
- displayName *{ String }* <small>*Optional*</small>
  <br/> Readable name.
- homepage *{ String }* <small>*Optional*</small>
- description *{ String }* <small>*Optional*</small>
- dependencies *{ <a href="#dependency">Dependency</a>.<> }* <small>*Optional*</small>
  <br/> Dependencies that you want to include in every document of a project using anything from your design system.
- components *{ String.<> }* <small>*Optional*</small>
  <br/> Paths to your <a href="#how-to-define-components">components definitions</a>. You can use glob patterns, like in the example above.
- tokens *{ String.<> }* <small>*Optional*</small>
  <br/> Paths to your <a href="#how-to-define-tokens">tokens definitions</a>. You can use glob patterns too.


### How to define components

Component's definitions are js modules. The `default` export is the metadata for the component. And the `variants` named export must be an array with each variant definition for this component.

Take a look a this simple button component with 2 variants. From Bulma design system.

```js
export default {
  displayName: 'Button',
  name: 'button',
  category: 'Elements',
  description: 'The classic button, in different colors, sizes, and states.',
  homepage: 'https://bulma.io/documentation/elements/button'
};

export const variants = [
  {
    displayName: 'Normal',
    picture: {
      src: './pictures/button/normal.webp'
    },
    snippet: {
      html: `<button class="button">Button</button>`
    }
  },
  {
    displayName: 'Primary',
    picture: {
      src: './pictures/button/primary.webp'
    },
    snippet: {
      html: `<button class="button is-primary">Primary</button>`,
    }
  }
];

```
<p align="center"><sup>Button component with 2 variants. Extracted from Bulma design system</sup></p>

### How to define tokens

Tokens can be used to define *class names* that are styled on your stylesheets, *attributes* that are styled in some way for certain -or all- elements, *CSS variables* or even *raw values*.

They are defined in JSON files and, like with components, you should refer to them in the `design-system.json` file.

```json
{
  "category": "icons-styles",
  "type": "class",
  "values": [
    {
      "value": "fa-xs",
      "description": "Icon size: xs"
    },
    {
      "value": "fa-sm",
      "description": "Icon size: sm"
    },
    {
      "value": "fa-2x",
      "description": "Icon size: 2x"
    },
    {
      "value": "fa-3x",
      "description": "Icon size: 3x"
    },
    {
      "value": "fa-rotate-90",
      "description": "Rotate icon 90°"
    }
  ]
}
```
<p align="center"><sup>Example extracted from the Font-awesome design system:</sup></p>
<p align="left"><strong>⚠️ Hadron doesn't use tokens at this moment</strong></figcaption>

## How to use them at Hadron

Design systems must be NPM packages. You must add that dependency to your project.<br>At the moment, there are 2 ways to do that:

* Automatically, by pressing install on the <a href="#ds-dialog">public design system list</a>
* Manually, by creating a package.json file and add it to "dependencies" on your project (there is no UI-form to do that more nicely at this moment)

## Specs

<h3 id="dependency"><i>Dependency</i> { String | Object }</h3>

Location from the main document to all dependencies that are needed in every document using the design system.
* It can be a string, which is the path to the dependency.
```json
"node_modules/bootstrap/dist/css/bootstrap.css"
```
* Or an object
	* src *{ String }*
	* priority  *{  Number }* <sup>Optional</sup>
	<br/>If defined, this dependency should load before any other that doesn't have "priority" or it's lower.
	Your won't normally need this. But on some occasions, dependencies must be loaded in order.
	* snippets *{  String.<> }* <sup>Optional</sup>
  If provided, it means that this dependency only matters for the specified snippets. Otherwise it'll be considered for all snippets.
	*  type *{ String }* <sup>Optional</sup>
	* *Any other attribute  <sup>Optional</sup>
	<br/>They will only be added when importing with HTML elements. Like [script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) or [link tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)*

```json
{
	"src": "node_modules/@github/time-elements/dist/time-elements.js",
	"priority": 0,
	"type": "module",
	"snippets": ["html", "vue"],
	...
}
```

<h3 id="component"><i>Component</i> { Object }</h3>

* name *{ String }*
* displayName *{ String }* <small>*Optional*</small>
* homepage *{ String }* <small>*Optional*</small>
* dependencies *{ <a href="#dependency">Dependency</a>.<> }* <small>*Optional*</small>
<br>If there is a dependency that isn't global to all components, you can place it on the components that use it themselves.

<h3 id="variant"><i>Variant</i> { Object }</h3>

* displayName *{ String }*
* picture *{ String | Object }*
  * src *{ String }*
  * width *{ Number }* <small>*Optional*</small>
  * height *{ Number }* <small>*Optional*</small>
* snippets *{ Object }*

<h3 id="token"><i>Token</i> { Object } -- work in progress</h3>

* category *{ String }*
* type *{ "class" | "attribute" | "css-property" | "css-variable"  }*
* values *{ Object.<> }*
  * value *{ string }*
  * description *{ String }*
* cssProperties *{ String.<> }*  <small>*Optional*</small>
  <br/>Only for "css-property" type. When present, this token is meant to be used for this properties.
  ```cssProperties: ["border*", "background"]```
 * propertyType *{ String }* <small>*Optional*</small>
  <br/>Only for "css-property" and "css-variable" types. It can be any string that explains the actual type of the value. Like "color", "background-color", "shadow", "length", ..

## Contact
For any ideas or discussion about the design systems API, please open an issue in this repo.

We're also on [@hadronapp](https://twitter.com/hadronapp) and [spectrum.chat/hadron](https://spectrum.chat/hadron)



<br><br><br><br>

----
<small><span id="private-packages"><sup>1</sup> On hadronapp, installing private npm packages is not currently supported. If you need them, please get in touch and tell us what you're planning to do, as we might accelerate its development.</span></small>
