use bookings;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "John Smith",
        email: "johnsmith@hotmail.com",
        date: "2021-06-21",
        checkin: "Yes"
    },
    {
        name: "Sarah Jenkins",
        email: "sarahjenkins@aol.com",
        date: "2021-06-22",
        checkin: "No",
    },
    { 
        name: "Bob Brown",
        email: "bobbybrown@yahoo.co.uk",
        date: "2021-06-25",
        checkin: "Yes"
    }
]);