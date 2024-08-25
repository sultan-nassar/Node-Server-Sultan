
let items = [{
"id": 1,
"firstName": "John",
"lastName": "Doe",
"phone": "123-456-7890",
"workAreas": [
{
"id": 1,
"name": "Central District"
},
{
"id": 2,
"name": "Northern District"
}
]
},
{
"id": 2,
"firstName": "Yosi",
"lastName": "Flex",
"phone": "124-435-7440",
"workAreas": [
{
"id": 2,
"name": "Northern District"
},
{
"id": 3,
"name": "Southern District"
}
]
},
{
"id": 3,
"firstName": "David",
"lastName": "Wesotski",
"phone": "122-336-2290",
"workAreas": [
{
"id": 3,
"name": "Southern District"
},
{
"id": 4,
"name": "Jerusalem District"
}
]
},
{
"id": 4,
"firstName": "Natan",
"lastName": "Kettley",
"phone": "122-411-1310",
"workAreas": [
{
"id": 5,
"name": "Haifa District"
},
{
"id": 6,
"name": "Tel Aviv District"
}
]
},
{
"id": 5,
"firstName": "Yetshak",
"lastName": "Kimhi",
"phone": "120-422-7432",
"workAreas": [
{
"id": 4,
"name": "Jerusalem District"
},
{
"id": 7,
"name": "Sharon Region"
}
]
},
{
"id": 6,
"firstName": "Nimrod",
"lastName": "Cohen",
"phone": "123-456-9999",
"workAreas": [
{
"id": 7,
"name": "Sharon Region"
},
{
"id": 8,
"name": "Negev Region"
}
]
},
{
"id": 7,
"firstName": "Azolay",
"lastName": "Rod",
"phone": "122-999-8888",
"workAreas": [
{
"id": 1,
"name": "Central District"
},
{
"id": 3,
"name": "Southern District"
}
]
},
{
"id": 8,
"firstName": "Waldram",
"lastName": "Sava",
"phone": "123-565-7777",
"workAreas": [
{
"id": 5,
"name": "Haifa District"
},
{
"id": 6,
"name": "Tel Aviv District"
}
]
},
{
"id": 9,
"firstName": "Alex",
"lastName": "Boton",
"phone": "121-989-8886",
"workAreas": [
{
"id": 7,
"name": "Sharon Region"
},
{
"id": 8,
"name": "Negev Region"
}
]
},
{
"id": 10,
"firstName": "Vladimir",
"lastName": "Lipton",
"phone": "122-321-8899",
"workAreas": [
{
"id": 1,
"name": "Central District"
},
{
"id": 7,
"name": "Sharon Region"
}
]
},
{
"id": 11,
"firstName": "Omer",
"lastName": "Amer",
"phone": "123-707-9090",
"workAreas": [
{
"id": 1,
"name": "Central District"
},
{
"id": 3,
"name": "Southern District"
}
]
},{
"id": 12,
"firstName": "Johana",
"lastName": "kendre",
"phone": "123-606-8070",
"workAreas": [
{
"id": 1,
"name": "Central District"
},
{
"id": 2,
"name": "Northern District"
}
]
},
{
"id": 13,
"firstName": "Royse",
"lastName": "Seson",
"phone": "123-666-6060",
"workAreas": [
{
"id": 4,
"name": "Jerusalem District"
},
{
"id": 6,
"name": "Tel Aviv District"
}
]
},
{
"id": 14,
"firstName": "Garvin",
"lastName": "Philip",
"phone": "123-545-5050",
"workAreas": [
{
"id": 6,
"name": "Tel Aviv District"
},
{
"id": 8,
"name": "Negev Region"
}
]
},
{
"id": 15,
"firstName": "Alin",
"lastName": "Rud",
"phone": "123-432-4040",
"workAreas": [
{
"id": 2,
"name": "Northern District"
},
{
"id": 5,
"name": "Haifa District"
}
]
}]

const workAreas = [
  { id: 1, name: "Central District" },
  { id: 2, name: "Northern District" },
  { id: 3, name: "Southern District" },
  { id: 4, name: "Jerusalem District" },
  { id: 5, name: "Haifa District" },
  { id: 6, name: "Tel Aviv District" },
  { id: 7, name: "Sharon Region" },
  { id: 8, name: "Negev Region" }
];

module.exports = { items, workAreas }; // Export the items array.



