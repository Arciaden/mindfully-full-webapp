import { Permission, Type } from '@prisma/client'

export const userData: {
  permissions: Permission
  password: string
  email: string
  type: Type
  firstName: string
  lastName: string
  age: number
  phone: number
  about: string
  // profile: Profile
  appointments: any[]
  clients: any[]
}[] = [
  {
    permissions: 'ADMIN',
    type: 'TRAINER',
    password: 'mypass',
    email: 'ianborman@gmail.com',
    // profile: {
    firstName: 'Ian',
    lastName: 'Borman',
    age: 27,
    phone: 8888888888,
    about: 'this is my biography',
    // },
    clients: [
      {
        firstName: 'Jerry',
        lastName: 'Seinfield',
        age: 50,
        phone: 8888888888,
        email: 'jerry@gmail.com',
        about: 'This is Jerry Seinfield',
      },
      {
        firstName: 'Lebron',
        lastName: 'James',
        age: 45,
        phone: 7777777777,
        email: 'lebronsucks@gmail.com',
        about: 'Michael is always better',
      },
      {
        firstName: 'Jace',
        lastName: 'Olsen',
        age: 21,
        phone: 1029384938,
        email: 'jaceolsen@gmail.com',
        about: 'I am the forgotten twin',
      },
      {
        firstName: 'Vance',
        lastName: 'Jenkins',
        age: 27,
        phone: 9302583473,
        email: 'vj@hotmail.com',
        about: 'Call me V',
      },
      {
        firstName: 'Leroy',
        lastName: 'Jenkins',
        age: 77,
        phone: 2921234637,
        email: 'lerooyjenkins@afkcharge.com',
        about: 'Lerooooooy Jeeeenkiiinnsss',
      },
      {
        firstName: 'Spider',
        lastName: 'Man',
        age: 17,
        phone: 3374445432,
        email: 'peterparker@ispoileverything.com',
        about: 'Everybody dies!',
      },
      {
        firstName: 'Bat',
        lastName: 'Man',
        age: 17,
        phone: 3374445332,
        email: 'darknight@imafraidofbats.com',
        about: "I'm Batman!",
      },
      {
        firstName: 'Super',
        lastName: 'Man',
        age: 30,
        phone: 3389445432,
        email: 'thesisoforhope@makesnosense.com',
        about: 'Man of Steel',
      },
      {
        firstName: 'Aqua',
        lastName: 'Man',
        age: 40,
        phone: 3374444532,
        email: 'chrissharmasbestfriend@rockclimbing.com',
        about: 'Speaks dolphin, climbs V9',
      },
      {
        firstName: 'Bartholomew',
        lastName: 'Angelopoulos',
        age: 109,
        phone: 3374445432,
        email: 'havefunwiththisname@makingfrontendhard.com',
        about:
          "I'm gonna give you hell in your design!!! Cause my name is unrealistically long.",
      },
      {
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
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
      {
        type: 'STRETCHING',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
      {
        type: 'YOGA',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: 'Yoga for climbing',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
      {
        type: 'WEIGHTLIFTING',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: 'Heavy Lifting Techniques',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
      {
        type: 'YOGA',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
      {
        type: 'WORKOUT',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
      {
        type: 'WORKOUT',
        date: new Date('2022-10-11T04:53:50.420Z'),
        appointmentPlanTitle: '20 Minute Abs',
        appointmentPlanDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
        appointmentDuration: 30000,
        appointmentNotes:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse platea dictumst quisque sagittis. Urna neque viverra justo nec. Donec ultrices tincidunt arcu non sodales neque sodales ut. Diam ut venenatis tellus in metus.',
      },
    ],
  },
]
