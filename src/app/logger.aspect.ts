import {beforeMethod, Wove, Metadata} from 'aspect.js';

class LoggerAspect {
  @beforeMethod({
    classNamePattern: /^AppService/,
    methodNamePattern: /^(world)/
  })
  invokeBeforeMethod(meta: Metadata) {
    console.log(`Inside of \`before\` logger. Calling ${meta.className}.${meta.method.name}.`);
  }
}
