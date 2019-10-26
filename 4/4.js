function formatingData(data) {
    let arr = [];
    for (let i in data) {
        let obj = {};
        obj.name = data[i].name
        obj.info = data[i].info
        arr.push(obj)
        for (let j in data[i].data) {
            obj = {};
            obj.name = data[i].data[j].name
            obj.info = data[i].data[j].info
            arr.push(obj)
        }
    }
    return arr
}

let input = [
    {
        name: "Movies", info: "category_name",
        data: [
            { name: "Interstellar", info: "category_data" },
            { name: "Dark Knight", info: "category_data" },
        ]
    },
    {
        name: "Music", info: "category_name",
        data: [
            { name: "Adams", info: "category_data" },
            { name: "Nirvana", info: "category_data" },
        ]
    }
]

console.log(formatingData(input))