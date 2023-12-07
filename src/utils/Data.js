import {nanoid} from 'nanoid';

import icon2 from '../assets/home 1.svg';
import icon3 from '../assets/user-friends 1.svg'
import icon4 from '../assets/users 1.svg'
import icon5 from '../assets/sack 1.svg'
import icon6 from '../assets/handshake-regular 1.svg'
import icon7 from '../assets/piggy-bank 1.svg'
import icon8 from '../assets/hand-holding 1.svg'
import icon9 from '../assets/user-check 1.svg'
import icon10 from '../assets/user-times 1.svg'
import icon11 from '../assets/briefcase 1.svg'
import icon12 from '../assets/hand-holding 1.svg'
import icon13 from '../assets/np_bank_148501_000000 1.svg'
import icon14 from '../assets/coins-solid 1.svg'
import icon15 from '../assets/icon.svg'
import icon16 from '../assets/galaxy 1.svg'
import icon17 from '../assets/user-cog 1.svg'
import icon18 from '../assets/scroll 1.svg'
import icon19 from '../assets/chart-bar 2.svg'
import icon20 from '../assets/sliders-h 1.svg'
import icon21 from '../assets/badge-percent 1.svg'
import icon22 from '../assets/clipboard-list 1.svg'




const sublinks = [
  {
    links: [
      {
        id:nanoid(),
        label:'Dashboard',
        icon: icon2,
      }
    ]
  },
    
  {
    pageId:nanoid(),
    page:'Customers',
    links: [
         {
        id:nanoid(),
        label:'Users',
        icon: icon3,
      },
       {
        id:nanoid(),
        label:'guarantors',
        icon: icon4,
      },
      {
        id:nanoid(),
        label:'Loans',
        icon: icon5,
      },
      {
        id:nanoid(),
        label:'Decision Models',
        icon: icon6,
      },
      {
        id:nanoid(),
        label:'Savings',
        icon: icon7,
      },
      {
        id:nanoid(),
        label:'Loan Requests',
        icon: icon8,
      },
       {
        id:nanoid(),
        label:'WhiteList',
        icon: icon9,
      },
       {
        id:nanoid(),
        label:'Karma',
        icon: icon10,
      },
    ]
    
  },

  {
    pageId:nanoid(),
    page:'Businesses',
    links: [
       {
        id:nanoid(),
        label:'orangization',
        icon: icon11,
      },
       {
        id:nanoid(),
        label:'Loan Products',
        icon: icon12,
      },
      {
        id:nanoid(),
        label:'Savings Products',
        icon: icon13,
      },
      {
        id:nanoid(),
        label:'Fees and Charges',
        icon: icon14,
      },
      {
        id:nanoid(),
        label:'Transactions',
        icon: icon15,
      },
      {
        id:nanoid(),
        label:'services',
        icon: icon16,
      },
       {
        id:nanoid(),
        label:'service account',
        icon: icon17,
      },
      {
        id:nanoid(),
        label:'settlements',
        icon: icon18,
      },
      {
        id:nanoid(),
        label:'reports',
        icon: icon19,
      }
    ]
  },
  {
    pageId:nanoid(),
    page:'settings',
    links: [
      {
        id:nanoid(),
        label:'preferences',
        icon:icon20
      },
        {
        id:nanoid(),
        label:'fees and pricing',
        icon: icon21
      },
        {
        id:nanoid(),
        label:'audit logs',
        icon: icon22
      },
    ]
  }
]
  
     

export default sublinks;
