const generateUniqueId = require('../../src/utils/generateUniqueId');


//categoria do teste-it='isto deve gerar'
describe('Generate Unique ID', ()=>{
it('should generate an unique ID', ()=>{
    //expect(2+2).toBe(4);
    //expect(2+2).toBe(5);
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
});
});