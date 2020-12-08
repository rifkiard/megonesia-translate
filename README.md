# Megonesia Translate

## About

Megonesia Translate is a small javascript library for build multilingual client-side web pages

## Import

You can import the required library in your html file

```html
<script src="megonesia-translate/dist/megonesia-translate.js"></script>
```

## Usage

### Initialize

After importing Megonesia Translate correctly, you can initialize the Megonesia Translate

```javascript
MegoTranslate = {
  /*
   * To do: Add your languages data here
   */
};
```

### HTML usage

And in your HTML tags

```html
<div data-mego-translate="lowercase key">Your Default Text</div>
```

### Language Switch Toggle

You may need to add language switch toggle feature on your application

```html
<a href="#" data-mego-toggle="translate" data-mego-language="eng">English</a>
<a href="#" data-mego-toggle="translate" data-mego-language="id">Indonesian</a>
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
