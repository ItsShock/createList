const createList = require('..');
const { toBeInTheDocument, toHaveAttribute } = require('@testing-library/jest-dom/matchers');

expect.extend({ toBeInTheDocument, toHaveAttribute });

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('Funkcja createList', () => {
  it('powinna zwrócić element HTML', async () => {
    const result = createList();

    expect(result instanceof HTMLElement).toBeTruthy();
  });

  it('powinna zwrócić listę z atrybutem id ustawionym na list', async () => {
    const list = createList();

    expect(list).toHaveAttribute('id', 'list');
  });

  it('powinna utworzyć listę w elemencie <body>', async () => {
    createList();

    expect(document.body.querySelector('#list')).toBeInTheDocument();
  });

  it('powinna utworzyć listę z trzema elementami <li>', async () => {
    createList();
    const list = document.body.querySelector('#list');

    expect(list.children.length).toBe(3);
    expect(list.querySelectorAll('li').length).toBe(3);
  });
});
