## Kelly Criterion

Test whether your risk taking is optimal for the long run. Also includes the optimal solution according to [Kelly Criterion](https://en.wikipedia.org/wiki/Kelly_criterion) for comparison.

Uses **Typescript**, **React**, **Chart.js** and **unocss**. Uses **Vite** for building and development.

Live here: https://emrergin.github.io/kelly/.


### What I learned
```
setParameter(5)
console.log(parameter)
```

- may not always log $5$, since state parameters are only set at the beginning of the next render.
- I learned how to build files with vite that does not need any serving.
    - One way to go would be just changing `<script type="module">` into `<script defer>` manually. A gist is here:
        - https://gist.github.com/emrergin/bf75a15be053c4994a24f9021dd25c09
    - The other would be to use https://github.com/richardtallent/vite-plugin-singlefile plugin.