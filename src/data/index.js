
const menus = [
  {id: 1,name: "Trang chu",link: "/"},
  {id: 2,name: "Du an",link: "/projects"},
  {id: 3,name: "Lien he",link: "/contact"},
  {id: 4,name: "Bai viet",link: "/posts"},
]


const projectFake = [
  {
    id: 1,
    name: "Dự án 1",
    teams: [
      { id: 1, name: "Đạt" },
      { id: 2, name: "Kiên" },
      { id: 3, name: "Lâm" },
    ],
  },
  { id: 2, name: "Dự án mẫu", author: "Đạt" },
  {
    id: 3,
    name: "Dự án tốt nghiệp",
    teams: [
      { id: 1, name: "Hưng" },
      { id: 2, name: "Quân" },
      { id: 3, name: "Lâm" },
      { id: 4, name: "Đạt" },
    ],
  },
];

export { projectFake ,menus };

