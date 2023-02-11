const blackPink = [
    {name: 'Jennie', age: 27, isLeader: true},
    {name: 'Jisoo', age: 28, isLeader: false},
    {name: 'ROSÉ', age: 25, isLeader: false},
    {name: 'Lisa', age: 25, isLeader: false},
]

describe("Expect Test", () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(1 + 2).toBe(3);
    });

    test('object assignment', () => {
        const user = {name: 'Juyong Lee', age: 200};
        expect(user).toEqual({name: 'Juyong Lee', age: 200});
    });

    test('.toHaveLength', () => {
        expect("Hello").toHaveLength(5);
        expect([1, 2, 3]).toHaveLength(3);
    });

    test('.toHaveProperty(keyPath, value?)', () => {
        expect(blackPink[0]).toHaveProperty("name")
        expect(blackPink[0]).toHaveProperty("age")
        expect(blackPink[0]).toHaveProperty("isLeader", true)    
    })

    test('toBeDefined()', () => {
        expect(blackPink).toBeDefined();
        expect(blackPink[0].name).toBeDefined();
        expect(blackPink[10]).not.toBeDefined();
    })

    test('.toBeFalsy()​', () => {
        expect(blackPink[1].isLeader).toBeFalsy()    
        expect(blackPink[0].isLeader).not.toBeFalsy()
        expect(false).toBeFalsy()    
        expect("").toBeFalsy()    
        expect(0).toBeFalsy()        
        expect(null).toBeFalsy()        
        expect(undefined).toBeFalsy()        
        expect(NaN).toBeFalsy()        
    })

    test('.toBeGreaterThan(number | bigint)', () => {
        blackPink.forEach((member) => {
            expect(member.age).toBeGreaterThan(20)
        })
    })

    test('.toBeGreaterThanOrEqual', () => {
        blackPink.forEach((member) => {
            expect(member.age).toBeGreaterThanOrEqual(25)
        })
    })

    test('.toBeInstanceOf(Class)', () => {
        class MyTest {

        }
        expect(() => {}).toBeInstanceOf(Function)
        expect(new MyTest()).toBeInstanceOf(Object)
        expect(new MyTest()).toBeInstanceOf(MyTest)
    })
})


describe('async test', () => {
    test('resolves to lemon', () => {
        // make sure to add a return statement
        return expect(Promise.resolve('lemon')).resolves.toBe('lemon');
    });

    test('resolves to lemon', async () => {
        await expect(Promise.resolve('lemon')).resolves.toBe('lemon');
        await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');
    });

    test('rejects to octopus', () => {
        // make sure to add a return statement
        return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(
          'octopus',
        );
    });
})
