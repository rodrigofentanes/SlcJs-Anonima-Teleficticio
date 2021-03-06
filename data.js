const conexoes = [
    {
        origem: '011',
        destino: '016',
        taxa: 1.9
    },
    {
        origem: '011',
        destino: '017',
        taxa: 1.7
    },
    {
        origem: '011',
        destino: '018',
        taxa: 0.9
    },
    {
        origem: '016',
        destino: '011',
        taxa: 2.9
    },
    {
        origem: '017',
        destino: '011',
        taxa: 2.7
    },
    {
        origem: '018',
        destino: '011',
        taxa: 1.9
    },
]

const planos = {
    DiskMais30: 30,
    DiskMais60: 60,
    DiskMais120: 120
}

const acrescimoMinExcedente = 0.1;