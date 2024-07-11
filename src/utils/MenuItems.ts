interface Child {
    name: string;
    url: string;
}

export interface iMenuItem {
    menu: string;
    url: string;
    children: Child[];
}

export const menuItems: iMenuItem[] = [
    {
        menu: "Shop By Category",
        url: "/home",
        children: [
            {
                name: "Sub Home 1",
                url: "/home/sub1"
            },
            {
                name: "Sub Home 2",
                url: "/home/sub2"
            }
        ]
    },
    {
        menu: "Shop By Cannaboid",
        url: "/about",
        children: [
            {
                name: "Sub About 1",
                url: "/about/sub1"
            },
            {
                name: "Sub About 2",
                url: "/about/sub2"
            }
        ]
    },
    {
        menu: "Learn",
        url: "/contact",
        children: [
            {
                name: "Sub Contact 1",
                url: "/contact/sub1"
            },
            {
                name: "Sub Contact 2",
                url: "/contact/sub2"
            }
        ]
    }
];

// console.log(menuItems);
