const people = [
  {
    current_member: true,
    name: 'Shuhei Ono',
    lab_role: 'PI',
    bio: 'My job is to help people in the lab be creative and productive.',
    img: '/people/ShuheiOno.jpg',
  },
  {
    current_member: true,
    name: 'Gareth Izon',
    lab_role: 'Research Scientist',
    bio: "Gareth will tell when exactly oxygen appeared in the Earth's atmosphere by analyzign S-MIF signals from drill core materials from South Africa. ",
    img: '/people/GarethIzon.jpg',
  },
  {
    current_member: true,
    name: 'Angelina Serafini',
    lab_role: 'PhD student EAPS',
    bio: 'Angie is working on basalt carbonation and some isotopes',
    img: '/people/Angie.jpg',
  },
  {
  current_member: true,
  name: 'Manlin Xu',
  lab_role: 'PhD student EAPS',
  bio: 'Manlin will work on deep methane cycles',
  img: '/people/KumaOno.jpg',
  },

  {
    current_member: true,
    name: 'Andy Fong',
    lab_role: 'UROP course 10',
    bio: 'Andy works on olivine carbonation',
    img: '/people/andyfong.jpg',
    },

  /* {
    current_member: false,
    name: 'Vanessa Sun',
    lab_role: 'PhD student EAPS',
    bio: 'Vanessa is interested in carbon sequestration and is exploring her passion in isotopes.',
    img: '/people/VanessaSun.jpg',
  }, */
  {
    current_member: true,
    name: 'Bill Olszewski',
    lab_role: 'Research Scientist',
    bio: "Dr. Bill helps with the operation of the lab. He automated the SF<sub>6</sub> GC-IRMS line by using approximately two dozen pneumatic valves and pneumatically operated cold traps that are interfaced by the LabView software. Bill's creativity helps quite a bit in the daily operation of our lab.",
    img: '/people/Bill_Olzewski.jpg',
  },
  {
    current_member: false,
    name: 'Benjamin Uveges',
    lab_role: 'Postdoctoral Associate',
    bio: 'Ben is working on Archean S-MIF and early Proterozoic oxygenation event',
    img: '/people/BenUveges.jpg',
  },
  {
    current_member: false,
    name: 'Sarah Gao',
    lab_role: 'UROP course 6',
    bio: 'Sarah is working on reducing noise from our TILDAS using machine learning',
    img: '/people/SarahGao.jpg',
  },
  {
    current_member: false,
    name: 'Kevin Shao',
    lab_role: 'UROP course 6',
    bio: 'Kevin is working on reducing noise from our TILDAS using machine learning',
    img: '/people/KevinShao.jpg',
  },

  {
    current_member: true,
    name: 'Kuma Ono',
    lab_role: 'MIT Puppy Lab',
    bio: 'Kuma Ono guards our office and labs. \n\n',
    img: '/people/KumaOno.jpg',
  },
  {
    current_member: false,
    name: 'Ellen Lalk',
    lab_role: 'PhD student (MIT-WHOI Joint Program), Class of 2022',
    bio: 'Ellen is investigating microbial and thermogenic methane in the deep subseafloor.',
    img: '/people/EllenLalk.png',
  },
  {
    current_member: false,
    name: 'Patrick Beaudry',
    lab_role: 'PhD student (EAPS), Class of 2021',
    bio: 'Patrick is working on melt, sulfur, and oxygen budget.',
    img: '/people/patrick.jpg',
  },
  {
    current_member: false,
    name: 'Jeemin Rhim',
    lab_role: 'PhD student (EAPS), Class of 2020',
    bio: 'Jeemin is investigating the isotope effect associated with microbial methanogenesis. \n\n',
    img: '/people/jeemin Aug 17.jpg',
  },  
  {
    current_member: false,
    name: 'Jeehyun Yang',
    lab_role: 'PhD student (EAPS), Class of 2021',
    bio: ' Jeehyun is working on experiments to test the origin of Archean S-MIF.',
    img: 'http://ono.mit.edu/sites/default/files/images/Jeehyn.jpg',
  },
  {
    current_member: false,
    name: 'Yenny Gonzalez Ramos',
    lab_role: 'Postdoc, 2015 - Present',
    bio: ' Yenny is developing a new spectrometer that can meaure CH2D2.',
    img: 'http://ono.mit.edu/sites/default/files/images/Yenny.jpg',
  },
  {
    current_member: false,
    name: 'Mihkel Pajusalu',
    lab_role: 'Postdoctoral Associate, 2015 - Present',
    bio: " Mihkel is interested in in situ resource utilization using bacteria and microbial processes in various oxygen concentrations spanning from sub-microbar to atmospheric partial pressures. He also designed the most precise open-source trace oxygen sensor known and is working on bridging modern production methods and space technology with microbiology to pave the way for mankind's expansion to rest of the Solar system and beyond.",
    img: 'http://ono.mit.edu/sites/default/files/images/IMG_7797_2.jpg',
  },
  {
    current_member: false,
    name: 'Kilian Ashley',
    lab_role: 'PhD student (Toronto), Class of 2022',
    bio: ' Kilian is investigating the isotope effects of low oxygen conditions on methanotrophy.',
    img: 'http://ono.mit.edu/sites/default/files/images/Headshot_0.jpg',
  },
  {
    current_member: false,
    name: 'David Wang',
    lab_role: 'PhD Student (MIT-WHOI), Chemical Oceanography, Class of 2017',
    bio: ' David worked on sulfur isotope systematics of sulfate reducing microbes and then clumped methane for all sorts of methane.',
  },
  {
    current_member: false,
    name: 'Andrew Whitehill',
    lab_role: '2009 - 2015 (PhD then a short postdoc).',
    bio: 'Currently at EPA',
  },
  {
    current_member: false,
    name: 'Danielle Gruen',
    lab_role: 'PhD Student (MIT-WHOI), Chemical Oceanography, Class of 2018',
    bio: 'Danielle is working on understanding the clumped methane isotope systematics of biogenic methane, mostly lab cultures. She moved on to do some genomics with Greg Fournier. ',
  },
  {
    current_member: false,
    name: 'Eoghan Reeves',
    lab_role: 'Postdoc',
  },
  {
    current_member: false,
    name: 'Genming Luo',
    lab_role: 'Postdoc 2014 - 2016',
    bio: 'Currently at School of Earth Science, China University of Geosciences, Wuhan.',
  },
  {
    current_member: false,
    name: 'Eliza Harris',
    lab_role: 'Post Doc, 2012 - 2013',
    bio: 'Currently at EMPA-ETH.  Eliza joined the lab Sep 2012 to work on MIT-Aerodyne project for N2O isotopomer measurements using QC laser spectroscopy.',
  },
  {
    current_member: false,
    name: 'Harry Oduro',
    lab_role: 'Post Doc, 2011 - 2013',
    bio: 'Curently at Soudi Aramco. Harry joined the lab in July 2011. He conducted work on sulfur isotopes of organo-sulfur compounds.',
  },
  {
    current_member: false,
    name: 'Min Sub Sim',
    lab_role: 'PhD Student, 2007 - 2012',
    bio: 'Currently Assistant Professor at Seoul National University.  Min Sub was the first PhD student who graduated from the Geobiology Program at MIT. He studied the physiological controls of multiple-sulfur isotope fractionation.',
  },
  {
    current_member: false,
    name: 'Jon Grabenstatter',
    lab_role: 'PhD Student',
    bio: ' Jon joined the MIT Geobiology Program in fall 2009. He worked to culture sulfate reducing bacteria in a chemostat culture.',
  },
  {
    current_member: false,
    name: 'Kat Thomas',
    lab_role: "Kat Thomas, Master's Student",
    bio: " Kat was a 5th year master's degree student who worked on the carbonate associated sulfate of Neoproterozoic and Archean rocks.",
  },
  {
    current_member: false,
    name: 'Kat Potter',
    lab_role: 'PhD Student',
    bio: ' Kat was a post-generals student in the PAOC program with Ron Prinn. She defended her thesis in July 2011. Kat worked to use isotopomer ratios of atmospheric N2O to constrain its sources, sinks and fate. She analyzed samples from Mace Head, Ireland.',
  },
  {
    current_member: false,
    name: 'Katie Donovan',
    lab_role: 'Undergraduate Student',
    bio: ' Katie was an undergraduate student at Wellesley College working to culture sulfate reducers.',
  },
  {
    current_member: false,
    name: 'Christopher Hoff',
    lab_role: 'Summer Intern',
    bio: ' Chris was a summer intern from Acton Boxborough high school, making detrital pyrite in the lab to test a hypothesis about early oxygen and sulfide weathering.',
  },
  {
    current_member: false,
    name: 'Nicole Keller',
    lab_role: 'Research Fellow',
    bio: ' Nicole was a fellow from the Swiss National Science Foundation working at our lab and with Alison Shaw at WHOI. One of Nicole’s main goals was to determine how much sulfur cycles through a subduction factory. She analyzed volcanic glasses and melt inclusions by using SF6 techniques and an ion probe at WHOI.',
  },
  {
    current_member: false,
    name: 'Sebestian Kopf',
    lab_role: "Master's Student",
    bio: ' Sebastian was a pre-generals student with us and Dianne Newman. He tested if liquid phase reactions can produce sulfur mass-independent isotope effects.',
  },
  {
    current_member: false,
    name: 'Ying Lin',
    bio: ' Ying helped in starting up the lab. She did some photochemical experiments on carbonyl sulfide and studied its multiple-sulfur isotope effects.',
  },
  {
    current_member: false,
    name: 'Evelyn Cordner',
    lab_role: 'Undergraduate Student',
    bio: ' Evelyn was a UROP student during the summer 2009. She worked on UV photolysis experiments of carbonyl sulfide and sulfur dioxide.',
  },
  {
    current_member: false,
    name: 'Bradley Guy',
    bio: ' Brad was a PhD student at U of Johannesburg who worked on on multiple-sulfur isotope ratios of rocks from the Witwatersrand Supergroup to test a hypothesis around the early evolution of atmospheric chemistry.',
  },
];

export default people;
