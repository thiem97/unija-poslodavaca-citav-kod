module.exports = {
  mode: "jit",
  purge: ["./*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: "#354049",
        gray2: "rgba(255,255,255,0.2)",
        gray3: "#4E596A",
        gray4: "rgba(250, 250, 250, 0.79)",
        blue: "#2253A6",
        blue2: "#00286C",
        blue3: "rgba(148,196,249,0.1)",
        blue4: "rgba(34,83,166)",
        blue5: "#4A72B7",
        blue6: "#9CDCF7",
        blue7: "rgba(34, 83, 166, 1)",
        blue8: "rgba(74, 114, 183, 1)",
        white__custom: "#FAFAFA",
        black__custom: "rgba(78, 89, 106, 1)",
        white__custom2: "rgba(250, 250, 250, 1)",
        blue__custom: "rgba(148, 196, 249, 0.05)",
        blue__custom2: "rgba(221,237,255,1)",
        blue__custom3: "#DEEEFF",
        blue__custom4: "rgba(250, 250, 250, 0.65)",
        blue__custom5: 'rgba(148, 196, 249, 0.1)',
        blue__card:'#94C4F90D',
        blue__card2: '#94C4F9'
      },
      margin: {
        "9px": "9px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        workSans: "'Work Sans', sans-serif",
      },
      backgroundImage: {
        peopleBg: 'url("/assets/images/people.png")',
        workersBg: 'url("/assets/images/workers.png")',
        europeBg: 'url("/assets/images/europe.png")',
        aboutUsBg: 'url(/assets/images/about_us__cover.png)'
      },
      keyframes: {
          slide_left: {
            '0%':{transform: 'translateX(-1000px)'},
            '99%': {transform:'translateX(0px)'},
          },
          slide_right: {
            '0%':{transform: 'translateX(1000px)'},
            '99%': {transform:'translateX(0px)'},
          },
          bounce_custom: {
            '0%':{transform: 'translateY(25px)'},
            '40%': {transform: 'translateY(0px)'},
            '70%': {transform: 'translateY(-25px)'},
            '99%': {transform:'translateY(0px)'},
          }
      },
      animation: {
          slide_left: 'slide_left 1s ease-in-out 0.2s',
          slide_right: 'slide_right 1s ease-in-out 0.2s',
          bounce_custom: 'bounce_custom 1s ease-in-out 0.2s',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
