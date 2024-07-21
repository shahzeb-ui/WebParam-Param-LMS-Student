export const notifications:notificationType[] = [
    {
        id:1,
        message:'Congratulations! you have been enrolled in the course',
        date:'09:10am July 08, 2024',

    },
    {
        id:1,
        message:'Please update your details and make sure they are always up to date',
        date:'14:55pm July 11, 2024',

    },
    {
        id:1,
        message:'Get ready for your first class, keep an eye on your notifications to stay up to date',
        date:'16:00pm July 16, 2024',

    },
    
]

export const notificationsForEveryone:notificationEveryoneType[] = [
    {
        id:1,
        course: "Business Management",
        message:'we would like to welcome you all and let you know classes will start next week'
    },

]

export type notificationType = {
    id:1,
    message:string,
    date:string
}


export type notificationEveryoneType = {
    id:1,
    message:string,
    course:string
}
