# Megonesia Translate

## About

Megonesia Translate is a small javascript library for build multilingual client-side web pages

## Import

You can import the required library in your html file

```html
<script src="megonesia-translate/dist/megonesia-translate.js"></script>
```

## Usage

After importing Megonesia Translate correctly, you can initialize the Megonesia Translate

```javascript
MegoTranslate = {};
```

And in your HTML tags

```html
<div data-mego-translate="lowercase key">Your Default Text</div>
```

## Supported Data

Input data has to be of type Objects and must be look like:

```javascript
{
    "lowercase key" : {
        "country alias": "Translated Text",
        "other country alias": "Other Translated Text"
    }
}
```

## Supported Languages

Currently Support:

| Country   | Alias |
| :-------- | :---- |
| English   | eng   |
| Indonesia | id    |
