import bcrypt from "bcryptjs";
import User from "../model/user";

export default async () => {
  // await User.deleteMany({});
  const userCount = await User.find().countDocuments();

  if (!userCount) {
    const users = [
      {
        first_name: "Jon",
        last_name: "Cash",
        email: "jon@cash.com",
        password: await bcrypt.hash("joncash", 10),
        address: {
          lat: 40.60210478512126,
          lng: 43.103418080713666,
          title: "Home",
        },
      },
      {
        first_name: "Jasmine",
        last_name: "Fish",
        email: "jasmine@fish.com",
        password: await bcrypt.hash("jasminefish", 10),
        address: {
          lat: 39.74353711445624,
          lng: 37.009585559711375,
          title: "Work",
        },
      },
      {
        first_name: "Hans",
        last_name: "Zimmer",
        email: "hans@zimmer.com",
        password: await bcrypt.hash("hanszimmer", 10),
        address: {
          lat: 39.89344266028858,
          lng: 32.82296782499821,
          title: "School",
        },
      },
    ];
    await User.insertMany(users);
  }
};
