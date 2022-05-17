import { User } from 'src/app/models/User';
import { FilterPipe } from './filter.pipe';

describe('Pipe: Filter', () => {

    let filter: FilterPipe;
    let list: User[];

    beforeAll(() => {
        filter = new FilterPipe();
        list = [
            new User('Stefan','Wagner','stefan@melno.com','03417889364','Male','Null'),
            new User('Ibrahim','Muhammad','ibrahim@turing.com','03417889364','Male','Null'),
            new User('John','Doe','Johnd@ptc.com','03417889364','Male','Null'),
        ];
    });


    it('Should Not filter on empty input, Input: Empty Array, Expected Output: Empty List', () =>{
        expect(filter.transform([],'','name').length).toEqual(Number(0));
    });


    it('Should Not Filter/Search, Input: Filled Array, Search Term: undefined | "" , Expected Output: Same Array No filteration', () => {
        expect(filter.transform(list,'','name').length).toEqual(list.length);
    });


    it('Should Filter only user with name Stefan, Input: Filled Array, Search Term: "Stefan"', () => {
        expect(filter.transform(list, 'Stefan', 'name').length).toBe(1);
    });

    it('Should filter to Nothing (as search term does not match), Input: Filled Array, Search Term: "Lorem"', () => {
        expect(filter.transform(list, 'Lorem', 'name').length).toBe(0);
    });


    afterAll( () => {
        filter = null;
        list = null;
    });

});