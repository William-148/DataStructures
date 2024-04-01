import { LinkedList } from '../../src/linked-lists/LinkedList';

type IUser = {
    id: number;
    name: string;
}

const users = [
    { id: 1, name: "Josue Gonzales" },
    { id: 2, name: "Marco Lopez" },
    { id: 3, name: "Dom Smitth" },
    { id: 4, name: "Stich Stick" },
    { id: 5, name: "Rob Gonzalo" },
];

describe('LinkedList', () => {
    let list: LinkedList<IUser>;

    beforeEach(() => {
        list = new LinkedList<IUser>();
    });

    test('should add elements correctly', () => {
        for (const user of users) {
            list.insert(user);
        }
        expect(list.size).toBe(5);
    });

    test('should return correct size', () => {
        expect(list.size).toBe(0);
        list.insert(users[1]);
        list.insert(users[2]);
        list.insert(users[3]);
        expect(list.size).toBe(3);
    });

    test('should exist element correctly', () => {
        for (const user of users) {
            list.insert(user);
        }
        expect(list.exist(users[3])).toBe(true);
    });

    test('should find element correctly', () => {
        for (const user of users) {
            list.insert(user);
        }
        const user = list.find((user) => user.name === 'Stich Stick');
        expect(user?.id).toBe(4);
    });

    test('should not find element', () => {
        list.insert(users[0]);
        list.insert(users[3]);
        list.insert(users[4]);
        const user = list.find((user) => user.name === 'Marco Lopez');
        expect(user).toBe(null);
    });

    test('should remove elements correctly', () => {
        for (const user of users) {
            list.insert(user);
        }
        list.remove((user) => user.name === 'Marco Lopez');
        expect(list.size).toBe(4);
        list.remove((user) => user.name === 'Stich Stick');
        expect(list.size).toBe(3);
        let user = list.find((user) => user.name === 'Marco Lopez');
        expect(user).toBe(null);
        user = list.find((user) => user.name === 'Stich Stick');
        expect(user).toBe(null);
    });

    test('should remove element when list size is 1', () => {
        list.insert(users[3]);
        expect(list.size).toBe(1);
        list.remove((user) => user.name === 'Marco Lopez');
        expect(list.size).toBe(1);
        list.remove((user) => user.name === 'Stich Stick');
        expect(list.size).toBe(0);
    });

    test('should apply callback to each element (foreach)', () => {
        list.insert(users[4]);
        list.insert(users[3]);
        list.insert(users[2]);
        const callback = jest.fn();
        list.forEach(callback);

        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenCalledWith(users[4], 0);
        expect(callback).toHaveBeenCalledWith(users[3], 1);
        expect(callback).toHaveBeenCalledWith(users[2], 2);
    });

    test('should transform each element (map)', () => {
        for (const user of users) {
            list.insert(user);
        }
        const usersIds = list.map((user) => user.id);
        expect(usersIds.size).toBe(5);
    });
});
