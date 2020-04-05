# Inject copyright and version

Inject author, version and license informations that is from package.json file into css and js files.

```yml
    - name: Build
      run: npm run build

    - name: Inject copyright and version
      uses: bndynet/github-action-inject-copyright@v1
      with:
        dist: dist  # optional, default is dist folder
```

## IMPORTANT

Before commit, please run `npm run all` and commit all files.


This project is based on https://github.com/actions/typescript-action