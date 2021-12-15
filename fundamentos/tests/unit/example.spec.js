describe('Example Component', () =>{
  test('Debe de ser mayor a 10', () => {

    //Arreglar
    let value = 8;

    // Estimulo
    value = value + 2;

    //Observar el resultado
    expect(value).toBeGreaterThanOrEqual(10);

  })
});