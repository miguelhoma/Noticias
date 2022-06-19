const divElementsPro = require('./divElements')


test('El titulo es el mismo', () => {
    GetParam();
    expect(divElementsPro).toMatch(noticias_json(GetParam()-100)["titulo"]);
  });