export function getWeatherIcon(weather_code, is_day) {
  if (is_day) {
    if (weather_code === 0) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/575900edccbc7def167f7874c02aeb0b.png";
    } else if (weather_code === 1) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/575900edccbc7def167f7874c02aeb0b.png";
    } else if (weather_code === 2) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/67aaf9dbe30989c25cbde6c6ec099213.png";
    } else if (weather_code === 3) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/67aaf9dbe30989c25cbde6c6ec099213.png";
    } else if (weather_code === 45) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d35bb25d12281cd9ee5ce78a98cd2aa7.png";
    } else if (weather_code === 48) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d35bb25d12281cd9ee5ce78a98cd2aa7.png";
    } else if (weather_code === 51) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 53) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 55) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 56) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 57) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 61) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 63) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/4417bf88c7bbcd8e24fb78ee6479b362.png";
    } else if (weather_code === 65) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/451d37e6cea3af4a568110863a1adcf7.png";
    } else if (weather_code === 66) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/9189cb49e806d1ebfeed24f33367143c.png";
    } else if (weather_code === 67) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/9189cb49e806d1ebfeed24f33367143c.png";
    } else if (weather_code === 71) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/00171e3b54b97dee8c1a2f6a62272640.png";
    } else if (weather_code === 73) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/00171e3b54b97dee8c1a2f6a62272640.png";
    } else if (weather_code === 75) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/e95fb90fc5a4aac111be78770921beb1.png";
    } else if (weather_code === 77) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/e95fb90fc5a4aac111be78770921beb1.png";
    } else if (weather_code === 80) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 81) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/4417bf88c7bbcd8e24fb78ee6479b362.png";
    } else if (weather_code === 82) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/451d37e6cea3af4a568110863a1adcf7.png";
    } else if (weather_code === 85) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/9189cb49e806d1ebfeed24f33367143c.png";
    } else if (weather_code === 86) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/00171e3b54b97dee8c1a2f6a62272640.png";
    } else if (weather_code === 95) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png";
    } else if (weather_code === 96) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png";
    } else if (weather_code === 99) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png";
    }
  } else {
    if (weather_code === 0) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/1200cde3569cf69bd80e1ddabc0f15cd.png";
    } else if (weather_code === 1) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/1200cde3569cf69bd80e1ddabc0f15cd.png";
    } else if (weather_code === 2) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/17cc1a8a95028b89ba6988ee47eeab29.png";
    } else if (weather_code === 3) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/17cc1a8a95028b89ba6988ee47eeab29.png";
    } else if (weather_code === 45) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d35bb25d12281cd9ee5ce78a98cd2aa7.png";
    } else if (weather_code === 48) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d35bb25d12281cd9ee5ce78a98cd2aa7.png";
    } else if (weather_code === 51) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d4b6596291c114305b64056bd92ccee3.png";
    } else if (weather_code === 53) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d4b6596291c114305b64056bd92ccee3.png";
    } else if (weather_code === 55) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d4b6596291c114305b64056bd92ccee3.png";
    } else if (weather_code === 56) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d4b6596291c114305b64056bd92ccee3.png";
    } else if (weather_code === 57) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d4b6596291c114305b64056bd92ccee3.png";
    } else if (weather_code === 61) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/d4b6596291c114305b64056bd92ccee3.png";
    } else if (weather_code === 63) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/4417bf88c7bbcd8e24fb78ee6479b362.png";
    } else if (weather_code === 65) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/451d37e6cea3af4a568110863a1adcf7.png";
    } else if (weather_code === 66) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/9189cb49e806d1ebfeed24f33367143c.png";
    } else if (weather_code === 67) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/9189cb49e806d1ebfeed24f33367143c.png";
    } else if (weather_code === 71) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/00171e3b54b97dee8c1a2f6a62272640.png";
    } else if (weather_code === 73) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/00171e3b54b97dee8c1a2f6a62272640.png";
    } else if (weather_code === 75) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/e95fb90fc5a4aac111be78770921beb1.png";
    } else if (weather_code === 77) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/e95fb90fc5a4aac111be78770921beb1.png";
    } else if (weather_code === 80) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/a55fef55bbeb0762a8dd329b4b8ad342.png";
    } else if (weather_code === 81) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/4417bf88c7bbcd8e24fb78ee6479b362.png";
    } else if (weather_code === 82) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/451d37e6cea3af4a568110863a1adcf7.png";
    } else if (weather_code === 85) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/9189cb49e806d1ebfeed24f33367143c.png";
    } else if (weather_code === 86) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/00171e3b54b97dee8c1a2f6a62272640.png";
    } else if (weather_code === 95) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png";
    } else if (weather_code === 96) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png";
    } else if (weather_code === 99) {
      return "https://help.apple.com/assets/65E21662495F1A6C8701F50A/65E21663EF8273BE1D0C2734/en_US/efffb1e26f6de5bf5c8adbd872a2933a.png";
    }
  }
}
