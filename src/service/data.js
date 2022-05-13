import axios from "axios";
import AxiosMockAdapter from 'axios-mock-adapter';
export const data = [
    {
        topic: 'Animals',
        list: [
            "hole",
            "sofa",
            "pear",
            "tiger",
            "oatmeal",
            "square",
            "nut",
            "cub",
            "shirt",
            "tub",
            'passenger',
            'cow'
        ],
        good_words: [
            'tiger',
            'cow'
        ]
    },
    {
        topic: 'Colors',
        list: [
            "jeans",
            "existence",
            "ink",
            "red",
            "blue",
            "yellow",
            "laugh",
            "behavior",
            "expansion",
            "white",
            "black",
            "cakes"
        ],
        good_words: [
            "red",
            "blue",
            "yellow",
            "white",
            "black"
        ]
    },
    {
        topic: 'Vehicles',
        list: [
            "belief",
            "wire",
            "car",
            "bus",
            "star",
            "river",
            "hat",
            "skirt",
            "train",
        ],
        good_words: [
            "car",
            "bus",
            "train"
        ]
    }
]


export const mock = new AxiosMockAdapter(axios);
mock.onGet('/data').reply(200, {data});

