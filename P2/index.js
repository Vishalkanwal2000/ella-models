const zodiac=document.getElementById("zodiac");
const body = document.body;

const changebackground=()=>{

switch (zodiac.value) {
    case "aries":
        body.style.backgroundColor="#fc0303";
        break;

      case "tarus":
        bady.style.backgroundColor="#03fc6f"
            break;
            
            case "gemini":
                body.style.backgroundColor="#fce514";
                break;

                case "cancer":
                body.style.backgroundColor="#1484a3";
                  break;

                  case "leo":
                body.style.backgroundColor="#57275c";
                  break;
                  case "":
                body.style.backgroundColor="#099e4c";
                  break;
                  case "virgo":
                body.style.backgroundColor="#8ec5d1";
                  break;
                  case "libra":
                body.style.backgroundColor="#c9de12";
                  break;
                  case "scorpio":
                body.style.backgroundColor="#cf5561";
                
                  break;
                  case "sagittarius":
                body.style.backgroundColor="#0e52cf";
                  break;

                  case "aquarius":
                    body.style.backgroundColor="#7f14a3";
                     break;
                  case "capricorn":
                body.style.backgroundColor="#14a359";
                  break;
                case "piscrs":
                    body.style.backgroundColor="#3fa314";
                break;
    default:
    body.style.backgroundColor="#fff";
        break;
};

    
};

