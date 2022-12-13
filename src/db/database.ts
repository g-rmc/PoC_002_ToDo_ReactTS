type task = {
    id: number,
    title: string,
    done: boolean
};

const database: task[] = [
    {
        id: 1,
        title: "Acordar",
        done: true
    },
    {
        id: 2,
        title: "Estudar",
        done: false
    },
    {
        id: 3,
        title: "Comer",
        done: true
    }
];

export default database;