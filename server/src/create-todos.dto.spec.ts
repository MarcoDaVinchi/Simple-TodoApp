import { CreateTodosDto } from './create-todos.dto';

describe('CreateTodosDto', () => {
  it('should be defined', () => {
    expect(new CreateTodosDto()).toBeDefined();
  });
});
