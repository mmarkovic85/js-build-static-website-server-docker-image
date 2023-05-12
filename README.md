# Build Static Website Server Docker Image

Used to create static website docker images.

## 1.0: Dependencies

Use with:

* node v18.16.0
    * express v4.18.2
* docker v20.10.5+dfsg1, build 55c4c88

## 2.0: Creating Docker Image

Copy desired content to **public** directory, then from root directory of the project run command in terminal:

```bash
$ docker build -t <IMAGE NAME> .
```

## 3.0: Notes

### 3.1: Charset

To enforce charset for .html files use middleware. Example (Windows-1250 encoding):

```javascript
app.use((req, res, next) => {
  if (req.path.endsWith('.html')) res.set('Content-Type', 'text/html; charset=windows-1250');

  next();
});
```

## 4.0: License

[MIT](https://github.com/mmarkovic85/js-build-static-website-server-docker-image/blob/main/LICENSE)
