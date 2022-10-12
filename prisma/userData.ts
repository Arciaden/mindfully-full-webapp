import { Permission, Type, Profile } from '@prisma/client'

export const userData: {
  permissions: Permission
  name: string
  type: Type
  profile: Profile
  appointments: any[]
  clients: any[]
}[] = [
  {
    name: 'Ian Borman',
    permissions: 'ADMIN',
    type: 'TRAINER',
    profile: {
      username: 'IanBor',
      password: 'mypass',
      firstName: 'Ian',
      lastName: 'Borman',
      age: 27,
      phone: 8888888888,
      email: 'ianborman@gmail.com',
      about: 'this is my biography',
    },
    clients: [
      {
        name: 'Jerry Seinfield',
        firstName: 'Jerry',
        lastName: 'Seinfield',
        age: 50,
        phone: 8888888888,
        email: 'jerry@gmail.com',
        about: 'This is Jerry Seinfield',
      },
      {
        name: 'Lebron James',
        firstName: 'Lebron',
        lastName: 'James',
        age: 45,
        phone: 7777777777,
        email: 'lebronsucks@gmail.com',
        about: 'Michael is always better',
      },
      {
        name: 'Jace Olsen',
        firstName: 'Jace',
        lastName: 'Olsen',
        age: 21,
        phone: 1029384938,
        email: 'jaceolsen@gmail.com',
        about: 'I am the forgotten twin',
      },
      {
        name: 'Vance Jenkins',
        firstName: 'Vance',
        lastName: 'Jenkins',
        age: 27,
        phone: 9302583473,
        email: 'vj@hotmail.com',
        about: 'Call me V',
      },
      {
        name: 'Leroy Jenkins',
        firstName: 'Leroy',
        lastName: 'Jenkins',
        age: 77,
        phone: 2921234637,
        email: 'lerooyjenkins@afkcharge.com',
        about: 'Lerooooooy Jeeeenkiiinnsss',
      },
      {
        name: 'Spider Man',
        firstName: 'Spider',
        lastName: 'Man',
        age: 17,
        phone: 3374445432,
        email: 'peterparker@ispoileverything.com',
        about: 'Everybody dies!',
      },
      {
        name: 'Bat Man',
        firstName: 'Bat',
        lastName: 'Man',
        age: 17,
        phone: 3374445332,
        email: 'darknight@imafraidofbats.com',
        about: "I'm Batman!",
      },
      {
        name: 'Super Man',
        firstName: 'Super',
        lastName: 'Man',
        age: 30,
        phone: 3389445432,
        email: 'thesisoforhope@makesnosense.com',
        about: 'Man of Steel',
      },
      {
        name: 'Aqua Man',
        firstName: 'Aqua',
        lastName: 'Man',
        age: 40,
        phone: 3374444532,
        email: 'chrissharmasbestfriend@rockclimbing.com',
        about: 'Speaks dolphin, climbs V9',
      },
      {
        name: 'Bartholomew Angelopoulos',
        firstName: 'Bartholomew',
        lastName: 'Angelopoulos',
        age: 109,
        phone: 3374445432,
        email: 'havefunwiththisname@makingfrontendhard.com',
        about:
          "I'm gonna give you hell in your design!!! Cause my name is unrealistically long.",
      },
      {
        name: 'Faulk Faulkingham',
        firstName: 'Faulk',
        lastName: 'Faulkingham',
        age: 902,
        phone: 3374445430,
        email: 'faulkyou@faulkingmotherfaulker.com',
        about: 'Faulk off',
      },
    ],
    appointments: [
      {
        type: 'MINDFULLNESS',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '15 minutes of mindfullness',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 20000,
      },
      {
        type: 'STRETCHING',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
      },
      {
        type: 'YOGA',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: 'Yoga for climbing',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
      },
      {
        type: 'WEIGHTLIFTING',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: 'Heavy Lifting Techniques',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
      },
      {
        type: 'YOGA',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
      },
      {
        type: 'WORKOUT',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
      },
      {
        type: 'WORKOUT',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
      },
    ],
  },
]
