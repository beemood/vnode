import { names } from './names.js';

describe('names', () => {
  it(`names('Some Name') should return all name variants`, () => {
    const __names = names('Some Name');

    expect(__names.camel).toEqual('someName');
    expect(__names.dotCase).toEqual('some.name');
    expect(__names.kebab).toEqual('some-name');
    expect(__names.screamingSnake).toEqual('SOME_NAME');
    expect(__names.sentence).toEqual('Some name');
    expect(__names.snake).toEqual('some_name');
    expect(__names.title).toEqual('Some Name');
  });
});
