import { TransformObservableToArrayPipe } from './transform-observable-to-array.pipe';

describe('TransformObservableToArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new TransformObservableToArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
