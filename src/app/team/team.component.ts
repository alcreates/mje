import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team = [
   {
     name: 'Barry Emen',
     position: 'President',
     image: '/assets/bari.JPG',
     // tslint:disable-next-line:max-line-length
     bio: 'Barry is an executive search industry veteran with over 25 years of experience in placing senior executives throughout the investment management industry. He has been frequently quoted in various publications such as Fund Action, Fund Fire and Hedge Fund Alert and he regularly attends the leading industry events such as the ICI General Membership and Tax & Accounting conferences, NICSA, MFA and GAIM hedge fund conferences. Barry began his career in internal audit and accounting, rising to Controller of an International Distribution firm after only 7 years. In 1986, he entered the Executive Search industry with ROMAC & Associates, a national recruiting firm. Within two years he rose to the number two sales position out of 180 professionals nationwide. He led his region in sales for five years and in 1992, he founded MJE as one of the first recruiting firms to focus on accounting, tax, and operations positions within the Mutual Fund industry. Barry expanded the firm into the hedge fund administration and operations segments and today, MJE is a leading search firm in the functional areas of Sales, Accounting, Middle Office and Back Office positions at Mutual Funds, Hedge Funds, Private Equity firms and investment industry service providers. Barry was selected to be a Committee of Hearts member of leading industry charity, Hedge Funds Care. MJE is a corporate Bronze Sponsor of Hedge Funds Care. Barry has a BS in Accounting from Brooklyn College and an MBA in Finance from Pace University.',
     phone: '973-765-9400 ',
     ext: '104',
     email: 'barry@mjeadvisors.com',
     linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
   },
   {
    name: 'Sean Myers',
    position: 'Managing Partner',
    image: '/assets/sean.jpg',
    // tslint:disable-next-line:max-line-length
    bio: 'Sean joined MJE Advisors in 2008 from Barclays Capital after spending three years supporting the U.S. Mortgage Backed Securities business as a Fixed Income Trading Associate. While at Barclays, he supported the global trading efforts of the residential mortgage-backed pass-through (RMBS) and collateralized mortgage obligation (CMO) business units. Sean rotated through various positions including front office trading operations, collateralized mortgage deal structuring, allocations and middle office settlement support. Sean is a graduate of Cornell University, where he received a Bachelors degree in Applied Economics and Management within the Agricultural and Life Sciences College. Sean is currently a Managing Partner at MJE Advisors and helps lead the firm’s search efforts across all areas of the Investment Management and Service Provider landscape. His strong ability to execute a search has led to significant placements for the firm greatly benefiting our clients and candidates.',
    phone: '973-765-9400',
    ext: ' 103 ',
    email: 'sean@mjeadvisors.com',
    linkedIn: 'https://www.linkedin.com/in/sean-myers-0659a88'

  },
   {
     name: 'Sarah Carney',
     position: 'Managing Director',
     image: '/assets/sarah.jpg',
     // tslint:disable-next-line:max-line-length
     bio: 'Sarah joined MJE in 2011 and was quickly promoted to Managing Director of MJE Advisors Mutual Fund Search Practice. Sarah works on national searches helping firms hire top talent in Accounting, Tax and Operations.  Prior to entering the executive search field, Sarah honed her sales and marketing skills in the real estate industry. Her real estate career had a strong emphasis on client relations, and customer satisfaction, Sarah was ranked top five amongst her peers. She earned her bachelor’s degree in Business Administration, Marketing from The College of Saint Elizabeth and graduated with high honors. In addition to her recruiting activities, Sarah provides office administration and support, including oversight of the firm’s proprietary candidate database.',
     phone: '973-765-9400 ',
     ext: '102',
     email: 'sarah@mjeadvisors.com',
     linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
   },
   {
    name: 'Frank Carr',
    position: 'Managing Director',
    image: '/assets/frank.jpg',
    // tslint:disable-next-line:max-line-length
    bio: 'Prior to joining MJE Advisors, Frank was Managing Partner and Founder of Centennial Advisory Group LLC and a specialist in recruiting for the investment management industry with particular expertise in the hedge fund industry. He had also been a Partner in the New York office of global search firm Amrop Battalia Winston. Centennial was named “Recruitment Firm of the Year” for 2009 by Hedge Fund Manager Week magazine. Prior to forming Centennial, Frank had been a Managing Director in the Global Asset Management practice at A.T. Kearney Executive Search, a top 10 U.S. search firm. He began his search career at LAI Ward Howell which was later acquired by TMP Worldwide (owners of Monster.com). Prior to entering executive search, Frank was Chief Financial Officer of a Connecticut-based equity long short hedge fund and Commodity Trading Advisor. Frank had spent eight years in commercial bank lending, initially with Citibank in their Wall Street Commodities division and later as a banker to the feature film and TV industries. He had previously held FINRA licenses, Series 3, 6 and 63. He is a graduate of Williams College where he received a Bachelor of Arts degree in Political Economy. Frank is a former national class marathon runner and an avid bass guitarist. He also serves as an event committee member and Master of Ceremonies of the annual “Hedge Fund Rocktoberfest” in New York City to benefit A Leg to Stand On. ',
    phone: '203-344-9531',
    ext: '102',
    email: 'frank@mjeadvisors.com',
    linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
  },
   {
    name: 'Alison Grzes',
    position: 'Managing Director',
    image: '/assets/allison.jpg',
    // tslint:disable-next-line:max-line-length
    bio: 'Prior to joining MJE Advisors Alison was a Senior Executive Recruiter for Parker & Lynch a national recruiting firm owned by Adecco a Fortune 500 recruiting firm.  Alison\'s expertise was with in Accounting & Finance where she was consistently ranked one of the top recruiters for NYC & NJ for over 10 years. She earned her bachelor’s degree in Business Administration from the University of Vermont. At MJE Advisors Alison works on national searches helping firms hire top talent in Accounting, Tax and Operations.',
    phone: ' ',
    ext: '',
    email: 'allison@mjeadvisors.com',
    linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
   },
   {
    name: 'Meaghan Weyer',
    position: 'Vice President',
    image: '/assets/meg.jpg',
    // tslint:disable-next-line:max-line-length
    bio: `Meaghan joined MJE in 2016 from Wealth Management Consultants, where she was involved with serving ultra high net worth clients. Prior to that, she held positions in various financial institutions including UBS, Stifel Nicolaus, and Northwestern Mutual. Meaghan is originally from Arizona and received her Bachelors degree from Northwestern University, in Evanston, Illinois.
    She currently serves as the Director of Marketing and Research at MJE where she involved in the day to day client and candidate sourcing and outreach.`,
    phone: ' ',
    ext: '',
    email: 'meaghan@mjeadvisors.com',
    linkedIn: 'https://www.linkedin.com/in/barryemenmjeadvisors/'
   }
  ];

  constructor(public dialog: MatDialog ) { }

  ngOnInit() {
  }

  openDialog(member) {
    this.dialog.open(BioComponent, { data: this.team[member], height: '400px' , width: '600px'});
  }

}
