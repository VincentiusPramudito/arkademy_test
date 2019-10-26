function showBiodata(name, age) {
    data.name = name,
        data.age = age
    return JSON.stringify(data)
}

let data = {
    address: 'Jalan Palem VII, Blok F3/3, Depok',
    hobbies: 'Play music, play football, play games',
    is_married: 'false',
    list_school: [
        {
            sd: { name: 'Permata Bunda', year_in: 1997, year_out: 2003, major: null },
            smp: { name: 'Permata Bunda', year_in: 2003, year_out: 2006, major: null },
            sma: { name: 'John de Britto', year_in: 2006, year_out: 2010, major: 'IPA' },
            kuliah: { name: 'Politenik ATMI', year_in: 2010, year_out: 2013, major: 'Teknik Mesin' }
        }
    ],
    skills: [
        {
            sequelize: 'advanced',
            postgres: 'advanced',
            python: 'beginner',
            nodejs: 'expert',
            vuejs: 'advanced'
        }
    ],
    interest_in_coding: true
}

console.log(showBiodata('Vincentius Pramudito', 28))