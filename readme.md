# LazyAspect

> Lazy loading aspects with [aspect.js](https://github.com/mgechev/aspect.js)


## Usage

Install the dependencies and run the following command.

```
$ npm start
```

Open the developer tools on the `Home` page.

> Inside of \`before\` logger. Calling AppService.world.<br>
> world

Navigate to the `About` page. The lazy loaded module attaches a second `Aspect` which logs after teh call to `AppService`.

> Inside of \`before\` logger. Calling AppService.world.<br>
> world<br>
> Inside of the lazy loaded \`after\` logger. Called AppService.world.


## License

MIT © [Sam Verschueren](https://github.com/SamVerschueren)
