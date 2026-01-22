const storage = new Map<string, string>();

export const createMMKV = jest.fn(() => ({
    set: jest.fn((key: string, value: string) => {
        storage.set(key, value);
    }),

    getString: jest.fn((key: string) => {
        return storage.get(key) ?? null;
    }),

    getNumber: jest.fn((key: string) => {
        const value = storage.get(key);
        return value ? Number(value) : null;
    }),

    getBoolean: jest.fn((key: string) => {
        const value = storage.get(key);
        return value === 'true';
    }),

    delete: jest.fn((key: string) => {
        storage.delete(key);
    }),

    clearAll: jest.fn(() => {
        storage.clear();
    }),
}));
