const projects = [
  {
    description:
      'Our laser spectroscopy lab with three Aerodyne tunable infrared laser direct absorption spectroscopy (TILDAS) instruments',
    img: 'media/TILDASlab.jpg',
  },
  
  {
    description:
      'Our sulfur fluorination manifold and MAT253 mass spectrometer',
    img: 'media/SulfurIRMS.jpg',
  },

  {
    description:
      'An automated methane purification system that we use to clean up methane samples for TILDAS analysis',
    img: 'media/Methane_prep.jpg',
  },

  {
    description:
      'A little electronics project to make a control board for thermocouple vacuum gauges.',
    img: 'img/VacuumGaugeBoard.jpg',
    link: {
      url: 'https://github.com/SONO641/vacuum-gauge-amplifier#readme',
      label: 'Github',
    },
  },
  {
    description:
      'A computer vision project to read analogue pressure gauge using ESP32-CAM. I want to monitor our helium usage.',
    img: 'media/ESP_cam_GaugeReader.jpg',
    link: {
      url: 'http://flathead.mit.edu/Li840/gchart/chart_data.php',
      label: 'Website',
    },
  },

  {
    description:
      'An IoT sensor pack with electrochemical sensors to measure NO, NO2, O3 and CO',
    img: 'media/IOT_alphasense.jpg',
  },

  {
    description:
      'Potential temperature and planetary boundary layer height based on NAM model.',
    img: 'http://flathead.mit.edu/atm12335/PBLH.png',
    link: {
      url: 'http://flathead.mit.edu/atm12335',
      label: 'Website',
    },
  },

];

export default projects;
