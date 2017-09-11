import {afterMethod, Wove, Metadata} from 'aspect.js';

class LoggerAspect {
  @afterMethod({
    classNamePattern: /^AppService/,
    methodNamePattern: /^(world)/
  })
  invokeAfterMethod(meta: Metadata) {
    console.log(`Inside of the lazy loaded \`after\` logger. Called ${meta.className}.${meta.method.name}.`);
  }
}
