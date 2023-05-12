# Build Static Website Server Docker Image

Used to create static website docker images.

## 1.0: Dependencies

Use with:

* node v18.16.0
    * express v4.18.2
* docker v20.10.5+dfsg1, build 55c4c88

## 2.0: Notes

### 2.1: Charset

To enforce charset for .html files use middleware. Example (Windows-1250 encoding):

```javascript
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) res.set('Content-Type', 'text/html; charset=windows-1250');

  next();
});
```

## 3.0: License

[MIT](https://github.com/mmarkovic85/js-build-static-website-server-docker-image/blob/main/LICENSE)
