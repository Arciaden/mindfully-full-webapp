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
    email: 'trey@gmail.com',
    // profile: {
    firstName: 'Trey',
    lastName: 'Deveraux',
    age: 26,
    phone: 8888888888,
    about: 'this is my biography',
    // },
    clients: [
      {
        firstName: 'Jerry',
        lastName: 'Seinfield',
        fullname: 'Jerry Seinfield',
        age: 50,
        phone: 8888888888,
        email: 'jerry@gmail.com',
        about: 'This is Jerry Seinfield',
        clientId: '6413c3931c4b785d31440620',
      },
      {
        firstName: 'Lebron',
        lastName: 'James',
        fullName: 'Lebron James',
        age: 45,
        phone: 7777777777,
        email: 'lebronsucks@gmail.com',
        about: 'Michael is always better',
        clientId: '6413c3931c4b785d31440621',
      },
      {
        firstName: 'Jace',
        lastName: 'Olsen',
        fullName: 'Jace Olsen',
        age: 21,
        phone: 1029384938,
        email: 'jaceolsen@gmail.com',
        about: 'I am the forgotten twin',
        clientId: '6413c3941c4b785d31440622',
      },
      {
        firstName: 'Vance',
        lastName: 'Jenkins',
        fullName: 'Vance Jenkins',
        age: 27,
        phone: 9302583473,
        email: 'vj@hotmail.com',
        about: 'Call me V',
        clientId: '6413c3941c4b785d31440623',
      },
      {
        firstName: 'Leroy',
        lastName: 'Jenkins',
        fullName: 'Leroy Jenkins',
        age: 77,
        phone: 2921234637,
        email: 'lerooyjenkins@afkcharge.com',
        about: 'Lerooooooy Jeeeenkiiinnsss',
        clientId: '6413c3941c4b785d31440624',
      },
      {
        firstName: 'Spider',
        lastName: 'Man',
        fullName: 'Spider Man',
        age: 17,
        phone: 3374445432,
        email: 'peterparker@ispoileverything.com',
        about: 'Everybody dies!',
        clientId: '6413c3941c4b785d31440625',
      },
      {
        firstName: 'Bat',
        lastName: 'Man',
        fullName: 'Bat Man',
        age: 17,
        phone: 3374445332,
        email: 'darknight@imafraidofbats.com',
        about: "I'm Batman!",
        clientId: '6413c3941c4b785d31440626',
      },
      {
        firstName: 'Super',
        lastName: 'Man',
        fullName: 'Super Man',
        age: 30,
        phone: 3389445432,
        email: 'thesisoforhope@makesnosense.com',
        about: 'Man of Steel',
        clientId: '6413c3941c4b785d31440627',
      },
      {
        firstName: 'Aqua',
        lastName: 'Man',
        fullName: 'Aqua Man',
        age: 40,
        phone: 3374444532,
        email: 'chrissharmasbestfriend@rockclimbing.com',
        about: 'Speaks dolphin, climbs V9',
        clientId: '6413c3941c4b785d31440628',
      },
      {
        firstName: 'Bartholomew',
        lastName: 'Angelopoulos',
        fullName: 'Bartholomew Angelopoulos',
        age: 109,
        phone: 3374445432,
        email: 'havefunwiththisname@makingfrontendhard.com',
        about:
          "I'm gonna give you hell in your design!!! Cause my name is unrealistically long.",
        clientId: '6413c3941c4b785d31440629',
      },
      {
        firstName: 'Faulk',
        lastName: 'Faulkingham',
        fullName: 'Faulk Faulkingham',
        age: 902,
        phone: 3374445430,
        email: 'faulkyou@faulkingmotherfaulker.com',
        about: 'Faulk off',
        clientId: '6413c3941c4b785d3144062a',
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
        userIdDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d3144062a',
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
        userIDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d31440629',
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
        userIDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d31440628',
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
        userIDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d31440628',
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
        userIDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d31440627',
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
        userIDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d31440624',
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
        userIDs: ['6413c156f336d7e1ca20d8f1'],
        clientId: '6413c3941c4b785d31440624',
      },
    ],
  },
]
